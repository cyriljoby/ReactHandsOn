import styled from "styled-components";

const Wrapper = styled.section`
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
}

.login-box {
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.login-box h1 {
  text-align: center;
  margin-bottom: 20px;
}

.login-box form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-box label {
  margin-bottom: 5px;
}

.login-box input {
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.submit {
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.login-box button:hover {
  background-color: #45a049;
}

    
`;

export default Wrapper;

