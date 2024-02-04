import React, { useState } from 'react';
import Vibeslogo from '../icons/vibes';
import blur from '../../../public/assets/blur.png'
import loginTof from '../../../public/assets/loginTof.png'
const SignIn = ()=>{
    const [values, setValues] = useState({
        nomUser:"",
        prenomUser:"",
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
                    <Vibeslogo />
                </div>
                <div className="forms">
                    <img src={loginTof} alt='women who listen music' className="loginTof"/>
                    <div className="form">
                        <h1>Inscription</h1>
                        <p> <span>Salut 👋🏾</span> <br />
                        Veuillez entrez vos informations pour bénéficier du premium</p>
                        <form className="ConForm">
                            <div className="namediv">
                                <label htmlFor="phoneNum">Numéro de téléphone</label>
                                <input id="phoneNum" values={values.phoneNumber} onChange={handleChange} pattern="" />
                            </div>
                            <div className="numdiv">
                                <label htmlFor="phoneNum">Numéro de téléphone</label>
                                <input id="phoneNum" values={values.phoneNumber} onChange={handleChange} pattern="" />
                            </div>
                            
                            <div className="passwdiv">
                                <label htmlFor="password">Mot de passe</label>
                                <input id="password" values={values.password} onChange={handleChange} type="password"/>         
                            </div>
                            <button type="submit" className="subscribe">S'inscrire</button>
                            <p>J'ai un compte</p>
                        </form>
                    </div>
                </div>
           </div>
        </>
    )
}
export default SignIn