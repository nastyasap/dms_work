import {EditableSpan} from '../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import {StyledTableCell, StyledTableRow} from '../DailyTable';
import {useState} from 'react';
import {TextField} from '@mui/material';

export const EditableTableRow = () => {


    return <StyledTableRow>
        <StyledTableCell align={'center'}><EditableSpan value={'0'} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={'90'} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={'500'} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={'890'} onChange={()=>{}}/></StyledTableCell>
        <StyledTableCell align={'center'}><EditableSpan value={''} onChange={()=>{}}/></StyledTableCell>
        {/*<StyledTableCell onDoubleClick={activateEditMode} onBlur={activateViewMode}><EditableSpan value={''} editMode={editMode} onChange={()=>{}}/></StyledTableCell>*/}
    </StyledTableRow>
}