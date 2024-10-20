import express, {Router} from "express";
const router = express.Router();
const mobil = [
{
    merk: "BMW",
    model: "Sports",
    warna: "Black",
    tahun: "2023",
},
{
    merk: "Rush",
    model: "Toyota",
    warna: "white",
    tahun: "2015",   
},
];
router.get("/", (req, res) => {
    res.send(mobil);
})
export default router;