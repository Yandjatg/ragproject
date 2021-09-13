import { any, arrayOf, number, string } from 'prop-types';

export const Politique = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Politiques = {
  items: arrayOf(Politique),
};
