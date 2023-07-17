import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../redux/actions";
import Wrapper from "../assets/Wrappers/Employees";
import { Link } from "react-router-dom";

const Employees = ({ employees, fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <Wrapper>
      <div className="employees-container">
        <h1>Employees List</h1>
        {employees?.map((employee) => (
          <div key={employee.id}>
            <img src={employee.avatar} alt="Employee Avatar" />
            <br />
            <Link to={`/details/${employee.id}`} className="employee-item">
              {employee.first_name} {employee.last_name}
            </Link>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
