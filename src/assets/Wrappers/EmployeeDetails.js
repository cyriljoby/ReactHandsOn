import styled from "styled-components";

const Wrapper = styled.section`
.employee-details {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .employee-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .employee-name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .employee-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .employee-id,
  .employee-email {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .error-message {
    font-size: 18px;
    color: red;
  }
  
    
`;

export default Wrapper;

