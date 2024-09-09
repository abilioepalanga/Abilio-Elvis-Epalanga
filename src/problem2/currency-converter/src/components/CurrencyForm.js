// src/components/CurrencyForm.js
import React from "react";
import Select from "react-select";
import styled from "styled-components";

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    color: #555;
`;

const Input = styled.input`
    width: calc(100% - 20px);
    padding: 8px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const CurrencyForm = ({
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    currencyOptions,
}) => (
    <>
        <FormGroup>
            <Label>Amount:</Label>
            <Input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label>From:</Label>
            <Select
                options={currencyOptions}
                value={fromCurrency}
                onChange={(option) => setFromCurrency(option)}
            />
        </FormGroup>
        <FormGroup>
            <Label>To:</Label>
            <Select
                options={currencyOptions}
                value={toCurrency}
                onChange={(option) => setToCurrency(option)}
            />
        </FormGroup>
    </>
);

export default CurrencyForm;
