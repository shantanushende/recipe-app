import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const RecipeNavbar = () => {
  const history = useHistory();

  const signOut = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
  <div className="w3-bar">
  <Link to="/" className="w3-bar-item w3-button">All Recipies</Link>
  <Link to="/new" className="w3-bar-item w3-button">Add new recipe</Link>
  <Link to="/ChatRoom" className="w3-bar-item w3-button">Chatroom</Link>
  <button onClick={signOut}><a href="#" class="w3-bar-item w3-button">Signout</a></button>

</div>

  );
};

export default RecipeNavbar;
