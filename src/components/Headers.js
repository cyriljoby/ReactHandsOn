import { Link } from "react-router-dom";
import mail from "/Users/cyriljoby/ReactDay3-4-1/src/assets/mail-logo.png"
import profile from "/Users/cyriljoby/ReactDay3-4-1/src/assets/profile-image.png"
import { logout } from "../redux/actions";
import { connect } from "react-redux";

const Header = ({ logout }) => {
    const remove = () => {
        console.log('hi');
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
                    <Link onClick={remove} to="/">Logout</Link>
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
