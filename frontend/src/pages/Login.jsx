// src/components/Login.jsx

// Importações necessárias
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

// Componente Login
const Login = () => {
    // Inicializa o hook useForm
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // Estado para exibir ou esconder a senha
    const [showPass, setShowPass] = useState(false);
    // Estado para controlar a animação
    const [isAnimate, setIsAnimate] = useState(false);
    // Acessa o estado darkMode e a função setDarkMode do contexto
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    // Hook de navegação do React Router
    const navigate = useNavigate();

    // Função para buscar o usuário ao fazer login
    const findUser = async (data) => {
        try {
            const response = await api.post('/login', {
                email: data.email,
                password: data.password
            });
            console.log('Login bem-sucedido:', response.data);
            reset(); // Reseta o formulário
            navigate('/'); // Redireciona para a página inicial
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    }

    // Função para iniciar a animação e redirecionar para a página de registro
    const animateAndRedirect = () => {
        setIsAnimate(true);
        setTimeout(() => {
            navigate('/register');
        }, 1600); // Tempo de duração da animação (em ms)
    }

    // Função para alternar a exibição da senha
    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    return (
        <div className={`${darkMode && 'dark'}`}>
            <motion.div
                className="w-screen h-screen flex flex-col  bg-neutral-100 dark:bg-neutral-600 gap"
            >
                {/* Botão para alternar entre LightMode e DarkMode */}
                <button
                    className='relative md:left-3/4 left-2/4 top-10 w-max bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 py-2 px-10 rounded-lg border border-neutral-700'
                    onClick={() => setDarkMode(!darkMode)}>
                    {`${darkMode ? 'LightMode' : 'DarkMode'}`}
                </button>

                <div className="w-4/5 h-4/5 m-auto flex flex-col md:flex-row rounded-3xl ">
                    <motion.div
                        className={`${isAnimate ? 'h-full w-2/5 bg-primary  dark:bg-neutral-700 rounded-r-3xl flex flex-col ' : 'h-full md:w-2/5   bg-primary dark:bg-neutral-700 md:rounded-l-3xl rounded-t-3xl md:rounded-r-none flex flex-col'} `}
                        animate={isAnimate ? { x: 1000 } : { x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="m-auto items-center flex flex-col gap-2">
                            <h1 className="md:text-4xl text-2xl text-white font-normal">Bem vindo de volta!</h1>
                            <p className="text-white font-extralight w-2/4">
                                Para continuar conectado conosco, faça login com suas informações pessoais
                            </p>
                            <button
                                className="border border-white dark:bg-white dark:text-neutral-800 text-white py-2 px-20 rounded-2xl mt-2 hover:bg-secondary"
                                onClick={animateAndRedirect}
                            >
                                Registrar
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${isAnimate ? 'h-full w-3/5 bg-neutral-50 dark:bg-neutral-800 rounded-l-3xl flex flex-col' : 'h-full md:w-3/5 w-full  bg-neutral-50 dark:bg-neutral-800 md:rounded-r-3xl rounded-b-3xl md:rounded-l-none flex flex-col'}`}
                        animate={isAnimate ? { x: -700 } : { x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="m-auto flex flex-col gap-4">
                            <h1 className="md:text-5xl text-3xl ml-28 mt-6 md:ml-0 md:mt-0 text-primary h-14 font-medium items-center m-auto md:mb-10 dark:text-neutral-50">
                                Logar
                            </h1>
                            <form className="flex flex-col gap-5" onSubmit={handleSubmit(findUser)}>
                                <div className="flex">
                                    <EnvelopeIcon className="h-14 p-4 w-14 text-gray-500 bg-gray-200" />
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="md:w-96 w-full bg-gray-200 outline-none"
                                        {...register('email', { required: true })}
                                    />
                                </div>
                                {errors?.email?.type === 'required' && (
                                    <p className="text-red-600 ml-2 mt-2 font-medium relative -top-5">
                                        O email é obrigatório
                                    </p>
                                )}

                                <div className="flex">
                                    <LockClosedIcon className="h-14 w-14 p-4 bg-gray-200 text-gray-500" />
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        placeholder="Senha"
                                        className="md:w-80 bg-gray-200 outline-none"
                                        {...register('password', { required: true })}
                                    />
                                    {showPass ? <EyeSlashIcon className="h-14 w-16 p-4 bg-gray-200 text-gray-500 cursor-pointer"
                                        onClick={toggleShowPass} /> : <EyeIcon className="h-14 w-16 p-4 bg-gray-200 text-gray-500 cursor-pointer"
                                            onClick={toggleShowPass} />}
                                </div>
                                {errors?.password?.type === 'required' && (
                                    <p className="text-red-600 ml-2 mt-2 font-medium relative -top-5">
                                        A senha é obrigatória
                                    </p>
                                )}

                                <button className="bg-primary dark:bg-neutral-50 text-white dark:text-neutral-800 py-3 rounded-2xl w-60 ml-10 md:w-full md:ml-0">
                                    Logar
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Login;
