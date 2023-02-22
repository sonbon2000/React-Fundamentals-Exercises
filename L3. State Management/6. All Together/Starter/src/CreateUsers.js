import React, { useState } from "react";

function CreateUsers({ usersList, onAddUser }) {
  const [userExist, setUserExist] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const checkExist = (currentUserName) => {
    usersList.forEach((item) => {
      if (item.userName === currentUserName) {
        return true;
      }
    });

    return false;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userAlreadyExist = checkExist(user.userName);
    if (!userAlreadyExist) {
      onAddUser(user);
    }
    setUserExist(userAlreadyExist);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.firstName}
          onChange={handleInputChange}
          name="firstName"
        />
        <input
          type="text"
          value={user.lastName}
          onChange={handleInputChange}
          name="lastName"
        />
        <input
          type="text"
          value={user.userName}
          onChange={handleInputChange}
          name="userName"
        />
        <button
          disabled={
            user.firstName === "" ||
            user.lastName === "" ||
            user.userName === ""
          }
        >
          Add users
        </button>
      </form>
      {userExist && <p>You can't add users that already exist</p>}
    </>
  );
}

export default CreateUsers;
