import React from 'react'
import imagedev from './Image/Image dev.jpg'
import imagedev2 from './Image/image dev2.jpg'
import cv from './Image/CV youba.docx'
function Home() {
  return (
    <div>
    <div className='divhome'>
      <fieldset>
   <legend className='titlehome'>Presentation: </legend>
   <h1>Amghar Youba</h1>
   <h2> développeur full stuck</h2>
   <a href={cv} target='_blank'>Telecharger cv</a>
   <p> Salut, je suis Amghar Youba nee Le 3 mai 1998 en algerie.
    Je suis un developeur informatique full stuck.
   </p>
   </fieldset>
    </div>
    <img src={imagedev} alt='imagedeveloppeur'></img>
    <img src={imagedev2} alt='imagedeveloppeur'></img>
    <div>
        
    </div>

    </div>
  )
}

export default Home