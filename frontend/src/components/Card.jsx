const Card = ({title, paragraph}) => {
    return(
        <div className="w-1/4 h-56 border bg-primary rounded-xl shadow-3xl flex flex-col">
            <h1 className="flex mx-auto mt-6 text-2xl font-medium text-white">{title}</h1>
            <p className="flex mx-4 mt-6 textlg text-white font-medium">{paragraph}</p>
        </div>
    )
}

export default Card 