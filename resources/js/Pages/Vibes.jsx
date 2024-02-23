import {react,useState} from 'react'
import Vibeslogo from '../icons/vibes';
import  SearchIcons  from "../icons/SearchIcons.jsx";
import  UserIcons  from "../icons/user";
import  BellIcon from "../icons/bell";
import HomeIcons from '../icons/home'
import PlaylistIcons from '../icons/playlist.jsx'
import FavoriteIcons from '../icons/Favorite.jsx'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Vibes = ({auth})=>{
    const [search, setSearch] =useState("") 
    
      function handleChange(e) {
        const search = e.target.search
        setSearch(search)
        console.log(e.target.search)
      }
    
      function handleSubmit(e) {
        e.preventDefault()
      }
    return(
        <>
            <div className="top">
                <div className="logo">
                    <Vibeslogo />
                </div>
                <div className="search">
                    <input type="text" value={search} onChange={handleChange} placeholder="Entrez la musique, l'album ou l'artiste..."/>
                    <div className="contSearch">
                        <SearchIcons />
                    </div>
                </div>
                <div>
                    <AuthenticatedLayout user={auth.user}/>
                </div>
                <div className="end_top_icons">
                    <div className="cont_usericons">
                        <UserIcons />
                    </div>
                    <div className="cont_signalicons">
                        <BellIcon />
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="left">
                    <div className="cont">
                        <HomeIcons />
                        <span>ACCUEIL</span>
                    </div>
                    <div className="cont">
                        <PlaylistIcons />
                        <span>PLAYLIST</span>
                    </div>
                    <div className="cont">
                        <FavoriteIcons />
                        <span>FAVORIS</span>
                    </div>
                </div>
                <div className="right">
                        
                </div>
            </div>
            <div className="lecture">
                
            </div>
        </>
    )
}
export default Vibes;