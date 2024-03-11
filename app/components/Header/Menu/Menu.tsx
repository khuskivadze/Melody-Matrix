import Link from 'next/link'
import Logo from '../Logo/Logo'
import MenuItems from '../MeunItems/MenuItems'
import Singin from '../SingIn/Singin'
import styles from './Menu.module.scss'

export default () => {
    return (
        <section className= {styles.menu}>
            <Logo/>
            <MenuItems/>
            <Link href="/">
                  <Singin/>
            </Link>

           
        </section>
    )
}