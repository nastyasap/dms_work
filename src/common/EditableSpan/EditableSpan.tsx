import React, {ChangeEvent, CSSProperties, useState} from 'react';
import {TextField} from '@mui/material';

interface Props {
    value: string
    onChange: (value: string) => void
    disabled?: boolean
    placeholder: string
}

export const EditableSpan: React.FC<Props> = ({value, onChange, disabled, placeholder}) => {
    const [title, setTitle] = useState(value)


    const changeTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }


    const activateViewMode = () => {
        onChange(title)
    }

    const fontColor = {
        webkitTextFillColor: "rgba(0, 0, 0, 0.8)",
        fontWeight: 'bold'
    } as CSSProperties

    return (
        <TextField
            disabled={disabled}
            inputProps={disabled ? {style: fontColor} : undefined}
            value={title}
            onChange={changeTitle}
            placeholder={placeholder}
            onBlur={activateViewMode}
            autoFocus
            variant={"standard"}
        />
    )
}