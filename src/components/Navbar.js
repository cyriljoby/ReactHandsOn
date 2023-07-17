import { NavLink } from 'react-router-dom'
import links from '../utils/links';
const Navbar = () => {
  return(
    
    <aside class="content-wrapper__navigation">
                <div class="navigation-block">
                    <ul>
                        {links.map((link)=>{
                            return(
                            <li>
                            <NavLink
                                to={link.path}
                              >
                                {link.text}
                              </NavLink>
                              </li>
                            )
                        })}
                    </ul>
                </div>
    </aside>
  )
};

export default Navbar;
