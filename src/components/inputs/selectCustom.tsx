import React, { useState } from "react";

interface PropsType {
    selectClassName?: string,
    selectId: string,
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
        selectId,
    }) => {

    const [selected, setSelected] = useState(null);
    const [selectedOption, setSelectedOption] = useState<ArrayObjectSelectState>({
        selectedValue: null,
    });

    const handleOnChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
        const newValue = event.currentTarget.value;
    };

    const handleChange = (option: IValue | null) => {
        setSelectedOption({
            selectedValue: option,
        });
    };

    return (
        <div className={`select__container ${selectClassName}`}>
            <div className="select__wrapper">
                <div className="select__header">
                    <span>Looking for</span>
                </div>
                <ul className="select__content">
                    {options.map((option, index) => {
                        return (
                            <li key={`option-${index}`} value={option.value}>
                                {option.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <select
                id={selectId}
                className='select--hide'
                onChange={handleOnChangeSelect}
            >
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