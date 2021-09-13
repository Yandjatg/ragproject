import { any, arrayOf, number, string } from 'prop-types';

export const Innovation = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Innovations = {
  items: arrayOf(Innovation),
};
