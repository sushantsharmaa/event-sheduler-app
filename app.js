// ---------------Server and Static Files------------------

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// -------------------------DB-----------------------------

mongoose.connect("mongodb+srv://sushantsharma:sushant1994@cluster0.pwuas.mongodb.net/shedule");

const eventSchema = {
  text: String,
  dateTime: String
};

const Event = mongoose.model("event", eventSchema);

//------------------GET---------------------


app.get("/", async (req, res) => {
  Event.find({}, (err, foundEvents) => {
    res.render("index", {
      eventList: foundEvents
    });
  });
});

// -----------------POST-------------------

app.post("/", function(req, res) {
  const text = req.body.text;
  const time = req.body.dateTime;
  let n = text.length;
  let result = "";

  for (let i = n - 1; i >= 0; i--) {
    result += text[i];
  }

  const output = () => {
    res.render("reverse", {
      reverse: result
    });
  }

  Event.findOne({
    dateTime: time
  }, function(err, event) {
    const myTimeout = setTimeout(output, `${result.length * 1000}`);
  });
});

// --------------------Setting Up Ports------------------------------

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log("Listening on port 3000");
});
