# AspNetCoreGraphQL

This project was created to learn about GraphQL and to spread the learnings

You can find the related PPT  http://bit.ly/NeorisGraphQLPPT

The app runs on 2 docker containers, one for the React frontend and one for the Asp.Net Core GraphQL backend
- https://docs.docker.com/engine/examples/dotnetcore/
- https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/docker/?view=aspnetcore-2.2

The project is being built using Azure Devops build pipelines (http://devops.azure.com)

[![Build Status](https://dev.azure.com/hernanzaldivar/GraphQLSamples/_apis/build/status/vackup.AspNetCoreGraphQL?branchName=master)](https://dev.azure.com/hernanzaldivar/GraphQLSamples/_build/latest?definitionId=28&branchName=master)

Continuous Code Inspection is being done by SonarQube (https://www.sonarqube.org/). 
AspNetCoreGraphQL SonarCloud Dashboard --> https://sonarcloud.io/dashboard?id=vackup_AspNetCoreGraphQL

## What's GraphQL? 
GraphQL (https://graphql.org/) is a data query language and specification developed internally by Facebook in 2012 before being
publicly open sourced in 2015.

It provides an alternative to REST-based architectures with the purpose of increasing developer productivity
and minimizing amounts of data transferred.

GraphQL is used in production by hundreds of organizations of all sizes including Facebook, Credit Karma,
GitHub, Intuit, PayPal, the New York Times and many more. https://graphql.org/users/

Some post for building GraphQL APIs with ASP.NET Core
- https://medium.com/volosoft/building-graphql-apis-with-asp-net-core-419b32a5305b
- https://code-maze.com/graphql-asp-net-core-tutorial/
