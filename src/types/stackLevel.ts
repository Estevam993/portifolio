import {JSX} from 'react';

export interface StackLevelType {
  icon: JSX.Element,
  title: string,
  level: 1 | 2 | 3 | 4 | 5,
  color?: "green" | "red" | "pink" | "blue" | "yellow"
}