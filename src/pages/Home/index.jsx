
import React from 'react'
import styles from './home.module.scss'

import CardHome from '../../Components/CardHome'
import NavBar from '../../Components/NavBar'
import SlideProfile from '../../Components/SlideProfile'
import SlideText from '../../Components/SlideText'
import imageEdi from '../../assets/image_edificios.png'
import imageEle from '../../assets/image_eletrica.png'
import imageArq from '../../assets/image_arquitetura.png'
import Slider from '../../Components/Slider'
function Home() {
  
  return (
    <>
    <div className="w-full h-[100vh] overflow-y-scroll"> 
      <NavBar/>
      <main >
        <section className={styles.sectionSlideContainer} >
          {/* <SlideText/>
          <SlideProfile/> */}
          <Slider/>
        </section>
        <section className={styles.sectionServicesHomeContainer}>
            <h1 className='sm:mb-8 2xl:mb-12  font-bold sm:text-xl 2xl:text-5xl '>Alguns dos Nossos Serviços</h1>
          <div >
           <CardHome image={imageEdi} textImage='Construção De Edifícios'/> 
           <CardHome image={imageEle} textImage='Instalação E Manutenção Elétrica'/> 
           <CardHome image={imageArq} textImage='Serviços De Arquitetura'/> 
          </div>
        </section>
      </main>

    </div>
    </>
  )
}

export default Home