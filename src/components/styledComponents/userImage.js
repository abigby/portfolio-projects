import React from "react";
import styled from "styled-components";

export default function StyledUserImg({
  imgBorderRadius,
  imgPadding,
  imgBorder,
  imgWidth,
  imgHeight,
  imgPosition,
  imgDisplay,
  imgMargin,
  userImgSrc,
  imgAlt,
  imgBoxShadow
}) {
  const UserImg = styled.img`
    display: ${imgDisplay};
    border-radius: ${imgBorderRadius};
    padding: ${imgPadding};
    margin: ${imgMargin};
    position: ${imgPosition};
    width: ${imgWidth};
    height: ${imgHeight};
    border: ${imgBorder};
    box-shadow: ${imgBoxShadow};
  `;

  return (
    <React.Fragment>
      <UserImg src={userImgSrc} alt={imgAlt} />
    </React.Fragment>
  );
}
