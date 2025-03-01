import React, { useState } from 'react';
import './NameForm.css';

function NameForm({ onSubmit, loading }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onSubmit(name);
    setName('');
  };

  return (
    <form className="name-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        disabled={loading}
        className="name-input"
      />
      <button 
        type="submit" 
        disabled={loading || !name.trim()}
        className="submit-button"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default NameForm; 