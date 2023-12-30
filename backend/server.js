const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server is working on https:localhost:${process.env.PORT}`);
});
