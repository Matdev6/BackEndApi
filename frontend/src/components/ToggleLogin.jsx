import { motion } from "framer-motion"



const ToggleLogin = ({ isAnimate, animateAndRedirect, width, primary_color, primary_color_dark, text_color, text_color_dark, border_color, btn_text, btn_bg, x }) => {
    return (
        <motion.div
            className={`${isAnimate
                ? `h-full ${width} ${primary_color}  ${primary_color_dark} rounded-r-3xl flex flex-col `
                : `h-full ${width}  ${primary_color}  ${primary_color_dark} md:rounded-l-3xl rounded-t-3xl md:rounded-r-none flex flex-col`
                } `}
            animate={isAnimate ? { x: x } : { x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div className="m-auto items-center flex flex-col gap-2">
                <h1 className={`md:text-4xl text-2xl ${text_color} ${text_color_dark} font-normal`}>Bem vindo de volta!</h1>
                <p className={`${text_color} ${text_color_dark} font-extralight w-2/4`}>
                    Para continuar conectado conosco, faça login com suas informações pessoais
                </p>
                <button
                    className={`border ${border_color} ${btn_bg} $  dark:bg-white dark:text-neutral-800  py-2 px-20 rounded-2xl mt-2`}
                    onClick={animateAndRedirect}
                >
                    {btn_text}
                </button>
            </div>
        </motion.div>
    )
}

export default ToggleLogin