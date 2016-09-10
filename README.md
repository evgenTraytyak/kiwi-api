Kiwi(Skypicker) API
==========

[Kiwi.com](http://www.kiwi.com/) API for Node.js.

## Installation

```javascript
npm install kiwi-api --save
```

## API Documentation
[Skypicker.com API on Apiary.com](http://docs.skypickerpublicapi.apiary.io/#)

## How to use

```javascript
import KiwiAPI from 'kiwi-api';
const KiwiClient = new KiwiAPI();

// Get places
KiwiClient.places()
  .then(places => console.log(places))
  .catch(error => console.log(error));

// Get flights
KiwiClient.flights()
  .then(flights => console.log(flights))
  .catch(error => console.log(error));
```
