export interface IRecipe {
  id: number;
  name: string;
  images: {
    main: string;
  };
  ingredients: {};
  description: string;
  author: IUser;
  date: {
    first: string;
  };
  meta: {
    favorites: number;
    save: number;
  };
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
}