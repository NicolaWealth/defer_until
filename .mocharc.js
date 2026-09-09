module.exports = {
  require: [
    "ts-node/register",
    "source-map-support/register",
  ],
  reporter: "spec",
  fullTrace: true,
  color: true,
  bail: true,
  spec: "src/**/*.test.ts",
};
