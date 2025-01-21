import { useForm } from "react-hook-form"; // Importa o hook de formulário do react-hook-form
import {  LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/outline"; // Importa ícones da biblioteca Heroicons

const Login = () => {
    // Inicializa o hook de formulário com desestruturação dos métodos e propriedades necessárias
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    return (
        // Contêiner principal com largura e altura total da tela, e fundo de cor zinc-100
        <div className="w-screen h-screen flex flex-col bg-zinc-100">
            {/* Contêiner principal do formulário com margem automática para centralizar */}
            <div className="w-4/5 h-4/5 m-auto flex rounded-3xl">
                {/* Seção da esquerda com fundo primário e bordas arredondadas */}
                <div className="h-full w-2/5 bg-primary rounded-l-3xl flex flex-col">
                    <div className="m-auto items-center flex flex-col gap-2">
                        <h1 className="text-4xl text-white font-normal">Bem vindo de volta!</h1>
                        <p className="text-white font-extralight w-2/4">Para continuar conectado conosco, faça login com suas informações pessoais</p>
                        <button className="border border-white text-white py-2 px-20 rounded-2xl mt-2">Registrar</button>
                    </div>
                </div>
                {/* Seção da direita com fundo branco e bordas arredondadas */}
                <div className="h-full w-3/5 bg-white rounded-r-3xl flex flex-col">
                    <div className="m-auto flex flex-col gap-4">
                        <h1 className="text-5xl text-primary font-medium items-center m-auto mb-10">Logar</h1>
                        {/* Formulário para login */}
                        <form className="flex flex-col gap-5">
                            <div className="flex w">
                                {/* Ícone de usuário do Heroicons */}
                                <EnvelopeIcon className="h-14 p-4 w-14 text-gray-500 bg-gray-200" />
                                <input type="text" placeholder="Email" className="w-96 bg-gray-200 outline-none" {...register('email', { required: true })} />
                                {/* Mensagem de erro de validação para o campo email */}
                                {errors?.email?.type === 'required' && <p className='text-red-600 ml-2 mt-2 font-medium'>O email é obrigatório</p>}
                            </div>
                            <div className="flex">
                                {/* Ícone de cadeado do Heroicons */}
                                <LockClosedIcon className="h-14 w-14 p-4 bg-gray-200 text-gray-500" />
                                <input type="password" placeholder="Senhas" className="w-96 bg-gray-200 outline-none" {...register('password', { required: true })} />
                                {/* Mensagem de erro de validação para o campo senha */}
                                {errors?.password?.type === 'required' && <p className='text-red-600 ml-2 mt-2 font-medium'>A senha é obrigatória</p>}
                            </div>
                            <button className="bg-primary text-white py-3 rounded-2xl">Logar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login; // Exporta o componente para ser usado em outras partes do aplicativo
