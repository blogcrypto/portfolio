import React from 'react';
import SwitchMUI from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Switch(props) {
    const { label, checked, handleChange, size = 'medium', color = 'primary' } = props;
    const [isChecked, setIsChecked] = React.useState(!checked);
    const timerHandler = React.useRef();

    const handleChangeSwitcher = () => {
        handleChange(!isChecked);
    };

    React.useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    return (
        <FormControlLabel
            control={
                <SwitchMUI
                    size={size}
                    color={color}
                    checked={isChecked}
                    onChange={() => {
                        const pendingValue = !isChecked; // cached!

                        clearTimeout(timerHandler.current);
                        setIsChecked(pendingValue);

                        timerHandler.current = setTimeout(() => {
                            handleChangeSwitcher(pendingValue);
                        }, 300);
                    }}
                    inputProps={{ 'aria-label': 'checkbox' }}
                />
            }
            label={label}
            labelPlacement="end"
        />
    );
}
