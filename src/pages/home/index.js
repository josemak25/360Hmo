import React from 'react';
import Logo from '../../commons/Logo';
import HeroBanner from '../../components/HeroBanner';
import Advantages from '../../components/Advantages';
import PlanOptions from '../../components/PlanOptions';
import NavBar from '../../commons/NavBar';
import Footer from '../../commons/Footer';

const index = () => {
	return (
		<div style={{ backgroundColor: '#fafafa' }}>
			<NavBar />
			<Logo />
			<HeroBanner></HeroBanner>
			<Advantages></Advantages>
			<PlanOptions></PlanOptions>
			<Footer />
		</div>
	);
};

export default index;
