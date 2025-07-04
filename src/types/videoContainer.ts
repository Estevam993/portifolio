import {JSX} from "react";

export interface VideoContainerType {
  video: {
    src: string,
    description: string,
    url: {
      url: string,
      label: string,
      icon: JSX.Element
    }[],
    value: string
  },
  show: string,
  color?: string
}