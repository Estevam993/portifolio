'use client'
import {JSX, useState} from "react";
import VideoContainer from "@/components/VideoContainer";
import useProjects from "@/services/projectsService";

export default function Projects(): JSX.Element {
  const [show, setShow] = useState<string>('landing_page')
  const {projects, videos} = useProjects()

  return (
    <div
      className={'h-[100vh] overflow-auto'}
      style={{paddingBottom: '5rem', paddingTop: '2rem'}}
    >
      <div className={'text-2xl text-center'}>
        Projetos
      </div>
      <div className={'flex flex-col'} style={{marginTop: '1rem'}}>
        {videos.map((video, index) => (
          <VideoContainer video={video} color={video.color} show={show} key={index}/>
        ))}
      </div>
      <div
        className={'w-full h-20 flex justify-around items-center gap-4 overflow-auto shadow-lg'}
        style={{padding: '1rem'}}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex items-center flex-col gap-1 min-w-[100px] ${show === project.value ? ' border-b-2 border-pink-300 ' : ''}`}
            onClick={() => setShow(project.value)}
          >
            {project.icon}
            {project.title}
          </div>
        ))}
      </div>

    </div>
  )
}