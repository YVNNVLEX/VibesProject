import {react,useState} from 'react'
import Vibeslogo from '../icons/vibes';
// import { SearchIcons } from "../icons/search";
// import { UserIcon } from "../icons/user";
// import { SignalIcons } from "../icons/SignalIcons";
const Vibes = ()=>{
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
                    <input type="search" value={search} onChange={handleChange} />
                    <div className="contSearch">
                        {/* <SearchIcons /> */}
                    </div>
                </div>
                <div className="end_top_icons">
                    <div className="cont_usericons">
                        {/* <UserIcon /> */}
                    </div>
                    <div className="cont_signalicons">
                        {/* <SignalIcons /> */}
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="left">
                    
                </div>
                <div className="right">

                </div>
            </div>
        </>
    )
}
export default Vibes;