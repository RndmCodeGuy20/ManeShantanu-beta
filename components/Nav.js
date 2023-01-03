import navStyles from '../styles/Nav.module.css';
import homeStyles from "../styles/Home.module.css";


const Nav = () => {
    return (
        <div>
            <div className={navStyles.navbar}>
                <div className={navStyles.navname}>
                    <div className={navStyles.name}> Shantanu Mane</div>
                </div>
                <div className={navStyles.navcontents}>
                    <div className="know-me">know me</div>
                    <div className="clicks">my clicks</div>
                    <div className="contacts">Contact</div>
                </div>
            </div>
        </div>
    );
}

export default Nav