const express = require("express");
var cors = require("cors");

const Qrcode = require("qrcode");

const fs = require("fs");

const app = express();

app.use(cors());

app.get("/qrcode/binary", (req, res) => {
  // Qrcode.toFile("image.png", "New Five Binary Data", (err) => {
  //     if(err) {
  //         return res.status(500).send({ error: 'Error reading file' });
  //     }
  //     fs.readFile('./image.png', (err, data) => {
  //         if (err) {
  //           console.error(err);
  //           return res.status(500).send({ error: 'Error reading file' });
  //         }
  //         res.send(data);
  //       });
  // })

  Qrcode.toFile("image.png", "New Eleven Binary Data")
    .then(() => {
      fs.readFile("./image.png", (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send({ error: "Error reading file" });
        }
        res.send(data);
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ error: "Error reading file" });
    });
}); 

const port = 8000;
app.listen(port, () => console.log(`App running on PORT ${port}`));
