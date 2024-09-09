// src/components/ConverterLayout.js
import React from "react";
import styled from "styled-components";

const ConverterContainer = styled.div`
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
`;

const ConverterLayout = ({ title, children }) => (
    <ConverterContainer>
        <Title>{title}</Title>
        {children}
    </ConverterContainer>
);

export default ConverterLayout;
