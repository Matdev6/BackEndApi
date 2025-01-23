// src/components/Signin.jsx

// Importações necessárias para o componente
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { DarkModeContext } from '../context/DarkModeContext';
import DarkModeBtn from '../components/DarkModeBtn';
import Form from '../components/Form';
import ToggleLogin from '../components/ToggleLogin';



// Componente principal para o formulário de login e registro
const Register = () => {
    // Configurações do formulário usando react-hook-form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
   
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
                <DarkModeBtn />

                <div className="w-4/5 h-4/5 m-auto flex rounded-3xl">
                    {/* Seção com animação para login */}
                    <ToggleLogin
                        isAnimate={isAnimate}
                        animateAndRedirect={animateAndRedirect}
                        width={'w-3/5'}
                        primary_color={'bg-neutral-50'}
                        primary_color_dark={'dark:bg-neutral-800'}
                        text_color={'text-primary'}
                        text_color_dark={'dark:text-white'}
                        border_color={'border-primary'}
                        btn_text={'Login'}
                        btn_bg={'bg-primary text-neutral-50'}
                        x={600}
                    />
                    
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
                            
                            <Form onSubmit={onSubmit} 
                            btn={'Registrar'}
                            btn_border={'border'}/>

                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
