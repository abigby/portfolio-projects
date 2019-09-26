import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserList from "../components/userList";
import UserCardEdit from "../components/userCardEdit";
import PropTypes from "prop-types";

const EditUser = props => {
  // Access locally stored list of users in localstorage
  let randomUsersData = localStorage.getItem("randomUsersData")
    ? JSON.parse(localStorage.getItem("randomUsersData"))
    : {};

  // Filters selected user in localstorage to edit using uuid from url param
  let userToEdit = randomUsersData.data.results.filter(function(user) {
    return user.login.uuid === props.match.params.id;
  });

  EditUser.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    userData: PropTypes.array.isRequired,
    userIdx: PropTypes.number.isRequired
  };

  return (
    <React.Fragment>
      <h1>Edit User</h1>
      <UserList>
        <UserCardEdit
          key={1}
          name={userToEdit[0].name.first + " " + userToEdit[0].name.last}
          email={userToEdit[0].email}
          phoneNum={userToEdit[0].phone}
          city={userToEdit[0].location.city}
          state={userToEdit[0].location.state}
          imgSrc={userToEdit[0].picture.large}
          userId={userToEdit[0].login.uuid}
          userData={userToEdit}
          userIdx={props.match.params.index}
        />
      </UserList>
    </React.Fragment>
  );
};

export default EditUser;
