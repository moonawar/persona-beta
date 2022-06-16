import styles from './Layout.module.css'
import NavBar from './navigation/NavBar';

const Layout = (props) => {
    return <main id='main'> 
        <NavBar/>
        {props.children}
    </main>
}

export default Layout;