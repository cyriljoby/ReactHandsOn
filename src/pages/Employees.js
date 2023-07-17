import profile from "/Users/cyriljoby/ReactDay3-4-1/src/assets/profile-image.png"
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
const Employees = ({ employees, fetchData }) => {
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    console.log(employees);
  
    return (
      <div className="outer-wrapper">
        <main className="content-wrapper">
          <section className="content-wrapper__body">
            <div className="content-block">
              <section className="card">
                <div className="card-header">
                  {employees && employees.title && employees.content ? (
                    <div>
                      <h3>{employees.title}</h3>
                    </div>
                  ) : null}
                </div>
                <div className="card-body">
                  <ul className="grid-wrapper">
                    <li className="grid-block">
                      <div className="grid-block__item">Name</div>
                      <div className="grid-block__item">Employees ID</div>
                      <div className="grid-block__item">Email ID</div>
                      <div className="grid-block__item">Mobile</div>
                      <div className="grid-block__item">Joining Date</div>
                      <div className="grid-block__item">Role</div>
                      <div className="grid-block__item">Action</div>
                    </li>
  
                    {employees.content.map((content) => {
                      console.log(content)
                      return (
                        <li className="grid-block">
                          <div className="grid-block__item">
                            <div className="porofile-block">
                              <div className="porofile-block__image">
                                <span>
                                  <img src={profile} alt="imager" />
                                </span>
                              </div>
                              <div className="porofile-block__text">
                                <h3>{content.name}</h3>
                                <p>{content.role}</p>
                              </div>
                            </div>
                          </div>
                          <div className="grid-block__item">{content.id}</div>
                          <div className="grid-block__item">{content.email}</div>
                          <div className="grid-block__item">{content.mobile}</div>
                          <div className="grid-block__item">{content.joined}</div>
                          <div className="grid-block__item">{content.role}</div>
                          <div className="grid-block__item">
                            <i className="fas fa-ellipsis-v"></i>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="card-footer">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    console.log(state.root.data);
    return {
      employees: state.root.data.employees,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: () => dispatch(fetchData()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Employees);
  