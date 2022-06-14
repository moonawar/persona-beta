import styles from './SectionFixed.module.css'

const SectionFixed = (props) => {
    return <section className={`${styles.section} ${styles[`${props.style}`]}`}>
        {props.children}
    </section>
}

export default SectionFixed;