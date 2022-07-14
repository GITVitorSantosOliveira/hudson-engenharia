import React from 'react'
import NavBar from '../../Components/NavBar'
import HudsonProfile from '../../assets/foto_de_perfil_hudson.png'
import CardContact from '../../Components/CardContact'
import EmailIcon from '../../assets/email-icon.svg'
import { WhatsappLogo,EnvelopeOpen, MapPinLine} from "phosphor-react";
import Map2 from '../../assets/map2.png'
import Form from '../../Components/Form'
function Contact() {
  return (
    <>
      <NavBar/>
      <main className=" bg-[#FFCD1B] grid grid-rows-3 grid-flow-col h-[95vh]">
        <div className="row-span-3 px-8">
          <div className=" pt-16 pr-4 flex flex-col items-center content-center">
          <img src={HudsonProfile} className="w-[170px] h-[200px]  border-white border-4 rounded-full" alt="" />
          <span className="font-bold antialiased text-indigo-600 sm:text-[25px]">Hudson  Sousa</span>
          <span className="font-bold antialiased text-white">Engenheiro Civil</span>
          </div>
        </div>
        
        <div className="col-span-2 h-[200px] mr-10 ">
          <div className="w-full flex align-center justify-end 2xl:justify-center 2xl:pl-[500px] pr-6 pt-4 ">
              
              <div className="w-[150px] h-[150px] bg-white rounded mr-10 2xl:w-[200px] 2xl:h-[250px] hover:cursor-pointer">
                <div className='flex flex-col items-center content-center py-3'>
                <EnvelopeOpen size={40} weight='light' />
                <span className="text-center font-bold mt-2">Email</span>
                <strong  className=' break-all sm:text-[14px] sm:text-center 2xl:text-lg px-5 mt-2 font-bold text-gray-500'>ruyslene_angela@hotmail.com</strong>
                </div>
              </div> 

              <div className="w-[150px] h-[150px] bg-white rounded mr-10 2xl:w-[200px] 2xl:h-[250px]">
                <div className='flex flex-col items-center content-center py-3'>
                <WhatsappLogo size={40} weight='light'/>
                <span className="text-center font-bold mt-2">WhatsApp</span>
                <a href='https://wa.me/559991271135' className=' break-all sm:text-[16px] sm:text-center 2xl:text-lg px-5 mt-2 font-bold text-gray-500'>(99) 9127-1135</a>
                </div>
              </div> 

              <div className="w-[150px] h-[150px] bg-white rounded mr-10 2xl:w-[200px] 2xl:h-[250px]">
                <div className='flex flex-col items-center content-center py-3'>
                <MapPinLine size={40} weight='light' />
                <span className="text-center font-bold mt-2">Endereço</span>
                <a href='https://www.google.com/maps/place/R.+Minas+Gerais,+757+-+Juçara,+Imperatriz+-+MA,+65903-020/@-5.5195927,-47.4779551,17z/data=!3m1!4b1!4m5!3m4!1s0x92c55fbb28c74e43:0xf8203dcf90b5c237!8m2!3d-5.519598!4d-47.475761' className=' break-all sm:text-[12px]  sm:text-center 2xl:text-[16px] px-3 mt-2 font-bold text-gray-500'>Rua Minas Gerais 757 Bairro: CENTRO</a>
                </div>
              </div>

          {/* <CardContact className="sm:text-[14px]" icon={<EnvelopeOpen size={40} weight='light' />} title="Email" content={`ruyslene_angela${'\n'}@hotmail.com`} />
           <CardContact icon={<WhatsappLogo size={40} weight='light'/>} title="WhatsApp" content=" (99) 8217-9999" />
          <CardContact icon={<MapPinLine size={40} weight='light' />} title="Endereço" content={`Rua Minas Gerais 757 Bairro: ${'\n'}CENTRO`} /> */}
          </div>
        </div>

        <div className="bg-white row-span-2 col-span-1 relative bottom-[20px] left-[100px] md:h-[350px]  2xl:h-[650px] mm:mt-4">
        <div className="flex items-center justify-end w-full h-full">
            <img src={Map2} alt="" className="w-full h-full" />
        </div>
        </div>

        <div className="bg-[#302D2D] w-[355px] h-[400px]  sm:top-[195px] absolute rounded-[15px]
         2xl:w-[500px] 2xl:h-[65vh] 2xl:left-[450px]  xl:left-[350px] md:top-[300px] md:left-[270px]  
         mm:top-[190px]
         ">
          <Form/>
        </div>
      </main>
      
    </>
  )
}

export default Contact