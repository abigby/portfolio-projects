import React from "react";
import styled, { css } from "styled-components";

export default function StyledUserBtn({
  btnBorderRadius,
  btnPadding,
  btnBorder,
  btnWidth,
  btnHeight,
  btnPosition,
  btnMargin,
  userBtnText,
  btnName,
  btnBoxShadow,
  btnFontColor,
  btnBackgroundColor,
  btnHoverBackgroundColor,
  btnFontSize,
  btnDisabled,
  btnType
}) {
  const UserBtn = styled.button`
    border-radius: ${btnBorderRadius};
    padding: ${btnPadding};
    margin: ${btnMargin};
    position: ${btnPosition};
    width: ${btnWidth};
    height: ${btnHeight};
    border: ${btnBorder};
    box-shadow: ${btnBoxShadow};
    background-color: ${btnBackgroundColor};
    color: ${btnFontColor};
    font-size: ${btnFontSize};

    :hover {
      background-color: ${btnHoverBackgroundColor};
    }

    /* option to toggle different button styles...ie transparent background with thick border */
    ${props =>
      props.secondary &&
      css`
        background: transparent;
      `}
  `;

  return (
    <React.Fragment>
      <UserBtn disabled={btnDisabled} name={btnName} type={btnType}>
        {userBtnText}
      </UserBtn>
    </React.Fragment>
  );
}
