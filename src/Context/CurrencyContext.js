import { useReducer, useState, createContext, useContext } from 'react'
import { currencyReducer } from './Reducers'



const Currency = createContext()


export const CurrencyContext = ({ children }) => {

    const [ currency, setCurrency ] = useState(localStorage.getItem('currency') === 'USD' ? '$' : '₦');
    console.log(setCurrency)

    const [ state, dispatch ] = useReducer(currencyReducer, {
        currency: currency,
        currencies: [ "USD", "NGN" ],
        rate: 450,
        flightDetails: {}
    })

    return (
        <Currency.Provider
            value={{
                state, dispatch
            }}
        >
            {children}
        </Currency.Provider>
    )
}

export default CurrencyContext;

export const CurrencyState = () => {
    return useContext(Currency);
}