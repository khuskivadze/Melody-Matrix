import styles from './Button.module.scss';
import { FaRegCircle } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";


type Props = {
    title : string;
    className? : string;
    disibled?: boolean;
    mode? : 'outline';
    icon? : "on" | "off"
}


export default (props :Props) => {
    const  classes =  [styles.singIn, props.className, styles.button] ;
    const iconClass = [props.className];  
 

    if(props.mode == 'outline'){
        classes.push(styles.outline)
    }

    if(props.icon == 'off') {
        iconClass.push(styles.icon_off )
    }else{
      
        iconClass.push(styles.icon_on)
    }


    return (
        <button 
         className={classes.join(' ').trim()}>
       
         {props.title}
         <MdArrowRightAlt className= {iconClass.join(' ').trim()}/> 
           
       </button>
    )
}