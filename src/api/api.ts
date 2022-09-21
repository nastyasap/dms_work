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
        return instance.get(`/getTable`, { params: {tableId}})
    },

    updateDataTable(tableId: number, rowId: number, data: Partial<DailyTableType>) {
        return instance.put(`/getTable`, {data}, { params: {tableId, rowId}})
    },

    createDataTable(tableId: number, data: DailyTableType) {
        return instance.post(`/getTable`, {data}, { params: {tableId}})
    },
}

export type DailyTableType = {
    rowId: number
    autoNumber?: number
    name: string
    cash: number
    bort?: number
    washing?: number
    gas?: number
    fuel?: number
    spendings?: number
    avans?: number
    total: number
    addedDate: any
}