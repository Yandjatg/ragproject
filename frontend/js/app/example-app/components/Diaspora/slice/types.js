import { any, arrayOf, number, string } from 'prop-types';

export const Diaspora = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Diasporas = {
  items: arrayOf(Diaspora),
};
