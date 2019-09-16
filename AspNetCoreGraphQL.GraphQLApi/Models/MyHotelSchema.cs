using GraphQL;
using GraphQL.Types;

namespace AspNetCoreGraphQL.GraphQLApi.Models
{
    public class MyHotelSchema : Schema
    {
        public MyHotelSchema(IDependencyResolver resolver) : base(resolver)
        {
            this.Query = resolver.Resolve<MyHotelQuery>();
        }
    }
}