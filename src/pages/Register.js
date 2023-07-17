import React, { useState } from 'react';
import Wrapper from '../assets/Wrappers/RegistrationFrom';
import axios from 'axios';
import { setupUser } from '../redux/actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
import Alert from '../components/Alert';
import { useNavigate } from 'react-router-dom';



const RegistrationForm = ({ setupUser }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMember, setMember] = useState(false);
  const showAlert = useSelector((state) => state.showAlert);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const changeMember =()=>{
    setMember(!isMember)
  }
  const handleSubmit = (e) => {
    console.log(isMember)
    e.preventDefault();
    setupUser(email,password,isMember);
    console.log(showAlert)
    setEmail('');
    setPassword('');
    
  };
  console.log(token)
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [token, navigate])

  return (
    <Wrapper>
    
    
    <div className='container'>
    
    <form className="login-box" onSubmit={handleSubmit}>
    {showAlert?<Alert/>:null}
    <h1>{isMember?"Login":"Register"}</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
    <br/>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <br/>

      <button className='submit' type="submit">{isMember?"Login":"Register"}</button>
      <br/>
      <p >{isMember?"Don't have an account": "Already have an account"} </p> 
      <button type='button' onClick={changeMember}>{isMember?"Register Here":"Login Here"}</button>
    </form>
    </div>
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.root
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setupUser: (email, password, isMember) => dispatch(setupUser({email, password, isMember}))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

// export default RegistrationForm;
