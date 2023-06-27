// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   // Dummy data
//   const username = 'John Doe';
//   const semester = '3rd';
//   const branch = 'Computer Science';

//   const events = [
//     {
//       sno: 1,
//       eventName: 'Event A',
//       date: '2023-06-15',
//       activityPoints: 5
//     },
//     {
//       sno: 2,
//       eventName: 'Event B',
//       date: '2023-06-17',
//       activityPoints: 10
//     }
//   ];

//   // State for user image upload
//   const [image, setImage] = useState('images/event1.jpeg');
//   const [uploadedImage, setUploadedImage] = useState(null);

//   // Function to handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImage(reader.result);
//       setUploadedImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   // Function to save changes
//   const saveChanges = () => {
//     if (uploadedImage) {
//       // Here, you can implement the logic to save the uploaded image
//       // to the server or update the user's profile with the new image
//       // For this example, we are simply updating the state to reflect the change
//       setImage(uploadedImage);
//       setUploadedImage(null);
//     }
//   };

//   return (
//     <div className="user-profile-container">
//       <h1 className="head">User Profile</h1>
//       <div className="image-upload">
//         <img
//           src={image}
//           alt="User"
//           className="user-image"
//         />
//         <br/>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//       </div>
//       <div className="user-details">
//         <h2 className="subheading">Username: {username}</h2>
//         <p className="details">Semester: {semester}</p>
//         <p className="details">Branch: {branch}</p>
//       </div>
//       <h2 className="subheading">Participated Events</h2>
//       <table className="event-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Event Name</th>
//             <th>Date</th>
//             <th>Activity Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map(event => (
//             <tr key={event.sno}>
//               <td>{event.sno}</td>
//               <td>{event.eventName}</td>
//               <td>{event.date}</td>
//               <td>{event.activityPoints}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {uploadedImage && (
//         <button className="save-button" onClick={saveChanges}>
//           Save Changes
//         </button>
//       )}
//     </div>
//   );
// }

// export default Profile;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {useNavigate} from 'react-router-dom';
// import {faPaintBrush } from "@fortawesome/free-solid-svg-icons";
// import React, { useState } from 'react';
// import { FaPencilAlt } from 'react-icons/fa';
// import './Profile.css';


// const Profile = () => {
//   // Dummy data
//   const username = 'John Doe';
//   const semester = '3rd';
//   const branch = 'Computer Science';

//   const events = [
//     {
//       sno: 1,
//       eventName: 'Event A',
//       date: '2023-06-15',
//       activityPoints: 5
//     },
//     {
//       sno: 2,
//       eventName: 'Event B',
//       date: '2023-06-17',
//       activityPoints: 10
//     }
//   ];

//   // State for user image upload
//   const [image, setImage] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [showSaveButton, setShowSaveButton] = useState(false);

//   // Function to handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImage(reader.result);
//       setUploadedImage(reader.result);
//       setShowSaveButton(true);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   // Function to save changes
//   const saveChanges = () => {
//     if (uploadedImage) {
//       // Here, you can implement the logic to save the uploaded image
//       // to the server or update the user's profile with the new image
//       // For this example, we are simply updating the state to reflect the change
//       setImage(uploadedImage);
//       setUploadedImage(null);
//       setShowSaveButton(false);
//     }
//   };

//   return (
//     <div className="user-profile-container">
//       <h1 className="head">User Profile</h1>
//       <div className="image-upload">
//         {image ? (
//           <>
//             <img src={image} alt="User" className="user-image" />
//             <label htmlFor="upload-input">
//               {/* <FaPencilAlt className="edit-icon" />
//                */}
//                <br/>
//             <FontAwesomeIcon icon={faPaintBrush}/>



//             </label>
//           </>
//         ) : (
//           <label htmlFor="upload-input">
//             <div className="user-image-placeholder" />
//             <br/>
//             {/* <FaPencilAlt className="edit-icon" /> */}
//             <FontAwesomeIcon icon={faPaintBrush}/>
//           </label>
//         )}
//         <input
//           id="upload-input"
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//       </div>
//       <div className="user-details">
//         <h2 className="subheading">Username: {username}</h2>
//         <p className="details">Semester: {semester}</p>
//         <p className="details">Branch: {branch}</p>
//       </div>
//       <h2 className="subheading">Participated Events</h2>
//       <table className="event-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Event Name</th>
//             <th>Date</th>
//             <th>Activity Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map(event => (
//             <tr key={event.sno}>
//               <td>{event.sno}</td>
//               <td>{event.eventName}</td>
//               <td>{event.date}</td>
//               <td>{event.activityPoints}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showSaveButton && (
//         <button className="save-button" onClick={saveChanges}>
//           Save Changes
//         </button>
//       )}
//     </div>
//   );
// }

// export default Profile;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
  // Dummy data
  const username = 'John Doe';
  const semester = '3rd';
  const branch = 'Computer Science';

  const events = [
    {
      sno: 1,
      eventName: 'Event A',
      date: '2023-06-15',
      activityPoints: 5
    },
    {
      sno: 2,
      eventName: 'Event B',
      date: '2023-06-17',
      activityPoints: 10
    }
  ];

  // State for user image upload
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setUploadedImage(reader.result);
      setShowSaveButton(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to save changes
  const saveChanges = () => {
    if (uploadedImage) {
      // Here, you can implement the logic to save the uploaded image
      // to the server or update the user's profile with the new image
      // For this example, we are simply updating the state to reflect the change
      setImage(uploadedImage);
      setUploadedImage(null);
      setShowSaveButton(false);
    }
  };

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      // Add logic to handle password mismatch
      return;
    }

    // Add logic to handle password change
    console.log('Password changed successfully');
  };

  return (
    <div className="user-profile-container">
      <h1 className="head">User Profile</h1>
      <div className="image-upload">
        {image ? (
          <>
            <img src={image} alt="User" className="user-image" />
            <label htmlFor="upload-input">
              <FontAwesomeIcon icon={faPaintBrush}/>
            </label>
          </>
        ) : (
          <label htmlFor="upload-input">
            <div className="user-image-placeholder" />
            <FontAwesomeIcon icon={faPaintBrush}/>
          </label>
        )}
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      <div className="user-details">
        <h2 className="subheading">Username: {username}</h2>
        <p className="details">Semester: {semester}</p>
        <p className="details">Branch: {branch}</p>
      </div>
      <div className="password-container">
        <h2 className="subheading">Change Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br/>
        <button className="change-password-button" onClick={handleChangePassword}>
          Change Password
        </button>
      </div>
      <h2 className="subheading">Participated Events</h2>
      <table className="event-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Activity Points</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.sno}>
              <td>{event.sno}</td>
              <td>{event.eventName}</td>
              <td>{event.date}</td>
              <td>{event.activityPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showSaveButton && (
        <button className="save-button" onClick={saveChanges}>
          Save Changes
        </button>
      )}
    </div>
  );
}

export default Profile;
