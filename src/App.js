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
function App() {
  const events = [
    { path: "AcademicEvents" },
    { path: "FunEvents" },
    { path: "SportEvent" },
    { path: "Fests" },
    { path: "EventToday" },
  ];

  const element = <Appa />;

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/AcademicEvents" element={<AcademicEvents />} />
          <Route path="/FunEvents" element={<FunEvents />} />
          <Route path="/SportEvent" element={<SportEvent />} />
          <Route path="/Fests" element={<Fests />} />
          <Route path="/EventToday" element={<EventToday />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event_list" element={<Event_list />} />
          <Route path="/password_change" element={<PassChanger />} />

          {/* {events.map((event) => {
            console.log("event", event);
            <Route
              path={`/register/${event.path}`}
              element={<Appa />}
            />;
          })} */}
          {/* {useRoutes(
            [
              "/register/AcademicEvents",
              "/register/FunEvents",
              "/register/SportEvent",
              "/register/Fests",
              "/register/EventToday",
            ].map((path) => ({ path, element }))
          )} */}
          <Route path="/register/AcademicEvents" element={<Appa />} />
          <Route path="/register/FunEvents" element={<Appa />} />
          <Route path="/register/SportEvent" element={<Appa />} />
          <Route path="/register/Fests" element={<Appa />} />
          <Route path="/register/EventToday" element={<Appa />} />
          {/* <Route path="/register" element={<Appa />} /> */}
          <Route path="/moreinfo" element={<Mori />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
