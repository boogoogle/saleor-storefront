const API_URI = 'http://34.123.220.20:8000/graphql/'
module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: API_URI,
    },
  },
};
