import MyComponent from "./MyComponent";

// criando componente como uma arrow funtion
const FirstComponent = () => {
    return (
        <div>
            <h1>Meu Primeiro componente</h1>
            <p className = "teste">Meu Texto</p>
            <MyComponent />
        </div>
    );
};

// exportando componente
export default FirstComponent;