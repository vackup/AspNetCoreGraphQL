FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM node:10-alpine as build-node
WORKDIR /ClientApp
COPY AspNetCoreGraphQL.ReactUI/ClientApp/package.json .
COPY AspNetCoreGraphQL.ReactUI/ClientApp/package-lock.json .
RUN npm install
COPY AspNetCoreGraphQL.ReactUI/ClientApp/ . 
RUN npm run build 

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
ENV BuildingDocker true
WORKDIR /src
COPY ["AspNetCoreGraphQL.ReactUI/AspNetCoreGraphQL.ReactUI.csproj", "AspNetCoreGraphQL.ReactUI/"]
RUN dotnet restore "AspNetCoreGraphQL.ReactUI/AspNetCoreGraphQL.ReactUI.csproj"
COPY . .
WORKDIR "/src/AspNetCoreGraphQL.ReactUI"
RUN dotnet build "AspNetCoreGraphQL.ReactUI.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "AspNetCoreGraphQL.ReactUI.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
COPY --from=build-node /ClientApp/build ./ClientApp/build
ENTRYPOINT ["dotnet", "AspNetCoreGraphQL.ReactUI.dll"]
