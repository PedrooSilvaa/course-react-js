const Challenge = () => {

    const num1 = 5;
    const num2 = 12;

    const handleSomaNumbers = () => {
        return console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    }

    return(
        <div>
            <h1>Primeiro número = {num1} Segundo número = {num2}</h1>
            <button onClick={handleSomaNumbers}>Soma</button>
        </div>
    );

};

export default Challenge;
