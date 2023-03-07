import React, { useState } from "react";

interface PropsType {
    selectClassName?: string,
}

interface IValue {
    value: string,
    label: string
}

interface ArrayObjectSelectState {
    selectedValue: IValue | null;
}

const options: IValue[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const SelectCustom: React.FC<PropsType> = (
    {
        selectClassName = 'select__default',
    }) => {

    const [selectedOption, setSelectedOption] = useState<ArrayObjectSelectState>({
        selectedValue: null,
    });

    const handleChange = (option: IValue | null) => {
        setSelectedOption({
            selectedValue: option,
        });
    };

    return (
        <div className={`select__container select--reset ${selectClassName}`}>
            <select>
                {options.map((option, index) => {
                    return (
                        <option key={`option-${index}`} value={option.value}>
                            {option.label}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectCustom;