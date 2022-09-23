import axios from 'axios'

const instance = axios.create({
    baseURL: ''
})

export const dailyTableApi = {
    getDataTable(tableId: number) {
        return Promise.resolve({data:[
            {
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
                total: 123,
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
                total: 123,
                addedDate: '20/09/2022/10:59',
            },{
                rowId: 123,
                autoNumber: 1234,
                name: 'Ivanov',
                cash: 65,
                bort: 0,
                washing: 0,
                gas: 17,
                fuel: 0,
                spendings: 0,
                avans: 0,
                total: 123,
                addedDate: '20/09/2022/10:59',
            },
        ]})
        return instance.get<DailyTableRow[]>(`/getTable`, { params: {tableId}})
    },

    updateDataTable(tableId: number, rowId: number, data: Partial<DailyTableRow>) {
        return instance.put<DailyTableRow>(`/getTable`, {data}, { params: {tableId, rowId}})
    },

    createDataTable(tableId: number, data: Partial<DailyTableRow>)  {
        return instance.post<DailyTableRow>(`/getTable`, {data}, { params: {tableId}})
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