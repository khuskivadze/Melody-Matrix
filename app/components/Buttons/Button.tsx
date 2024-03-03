import styles from './Button.module.scss';


type Props = {
    title : string;
    className? : string;
    disibled?: boolean;
    mode? : 'outline';
    icon? : "on" | "off"
}


export default (props :Props) => {
    const  classes =  [styles.singIn, props.className, styles.button] ;
 

    if(props.mode == 'outline'){
        classes.push(styles.outline)
    }


    return (
        <button 
         className={classes.join(' ').trim()}>
         {props.title}
           
       </button>
    )
}