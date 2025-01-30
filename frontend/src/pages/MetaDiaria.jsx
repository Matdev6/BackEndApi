import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Header from "../components/Header";
import api from '../services/api';
import { useAuth } from "../context/AuthContext";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

const MetaDiaria = () => {
    const { auth } = useAuth();
    const userId = auth.userId;
    const { register, handleSubmit } = useForm();
    const [tasks, setTasks] = useState([]);
    const [modalTask, setModalTask] = useState(false);

    const toggleModal = () => {
        setModalTask(!modalTask);
    };

    const createTask = async (data) => {
        try {
            const response = await api.post('/tasks', {
                title: data.task,
                userId: userId
            });
            console.log("Tarefa criada com sucesso", response.data);
            findTasks(); // Atualiza as tarefas após criar uma nova
        } catch (error) {
            console.error("Erro ao criar tarefa", error);
        }
    };

    const findTasks = async () => {
        try {
            const response = await api.get(`/users/${userId}/tasks`);
            console.log('Tarefas encontradas', response.data);
            setTasks(response.data); // Armazena as tarefas no estado
        } catch (error) {
            console.error('Erro ao buscar tarefas', error.message);
            console.log("User ID:", userId); // Log para verificar o userId
        }
    };

    useEffect(() => {
        if (userId) {
            findTasks();
        }
    }, [userId]);

    const onSubmit = (data) => {
        createTask(data);
        toggleModal();
    };

    const delTaks = (id) => {
        deleteTask(id)
    }

    const deleteTask = async (id) => {
        try {
            const response = await api.delete(`/users/${userId}/tasks/${id}`)
            console.log('task deletada com sucesso', response.data)
            findTasks()
        } catch (error) {
            console.error('Erro ao deletar uma task', error.message)
        }
    }

    return (
        <div className="w-screen relative">
            <div className={`flex w-max mx-auto mt-10 gap-1 ${modalTask ? 'blur' : ''}`}>
                <div className="flex">
                    <h1 className="text-primary text-4xl font-semibold cursor-pointer">Meta Diaria</h1>
                    <CheckCircleIcon className="h-10 w-10 text-primary" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-10 mt-10">
                    {tasks.length === 0 ? (
                        <h1 className="text-primary md:mx-auto mx-14 mt-20 text-4xl md:text-5xl font-semibold">
                            Você não tem tarefas cadastradas
                        </h1>
                    ) : (
                        tasks.map((task) => (
                            <div key={task.id} className="flex flex-col items-center bg-primary w-52 h-24 rounded-xl p-1">
                                <h1 className="text-neutral-50 text-2xl">{task.title}</h1>
                                <p className="text-secundary">{task.completed ? "Concluída" : "Pendente"}</p>
                                <TrashIcon className="h-7 w-7 text-red-500 relative  left-20 -top-4 cursor-pointer" onClick={() => delTaks(task.id)} />
                            </div>
                        ))
                    )}
                </div>
                <button
                    onClick={toggleModal}
                    className="px-20 py-3 relative top-44 border justify-center bg-primary rounded-md text-white">
                    Criar Tarefa
                </button>
            </div>
            {modalTask && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleModal}></div>
                    <div className="fixed bg-neutral-50 p-6 md:h-1/3 md:w-1/3 w-3/4 flex flex-col shadow-2xl z-10 rounded-xl left-1/2 -translate-x-1/2">
                        <h1 className="text-primary text-3xl mx-auto font-medium">Cadastrar tarefa</h1>
                        <form className="flex flex-col gap-6 mt-10" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="Tarefa"
                                className="bg-neutral-200 rounded-md text-neutral-900 p-2 text-xl"
                                {...register('task')}
                                required />
                            <div className="flex md:flex-row flex-col gap-2 mt-10 items-center justify-center mx-auto">
                                <button
                                    className="bg-primary  mx-auto px-10 p-2 rounded-md text-neutral-50"
                                    type="submit">Cadastrar</button>
                                <button
                                    className="bg-neutral-800 px-10 mx-auto p-2 rounded-md text-neutral-50"
                                    onClick={toggleModal}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MetaDiaria;
