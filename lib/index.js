import unirest from 'unirest';
import qs from 'qs';

const API = 'https://api.skypicker.com/';

export default class KiwiAPI {
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
    const defaultParams = { v: 2 };
    const queryParams = { arrayFormat: 'brackets' };
    const url = API + method;
    const request = unirest
      .get(url)
      .query(qs.stringify(Object.assign(defaultParams, params), queryParams));

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
