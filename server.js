const app = require("./app");

const config = require("./app/config");

const POST = config.app.port;
app.listen(POST, () => {
  console.log(`Sever is runing on port ${POST}. `);
});
