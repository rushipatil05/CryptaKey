import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

const PasswordForm = ({ fetchNotes }) => {
  const navigate = useNavigate();

  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const addNote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        { url, username, password },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        setUrl('');
        setUsername('');
        setPassword('');
        setShowPassword(false);
        fetchNotes();
        navigate('/');
      }
    } catch (error) {
      console.log("❌ Data not added", error.message);
    }
  };


  return (
    <form onSubmit={addNote} className="w-full max-w-4xl flex flex-col gap-4">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Website URL"
        className="bg-[#1f2a3c]/60 text-lg text-gray-300 px-5 py-4 rounded-xl w-full placeholder:text-gray-400"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
        className="bg-[#1f2a3c]/60 text-lg text-gray-300 px-5 py-4 rounded-xl w-full placeholder:text-gray-400"
      />
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="bg-[#1f2a3c]/60 text-lg text-gray-300 px-5 py-4 rounded-xl w-full pr-12 placeholder:text-gray-400"
        />
        <button
  type="button"
  onClick={() => setShowPassword(prev => !prev)}
  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400"
>
  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
</button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-xl text-lg shadow-lg"
        >
          Add Password
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
