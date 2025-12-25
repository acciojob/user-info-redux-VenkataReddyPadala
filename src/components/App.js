import React from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updateName } from "../store/userSlice";

const App = () => {
  const { name, email } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <div>
      {/* Do not remove the main div */}

      <h1>User Information</h1>

      <label htmlFor="name">Name</label>

      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />

      <label htmlFor="email">Name</label>

      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />

      <div className="output">
        <p>Current values in store:</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;
