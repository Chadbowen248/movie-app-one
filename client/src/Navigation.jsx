import React from "react";
// import SignIn from "./SignIn"
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
width: 100%;
background-color: Tomato;
display: flex;
height: 50px;
align-items: center;
justify-content: flex-end;
`;

const NavLink = styled(Link)`
color: white;
padding-left: 1.5em;
text-decoration: none;
font-family: 'Coda', sans-serif;
text-transform: uppercase;
font-size: 1.5em;
`;
const Navigation = (props) => (
  <NavigationDiv>
    <NavLink to="/">
      Collection
    </NavLink>
    <NavLink to="/search">
      Search
    </NavLink>
    <button onClick={props.signOut}>sign out</button>
    <div className="user-info">
    <span className="user-info__profile-name">{props.userInfo.displayName}</span>
      <img className="user-info__profile-pic " src={props.userInfo.photoURL} alt={props.userInfo.displayName}/>
    </div>
    {/* <SignIn signIn={props.signIn} signOut={props.signOut}/>
    <span>{props.userInfo}</span> */}
  </NavigationDiv>
);

export default Navigation;
