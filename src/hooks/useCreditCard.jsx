import { useContext } from "react";
import { CreditCardContext } from "../context/CreditCardContext";

export const useCreditCard = () => {
    return useContext(CreditCardContext);
};
