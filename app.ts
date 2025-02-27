const express = require("express");
const app = express();
const port = 3000;

const indexRoute = require("./routes/index");
const userRoute = require("./routes/user");

app.use(express.json());

app.use("/", indexRoute);
app.use("/user", userRoute);

app.listen(port, (error: any) => {
  if (error) {
    return console.log(error);
  }

  console.log(`Server started at http://localhost:${port}`);
});
