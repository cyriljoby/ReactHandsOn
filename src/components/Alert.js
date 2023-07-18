import { useSelector } from 'react-redux';
import Wrapper from '../assets/Wrappers/Alert';
const Alert = () => {
  const alertText = useSelector((state) => state.alertText);
  const alertType = useSelector((state) => state.alertType);
  
  return (
    <Wrapper>
    <div className={`alert ${alertType}`}>
      {alertText}
    </div>
    </Wrapper>
  );
};

export default Alert;
