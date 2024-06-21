import React, { useEffect, useState } from 'react';

function Api() {
    const [currencyData, setCurrencyData] = useState(null);
    const currency = "usd";

    const getData = async () => {
        try {
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
            const data = await response.json();
            setCurrencyData(data);
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Currency Data</h1>
            <select className='bg-pink-300 w-20'>
                {currencyData && Object.entries(currencyData[currency]).map(([key, value]) => (
                    <option key={key} value={value}>{key} selected={currencyData[currency] == "aed" ? true : false}</option>
                ))}
            </select>
        </div>
    );
}

export default Api;
