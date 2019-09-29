import React from 'react';
import styles from 'styled-components';

const Logo = () => {
  return (
    <Container>
      <LogoHolder>
        <OvalTail tailSize={15} />
        <OvalHead headSize={45}>
          <div />
        </OvalHead>
      </LogoHolder>
      <LogoText>
        <span>60</span>
      </LogoText>
      <InsuranceText>
        <span>health insurance</span>
      </InsuranceText>
    </Container>
  );
};

const OvalTail = styles.div`
   width: ${props => `${props.tailSize}px`};
   height: ${props => `${props.tailSize}px`};
   border-radius: 100%;
   background-image: linear-gradient(149deg, #084063, #0f7bc0);
`;

const OvalHead = styles.div`
  width: ${props => `${props.headSize}px`};
  height: ${props => `${props.headSize}px`};
  background-image: linear-gradient(325deg, #084063 35%, #0f7bc0 66%, #89caf0);
  border-radius: 100%;
  margin-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
      width: 25px;
      height: 25px;
      border-radius: 25px;
      background: #fff;
  }
`;

const LogoText = styles.span`
  display: inline-flex;
  align-items: flex-end;

span {
  margin-right: 5px;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(325deg, #084063 35%, #0f7bc0 66%, #89caf0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

const Container = styles.section`
  display: flex;
  padding: 1rem;
`;

const LogoHolder = styles.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InsuranceText = styles.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-right: 5px;
  padding-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: capitalize
  color: #084063
`;

export default Logo;
