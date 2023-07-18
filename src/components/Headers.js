import { Link } from "react-router-dom";
import mail from "../assets/mail-logo.png"
import profile from "../assets/profile-image.png"
import { logout } from "../redux/actions";
import { connect } from "react-redux";

const Header = ({ logout }) => {
    const remove = () => {
        logout();
    };

    return (
        <header className="main-header">
            <div className="main-header__logo">
                <img src={mail} alt="factweavers" />
            </div>
            <div className="main-header__signout">
                <a>
                    <span className="image">
                        <img src={profile} alt="imager" />
                    </span>
                    <Link onClick={remove} to="/logout">Logout</Link>
                </a>
            </div>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(null, mapDispatchToProps)(Header);
