import { createContext, useState } from 'react';

const CreditCardContext = createContext();

export const CreditCardProvider = ({ children }) => {
    const [numberCard, setNumberCard] = useState("");
    const [typeCard, setTypeCard] = useState("");

    const addNumberCard = (numberCard) => {
        setNumberCard(numberCard);
    };

    const cleanNumberCard = () => {
        setNumberCard("");
    };

    const addTypeCard = (typeCard) => {
        setTypeCard(typeCard);
    };

    const cleanTypeCard = () => {
        setTypeCard("");
    };

    return (
        <CreditCardContext.Provider value={{ numberCard, addNumberCard, cleanNumberCard, typeCard,  addTypeCard, cleanTypeCard}}>
            {children}
        </CreditCardContext.Provider>
    );
};

export { CreditCardContext };