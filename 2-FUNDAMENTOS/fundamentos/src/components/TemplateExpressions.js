const TemplateExpression = () => {

    const name = "Pedro";
    const data = {
        job: "Programmer",
        age: 20
    };

    return (
        <div>
            {/* Para adicionar java script bata colocar entre chave '{javascript}' */}
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    );
};

export default TemplateExpression;