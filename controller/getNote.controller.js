import { query } from "../config/db.js";

export const getNote = async (req, res) => {
    try {
        const result = await query("SELECT * FROM notes");
        return res.status(200).json({success: true, data: result});
    } catch (e) {
        console.log("terjadi kesalahan", e);
        return res.status(500).json({msg: "Notes gagal ditampilkan"})
    }
}