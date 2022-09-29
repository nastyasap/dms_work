import axios from 'axios'

const instance = axios.create({
    baseURL: ''
})

export const dailyTableApi = {
    getDataTable(date: string, isMorning: number) {
        return Promise.resolve({data:[
            {
                rowId: 12,
                autoNumber: 1234,
                name: 'Ivanov',
                cash: 65,
                bort: 10,
                washing: 3,
                gas: 17,
                fuel: 0,
                spendings: 0,
                avans: 0,
                addedDate: '20/09/2022/10:59',
            },{
                rowId: 123,
                autoNumber: 1234,
                name: 'Ivanov',
                cash: 65,
                bort: 10,
                washing: 3,
                gas: 17,
                fuel: 0,
                spendings: 0,
                avans: 0,
                addedDate: '20/09/2022/10:59',
            },{
                rowId: 1234,
                autoNumber: 1234,
                name: 'Ivanov',
                cash: 65,
                bort: 0,
                washing: 0,
                gas: 17,
                fuel: 0,
                spendings: 0,
                avans: 0,
                addedDate: '20/09/2022/10:59',
            },
        ]})
        return instance.get<DailyTableRow[]>(`/getTable/${date}/${isMorning}`)
    },

    updateDataTable(tableId: number, rowId: number, data: Partial<DailyTableRow>) {
        return instance.put<DailyTableRow>(`/getTable/${tableId}/${rowId}`, {data})
    },

    createDataTable(tableId: number, data: Partial<DailyTableRow>)  {
        return instance.post<DailyTableRow>(`/getTable/${tableId}`, {data})
    },
}

export type DailyTableRow = {
    rowId: number
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