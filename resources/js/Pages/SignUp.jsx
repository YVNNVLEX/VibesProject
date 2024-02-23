import React,{useEffect}from 'react';
import { Link ,useForm} from '@inertiajs/inertia-react';
import Checkbox from '@/Components/Checkbox';
import Vibeslogo from '../icons/vibes';
import blur from '../../../public/assets/blur.png'
import loginTof from '../../../public/assets/loginTof.png'



const SignUp = ()=>{

      const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };




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
                <div className="forms" onSubmit={submit}>
                    <img src={loginTof} alt='women who listen music' className="loginTof"/>
                    <div className="form">
                        <h1>Connexion</h1>
                        <p> <span>Salut 👋🏾</span> <br />
                        Veuillez entrez vos informations confidentielles</p>


                        <form className="ConForm">
                            <div className="numdiv">
                                <label htmlFor="email">Email</label>
                                <input id="email" value={data.email} onChange={(e)=>setData('email',e.target.value)} type='email'/>
                            </div>

                            <div className="passwdiv">
                                <label htmlFor="password">Mot de passe</label>
                                <input id="password" value={data.password} onChange={(e)=>setData('password',e.target.value)} type="password"/>         
                            </div>

                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-gray-600">Remember me</span>
                            </label>

                            <p>Mot de passe oublié ?</p>
                            <input type="submit" className="subscribe" value={"Connexion"}/>
                            <Link href="/signin " method="get"> <p>Pas encore de compte?</p> </Link>

                        </form>


                    </div>
                </div>
           </div>
        </>
    )
}
export default SignUp