import styles from './NavItem.module.css'
import Link from 'next/link'

const NavItem = (props) => {
    return <Link href={props.link}>
        <a className={`${styles.navItem} ${styles[`${props.display}`]}`}>{props.children}</a>
    </Link>
}

export default NavItem