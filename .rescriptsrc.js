const { appendWebpackPlugin } = require("@rescripts/utilities");
const { DefinePlugin } = require("webpack");
require("dotenv").config();

const { NODE_ENV, API_PROD_URL, API_DEV_URL } = process.env;
const API_URL = NODE_ENV === "production" ? API_PROD_URL : API_DEV_URL;

module.exports = config =>
  appendWebpackPlugin(
    new DefinePlugin({
      "process.env.API_URL": JSON.stringify(API_URL)
    }),
    config
  );
