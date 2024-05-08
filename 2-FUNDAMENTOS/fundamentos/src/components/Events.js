const Events = () => {

    const handleMyEvent = () => {
        console.log("Ativou o evento");
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
    </div>
    )
}

export default Events;