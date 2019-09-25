FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["AspNetCoreGraphQL.GraphQLApi/AspNetCoreGraphQL.GraphQLApi.csproj", "AspNetCoreGraphQL.GraphQLApi/"]
RUN dotnet restore "AspNetCoreGraphQL.GraphQLApi/AspNetCoreGraphQL.GraphQLApi.csproj"
COPY . .
WORKDIR "/src/AspNetCoreGraphQL.GraphQLApi"
RUN dotnet build "AspNetCoreGraphQL.GraphQLApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "AspNetCoreGraphQL.GraphQLApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AspNetCoreGraphQL.GraphQLApi.dll"]