import React from 'react'
import imglocation from './Image/location.png'
import imagecomplexe from './Image/complexe.png'

function Project() {
  return (
    <div><h1>Projet</h1>
    <p>Les projets que j'ai réalisés pendant ma formation académique et professionnelle.</p>
    <div>
      <h2>Création d'une application de bureau dédiée à la gestion d'une agence de location de voitures.</h2>
      <p>Description:
        <div>Un logiciele developper a base du langage java et mysqlpour les donnees,permet de gerer une agence de location de voiture.Les pricipales 
          fonctionalites:
          <ul>
            <li>Gestion des vehicule</li>
            <li>Gestion des clients</li>
            <li>Gestion facture  </li>
            <li>Gestion des reclamations</li>
          </ul>
        </div>
      <img src={imglocation} alt='Image de presentation'></img>
      </p>
      <div>
        <h2>Realisation d'une platforme de gestion d'un complexe sportif</h2>
        <p>description:
          <div>Une platforme web qui permet de gerer un compleexe sportif,les technologie utilise sont node js et sql server.
            Les principales fonctionalitees sont:
            <ul>
              <li>Gestion des sports</li>
              <li>Gestion des abonnees  </li>
              <li>Gestion des terrains </li>
            </ul>
          </div>
          <img src={imagecomplexe}alt='Page acceuil'></img>
        </p>
      </div>
      <div>
        <h2>Realisation d'une application de gestion d'une ecole</h2>
        <p>description:
          <div>une application de suivi d'une ecole developer en C#.
            les pricipale fonctionalites:
            <ul>
              <li>Gestion des etudiants</li>
              <li>Gestion des cours</li>
              <li>Gestion des notes</li>
            </ul>
             </div>
        </p>
      </div>
    </div>
    
    </div>
  )
}

export default Project