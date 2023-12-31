const app = require("./app");
const connectDB = require("./config/database");
const dotenv = require("dotenv");

// Config

dotenv.config();

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
