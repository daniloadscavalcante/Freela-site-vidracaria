import {NavLink} from 'react-router-dom'
export default function LinkMenu(props){
    return (
        <li><NavLink to={props.target}>{props.text}</NavLink></li>
    )
}