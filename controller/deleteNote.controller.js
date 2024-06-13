import { query } from "../config/db.js";

export const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await query("DELETE FROM notes WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      res.status(404).send({ message: "Note tidak di temukan" });
    } else {
      res.status(200).send({ message: "Note berhasil di hapus" });
    }
  } catch (e) {
    console.log("terjadi kesalahan", e);
    return res.status(500).json({ msg: "Note gagal dihapus" });
  }
};
