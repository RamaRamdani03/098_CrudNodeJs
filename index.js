import express from "express";
import bodyParser from 'body-parser';
import mobilRoute from "./routes/Mobil.js";
import hpRoute from "./routes/hp.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use("/mobil", mobilRoute);
app.use("/hp", hpRoute);
app.get("/", (req, res) => {
    console.log(["Get ROUTE"]);
    res.send("Selamat Pagiiiii");
});

app.listen(port, () =>
    console.log(
        `Server berjalan di port: http://localhost:${port}`)
);
