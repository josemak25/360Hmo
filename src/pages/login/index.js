import React, { useState } from 'react';
import styles from 'styled-components';
import Logo from '../../commons/Logo';
import { CustomInput, CustomButton } from '../../components/index';
import { Link } from 'react-router-dom';

const Login = ({ inputFields }) => {
  const [fields, setField] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    const name = target.name;
    fields[name] = target.value;
    setField({ ...fields });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ ...fields });
  };

  return (
    <Container className="ui one column center aligned grid">
      <LoginForm className="column twelve wide">
        <Link to="/" className="home-logo">
          <Logo padding={0} alignment="center" />
        </Link>
        <FormWrapper onSubmit={handleSubmit}>
          {inputFields.map((field, i) => (
            <CustomInput {...field} key={i} onChange={handleChange} />
          ))}
          <CustomButton name="log in" bgColor="#a9a9a9" />
        </FormWrapper>
        <ForgetPassword>
          <span>
            forgot password?
            <Link>click here</Link>
          </span>
        </ForgetPassword>
      </LoginForm>
    </Container>
  );
};

const Container = styles.div`
   height: 100vh;
   margin: 0 !important;

   @media only screen and (min-width: 411px) {
    border: 1px pink solid;
 }
   
`;

const LoginForm = styles.div`
   margin-top: 1rem !important;
   display: flex !important;
   flex-direction: column;
   justify-content: space-between;

  .home-logo {
    cursor: pointer
  }


  @media only screen and (min-width: 360px) {
    margin-top: 5rem !important;
 }

`;

const FormWrapper = styles.form`
  margin-top: 1.5rem;
  width: 100% !important;

`;

const ForgetPassword = styles.div`
  text-transform: capitalize
  font-size: 10px;
  margin-right: auto !important;

  @media only screen and (min-width: 360px) {
    margin-bottom: 8rem !important;
 }
`;

export default Login;

Login.defaultProps = {
  inputFields: [
    {
      type: 'email',
      name: 'email',
      placeholder: 'email address'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'password'
    }
  ]
};
