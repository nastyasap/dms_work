import {DailyTable} from './DailyTable/DailyTable';
import {useParams} from 'react-router-dom';

export const TableContainer = () => {
    const {date, isMorning} = useParams()
    return (
        <div>
            {date}
            <DailyTable/>
        </div>
    )
}