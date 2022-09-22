import {StyledTableCell, StyledTableRow} from '../DailyTable';
import {EditableSpan} from '../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import {useState} from 'react';

const EmptyRow = () => {
    const [state, setState] = useState({
        autoNumber: null,
        name: null,
        cash: null,
        bort: null,
        washing: null,
        gas: null,
        fuel: null,
        spendings: null,
        avans: null,
        total: null,
    })

    const onChangeHandler = (value: any) => {
        setState({...state, })
    }

    const createCell = (value: any, align?: "center" | "inherit" | "left" | "right" | "justify") => {
        return <StyledTableCell align={align || 'center'}>
            <EditableSpan value={value} onChange={() => {onChangeHandler(value)}}/>
        </StyledTableCell>
    }

    return <StyledTableRow>
        {createCell(state.autoNumber)}
        {createCell(state.name)}
        {createCell(state.cash)}
        {createCell(state.bort)}
        {createCell(state.washing)}
        {createCell(state.gas)}
        {createCell(state.fuel)}
        {createCell(state.spendings)}
        {createCell(state.avans)}
        {createCell(state.total)}
    </StyledTableRow>
}