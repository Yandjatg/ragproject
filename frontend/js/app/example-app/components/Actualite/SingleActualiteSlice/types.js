import { any, arrayOf, number, string } from 'prop-types';

export const Acceuil = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Acceuils = {
  items: arrayOf(Acceuil),
};
