import { query } from "../config/db.js";

export const addNote = async (req, res) => {
  const { title, note } = req.body;
  const datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    const result = await query(
      "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)",
      [title, datetime, note]
    );
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("terjadi kesalahan", e);
    return res.status(500).json({ msg: "Note gagal di tampilkan" });
  }
};
