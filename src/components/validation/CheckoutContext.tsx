import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CheckoutData {
    name: string;
    surname: string;
    email: string;
}
interface CheckoutInvalidData {
    name: string;
    surname: string;
    email: string;
}

interface CheckoutContextType {
    data: CheckoutData;
    setData: React.Dispatch<React.SetStateAction<CheckoutData>>;
    invalidData: CheckoutInvalidData;
    setInvalidData: React.Dispatch<React.SetStateAction<CheckoutInvalidData>>;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const CheckoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<CheckoutData>({
        name: '',
        surname: '',
        email: '',
    });
    const [invalidData, setInvalidData] = useState<CheckoutInvalidData>({
        name: '',
        surname: '',
        email: '',
    });

    return (
        <CheckoutContext.Provider value={{ data, setData, invalidData, setInvalidData }}>
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckoutContext = () => {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error('useCheckoutContext must be used within a CheckoutProvider');
    }
    return context;
};
