import React from "react";
import StyledUserImg from "./styledComponents/userImage";
import StyledUserBtn from "./styledComponents/userBtn";
import { TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";
import ustates from "../data/us-states.json";

import UseFormValidation from "../formValidation/useFormValidation";
import validateAuth from "../formValidation/validateAuth";

// capitalize wrapped text value
function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const UserCardEdit = ({
  name,
  email,
  phoneNum,
  city,
  state,
  imgSrc,
  userId,
  userData,
  userIdx
}) => {
  // Little hack to update the capitalization state in the object
  userData[0].location.state = Capitalize(userData[0].location.state);
  const INITIAL_STATE = userData;
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  } = UseFormValidation(
    INITIAL_STATE,
    validateAuth,
    userData[0].login.uuid,
    userIdx
  );
  // map states to dropdown
  const field = values[0];
  const statesList = ustates.map((st, index) => {
    return (
      <option key={index} value={st.name}>
        {st.name}
      </option>
    );
  });

  return (
    <React.Fragment>
      <div className="user_card" style={{ margin: "auto", height: "550px" }}>
        <div className="user_card_header">
          <div className="user_card_header_inner">
            <span className="user_card_header_item">
              <Link to={"/"} id="edit_user_card_icon">
                <TiArrowLeft />
              </Link>
            </span>
            <span className="user_card_header_item" id="user_card_title">
              {field.name.first + " " + field.name.last}
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
        <div className="user_card_details" style={{ bottom: "225px" }}>
          <form onSubmit={handleSubmit}>
            <label className="user_editable_label" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              datatype=""
              type="email"
              name="email"
              autoComplete="off"
              className={errors.email && "error-input"}
              defaultValue={field.email}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            <label className="user_editable_label" htmlFor="phone">
              Phone
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              datatype=""
              name="phone"
              autoComplete="off"
              className={errors.phone && "error-input"}
              defaultValue={field.phone}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
            <span className="user_location">
              <div>
                <label className="user_editable_label" htmlFor="city">
                  City
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ marginRight: "5px", textTransform: "capitalize" }}
                  type="text"
                  datatype="location"
                  name="city"
                  autoComplete="off"
                  defaultValue={field.location.city}
                />
              </div>
              <div>
                <label className="user_editable_label" htmlFor="state">
                  State
                </label>
                <select
                  onChange={handleChange}
                  id=""
                  datatype="location"
                  name="state"
                  required
                  defaultValue={field.location.state}
                >
                  {statesList}
                </select>
              </div>
            </span>
            <div className="user_card_btn_row">
              <StyledUserBtn
                btnBorder="none"
                btnBorderRadius="7px"
                btnWidth="100px"
                btnHeight="40px"
                btnPadding="10px"
                userBtnText="Save"
                btnBackgroundColor="#426eff"
                btnHoverBackgroundColor="#365edf"
                btnPosition="relative"
                btnBoxShadow=" 0 2px 10px rgba(0, 0, 0, 0.2)"
                btnDisabled={isSubmitting}
                btnType="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCardEdit;
