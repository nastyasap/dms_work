import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://yandex-taxi-proxy.herokuapp.com/'
})

export const dailyTableApi = {
    getDataTable(date: string, isMorning: number) {
        return instance.get<{
            table: { _id: string, },
            rows:DailyTableRow[]
        }>(`/table/${date}/${isMorning}`)
    },

    updateDataTable(rowId: string, data: Partial<DailyTableRow>) {
        return instance.put<DailyTableRow>(`/table/${rowId}`, data)
    },

    createDataTable(tableId: string, data: Partial<DailyTableRow>)  {
        return instance.post<DailyTableRow>(`/table/${tableId}`, data)
    },
}

export type DailyTableRow = {
    _id: string
    autoNumber?: number | null
    name: string | null
    cash: number | null
    bort?: number | null
    washing?: number | null
    gas?: number | null
    fuel?: number | null
    spendings?: number | null
    avans?: number | null
    addedDate: number | null
}