import styles from './Item.module.scss'


type  Props  = {
    title : string,
    
}

export default (props : Props) => {



    return (
        <>            
           {props.title}
          
        </>
    )
}