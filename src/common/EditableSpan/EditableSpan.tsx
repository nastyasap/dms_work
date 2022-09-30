import React, {ChangeEvent, CSSProperties, useState, KeyboardEvent} from 'react';
import {TextField} from '@mui/material';
import {debounce} from 'lodash';

interface Props {
    value: string
    onChange: (value: string) => void
    disabled?: boolean
    placeholder: string
}

export const EditableSpan: React.FC<Props> = ({value, onChange, disabled, placeholder}) => {
    const [inputValue, setInputValue] = useState(value)


    const changeTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value)
        // debounce(() => {
        //     onChange(inputValue)
        // }, 300)
    }


    const activateViewMode = () => {
        inputValue &&
        // debounce(() => {
            onChange(inputValue)
        // }, 300)
    }

    const onEnterPress = (e:KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') {
            activateViewMode()
        }
    }

    const fontColor = {
        webkitTextFillColor: "rgba(0, 0, 0, 0.8)",
        fontWeight: 'bold'
    } as CSSProperties

    return (
        <TextField
            disabled={disabled}
            inputProps={disabled ? {style: fontColor} : undefined}
            value={inputValue}
            onChange={changeTitle}
            placeholder={placeholder}
            onBlur={activateViewMode}
            onKeyPress={onEnterPress}
            variant={"standard"}
        />
    )
}