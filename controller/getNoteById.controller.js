import { query } from "../config/db.js";

export const getNoteById = async (req, res) => {
    const id = req.params.id
    try {
        const result = await query("SELECT * FROM notes WHERE id = ?", [id]);
        if (result.length === 0) {
            res.status(404).send({ message: 'Note tidak ditemukan' });
        } else {
            res.status(200).send({ message: "Note ditemukan", data: result[0] });
        } 
    } catch (e) {
        console.log("terjadi kesalahan", e);
        return res.status(500).json({msg: "Note gagal ditampilkan"})
    }
}