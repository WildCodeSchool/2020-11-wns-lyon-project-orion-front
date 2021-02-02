import mutation from '../../core/apollo/mutations/sign-in.mutation';
import {UPDATE_AUTH} from '../../core/store/auth/auth.actions';
import {UPDATE_USER} from '../../core/store/user/user.actions';
import {useApolloClient} from '@apollo/client';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import React, {useState} from 'react';

const SignIn = ({viewHandler}) => {

    const dispatch = useDispatch()

    const {register, handleSubmit, formState, errors} = useForm();
    // eslint-disable-next-line
    const [show, setShow] = useState(true);
    const [error, setError] = useState('');
    const {isSubmitting} = formState;
    const client = useApolloClient();

    const onSubmit = async input => {
        try {
            const {data} = await client.mutate({
                variables: {input},
                mutation,
            });
            const {signIn: {user, ...auth}} = data;
            dispatch({type: UPDATE_AUTH, payload: {auth}});
            dispatch({type: UPDATE_USER, payload: {user}});
        } catch (e) {
            setError('Adresse email ou mot de passe invalide.');
        }
    }

    return <div className="flex items-center justify-between flex-col">

        <div className="w-full p-8 relative flex items-center justify-center">
            <span className="absolute left-0 material-icons text-gray-900 ml-12 cursor-pointer"
                  onClick={() => viewHandler(null)}>arrow_back</span>
            <span className="text-2xl font-semibold">Me connecter</span>
        </div>

        <div className="w-full px-8 max-w-md flex items-center justify-between flex-col flex-grow">

            {error ? <div className="alert alert-danger">{error}</div> : <div/>}

            <form className="w-full grid" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" className="mb-4 input" placeholder="Adresse email"
                       name="email" ref={register({required: true})}/>
                {errors.email && <span>{errors.email.message}</span>}

                <input type={show ? 'password' : 'text'} className="mb-4 input" placeholder="Mot de passe"
                       name="password" ref={register({required: true})}/>
                {errors.password && <span>{errors.password.message}</span>}

                <label className="mt-4 mb-8 inline-flex items-center">
                    <input type="checkbox" className="checkbox h-5 w-5 text-gray-600 rounded-sm"
                           name="remember" ref={register({required: true})} defaultChecked={true}/>
                    <span className="ml-2 text-gray-700">Se souvenir de moi</span>
                </label>

                <button className="btn btn-primary" disabled={isSubmitting}>Valider</button>
            </form>
        </div>

        <div className="w-full p-8 mt-20 flex items-center justify-center">
            <span className="text-gray-500" onClick={() => viewHandler('forget')}>Mot de passe oublié ?</span>
        </div>
    </div>;
}

export default SignIn;
