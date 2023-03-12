import React, { useState, useRef } from "react";
import classNames from "classnames";

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

    const contentRef = useRef(null);
    const [toggle, setToggle] = useState(false);
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

    const handleToggle = () => {
        if (!contentRef.current) return;
        const newToggle = !toggle;
        const content: HTMLElement = contentRef.current;

        if (newToggle) content.style.maxHeight = `${content.scrollHeight}px`;
        else content.style.maxHeight = '0';

        setToggle(newToggle);
    };

    return (
        <div
            onClick={handleToggle}
            className={classNames(`select__container ${selectClassName}`, { 'active': toggle })}>
            <div className='select__wrapper'>
                <div className='select__header'>
                    <span className={classNames({ 'active': toggle })}>Looking for</span>
                </div>
                <ul
                    ref={contentRef}
                    className={classNames('select__content__wrapper', { 'active': toggle })}>
                    <div className='select__content'>
                        {options.map((option, index) => {
                            return (
                                <li key={`option-${index}`} value={option.value}>
                                    {option.label}
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </div>
            <select
                id={selectId}
                className='select--hide'
                onChange={handleOnChangeSelect}>
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