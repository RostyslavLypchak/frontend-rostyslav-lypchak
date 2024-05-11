// Settings.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const SettingsPage = () => {
  const history = useHistory();

  const handleRestartProgress = () => {
    // Implement logic to restart user's progress
    console.log('Restarting user progress');
  };

  const handleDeleteAccount = () => {
    // Implement logic to delete user's account
    console.log('Deleting user account');
  };

  const handleChangeNickname = () => {
    // Implement logic to change user's nickname
    console.log('Changing user nickname');
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <button onClick={handleRestartProgress}>Restart Progress</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <button onClick={handleChangeNickname}>Change Nickname</button>
    </div>
  );
};

export default SettingsPage;
