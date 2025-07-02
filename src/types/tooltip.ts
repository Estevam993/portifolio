import {HTMLAttributes, ReactNode} from 'react';

export interface ToolTip extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children: ReactNode;
}