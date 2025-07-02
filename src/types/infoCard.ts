import {HTMLAttributes, JSX} from 'react';

export interface InfoCard extends HTMLAttributes<HTMLDivElement> {
  color: string | 'red' | 'green' | 'blue' | 'pink',
  icon: JSX.Element,
  title: string,
  description: string | JSX.Element,
}