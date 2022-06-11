import styles from './NavItem.module.css'
import Link from 'next/link'

const NavItem = (props) => {
    return <Link href={props.link}>
        <a className={styles.navItem}>{props.children}</a>
    </Link>
}

export default NavItem