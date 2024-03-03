import Link from 'next/link'
import Item from './Item/Item'
import styles from './MenuItems.module.scss'

export default () => {
    return (
        <ul className= {styles.menuItems}>
            <li className= {styles.item}>
              <Link href="/" >
                 <Item title='Collection'/>
              </Link>
            </li>
            <li className= {styles.item}>
              <Link href="/">
                 <Item title='Live Stream'/>
              </Link>
            </li>
            <li className= {styles.item}>
              <Link href="/">
                 <Item title='Event schedule '/>
              </Link>
            </li>

            <li className= {styles.item}>
              <Link href="/">
                 <Item title='Podcast'/>
              </Link>
            </li>



        </ul>
    )
}