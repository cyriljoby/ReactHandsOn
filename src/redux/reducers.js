// reducers.js
const initialState = {
    error: null,
    showAlert:false,
    alertText:"",
    token:null,
    alertType:null,
    user:null,
    employees:null
  };
  
  const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
      
      case 'FETCH_DATA_SUCCESS':
        console.log(action.payload)
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case 'FETCH_DATA_ERROR':
        return {
          ...state,
          data: {},
          error: action.payload,
        };
      case 'SETUP_SUCCESS':
        console.log(action.payload)
        return{
          ...state,
          showAlert:true,
          alertText:action.payload.msg,
          token:action.payload.token,
          alertType:"success",
          user:action.payload.user
        }
      case 'CLEAR_ALERT':
        return{
          ...state,
          showAlert: false,
          alertType: "",
          alertText: "",
        }
      case 'SETUP_USER_ERROR':
        console.log('hi')
        return{
          ...state,
          showAlert: true,
          alertType: "danger",
          alertText: action.payload.msg,
        }
      case 'LOGOUT_USER':
        return {
          ...initialState,
          user: null,
          token: null,
        };
      case 'FETCH_EMPLOYEES_SUCCESS':
        return{
          ...state,
          employees:action.payload.employees
        }

        
      default:
        return state;
    }
  };
  
  export default rootReducer;
  