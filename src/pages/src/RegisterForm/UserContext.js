import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

export default (props) => {
  const [state, setState] = useState({
    user: {
      team_name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      birthdate: new Date().toISOString().slice(0, 10),
      bio: "",
      website: "",
      acceptTerms: false,
      newsletter: false,
      event_selected: "",
    },
    errors: {},
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};
