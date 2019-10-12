import React from 'react';
import styled from 'styled-components';

import molecules from '../../../assets/img/molecules.svg';

import Form from './Form';

const Landing = () => {
	return (
		<LandingStyle>
			<div>
				<h2>Looking for a clinical trial near you?</h2>
				<p>
					We'll help you break through the complex medical <br />
					jargon and find a clinical study that you're eligible to join.
				</p>
				<Form />
			</div>
		</LandingStyle>
	);
};

export default Landing;

const LandingStyle = styled.div`
    height: 90vh;
    background-image: url("${molecules}");
    background-size: cover;

    div {
        max-width: 1500px
        margin: 0 auto;

        h2 {
            font-size: 6rem;
            width: 75%;
            max-width: 660px
            margin-top: 150px;
            margin-left: 75px;
        }
    
        p {
            font-size: 2rem;
            width: 60%;
            margin: 45px 0 45px 75px;
            line-height: 1.5;
        }
    }
`;
