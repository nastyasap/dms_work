import {DailyTable} from './DailyTable/DailyTable';
import {useParams} from 'react-router-dom';
import s from './TablePage.module.scss'
import cn from 'classnames'

export const TableContainer = () => {
    const {date, isMorning} = useParams()

    const shownDate = new Date(date || '').toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })

    return (
        <div className={s.container}>
            <span className={s.text}>{shownDate}</span>
            <span className={cn(s.text, s.bold)}>{isMorning === '1' ? 'Утренняя пересменка' : 'Вечерняя пересменка'}</span>
            <br/>
            <div className={s.tableWrapper}>
                <DailyTable date={date || ''} isMorning={Number(isMorning)}/>
            </div>
        </div>
    )
}