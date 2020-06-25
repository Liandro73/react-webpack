import React from "react";

const listConsumers = [
    {
        id: 1,
        name: 'Dernival Liandro'
    },
    {
        id: 2,
        name: 'Alícia Liandro'
    },
    {
        id: 3,
        name: 'Elainy Rodrigues'
    },
    {
        id: 4,
        name: 'Ana Maria'
    }
]

const App = () => {

    const renderCustomers = (customer) => {
        return (
        <li key={`costomer-${customer.id}`}>{customer.name}</li>
        )
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            <div>
                <ul>
                    {listConsumers.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};

export default App;