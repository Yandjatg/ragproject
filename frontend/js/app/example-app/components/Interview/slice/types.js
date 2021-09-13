import { any, arrayOf, number, string } from 'prop-types';

export const Interview = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Interviews = {
  items: arrayOf(Interview),
};
