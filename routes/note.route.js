import express from "express";
import { addNote } from "../controller/postNote.controller.js";
import { getNote } from "../controller/getNote.controller.js";
import { getNoteById } from "../controller/getNoteById.controller.js";
import { updateNote } from "../controller/updateNote.controller.js";
import { deleteNote } from "../controller/deleteNote.controller.js";

const router = express.Router();

// membuat note baru
router.post('/post-notes', addNote);

// menampilkan semua note
router.get('/get-notes', getNote);

// menampilkan note berdasarkan id
router.get('/get-notes/:id', getNoteById);

// update note
router.put('/update-notes/:id', updateNote);

// delete note
router.delete('/delete-notes/:id', deleteNote);

export default router;
