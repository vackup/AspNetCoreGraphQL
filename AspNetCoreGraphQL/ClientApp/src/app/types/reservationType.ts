import { GuestType } from './guestType';

export type ReservationType = {
  id: string;
  checkinDate: string;
  checkoutDate: string;
  guest: GuestType;
}
