using AspNetCoreGraphQL.GraphQLApi.Entities;
using GraphQL.Types;

namespace AspNetCoreGraphQL.GraphQLApi.Models
{
    public class GuestType : ObjectGraphType<Guest>
    {
        public GuestType()
        {
            Field(x => x.Id);
            Field(x => x.Name);
            Field(x => x.RegisterDate);
        }
    }
}