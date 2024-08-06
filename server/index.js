const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require("./models");
// console.log(db.Sequelize);

const homeRoute = require("./routes/Post");
const aboutRoute = require("./routes/About");
app.use("/post", homeRoute);
app.use("/about", aboutRoute);



app.get("/", (req, res) => {
  res.send("hello!");
});


try {
  db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("Port listening at 3001");
    });
  });
} catch (error) {
  console.log(`ERROR at ${error}`);
}
