import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login reușit!');
    } catch (error) {
      alert('Eroare la autentificare: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center">
      <h2 className="text-2xl mb-4">Login</h2>
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default LoginPage;