const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e2ef3da130cb6e3a47a0e33b24455c5a";

    https.get(url, function (response) {
        console.log(response)
    })

    res.send("server is up and running")
})


app.listen(3000, function () {
    console.log("Server is runniong on port 3000.");
})
