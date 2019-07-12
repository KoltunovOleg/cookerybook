import { IUser } from 'src/app/interfaces/interfaces';

export interface IUserState {
	users: IUser[];
	selectedUser: IUser;
}

export const initialUserState: IUserState = {
	users: null,
	selectedUser: null
}