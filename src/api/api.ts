import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yandex-taxi-proxy.herokuapp.com/',
});

export const dailyTableApi = {
  getDataTable(date: string, isMorning: number) {
    return instance.get<{
      table: { _id: string };
      rows: DailyTableRow[];
    }>(`/table/${date}/${isMorning}`);
  },

  updateDataTable(rowId: string, data: Partial<DailyTableRow>) {
    return instance.put<DailyTableRow>(`/table/${rowId}`, data);
  },

  createDataTable(tableId: string, data: Partial<DailyTableRow>) {
    return instance.post<DailyTableRow>(`/table/${tableId}`, data);
  },
};

export type DailyTableRow = {
  _id: string;
  autoNumber: string | null;
  name: string | null;
  cash: string | null;
  bort: string | null;
  washing: string | null;
  gas: string | null;
  fuel: string | null;
  spendings: string | null;
  avans: string | null;
  addedDate: number | null;
};
