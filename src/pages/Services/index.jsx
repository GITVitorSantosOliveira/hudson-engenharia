import React from 'react'
import CardServices from '../../Components/CardServices'
import NavBar from '../../Components/NavBar'
import styles from './services.module.scss'
import imageCement from '../../assets/image_cement.png'
import imageTele from '../../assets/image_telecomunicações.png'
import imageQuadra from '../../assets/image_quadra.png'
import imageEdi from '../../assets/image_edificios.png'
import imageEle from '../../assets/image_eletrica.png'
import imageArq from '../../assets/image_arquitetura.png'
import imageSecurity from '../../assets/image_security_service.png'
import imageStreet from '../../assets/image_street.png'
import imageMap from '../../assets/image_map.png'
function Services() {
  return (
    <>
    <div className="w-full h-[100vh] overflow-y-auto">
      <NavBar/>
      <main>
        <section className={styles.sectionServiceContainer}>
          <div>
            <CardServices image={imageCement} textImage='Fabricação de Artefatos de Cimento
para uso na Construção'/>
            <CardServices image={imageTele} textImage='Redes de TeleComunicações'/>
            <CardServices image={imageQuadra} textImage='Construção de instalações esportivas
 e recreativas'/>
          </div>  
          <div>
          <CardServices image={imageEdi} textImage='Construção de Edificíos'/>
            <CardServices image={imageEle} textImage='Instalação Elétrica'/>
            <CardServices image={imageArq} textImage='Serviços de Arquitetura'/>
          </div>
          <div >
          <CardServices image={imageSecurity} textImage='Serviços de Perícia Técnica Relacionados
 à Segurança do Trabalho
'/>
            <CardServices image={imageStreet} textImage='Obras de Urbanização - Ruas,Praças e Calçadas'/>
            <CardServices image={imageMap} textImage='Serviços de Cartografia
 Topografia e Geodésia'/>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}

export default Services