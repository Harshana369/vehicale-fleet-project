const express = require("express");
const app = express();
const db = require("./models");
const routes = require("./routes");

app.use(express.json());
app.use("/api", routes);

db.sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
