import { Link } from "react-router-dom";
const LoggedOut = () => {
  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "blue",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Thank You For Visiting Our Site</h1>
      <Link to="/register" style={linkStyle}>
        Go Back To Register
      </Link>
    </div>
  );
};

export default LoggedOut;
