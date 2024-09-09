// src/components/CurrencyConverter.js
import React, { useState } from "react";
import ConverterLayout from "./ConverterLayout";
import CurrencyForm from "./CurrencyForm";
import ConvertButton from "./ConvertButton";

const currencyOptions = [
    { value: "USD", label: "USD - United States Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "BRL", label: "BRL - Brazilian Real" },
];

const CurrencyConverter = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState(null);
    const [toCurrency, setToCurrency] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!amount || isNaN(amount)) {
            setError("Please enter a valid amount");
            return;
        }

        if (!fromCurrency || !toCurrency) {
            setError("Please select both currencies");
            return;
        }

        if (fromCurrency.value === toCurrency.value) {
            setError("Please select different currencies");
            return;
        }

        setError("");
        setLoading(true);
        setResult(null);

        setTimeout(() => {
            const conversionRate = Math.random() * (1.5 - 0.5) + 0.5;
            const convertedAmount = (amount * conversionRate).toFixed(2);
            setResult(
                `${amount} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`
            );
            setLoading(false);
        }, 2000);
    };

    return (
        <ConverterLayout title="Currency Converter">
            <form onSubmit={handleSubmit}>
                <CurrencyForm
                    amount={amount}
                    setAmount={setAmount}
                    fromCurrency={fromCurrency}
                    setFromCurrency={setFromCurrency}
                    toCurrency={toCurrency}
                    setToCurrency={setToCurrency}
                    currencyOptions={currencyOptions}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <ConvertButton loading={loading} />
            </form>
            {result && (
                <p
                    style={{
                        marginTop: "20px",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {result}
                </p>
            )}
        </ConverterLayout>
    );
};

export default CurrencyConverter;
