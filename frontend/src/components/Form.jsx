import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from "react";
const Form = ({ onSubmit, btn, btn_border }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    return(
        <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit(onSubmit)} >
                <div className="flex">
                  <EnvelopeIcon className="h-14 p-4 w-14 text-gray-500 bg-gray-200 rounded-l-xl" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="md:w-96 w-48 bg-gray-200 outline-none rounded-r-xl"
                    {...register('email', { required: true })}
                  />
                </div>
                {errors?.email?.type === 'required' && (
                  <p className="text-red-600 ml-2 mt-2 font-medium relative -top-5">O email é obrigatório</p>
                )}

                <div className="flex ">
                  <LockClosedIcon className="h-14 w-14 p-4 bg-gray-200 text-gray-500 rounded-l-xl" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder="Senha"
                    className="md:w-80 w-32 bg-gray-200 outline-none"
                    {...register('password', { required: true })}
                  />
                  {showPass ? (
                    <EyeSlashIcon
                      className="h-14 w-16 p-4 bg-gray-200 text-gray-500 cursor-pointer rounded-r-xl"
                      onClick={toggleShowPass}
                    />
                  ) : (
                    <EyeIcon
                      className="h-14 w-16 p-4 bg-gray-200 text-gray-500 cursor-pointer rounded-r-xl"
                      onClick={toggleShowPass}
                    />
                  )}
                </div>
                {errors?.password?.type === 'required' && (
                  <p className="text-red-600 ml-2 mt-2 font-medium relative -top-5">A senha é obrigatória</p>
                )}

                
                <button className={`bg-primary dark:bg-neutral-50 text-white dark:text-neutral-800 py-3 rounded-2xl w-60  md:w-full md:ml-0 ${btn_border}`}>
                  {btn}
                </button>
              </form>
    )
}

export default Form