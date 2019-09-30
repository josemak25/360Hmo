import React from 'react';
import { Grid, GridColumn, GridRow, Image, Button } from 'semantic-ui-react';

export default function HeroBanner() {
	return (
		<Grid stackable>
			<GridRow>
				<GridColumn width={8}>
					<div>
						<h1>Get Affordable Health Insurance, Fast</h1>
						<p className='banner-paragraph'>Sign up with as little as ₦1,400 per month in 5 minutes!</p>
					</div>
					<Button size='big' content='Get started' style={{ color: 'white', backgroundColor: '#094063' }} />
				</GridColumn>
				<GridColumn width={7}>
					<Image style={{ margin: 'auto' }}  src='/assets/undraw_motherhood_7htu.svg' />
				</GridColumn>
			</GridRow>
			<GridRow>
				<GridColumn width={8}>
					<Image style={{ margin: 'auto' }} src='/assets/undraw_fatherhood_7i19.svg' />
				</GridColumn>
				<GridColumn width={7}>
					<div>
							<h1>Invest In Your Health</h1>
						<p className='banner-paragraph'>Sign up with as little as ₦1,400 per month in 5 minutes!</p>
					</div>
				</GridColumn>
			</GridRow>
		</Grid>
	);
}
