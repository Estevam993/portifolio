import {JSX} from "react";
import {ToolTip} from "@/types/tooltip";

export default function Tooltip({label, children, ...props}: ToolTip): JSX.Element {
  return (
    <div className="relative group inline-block" {...props}>
      {children}
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3
              opacity-0 group-hover:opacity-100 transition duration-300
              bg-gray-900 text-white text-sm rounded z-10 whitespace-nowrap"
        style={{padding: '6px'}}
      >
        {label}
      </div>
    </div>
  )
}