import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import Vibeslogo from '../icons/vibes';
import blur from '../../../public/assets/blur.png'
import loginTof from '../../../public/assets/loginTof.png'
const SignUp = ()=>{
    const [values, setValues] = useState({
        phoneNumber: "",
        password: "",
      })
    
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
      }
    return(
        <>
           <div className="blur">
                <img src={blur} className='blur1'/>
                <img src={blur} className='blur2'/>
           </div>
           <div className="container">
                <div className="logo">
                    <Link href="/">
                        <Vibeslogo />
                    </Link>
                </div>
                <div className="forms">
                    <img src={loginTof} alt='women who listen music' className="loginTof"/>
                    <div className="form">
                        <h1>Connexion</h1>
                        <p> <span>Salut 👋🏾</span> <br />
                        Veuillez entrez vos informations confidentielles</p>
                        <form className="ConForm">
                            <div className="numdiv">
                                <label htmlFor="phoneNum">Numéro de téléphone</label>
                                <input id="phoneNum" values={values.phoneNumber} onChange={handleChange} pattern="" />
                            </div>
                            <div className="passwdiv">
                                <label htmlFor="password">Mot de passe</label>
                                <input id="password" values={values.password} onChange={handleChange} type="password"/>         
                            </div>
                            <p>Mot de passe oublié ?</p>
                            <button type="submit" className="subscribe">Connexion</button>
                            <Link href="/SignIn" method="get"> <p>Pas encore de compte?</p> </Link>
                        </form>
                    </div>
                </div>
           </div>
        </>
    )
}
export default SignUp