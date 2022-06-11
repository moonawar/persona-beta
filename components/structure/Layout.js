import styles from './Layout.module.css'
import NavBar from './navigation/NavBar';

const Layout = (props) => {
    return <main>
        <NavBar/>
        {props.children}
    </main>
}

export default Layout;