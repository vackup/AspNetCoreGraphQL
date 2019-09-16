using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspNetCoreGraphQL.GraphQLApi.Entities
{
    public class Reservation
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("RoomId")]
        //public Room Room { get; set; }
        public int RoomId { get; set; }

        [ForeignKey("GuestId")]
        public Guest Guest { get; set; }
        public int GuestId { get; set; }

        [Required]
        public DateTime CheckinDate { get; set; }

        public DateTime CheckoutDate { get; set; }

        public Reservation()
        {

        }

        public Reservation(DateTime checkinDate, DateTime checkoutDate, int roomId, int guestId)
        {
            this.CheckinDate = checkinDate;
            this.CheckoutDate = checkoutDate;
            this.RoomId = roomId;
            this.GuestId = guestId;
        }
    }
}