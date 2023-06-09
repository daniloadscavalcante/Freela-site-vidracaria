import styles from './Container.module.css'
export default function Container(props){
    return(
        <section className={`${styles.center} ${styles[props.customClass]}`}>{props.children}</section>
    )
}