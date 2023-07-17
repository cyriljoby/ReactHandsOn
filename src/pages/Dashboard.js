import { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchData } from "../redux/actions";

const Dashboard = ({ dashboard, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {dashboard && dashboard.title && dashboard.content ? (
        <div>
          <h1>{dashboard.title}</h1>
          <p>{dashboard.content}</p>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.root.data.dashboard
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
