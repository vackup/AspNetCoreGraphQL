import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://localhost:5001/graphql'
});

const client = new ApolloClient({
    cache,
    link
});

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
      this.state = { forecasts: [], loading: true };

      //debugger;

      //client.query({
      //        query: gql`query getReservation{
      //            reservations {
      //                checkinDate
      //                checkoutDate
      //                guest{
      //                  name
      //                }
      //              }
      //          }`
      //    })
      //    .then(
      //        result => {
      //            debugger;
      //            console.log(result);
      //        }
      //);

      fetch('https://localhost:44309/api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });

      var data = JSON.stringify({
          "operationName": null,
          "variables": {},
          "query": "{\n  reservations {\n    checkinDate\n    checkoutDate\n    guest {\n      name\n    }\n  }\n}\n"
      });

      fetch('https://localhost:44309/graphql', {
              method: "post",
              headers: {
                  "Content-Type": "application/json"
              },
          body: data
          })
          .then(result => {
              console.log(result);
          });
  }

  static renderForecastsTable (forecasts) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
