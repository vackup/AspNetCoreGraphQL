using System.Security.Claims;

namespace AspNetCoreGraphQL.GraphQLApi.Models
{
    public class GraphQLUserContext
    {
        public ClaimsPrincipal User { get; set; }
    }
}