import React from 'react';
import Slider from '@mui/material/Slider';
import './style.css';

function valuetext(value) {
    return `$${value}`;
}

const minDistance = 10;

const ValueSlider = () => {
    const [value1, setValue1] = React.useState([37, 94]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <>
            <div className=''>${value1[0]} - ${value1[1]}</div>
            <div className='px-2'>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    min={10}
                    max={100}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    className='value-slider'
                    disableSwap
                />
            </div>
        </>
    )
};

export default ValueSlider;