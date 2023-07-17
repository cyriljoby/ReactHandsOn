import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/Wrappers/EmployeeDetails';

const EmployeeDetails = () => {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees);

  // Find the employee with the matching ID
  const employee = employees.find((employee) => employee.id === parseInt(id));

  if (!employee) {
    return <p>No employee found.</p>;
  }

  return (
    <Wrapper>
    <div className="employee-details">
      {employee ? (
        <div className="employee-card">
          <h1 className="employee-name">{employee.first_name} {employee.last_name}</h1>
          <img className="employee-avatar" src={employee.avatar} alt="Employee Avatar" />
          <p className="employee-id">ID: {employee.id}</p>
          <p className="employee-email">Email: {employee.email}</p>
        </div>
      ) : (
        <p className="error-message">Employee not found</p>
      )}
    </div>
    </Wrapper>
  );
};

export default EmployeeDetails;
