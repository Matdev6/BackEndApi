import monitor from "../assets/a.png"

const About = () => {
    return(
        <section className="altura-tela scroll-mt-20   w-screen bg-secundary" id="section2">
            <div className="w-full h-full flex">
                <div className="border w-2/3 h-2/3 m-auto">
                    <div className="w-64 h-36  mx-auto mt-10">
                        <img src={monitor} alt="" />
                        <div className="relative  h-12 w-6 left-28  bg-black"></div>
                        <div className="relative "></div>
                        <div className="relative bg-black h-2 w-16  left-24"></div>
                        <div className="flex">
                        <div className="border w-32 h-12 relative top-6 bg-black">
                            <div className="w-2 h-2 bg-gray-600 m-1"></div>
                            <div className="w-2 h-2 bg-gray-600 m-1"></div>
                            <div className="w-2 h-2 bg-gray-600 m-1"></div>
                        </div>
                        <div className="border h-8 w-5 rounded-lg top-6 relative left-10 bg-black"></div>
                        <div className=" h-48 w-24 bg-black relative left-40 bottom-48">
                            <div className="relative w-4 h-4 border bg-white rounded-full left-4 top-10 "></div>
                            <div className="flex gap-1">
                            <div className="relative w-4 h-2 border top-6 left-10 mt-1"></div>
                            <div className="relative w-4 h-2 border top-6 left-10 mt-1"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About