let config = {};
config.params = {
  a: "hello",
  b: "foo",
  c: "bar"
};
let newConfig = {
  d: "baz",
  e: "kar"
};
config.params = {
  ...config.params,
  ...newConfig
};
console.log(config);
