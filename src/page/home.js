import React, { useState, useEffect } from "react";
import UserList from "../components/userList";
import UserCard from "../components/userCard";
import { useHttp } from "../data/http";

const Home = props => {
  const [isLoading, fetchedData] = useHttp(
    "https://randomuser.me/api/?results=12&nat=us",
    []
  );

  //initialize the search form state
  const [searchText, setSearchText] = useState("");
  const [sortNormal, setSortNormal] = useState(true);

  if (
    localStorage.getItem("randomUsersData") === null &&
    fetchedData !== null
  ) {
    localStorage.setItem("randomUsersData", JSON.stringify(fetchedData));
  }

  // retrives stored data in local storage using key
  let randomUsersData = localStorage.getItem("randomUsersData")
    ? JSON.parse(localStorage.getItem("randomUsersData"))
    : [];

  let userResults = <p>Loading Users...</p>;

  if (localStorage.getItem("randomUsersData")) {
    // assign local storange users Data to newly declared listOfusers and map values to respective props field.
    const listOfUsers = randomUsersData
      ? randomUsersData.data.results.map((user, index) => {
          return (
            <UserCard
              key={index}
              name={user.name.first + " " + user.name.last}
              email={user.email}
              phoneNum={user.phone}
              city={user.location.city}
              state={user.location.state}
              imgSrc={user.picture.large}
              userId={user.login.uuid}
              userIndex={index}
            />
          );
        })
      : [];

    // Filters list of users by name state, email, city
    let filteredUsers = listOfUsers.filter(user => {
      return (
        user.props.name.indexOf(searchText.toLowerCase()) !== -1 ||
        user.props.email.indexOf(searchText.toLowerCase()) !== -1 ||
        user.props.city.indexOf(searchText.toLowerCase()) !== -1 ||
        user.props.state.indexOf(searchText.toLowerCase()) !== -1
      );
    });
    // handles user entered values and pass it to the filtered users list.
    const filterSearch = event => {
      let currEvent = event.target.value;
      setSearchText(currEvent);
    };
    // handles user sort; use hook to update the sort value, by default records are sorted to ascending order
    const handleSortUsers = sortAsc => {
      setSortNormal(sortAsc);
    };
    // Sort results in ASC if sortNormal is true and DSC if sortNormal is false
    filteredUsers.sort((a, b) => {
      if (sortNormal) {
        let aName = a.props.name.toLowerCase();
        let bName = b.props.name.toLowerCase();
        //return results in ascending order
        return aName < bName ? -1 : aName > bName ? 1 : 0;
      } else {
        let aName = a.props.name.toLowerCase();
        let bName = b.props.name.toLowerCase();
        //return results in descending order
        return aName > bName ? -1 : aName < bName ? 1 : 0;
      }
    });

    // if (randomUsersData != null || fetchedData) {
    userResults = (
      <React.Fragment>
        <section className="sort_form">
          <input
            type="text"
            className="main_user_search"
            placeholder="Search a user by name, email, state and city"
            onChange={filterSearch}
          />
          <label className="cb_rb_label">
            Ascending
            <input
              type="radio"
              name="userSort"
              value={true}
              defaultChecked={sortNormal}
              onClick={() => handleSortUsers(true)}
            />
            <span className="radiobtn" />
          </label>
          <label className="cb_rb_label">
            Descending
            <input
              type="radio"
              name="userSort"
              value={!sortNormal}
              onClick={() => handleSortUsers(false)}
            />
            <span className="radiobtn" />
          </label>
        </section>

        <UserList>{filteredUsers}</UserList>
        {/*  name, email, phoneNum, city, state, imgSrc */}
      </React.Fragment>
    );
    // }
  }
  return userResults;
};

export default Home;
