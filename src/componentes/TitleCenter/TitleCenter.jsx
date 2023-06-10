import styles from './TitleCenter.module.css'
export default function TextCenter(props){
    return(
        <h2 className={`${styles.center} ${styles[props.customClass]}`}>{props.titulo}</h2>
    )
}