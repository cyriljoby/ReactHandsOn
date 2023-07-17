import data from '../data.json';
import axios from 'axios';




export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  };
};

const clearAlert = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR_ALERT' });
    }, 3000);  };
  
};

export const setupUser = ({email,password, isMember}) => {
  return async (dispatch) => {
    console.log(isMember)
    if (!isMember){
      try{
        const {data}  = await axios.post('https://reqres.in/api/register', { email: email, password: password})
        console.log(data);
        const {id,token} = data
        let user={email,password}
        localStorage.setItem("user",JSON.stringify(user))
        let msg = "Regisration Sucessful"
        dispatch({type: 'SETUP_SUCCESS', payload: {msg,user,token} })
      }
      catch(error){
        let msg = "Registration Failed"
        dispatch({type: 'SETUP_USER_ERROR', payload: {msg} })
      }
      
  
  }

    if (isMember){
      try{
        const {data}  = await axios.post('https://reqres.in/api/login', { email: email, password: password})
        console.log(data);
        const {id,token} = data
        let user={email,password,token}
        localStorage.setItem("user",JSON.stringify(user))
        let msg = "Login Sucessful"
        dispatch({type: 'SETUP_SUCCESS', payload: {msg,user,token} })
      }
      catch(error){
        let msg = "Login Failed"
        dispatch({type: 'SETUP_USER_ERROR', payload: {msg} })
      }
      

    }
    dispatch(clearAlert());
  }
};

export const logout = ()=>{
  console.log('hi')
  return  (dispatch) => {
    console.log('hi')
    localStorage.clear();
    dispatch({type:'LOGOUT_USER'})
  }
}
