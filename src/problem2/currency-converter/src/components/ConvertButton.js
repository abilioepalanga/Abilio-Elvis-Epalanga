// src/components/ConvertButton.js
import React from "react";
import styled from "styled-components";
import { FaExchangeAlt } from "react-icons/fa";

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #45a049;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const Icon = styled(FaExchangeAlt)`
    margin-left: 10px;
`;

const ConvertButton = ({ loading }) => (
    <Button type="submit" disabled={loading}>
        {loading ? "Converting..." : "Convert"}
        {!loading && <Icon />}
    </Button>
);

export default ConvertButton;
