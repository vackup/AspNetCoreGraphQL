using AspNetCoreGraphQL.GraphQLApi.Entities;
using GraphQL.Types;

namespace AspNetCoreGraphQL.GraphQLApi.Models
{
    public class ReservationType : ObjectGraphType<Reservation>
    {
        public ReservationType()
        {
            this.Field(x => x.Id);
            this.Field(x => x.CheckinDate);
            this.Field(x => x.CheckoutDate);
            this.Field<GuestType>(nameof(Reservation.Guest));
            //Field<RoomType>(nameof(Reservation.Room));
        }
    }
}