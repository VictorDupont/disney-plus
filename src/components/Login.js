import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" />
				<SignUp>OBTENEZ TOUT</SignUp>
				<Description>
					Obtenez en avant première Raya et le Dernier Dragon moyennant des frais
					supplémentaires avec un abonnement Disney+. À compter du 03/26/21, le prix de
					Disney+ et du pack Disney augmentera de 1€.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" />
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	justify-content: center;

	&:before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		right: 0;
		opacity: 0.8;
		background-image: url("/images/login-background.jpg");
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1;
		height: 100vh;
	}
`;

const CTA = styled.div`
	width: 90%;
	max-width: 650px;
	padding: 80px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	padding: 17px 0;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
	transition: all 250ms;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`;

const CTALogoTwo = styled.img`
	width: 90%;
`;
