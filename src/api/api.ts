import axios from 'axios'

const instance = axios.create({
    baseURL: ''
})

export const dailyTableApi = {
    getDataTable(data: string) {
        return instance.get(`${data}`)
    },
    updateDataTable() {
        return instance.put('')
    }
}