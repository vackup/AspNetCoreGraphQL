using System.Collections.Generic;
using AspNetCoreGraphQL.GraphQLApi.Entities;

namespace AspNetCoreGraphQL.GraphQLApi.ResourceAccess
{
    public interface IReservationRepository
    {
        List<Reservation> GetAll();
    }
}