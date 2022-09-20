import {EditableSpan} from '../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import {KeyboardEvent} from 'react';
import {StyledTableCell, StyledTableRow} from '../DailyTable';

export const EditableTableRow = () => {

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTableCellElement>) => {
    if(e.key === 'Enter') {

    }
    if(e.key === 'ArrowRight') {

    }
        console.log(e.key)
    }

    return <StyledTableRow>
        <StyledTableCell align={'center'} onKeyDown={onKeyPressHandler}><EditableSpan value={'0'} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={'90'} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={'500'} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={'890'} onChange={() => {
        }}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={() => {
        }}/></StyledTableCell>
    </StyledTableRow>
}