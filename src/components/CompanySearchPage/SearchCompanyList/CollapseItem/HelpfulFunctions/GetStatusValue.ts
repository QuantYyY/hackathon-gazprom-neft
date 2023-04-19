import { resultObject } from "../../../../../store/companySearchSlice";

export const GetStatusValue = (value: resultObject['data']['state']['status']) => {
    let result = '';
    switch (value) {
        case 'ACTIVE':
            result = 'Действующая';
            break;
        case 'BANKRUPT':
            result = 'Банкротсво';
            break;
        case 'LIQUIDATED':
            result = 'Ликвидирована';
            break;
        case 'LIQUIDATING':
            result = 'Ликвидируется';
            break;
        case 'REORGANIZING':
            result = 'в процессе присоединения к другому юрлицу, с последующей ликвидацией';
            break;
    }
    return result;
}