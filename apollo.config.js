

module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "http://34.123.220.20:8000/graphql/",
    },
  },
};
