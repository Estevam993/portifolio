import {JSX} from "react";
import {VideoContainerType} from "@/types/videoContainer";

export default function VideoContainer({video, show, color}: VideoContainerType): JSX.Element {
  let startBorderColor
  let endBorderColor

  switch (color) {
    case "green":
      endBorderColor = '#66e18a71'
      startBorderColor = '#66E18A00'
      break
    case "red":
      endBorderColor = '#e1666671'
      startBorderColor = '#e1666600'
      break
    case "pink":
      endBorderColor = '#b866e171'
      startBorderColor = '#b866e100'
      break
    case "yellow":
      endBorderColor = '#e1cd6671'
      startBorderColor = '#e1cd6600'
      break;
    case "blue":
    default:
      endBorderColor = '#6691E171'
      startBorderColor = '#6691E100'
      break
  }


  return (
    <div
      className={`rounded-md flex items-center flex-col gap-4 shadow-md ${show === video.value ? 'block' : 'hidden'}`}
      style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '2px solid transparent',
        background: `linear-gradient(45deg , ${startBorderColor} 45%, ${endBorderColor} 90%) border-box`,
      }}
    >
      <video controls width="100%">
        <source src={video.src} type="video/mp4"/>
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div>
        <p>
          {video.description}
        </p>
        <div style={{marginTop: '1rem'}} className={'flex flex-col gap-2'}>
          {video.url.map((url, index) => (
            <a
              key={index}
              className="flex items-center flex-row gap-2 rounded-md"
              style={{
                padding: '0.2rem',
                border: '2px solid transparent',
                background: `linear-gradient(45deg, #3f4461, transparent) padding-box, linear-gradient(90deg, ${endBorderColor} 20%, ${startBorderColor} 80%) border-box`
              }}
              href={url.url}
              target={'_blank'}
            >
              {url.icon}
              {url.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}