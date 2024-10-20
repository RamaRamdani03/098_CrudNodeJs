import express, {Router} from "express";
const router = express.Router();
const hp = [
{
    Nama: "Rama Ramdani",
    Merk: "Samsung",
    tipe: "A 15",
    warna: "Blue",
},
];
router.get("/", (req, res) => {
    res.send(hp);
})
export default router;