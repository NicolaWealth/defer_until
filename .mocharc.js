module.exports = {
  require: [
    "ts-node/register",
    "source-map-support/register",
  ],
  reporter: "mocha-junit-reporter",
  "full-trace": true,
  color: true,
  bail: true,
  spec: "src/**/*.test.ts",
};
