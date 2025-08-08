'use client';

import { useState, useEffect } from 'react';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  
  // Fetch notes
  const fetchNotes = async () => {
    const res = await fetch('/api/notes',{
        method:'GET'
    });
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Create new note
  const handleCreate = async () => {
    await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    setForm({ title: '', content: '' });
    fetchNotes();
  };

  // Delete note
  const handleDelete = async (id) => {
    await fetch(`/api/notes/${id}`, {
      method: 'DELETE',
    });
    fetchNotes();
  };
  return (
    <div className="p-6 bg-primary">
      <h2 className="text-xl font-bold mb-4">Create Note</h2>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        className="border p-2 mr-2"
      />
      <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2">
        Add
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-bold">All Notes</h2>
        <ul>
          {notes.map((note) => (
            <li key={note._id} className="mt-2">
              <strong>{note.title}</strong>: {note.content}
              <button onClick={() => handleDelete(note._id)} className="text-red-600 ml-4">
                Delete
              </button>
            </li>
          ))}
          {/* {Array.isArray(notes) && notes.length > 0 ? (
            notes.map((note) => (
                <li key={note._id} className="mt-2">
                <strong>{note.title}</strong>: {note.content}
                <button onClick={() => handleDelete(note._id)} className="text-red-600 ml-4">
                    Delete
                </button>
                </li>
            ))
            ) : (
            <p>No notes found.</p>
            )} */}
        </ul>
      </div>
    </div>
  );
}
