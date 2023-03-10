import React from 'react';
import SelectCustom from '../inputs/selectCustom';

const FilterBar = () => {
    return (
        <div className='filter__default bg--white spacer__mb--lg spacer__mt--lg'>
            <SelectCustom
                selectClassName='select__default spacer__pl--md'
                selectId='id-exemple' />
            <SelectCustom
                selectClassName='select__default spacer__pl--md'
                selectId='id-exemple' />
            <SelectCustom
                selectClassName='select__default spacer__pl--md'
                selectId='id-exemple' />
            <SelectCustom
                selectClassName='select__default spacer__pl--md'
                selectId='id-exemple' />
        </div>
    )
}

export default FilterBar;