import {JSX} from "react";

export default function StackContainer({label, color, children}: {
  label: string,
  color: string,
  children: JSX.Element
}) {

  let startBorderColor
  let endBorderColor

  switch (color) {
    case "green":
      endBorderColor = '#66e18a'
      startBorderColor = '#66E18A3C'
      break
    case "red":
      endBorderColor = '#e16666'
      startBorderColor = '#e166663c'
      break
    case "pink":
      endBorderColor = '#b866e1'
      startBorderColor = '#b866e13c'
      break
    case "yellow":
      endBorderColor = '#e1cd66'
      startBorderColor = '#e1cd663c'
      break;
    case "blue":
    default:
      endBorderColor = '#6691e1'
      startBorderColor = '#6691e13c'
      break
  }


  return (
    <div
      className={'flex flex-col gap-4 rounded-md'}
      style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '2px solid transparent',
        background: `linear-gradient(#3f4461, #3f4461) padding-box, linear-gradient(90deg, ${startBorderColor}, ${endBorderColor}) border-box`,
      }}
    >
      <h2 className={'text-2xl'}>{label}</h2>
      {children}
    </div>
  )
}