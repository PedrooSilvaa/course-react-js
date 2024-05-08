const Events = () => {

    const handleMyEvent = () => {
        console.log("Ativou o evento");
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        }else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui!</button>
            <button onClick={() => {console.log("Clicou")}}>Clique Aqui também!</button>
            <button onClick={() => {
                if(true){
                    console.log("Isso nao deveria existir =)")
                }
            }}>Clique Aqui , por favor!</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
    )
}

export default Events;