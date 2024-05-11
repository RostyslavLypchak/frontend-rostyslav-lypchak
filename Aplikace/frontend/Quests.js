// Quests.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quests = () => {
  const [quest, setQuest] = useState(null);

  useEffect(() => {
    fetchRandomQuest();
  }, []);

  const fetchRandomQuest = async () => {
    try {
      const response = await axios.get('/api/quests/random');
      setQuest(response.data);
    } catch (error) {
      console.error('Error fetching random quest:', error);
    }
  };

  return (
    <div>
      <h2>Random Quest</h2>
      {quest ? (
        <div>
          <h3>{quest.title}</h3>
          <p>Description: {quest.description}</p>
          {/* Display other quest details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quests;
