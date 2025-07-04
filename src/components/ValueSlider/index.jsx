import React, { useEffect } from 'react';
import Slider from '@mui/material/Slider';
import './style.css';

function valuetext(value) {
    return `$${value}`;
}

const minDistance = 10;

const ValueSlider = ({minValue, maxValue, low, high, onChange}) => {
    const [range, setRange] = React.useState([low, high]);

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
        } else {
            setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
        }

        onChange(range);
    };

    useEffect(() => {
        setRange([low, high]);
    }, [low, high, minValue, maxValue]);

    return (
        <>
            <div className=''>${range[0]} - ${range[1]}</div>
            <div className='px-2'>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    min={minValue}
                    max={maxValue}
                    value={range}
                    onChange={handleChange}
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