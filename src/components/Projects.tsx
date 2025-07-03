'use client'
import {JSX, useState} from "react";
import {IconAppWindowFilled, IconBrandGithub, IconUserFilled} from "@tabler/icons-react";

const projects = [
  {
    icon: <IconAppWindowFilled/>,
    title: 'Landing Page',
    value: 'landing_page'
  },
  {
    icon: <IconUserFilled/>,
    title: 'Admin Page',
    value: 'admin_page'
  },
]

const videos = [
  {
    src: "/videos/modelo_landing_page.mp4",
    description: "Meu primeiro projeto de estudo sozinho, fiz ele em 2023 utilizando apenas HTML, CSS com Bootstrap e JavaScript.",
    url: [{url: 'https://github.com/Estevam993/modelo_landing_page', label: 'modelo_landing_page'}],
    value: 'landing_page'
  }, {
    src: "/videos/admin_page.mp4",
    description: "Meu segundo projeto, porém agora bem mais avançado com back end em NestJs com autenticação JWT e banco de dados Postgrees e front-end com NextJs com Mui e Axios.",
    url: [
      {
        url: 'https://github.com/Estevam993/admin_page_back',
        label: 'admin_page_back'
      },
      {
        url: 'https://github.com/Estevam993/admin_page_front', label: 'admin_page_front'
      }
    ],
    value: 'admin_page'
  },
]

export default function Projects(): JSX.Element {
  const [show, setShow] = useState<string>('landing_page')

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
          <div
            key={index}
            className={`flex items-center flex-col gap-4 ${show === video.value ? 'block' : 'hidden'}`}
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
                  <div key={index} className="flex items-center flex-row gap-2 text-blue-500">
                    <IconBrandGithub/>
                    <a href={url.url} target={'_blank'}>{url.label}</a>
                  </div>
                ))}

              </div>
            </div>
          </div>
        ))}

      </div>
      <div
        className={'w-full h-20 flex justify-around items-center gap-4 overflow-auto shadow-lg'}
        style={{padding: '1rem'}}
      >
        {projects.map((project, index) => (
          <div
            key={index} className={'flex items-center flex-col gap-1 min-w-[100px]'}
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