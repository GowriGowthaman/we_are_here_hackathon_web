import { loginTypes } from './auth';
import { searchDataTypes } from './searchData';

export interface IStore {
    searchDataState: searchDataTypes.ISearchData;
    loginState: loginTypes.ILogin;
}
