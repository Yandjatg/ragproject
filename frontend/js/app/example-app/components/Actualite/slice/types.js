import { any, arrayOf, number, string } from 'prop-types';

export const Actualite = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Actualites = {
  items: arrayOf(Actualite),
};
