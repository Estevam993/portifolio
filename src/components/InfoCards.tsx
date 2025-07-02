import {JSX} from "react";

import {InfoCard} from "@/types/infoCard";

export default function Info({infoCard}: {
  infoCard: InfoCard
}): JSX.Element {

  let color
  let titleColor

  switch (infoCard.color) {
    case 'green':
      color = 'border-[#66e18a] sm:border-[#66e18a6b] hover:border-[#66e18a]'
      titleColor = '#66e18a'
      break
    case 'red':
      color = 'border-[#e16666] sm:border-[#e166666b] hover:border-[#e16666]'
      titleColor = '#e16666'
      break
    case 'pink':
      color = 'border-[#b866e1] sm:border-[#b866e16b] hover:border-[#b866e1]'
      titleColor = '#b866e1'
      break
    case 'blue':
      color = 'border-[#6691e1ff] sm:border-[#6691e1ff6b] hover:border-[#6691e1ff]'
      titleColor = '#6691e1ff'
      break
  }

  return (
    <div
      className={`rounded-lg border-b-2 transition-all duration-300 ease-in-out ` + color}
      style={{
        padding: '1rem',
      }}
    >
      <div className="flex items-center flex-row gap-6" style={{color: titleColor}}>
        {infoCard.icon} {infoCard.title}
      </div>
      <div style={{marginTop: '1rem'}}>
        {infoCard.description}
      </div>
    </div>
  )
}