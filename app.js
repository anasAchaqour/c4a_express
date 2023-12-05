// Import the Express framework
const express = require("express");
// Create an Express application
const app = express();
const port = 5000;
// import the model
const Mydata = require("./models/mydataSchema");

// Configure middleware to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

//connect to db
// USoeYAZT7p1EvUXl anasachaqour2
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://anasachaqour2:USoeYAZT7p1EvUXl@cluster0.30i0owl.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
//end connect to db

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.post("/savedata", (req, res) => {
  const data = new Mydata(req.body);
  data
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}/`);
// });
