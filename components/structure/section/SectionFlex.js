import styles from './SectionFlex.module.css'

const SectionFlex = (props) => {
    return <section className={`${styles.section} ${styles[`${props.style}`]}`}>
        {props.children}
    </section>
}

export default SectionFlex;