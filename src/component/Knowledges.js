import React from 'react'
import Hobies from './Competences/Hobies'
import OtherSkils from './Competences/OtherSkils'
import Langages from './Competences/Langages'

function Knowledges() {
  return (
    <div>Knowledges
      <Hobies/>
      <OtherSkils/>
      <Langages/>
   <div> <h1>competence technique:</h1>
   <ol>
    <li>Les langage de programation:</li>
    <ul>
      <li>Maitrise parfaite du langage java sur plusieurs framework(Netbens,eclipse,intilij,springboots)</li>
      <li>Maitrise parfaite du langage C# </li>
      <li>Maitrise parfaite du langage javascript</li>
      <li>Maitrise parfaite du langage de balisage HTML, et de style CSS </li>
    </ul>
    <li>Les bases de donnees </li>
    <ul>
      <li>Maitrise parfaite du SGBD mysql et sql server</li>
      <li>Maitrise parfaite du SGBD cassandra </li>
      <li>Maitrise parfaite du SGBD Mongo db</li>
    </ul>
    <li>Analyse et modelisation:</li>
    <ul>
      <li>Maitrise de  l'UML</li>
      <li>Maitrise de merise pour les data</li>
    </ul>
   </ol>
     </div>

    </div>
    
  )
}

export default Knowledges