function Titulo() {
    
    let ong = "Projeto Surfar"
    const urlImg = "https://cdn.pixabay.com/photo/2023/11/03/15/19/ai-generated-8363278_1280.jpg"
    return (
        <div>
            <h1>ONG {ong}</h1>
            <img src={urlImg} />
        </div>

    )
}

export default Titulo