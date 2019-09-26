import React from "react";
import StyledUserImg from "../components/styledComponents/userImage";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";

const UserCard = ({
  name,
  email,
  phoneNum,
  city,
  state,
  imgSrc,
  userId,
  userIndex
}) => {
  return (
    <form className="user_card">
      <div className="user_card_header">
        <div className="user_card_header_inner">
          <span className="user_card_header_item">
            <Link
              to={"/edit/" + userId + "/" + userIndex}
              id="edit_user_card_icon"
            >
              <TiEdit />
            </Link>
          </span>
          <span className="user_card_header_item" id="user_card_title">
            {name}
          </span>
        </div>
        <StyledUserImg
          imgBorder="4px solid #fff"
          imgBorderRadius="100px"
          imgWidth="127px"
          imgHeight="127px"
          userImgSrc={imgSrc}
          imgBoxShadow=" 0 2px 10px rgba(0, 0, 0, 0.2)"
        />
      </div>
      <div className="user_card_details">
        <span className="user_email">{email}</span>
        <span className="user_phone">{phoneNum}</span>
        <span className="user_location">
          {city}, {state}
        </span>
      </div>
    </form>
  );
};

export default UserCard;
