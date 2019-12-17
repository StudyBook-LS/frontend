import React from "react";
import styled from "styled-components";

import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <HeaderStyle>
      <a href="/">
        <span className="hidden">&nbsp;</span>
        <img src={logo} alt="Studybrook logo" />
      </a>
      <nav>
        <a href="about">About</a>
        <a href="#help">Help</a>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
	display: flex;
	width: 95%;
	max-width: 1500px
    margin: 0 auto;
    padding: 20px 0;
	justify-content: space-between;
    align-items: center;

	nav {
		width: 25%;
		display: flex;
		justify-content: flex-end;

		a {
			text-decoration: none;
			font-size: 1.8rem;
			color: #3f3f3f;
			transition: all 300ms ease;
			margin-left: 80px;

			&:hover {
				color: #1ad9c4;
			}
		}
	}
`;
