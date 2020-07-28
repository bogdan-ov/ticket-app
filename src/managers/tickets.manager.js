import axios from "axios";

const api_path = "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json";

export const TicketsManager = {
    // Get all tickets
    get() {

        return new Promise((resolve, reject)=> {

            axios.get(api_path)
                .then(res=> resolve(res.data))
                .catch(err=> reject(err));

        });

    }
}
export const TicketSkelet = {
    "ticketId": 0,
    "number": "",
    "lastUpdatedTime": "",
    "owner": {
      "userId": 0,
      "firstName": "",
      "lastName": "",
      "avatar": "",
      "specialities": [
        "0"
      ]
    },
    "reportedTime": "",
    "status": "",
    "description": "",
    "asset": {
      "assetId": 0,
      "name": "",
      "geoCode": "",
      "kmFrom": 0,
      "kmTo": 0
    }
}