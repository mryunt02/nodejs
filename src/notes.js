import { insert, getDB, saveDB } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    content: note,
    id: Date.now(),
    tags,
  };
  await insert(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};
