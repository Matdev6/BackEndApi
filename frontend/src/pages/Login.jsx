// src/components/Login.jsx

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { DarkModeContext } from '../context/DarkModeContext.jsx';
import { useAuth } from '../context/AuthContext'; // Importa o Contexto de Autenticação
import DarkModeBtn from '../components/DarkModeBtn.jsx';
import Form from '../components/Form.jsx';
import ToggleLogin from '../components/ToggleLogin.jsx';
import Switch from '../components/Switch.jsx';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [isAnimate, setIsAnimate] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const { darkMode } = useContext(DarkModeContext);
  const { login } = useAuth(); // Usa a função de login do contexto

  const navigate = useNavigate();

  // Função para buscar o usuário ao fazer login
  const findUser = async (data) => {
    try {
      const response = await api.post('/login', {
        email: data.email,
        password: data.password,
      });

      console.log('Login bem-sucedido:', response.data);
      login(response.data.userId, response.data.token); // Chama a função de login do contexto

      navigate('/'); // Redireciona para a página inicial

    } catch (error) {
      console.error(error.response.data.message);
      setUserNotFound(true);
      
      // Oculta a mensagem de erro após 3 segundos
      setTimeout(() => {
        setUserNotFound(false);
      }, 3000);
    }
  };

  // Função para ativar animação e redirecionar para a página de registro
  const animateAndRedirect = () => {
    setIsAnimate(true);
    setTimeout(() => {
      navigate('/register');
    }, 1600);
  };

  // Função para submissão do formulário
  const onSubmit = (data) => {
    findUser(data);
  };

  return (
    <div className={`${darkMode && 'dark'}`}>
      <motion.div className="w-screen h-screen flex flex-col bg-neutral-100 dark:bg-neutral-600 gap">
        
        {/* Botão de alternância de modo escuro */}
        <Switch />

        <div className="w-4/5 h-4/5 m-auto flex flex-col md:flex-row rounded-3xl">
          {/* Componente ToggleLogin */}
          <ToggleLogin
            isAnimate={isAnimate}
            animateAndRedirect={animateAndRedirect}
            width={'md:w-2/5'}
            primary_color={'bg-primary'}
            primary_color_dark={'dark:bg-neutral-700'}
            text_color={'text-white'}
            border_color={'border-white'}
            btn_text={'Register'}
            btn_bg={'bg-primary text-white'}
            x={1000}
          />

          {/* Conteúdo principal do formulário de login */}
          <motion.div
            className={`${isAnimate
              ? 'h-full w-3/5 bg-neutral-50 dark:bg-neutral-800 rounded-l-3xl flex flex-col'
              : 'h-full md:w-3/5 w-full bg-neutral-50 dark:bg-neutral-800 md:rounded-r-3xl rounded-b-3xl md:rounded-l-none flex flex-col'
            }`}
            animate={isAnimate ? { x: -700 } : { x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="m-auto flex flex-col gap-4">
              
              {/* Título */}
              <h1 className="md:text-5xl text-3xl ml-28 mt-6 md:ml-0 md:mt-0 text-primary h-14 font-medium items-center m-auto md:mb-10 dark:text-neutral-50">
                Logar
              </h1>

              {/* Formulário */}
              <Form onSubmit={onSubmit} btn={'Logar'} />
              
              {/* Mensagem de erro */}
              {userNotFound && (
                <p className="text-red-600 mx-auto">
                  Usuário não encontrado ou senha incorreta
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
