import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    // Inicializa o hook useForm
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // Estado para controlar a animação
    const [isAnimate, setIsAnimate] = useState(false);
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
            alert(`logado ${response.data.user.email}`);
            reset();
            // Redirecionar para uma página protegida ou realizar outras ações necessárias
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

    return (
        <motion.div
            className="w-screen h-screen flex flex-col bg-zinc-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="w-4/5 h-4/5 m-auto flex rounded-3xl">
                <motion.div
                    className="h-full w-2/5 bg-primary rounded-l-3xl flex flex-col"
                    animate={isAnimate ? { x: 900 } : { x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="m-auto items-center flex flex-col gap-2">
                        <h1 className="text-4xl text-white font-normal">Bem vindo de volta!</h1>
                        <p className="text-white font-extralight w-2/4">
                            Para continuar conectado conosco, faça login com suas informações pessoais
                        </p>
                        <button
                            className="border border-white text-white py-2 px-20 rounded-2xl mt-2 hover:bg-secondary"
                            onClick={animateAndRedirect}
                        >
                            Registrar
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    className="h-full w-3/5 bg-white rounded-r-3xl flex flex-col"
                    animate={isAnimate ? { x: -600 } : { x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="m-auto flex flex-col gap-4">
                        <h1 className="text-5xl text-primary font-medium items-center m-auto mb-10">
                            Logar
                        </h1>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit(findUser)}>
                            <div className="flex w">
                                <EnvelopeIcon className="h-14 p-4 w-14 text-gray-500 bg-gray-200" />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-96 bg-gray-200 outline-none"
                                    {...register('email', { required: true })}
                                />
                                {errors?.email?.type === 'required' && (
                                    <p className="text-red-600 ml-2 mt-2 font-medium">
                                        O email é obrigatório
                                    </p>
                                )}
                            </div>
                            <div className="flex">
                                <LockClosedIcon className="h-14 w-14 p-4 bg-gray-200 text-gray-500" />
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    className="w-96 bg-gray-200 outline-none"
                                    {...register('password', { required: true })}
                                />
                                {errors?.password?.type === 'required' && (
                                    <p className="text-red-600 ml-2 mt-2 font-medium">
                                        A senha é obrigatória
                                    </p>
                                )}
                            </div>
                            <button className="bg-primary text-white py-3 rounded-2xl">
                                Logar
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Login;
