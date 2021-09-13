import { any, arrayOf, number, string } from 'prop-types';

export const Portrait = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Portraits = {
  items: arrayOf(Portrait),
};
