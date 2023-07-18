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
        localStorage.setItem("token",(token))
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
        localStorage.setItem("token",(token))
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

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // If token is not found, handle the error or redirect to login
        console.log('hi')
        dispatch({ type: 'TOKEN_ERROR' });
        return;
      }

      // Set the Authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get('https://reqres.in/api/users', config);
      const employees = response.data.data;
      console.log(employees)

      dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: { employees } });
    } catch (error) {
      // Handle the error if the API request fails
      dispatch({ type: 'FETCH_EMPLOYEES_ERROR', payload: { error } });
    }
  };
};
