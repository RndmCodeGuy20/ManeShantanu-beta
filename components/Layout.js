import layoutStyles from '../styles/Layout.module.css';
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            <div className={layoutStyles.container}>
                {children}
            </div>
        </>
    );
}

export default Layout;