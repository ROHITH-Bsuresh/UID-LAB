import React from 'react';
import UserProfile from './Components/UserProfile';

const userData = {
  name: 'ROHITH S',
  email: 'rohiths.22it@kongu.edu',
  bio: 'A passionate developer and tech enthusiast.',
  profilePicture: 'https://cdn-icons-png.flaticon.com/512/3106/3106773.png',
  phone: '934473362552',
  address: '123 Erode',
  socialMedia: [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit' },
    { platform: 'Twitter', url: 'https://twitter.com/janedoe' },
    { platform: 'GitHub', url: 'https://github.com/janedoe' },
  ]

};

const App = () => {
  return (
    <div className="app">
      <UserProfile user={userData} />
    </div>
  );
};

export default App;
