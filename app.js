const ApiBuilder = require('claudia-api-builder');

const api = new ApiBuilder();
module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});

api.get('/greet', function (request) {
  return request.queryString.name;
});