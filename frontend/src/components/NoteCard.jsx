import React, { useState } from 'react';
import { Eye, EyeOff, Pencil, Trash2, Globe, User } from 'lucide-react';

const NoteCard = ({ note, deleteNote }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="grid grid-cols-4 text-center items-center py-4 text-gray-200 border-t border-yellow-500/20">
      <div className="flex items-center justify-center gap-2 truncate px-2">
        <Globe size={18} className="text-yellow-400" />
        <a
          href={note.url}
          target="_blank"
          rel="noreferrer"
          className="text-yellow-300 hover:text-yellow-400 underline truncate max-w-[150px]"
          title={note.url}
        >
          {note.url}
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 px-2 truncate">
        <User size={18} className="text-yellow-400" />
        <span title={note.username}>{note.username}</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        <span className="tracking-wider">{showPassword ? note.password : '••••••••'}</span>
        <button
          onClick={() => setShowPassword(prev => !prev)}
          className="text-yellow-400 hover:text-yellow-500 transition-colors"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => deleteNote(note._id)}
          className="hover:text-red-400 transition-transform hover:scale-110"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
