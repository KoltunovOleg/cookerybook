import { IConfig } from 'src/app/interfaces/interfaces';


export interface IConfigState {
	config: IConfig;
}

export const initialConfigState: IConfigState = {
	config: null
}