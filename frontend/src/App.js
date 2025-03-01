import React, { useState, useEffect } from 'react';
import NameForm from './components/NameForm';
import './App.css';
import axios from 'axios';

function App() {
  const [names, setNames] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/names');
      setNames(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching names:', err);
      setError('Failed to load names. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (name) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/names', { name });
      setMessage(response.data.message);
      fetchNames();
      setError('');
    } catch (err) {
      console.error('Error submitting name:', err);
      setError('Failed to submit name. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>이 앱은 이름도 프린트해줍니다.</h1>
        <NameForm onSubmit={handleSubmit} loading={loading} />
        
        {message && <div className="message success">{message}!!</div>}
        {error && <div className="message error">{error}</div>}
        
        <div className="names-container">
          <h2>등록된 이름들</h2>
          {loading && <p>Loading...</p>}
          {!loading && names.length === 0 && <p>No names registered yet.</p>}
          <ul className="names-list">
            {names.map((item) => (
              <li key={item.id} className="name-item">{item.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App; 