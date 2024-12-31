import PropTypes from 'prop-types';
import React from 'react';
import '../styles/user.css'; // Make sure to import the CSS file

const UserProfile = ({ user }) => {
  const { name, email, bio, profilePicture, phone, address, socialMedia } = user;

  return (
    <div className="user-profile">
      <div className="profile-picture-container">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      </div>
      <h1 className="user-name">{name}</h1>
      <p className="user-email">{email}</p>
      <p className="user-bio">{bio}</p>
      {phone && <p className="user-phone">Phone: {phone}</p>}
      {address && <p className="user-address">Address: {address}</p>}
      {socialMedia && (
        <div className="social-media-links">
          <h3>Social Media</h3>
          <ul>
            {socialMedia.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Define PropTypes for type-checking
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profilePicture: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    socialMedia: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  }).isRequired
};

export default UserProfile;
