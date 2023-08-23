import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [localUsn, setLocalUsn] = useState(window.localStorage.getItem("usn"));
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const checkUser = window.localStorage.getItem("usn");

    if (!checkUser) navigate("/login");
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/profile", {
        usn: localUsn,
      }); // Update the API endpoint if needed

      // console.log("profile", response);
      // Assuming the response data is in the following format:
      const user = response.data;
      console.log("user", user);
      const { name, usn, branch, semester } = user;

      setProfileData({ name, usn, branch, semester });
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  function table_event() {
    window.location.href = "event_list";
  }

  const change_pass = () => {
    window.location.href = "password_change";
  };

  return (
    <div className="p-16 bg-slate-900">
      <div className="p-8 bg-black mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-white text-xl">22</p>
              <p className="text-white">Events Participated</p>
            </div>
            <div>
              <p className="font-bold text-white text-xl">10</p>
              <p className="text-white">Events won</p>
            </div>
            <div>
              <p className="font-bold text-white text-xl">89</p>
              <p className="text-white">Activity Points</p>
            </div>
          </div>

          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              onClick={table_event}
            >
              Upcoming events
            </button>
          </div>
        </div>

        <div className="mt-20 text-center border-b pb-12">
          {profileData ? (
            <>
              <h1 className="text-4xl font-medium text-white">
                {profileData.name}
                <span className="font-light text-gray-500"></span>
              </h1>
              <p className="font-light text-white mt-3">
                {profileData.semester}
              </p>
              <p className="mt-8 text-white">{profileData.usn}</p>
              <p className="mt-2 text-white">{profileData.branch}</p>
            </>
          ) : (
            <p className="text-white">Loading profile data...</p>
          )}
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <button
            className="text-indigo-500 py-2 px-4  font-medium mt-4"
            onClick={change_pass}
          >
            Change Password
          </button>
        </div>
        <div className="mt-1 flex flex-col justify-center">
          <button
            className="text-indigo-500 py-2 px-4  font-medium mt-4"
            onClick={() => {
              window.localStorage.removeItem("usn");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
