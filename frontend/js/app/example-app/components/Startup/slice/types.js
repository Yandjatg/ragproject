import { any, arrayOf, number, string } from 'prop-types';

export const Startup = {
  id: number,
  image: any,
  title: string,
  description: string,
};
export const Startups = {
  items: arrayOf(Startup),
};
