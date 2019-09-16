using System;
using System.Collections.Generic;
using AspNetCoreGraphQL.GraphQLApi.Entities;

namespace AspNetCoreGraphQL.GraphQLApi.ResourceAccess
{
    public class ReservationRepositoryMock : IReservationRepository
    {
        public List<Reservation> GetAll()
        {
            return new List<Reservation>
            {
                new Reservation(DateTime.Today.AddDays(2), DateTime.Today.AddDays(5), 1, 1)
                {
                    Guest = new Guest("Guest 1", DateTime.Now.AddDays(-5))
                },
                new Reservation(DateTime.Today.AddDays(1), DateTime.Today.AddDays(4), 2, 5)
                {
                    Guest = new Guest("Guest 5", DateTime.Now.AddDays(-5))
                },
                new Reservation(DateTime.Today.AddDays(5), DateTime.Today.AddDays(15), 3, 10)
                {
                    Guest = new Guest("Guest 10", DateTime.Now.AddDays(-5))
                },
            };
        }
    }
}