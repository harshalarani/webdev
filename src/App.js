import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AcademicEvents from "./pages/AcademicEvents";
import FunEvents from "./pages/FunEvents";
import SportEvent from "./pages/SportEvent";
import Fests from "./pages/Fests";
import EventToday from "./pages/EventToday";
import Events from "./pages/Events";
import Appa from "./pages/src/Appa";
import Mori from "./pages/Mori";
import Profile from "./pages/Profile";
import Event_list from "./pages/Event_list";
import PassChanger from "./pages/PassChanger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const events = [
    { path: "AcademicEvents", element: <AcademicEvents /> },
    { path: "FunEvents", element: <FunEvents /> },
    { path: "SportEvent", element: <SportEvent /> },
    { path: "Fests", element: <Fests /> },
    { path: "EventToday", element: <EventToday /> },
  ];

  const check = window.localStorage.getItem("usn");

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={!check ? false : true} />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event_list" element={<Event_list />} />
          <Route path="/password_change" element={<PassChanger />} />

          {events.map((event, index) => {
            return (
              <Route
                path={`/${event.path}`}
                element={event.element}
                key={index}
              />
            );
          })}

          {/* <Route path="/AcademicEvents" element={<AcademicEvents />} />
          <Route path="/FunEvents" element={<FunEvents />} />
          <Route path="/SportEvent" element={<SportEvent />} />
          <Route path="/Fests" element={<Fests />} />
          <Route path="/EventToday" element={<EventToday />} /> */}

          {events.map((event, index) => {
            return (
              <Route
                path={`/register/${event.path}`}
                element={<Appa />}
                key={index}
              />
            );
          })}

          {/* <Route path="/register/AcademicEvents" element={<Appa />} />
          <Route path="/register/FunEvents" element={<Appa />} />
          <Route path="/register/SportEvent" element={<Appa />} />
          <Route path="/register/Fests" element={<Appa />} />
          <Route path="/register/EventToday" element={<Appa />} /> */}

          {/* <Route path="/register" element={<Appa />} /> */}

          <Route path="/moreinfo" element={<Mori />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
