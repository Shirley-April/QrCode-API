const { response } = require("express")
const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello there!")
})

const port = 8000
app.listen(port, () => console.log(`App running on PORT ${port}`))