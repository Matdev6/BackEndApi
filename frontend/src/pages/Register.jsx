// src/components/Signin.jsx

// Importações necessárias para o componente
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { DarkModeContext } from '../context/DarkModeContext';

// Componente principal para o formulário de login e registro
const Register = () => {
    // Configurações do formulário usando react-hook-form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Estado para alternar a visibilidade da senha
    const [showPass, setShowPass] = useState(false);

    // Estado para controlar a animação de transição
    const [isAnimate, setIsAnimate] = useState(false);

    // Acesso ao contexto de modo escuro (DarkMode)
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    // Hook para navegação entre rotas
    const navigate = useNavigate();

    // Função para criar um novo usuário através de uma requisição POST à API
    const createUser = async (data) => {
        try {
            const response = await api.post('/user', {
                email: data.email,
                password: data.password
            });
            console.log("Usuário criado com sucesso:", response.data);
            reset(); // Reseta os campos do formulário
        } catch (error) {
            console.error("Falha ao criar usuário:", error);
        }
    };

    // Função chamada no envio do formulário
    const onSubmit = (data) => {
        createUser(data); // Chama a função para criar o usuário
    };

    // Alterna entre mostrar ou ocultar a senha
    const toggleShowPass = () => {
        setShowPass(!showPass);
    };

    // Controla a animação e redireciona para a página de login
    const animateAndRedirect = () => {
        setIsAnimate(true); // Inicia a animação
        setTimeout(() => {
            navigate('/login'); // Redireciona após a animação
        }, 1600); // Duração em milissegundos
    };

    return (
        // Define o tema baseado no estado do DarkMode
        <div className={`${darkMode && 'dark'}`}>
            <motion.div
                className="w-screen h-screen flex flex-col bg-neutral-100 dark:bg-neutral-600"
            >
                {/* Botão para alternar entre LightMode e DarkMode */}
                <button
                    className="relative left-3/4 top-10 w-max bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 py-2 px-10 rounded-lg border border-neutral-700"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {`${darkMode ? 'LightMode' : 'DarkMode'}`}
                </button>

                <div className="w-4/5 h-4/5 m-auto flex rounded-3xl">
                    {/* Seção com animação para login */}
                    <motion.div
                        className={`${isAnimate ? 'h-full w-3/5 bg-neutral-50 dark:bg-neutral-800 rounded-r-3xl flex flex-col' : 'h-full w-3/5 bg-neutral-50 dark:bg-neutral-800 rounded-l-3xl flex flex-col'} `}
                        animate={isAnimate ? { x: 600 } : { x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="m-auto items-center flex flex-col gap-2">
                            <h1 className="text-4xl text-primary dark:text-neutral-50 font-normal">Bem vindo de volta!</h1>
                            <p className="text-primary dark:text-neutral-50 font-extralight w-2/4">
                                Para continuar conectado conosco, faça login com suas informações pessoais
                            </p>
                            <button
                                className="border border-primary bg-primary text-neutral-50 dark:bg-white dark:text-neutral-800 py-2 px-20 rounded-2xl mt-2 hover:bg-secondary"
                                onClick={animateAndRedirect}
                            >
                                Logar
                            </button>
                        </div>
                    </motion.div>

                    {/* Seção com formulário para registro */}
                    <motion.div
                        className={`${isAnimate ? 'h-full w-2/5 bg-primary dark:bg-neutral-700 rounded-l-3xl flex flex-col' : 'h-full w-2/5 bg-primary dark:bg-neutral-700 rounded-r-3xl flex flex-col'}`}
                        animate={isAnimate ? { x: -1020 } : { x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="m-auto flex flex-col gap-4">
                            <h1 className="text-5xl h-14 text-neutral-50 font-medium items-center m-auto mb-10 dark:text-neutral-50">
                                Registrar
                            </h1>
                            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                                {/* Campo de e-mail */}
                                <div className="flex">
                                    <EnvelopeIcon className="h-14 p-4 w-14 text-gray-500 bg-gray-200" />
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="w-96 bg-gray-200 outline-none"
                                        {...register('email', { required: true })}
                                    />
                                </div>
                                {errors?.email?.type === 'required' && (
                                    <p className="text-red-600 ml-2 mt-2 font-medium relative -top-5">
                                        O email é obrigatório
                                    </p>
                                )}

                                {/* Campo de senha */}
                                <div className="flex">
                                    <LockClosedIcon className="h-14 w-14 p-4 bg-gray-200 text-gray-500" />
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        placeholder="Senha"
                                        className="w-80 bg-gray-200 outline-none"
                                        {...register('password', { required: true })}
                                    />
                                    {/* Ícones para alternar visibilidade da senha */}
                                    {showPass ? (
                                        <EyeSlashIcon
                                            className="h-14 w-16 p-4 bg-gray-200 text-gray-500 cursor-pointer"
                                            onClick={toggleShowPass}
                                        />
                                    ) : (
                                        <EyeIcon
                                            className="h-14 w-16 p-4 bg-gray-200 text-gray-500 cursor-pointer"
                                            onClick={toggleShowPass}
                                        />
                                    )}
                                </div>
                                {errors?.password?.type === 'required' && (
                                    <p className="text-red-600 ml-2 mt-2 font-medium relative -top-5">
                                        A senha é obrigatória
                                    </p>
                                )}

                                {/* Botão de submissão */}
                                <button className="bg-primary border border-neutral-50 dark:bg-neutral-50 text-white dark:text-neutral-800 py-3 rounded-2xl">
                                    Registrar
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
