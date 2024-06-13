import { query } from "../config/db.js";

export const updateNote = async (req, res) => {
    const id = req.params.id
    const { title, datetime, note } = req.body;
    try {
        const result = await query( "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?",
        [title, datetime, note, id]);
        if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Note tidak di temukan' });
          } else {
            res.status(200).send({ message: 'Note berhasil diupdate', data: result });
          }
    } catch (e) {
        console.log("terjadi kesalahan", e);
        return res.status(500).json({msg: "Note gagal diupdate"})
    }
}