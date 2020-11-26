// NumberInput.js

import React from "react";

export const NumberInput = ({ value, onChange}) => {
    const handleChange = e => {
        onChange(Number(e.target.value));
    };

    return (
        <input
            type="number"
            min={0}
            onChange={handleChange}
            value={value}
        />
    );
};