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
        let nameType = "";
        if (typeCard === "American Express Detected") {
            nameType = "American Express";
        } else if(typeCard === "Mastercard Detected") {
            nameType = "Mastercard";
        } else if(typeCard === "Visa Detected") {
            nameType = "Visa";
        }
        setTypeCard(nameType);
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