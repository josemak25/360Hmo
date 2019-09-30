import React from 'react';
import { Container } from 'semantic-ui-react';
import Logo from '../../commons/Logo';
import HeroBanner from '../../components/HeroBanner';
import Advantages from '../../components/Advantages';
import PlanOptions from '../../components/PlanOptions';

const index = () => {
	return (
		<div>
			<Logo />
			<Container style={{ backgroundColor: '#fcfcfd' }}>
				<HeroBanner></HeroBanner>
				<Advantages></Advantages>
				<PlanOptions></PlanOptions>
			</Container>
		</div>
	);
};

export default index;
