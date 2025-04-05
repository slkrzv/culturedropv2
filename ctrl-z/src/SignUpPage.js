import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Creează utilizatorul în Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salvează datele suplimentare în Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        username,
        email
      });

      alert('Cont creat cu succes!');
    } catch (err) {
      setError(err.message);
      console.error('Eroare la înregistrare:', err);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col items-center">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Nume"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Prenume"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Parolă"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpPage;