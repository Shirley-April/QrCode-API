const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser")

const Qrcode = require("qrcode");

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.post("/qrcode", (req, res) => {
  const text = req.body.qrcode_text

  let value

  typeof text === "object" ? value = Object.values(text).join("\n") : value = text


  Qrcode.toFile("image.png", value, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: "Error previewing image" });
    }

    res.sendFile('image.png' , { root : __dirname});
  });
});


// app.post("/qrcode/2", (req, res) => {
//   // const text = req.body.qrcode_text
//   const text = req.body.qrcode_text

//   Qrcode.toDataURL(text, (err, url) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send({ error: "Error previewing image" });
//     }

//     res.send(url)
//   })

//   // Qrcode.toFile("image.png", text, (err) => {
//   //   if (err) {
//   //     console.error(err);
//   //     return res.status(500).send({ error: "Error previewing image" });
//   //   }

//   //   res.sendFile('image.png' , { root : __dirname});
//   // });
// });


const port = 8000;
app.listen(port, () => console.log(`App running on PORT ${port}`));
