const express = require("express");
var cors = require("cors");

const Qrcode = require("qrcode");

const app = express();

app.use(cors());

app.get("/qrcode", (req, res) => {
  const text = "New Text";

  Qrcode.toFile("image.png", text, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: "Error previewing image" });
    }

    res.sendFile('image.png' , { root : __dirname});
  });
});

const port = 8000;
app.listen(port, () => console.log(`App running on PORT ${port}`));
