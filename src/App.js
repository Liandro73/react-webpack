import React from "react";

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Clique no botão abaixo para cadastrar um novo cliente
            <br />
            {buttonB}
        </div>
    )

    var consumers = ['Dernival Liandro', 'Alícia Liandro', 'Elainy Rodrigues']

    const showCostumer = () => {
        if (!hasCustomer) return null

        return (
            <div>
                <ul>
                    <li>Nome do Cliente: {consumers[0]}</li>
                    <li>Nome do Cliente: {consumers[1]}</li>
                    <li>Nome do Cliente: {consumers[2]}</li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCostumer()}
            </div>
        </div>
    );
};

export default App;