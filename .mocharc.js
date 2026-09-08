module.exports = {
  require: [
    "ts-node/register",
    "source-map-support/register",
  ],
  reporter: "spec",
  "full-trace": true,
  color: true,
  bail: true,
  spec: "src/**/*.test.ts",
};
