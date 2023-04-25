import Link from "next/link"
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className="box-border px-5 py-5 shadow-md">
    <ul className="flex flex-row content-end list-none">
      <li className={styles.item}><Link href='/'>Home</Link></li>
      <li className={styles.item}><Link href='/gallery'>Gallery</Link></li>
      <li className={styles.item}><Link href='/blog'>Blog</Link></li>
    </ul>
  </header>
  )
}
