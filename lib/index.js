import request from 'request';
import unirest from 'unirest';
import qs from 'qs';

const API = 'https://api.skypicker.com/';

export default class Skypicker {
  constructor(options) {
    Object.assign(this, options);
  }

  places(params = {}) {
    return this.call('places', params).then(response => {
      return response;
    });
  }

  flights(params = {}) {
    return this.call('flights', params).then(response => {
      return response;
    });
  }

  call(method, params = {}) {
    let url = API + method;
    let request = unirest.get(url)
                  .query(qs.stringify(params, { arrayFormat: 'brackets' }));

    return new Promise((resolve, reject) => {
      request.end(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(response.body);
        }
      });
    });
  }
}
