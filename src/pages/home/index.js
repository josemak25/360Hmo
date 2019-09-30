import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import Advantages from '../../components/Advantages';
import PlanOptions from '../../components/PlanOptions';
import NavBar from '../../commons/NavBar';

const index = () => {
	return (
		<div style={{ backgroundColor: '#fafafa' }}>
			<NavBar />
			<HeroBanner></HeroBanner>
			<Advantages></Advantages>
			<PlanOptions></PlanOptions>
		</div>
	);
};

export default index;
