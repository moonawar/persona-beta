import styles from './Section.module.css'

const Section = (props) => {
    return <section className={`${styles.section} ${styles.black}`}>
        {props.children}
    </section>
}

export default Section;