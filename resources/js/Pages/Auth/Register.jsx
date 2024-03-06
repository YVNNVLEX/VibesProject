/*
import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
*/

import React, { useState } from 'react';
import Vibeslogo from '../../icons/vibes';
import blur from '../../../../public/assets/blur.png'
import loginTof from '../../../../public/assets/loginTof.png'

import {useForm } from '@inertiajs/react';
import { useEffect } from 'react';
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setData(values => ({
            ...values,
            [key]: value,
        }))
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


                        <form className="ConForm" onSubmit={submit}>
                            <div className="namediv">
                                <label htmlFor="name">Non d'utilisateur</label>
                                <input type='text' id="name" values={data.name} onChange={handleChange} />
                            </div>
                            <div className="numdiv">
                                <label htmlFor="email">Adresse Email</label>
                                <input type='mail' id="email" values={data.email} onChange={handleChange} />
                            </div>
                            
                            <div className="passwdiv">
                                <label htmlFor="password">Mot de passe</label>
                                <input id="password" values={data.password} onChange={handleChange} type="password"/>         
                            </div>
                            <div className="passwdiv">
                                <label htmlFor="password_confirmation">Confirmer mot de passe</label>
                                <input id="password_confirmation" values={data.password_confirmation} onChange={handleChange} type="password"/>         
                            </div>
                            <input type="submit" className="subscribe" value={"S'inscrire"}/>
                            <p>J'ai un compte</p>
                        </form>



                    </div>
                </div>
           </div>
        </>
    )
}