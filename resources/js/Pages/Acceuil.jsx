import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import Vibeslogo from '../icons/vibes';
import Griffes from '../icons/griffes';
import Card from "../components/card";
import coverImage from '../../../public/assets/coverpage.png';
const Acceuil = () => {
    return (
        <>
            <header className='header'>
                < Vibeslogo/>
                <ul>
                    <li> <Link href="/SignUp">Connexion</Link> </li>
                    <li>Essayer <br /> Gratuitement</li>
                </ul>
            </header>
            <body>
                <div className='title'>
                    <h1>
                        Vivez <br />
                        UNE EXPERIENCE <br />
                        HORS DU COMMUN <br /> 
                    </h1>
                    <p className='subtitle'>avec <span className='str'>VIBES</span> entrer dans une nouvelle ère musicale </p>
                    <button className='subscribe'>Essayer Gratuitement</button>
                </div>
                <div className="cover">
                    <img src={coverImage} alt='photo de couverture'/>
                </div>
                <div>
                    <div className="offers">
                    <div className="g1">
                        <Griffes />
                    </div>
                    <div className="g2">
                        <Griffes/>
                    </div>
                        <h1>NOS OFFRES</h1>
                        <p>avec l'offre <span className='str'> PREMIUM<sup>*</sup> </span> du téléchargement illimité et de la création de vos playlists </p>
                    </div>
                    <div className='cards'>
                        <Card title="FREEMIUM" p1="- Lecture de piste en aléatoire"
                        buttonTitle="Commencer"
                        />
                        <Card title="PREMIUM" p1="- Lecture de piste comme vous le souhaitez"
                        p2="- Ajout de piste en aléatoire" p3="- Creation de playlist"
                        buttonTitle="S'inscrire"
                        />
                    </div>
                </div>
            </body>
        </>
    )
}

export default Acceuil;