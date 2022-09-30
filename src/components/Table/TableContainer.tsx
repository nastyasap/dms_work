import {DailyTable} from './DailyTable/DailyTable';
import {useNavigate, useParams} from 'react-router-dom';
import s from './TablePage.module.scss'
import cn from 'classnames'
import {Button} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import moment from 'moment';

export const TableContainer = () => {
    const {date, isMorning} = useParams()
    const navigate = useNavigate()

    const shownDate = new Date(date || '').toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })

    const onArrowBackClick = () => {
        const prevDay = moment(date).subtract(1, 'd').format('YYYY-MM-DD')
        if(isMorning === '0') {
            navigate(`/dailyTable/${date}/1`)
        } else navigate(`/dailyTable/${prevDay}/0`)
    }

    const onArrowForwardClick = () => {
        const nextDay = moment(date).add(1, 'd').format('YYYY-MM-DD')
        if(isMorning === '0') {
            navigate(`/dailyTable/${nextDay}/1`)
        } else navigate(`/dailyTable/${date}/0`)
    }

    return (
        <div className={s.container}>
            <span className={s.text}>{shownDate}</span>
            <span className={cn(s.text, s.bold)}>{isMorning === '1' ? 'Утренняя пересменка' : 'Вечерняя пересменка'}</span>
            <div className={s.tableWrapper}>
                <DailyTable date={date || ''} isMorning={Number(isMorning)}/>
            </div>
            <div className={s.arrowButtons}>
                <Button onClick={onArrowBackClick}><ArrowBackRoundedIcon fontSize={'large'}/></Button>
                <Button onClick={onArrowForwardClick}><ArrowForwardRoundedIcon fontSize={'large'}/></Button>
            </div>
        </div>
    )
}