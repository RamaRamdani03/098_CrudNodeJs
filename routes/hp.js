import express, { Router } from "express";
const router = express.Router();
const hp = [
    {
        Nama: "Rama Ramdani",
        Merk: "Samsung",
        tipe: "A 15",
        warna: "Blue",
    },
    {
        Nama: "Dynan",
        Merk: "Iphone",
        tipe: "Ip 13",
        warna: "Pink",
    },
    {
        Nama: "capung",
        Merk: "Google Pixel",
        tipe: "8 pro",
        warna: "white",
    }
];
router.get("/", (req, res) => {
    res.send(hp);
})
export default router;