import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { GuestType } from '../types/guestType';
import { ReservationType } from '../types/reservationType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public reservation: ReservationType;

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://localhost:5001/graphql' }),
      cache: new InMemoryCache()
    });
  }

  public getReservation = () => {
    this.apollo.query({
      query: gql`query getReservation{
      reservations {
          checkinDate
          checkoutDate
          guest{
            name
          }
        }
      }
    }`
    }).subscribe(result => {
      this.reservation = result.data as ReservationType;
      console.log(this.reservation);
    });
  };
}
