import React, { useState } from "react";

function ListUsers({ usersList }) {
  const [showGamePlayed, setShowGamesPlayed] = useState(false);
  const handleToggleGamePlayed = () => {
    setShowGamesPlayed(!showGamePlayed);
  };

  const gamesPlayedButton = (
    <button onClick={handleToggleGamePlayed}>
      {showGamePlayed ? "Hide" : "Show"} the number of games played
    </button>
  );

  return (
    <>
      {usersList && usersList.length > 0 ? gamesPlayedButton : ""}
      <ul>
        {usersList.map((user, index) => {
          return (
            <li key={index}>
              <p>Username: {user.userName}</p>
              <p>
                The number of games played:
                {showGamePlayed ? user.gamePlayed : "*"}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListUsers;
