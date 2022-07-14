import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import logoEngenharia from '../../assets/logo_engenharia.png'

export default function NavBar() {
  return (
    <>
      <nav className={styles.container}>

        <div className={styles.logoContainer}>
          {/* <img src={logoEngenharia} alt='Logo Hudson Sousa Engenharia' /> */}
          <h2 className="pl-8"> Hudson Sousa Engenharia</h2>
        </div>

          <div className={styles.navItemsContainer}>
            <Link className={styles.Link} to="/" >Home</Link>
            <Link className={styles.Link} to="/services" >Serviços</Link>
            {/* <Link className={styles.Link} to="/projects" >Projetos</Link> */}
            <Link className={styles.Link} to="/contact" >Contato</Link>
          </div>

      </nav>
    </>
  )
}
