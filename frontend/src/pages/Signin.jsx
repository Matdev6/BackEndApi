import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { motion } from 'framer-motion';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Signin = () => {
    // Inicializa o hook do formulário
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Função para criar um usuário
    const createUser = async (data) => {
        try {
            const response = await api.post('/user', {
                email: data.email,
                password: data.password
            });
            console.log("Usuário criado com sucesso:", response.data);
            reset(); // Reseta o formulário após o envio
        } catch (error) {
            console.log("Falha ao criar usuário:", error);
        }
    };

    // Função de submissão do formulário
    const onSubmit = (data) => {
        createUser(data);
    };

    return (
        <div
        className="w-screen h-screen flex flex-col bg-zinc-100"
    >
        <div className="w-4/5 h-4/5 m-auto flex rounded-3xl">
            <div
                className="h-full w-2/5 bg-white rounded-l-3xl flex flex-col"
            >
                <div className="m-auto items-center flex flex-col gap-2">
                    <h1 className="text-4xl text-primary font-normal">Bem vindo de volta!</h1>
                    <p className="text-primary font-extralight w-2/4">
                        Para continuar conectado conosco, faça login com suas informações pessoais
                    </p>
                    <button
                        className="border border-primary text-primary py-2 px-20 rounded-2xl mt-2 hover:bg-secondary"
                        
                    >
                        Registrar
                    </button>
                </div>
            </div>
            <div
                className="h-full w-3/5 bg-primary rounded-r-3xl flex flex-col"
            >
                <div className="m-auto flex flex-col gap-4">
                    <h1 className="text-5xl text-white font-medium items-center m-auto mb-10">
                        Registrar
                    </h1>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(createUser)}>
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
                        <button  className="border border-white text-white py-2 px-20 rounded-2xl mt-2 hover:bg-secondary">
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signin;
