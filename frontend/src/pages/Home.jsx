import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from '../components/NoteCard';
import PasswordForm from '../components/PasswordForm';
import { toast } from 'react-toastify';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const[query,setQuery]=useState('')//<---- used for searchbar
  const[filteredNotes,setFilteredNotes]=useState('')//<---- used for searchbar

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) => 
        note.url.toLowerCase().includes(query.toLowerCase())) //<---- used for searchbar
    )
  }, [query, notes]);

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
  const handleLogout = () => setNotes([]);

  window.addEventListener('logout', handleLogout);
  return () => window.removeEventListener('logout', handleLogout);
  
  }, []);


  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/note",{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteNote =async(id) =>{
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        fetchNotes();
        toast.success("Note Deleted");
      }
    } catch (error) {
      console.log("❌ Data not added", error.message);
    }
  };


  return (
    <>
      <Navbar setQuery={setQuery}/>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111827] px-4 py-8 text-white flex flex-col items-center gap-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">
            Welcome to <span className="text-yellow-400">SafeVault</span>
          </h1>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Store and manage your <span className="text-yellow-400 font-medium">passwords</span> securely — all in one place.
          </p>
        </div>
        <PasswordForm fetchNotes={fetchNotes} />
        <div className="w-full max-w-5xl rounded-xl shadow-lg overflow-hidden border border-yellow-500/30 bg-[#0a0a0a] mt-8">
          <div className="grid grid-cols-4 text-center bg-black text-yellow-400 font-semibold py-3 border-b border-yellow-500/20">
            <div>Site</div>
            <div>Gmail / Username</div>
            <div>Password</div>
            <div>Delete</div>
          </div>

          { filteredNotes.length> 0? (
            filteredNotes.map((note) => (
              <NoteCard 
                key={note._id}
                note={note}
                deleteNote={deleteNote}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 py-6">No saved passwords yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
