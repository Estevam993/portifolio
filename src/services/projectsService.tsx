import {IconAlertCircle, IconAppWindowFilled, IconBrandGithub, IconUserFilled, IconWorldWww} from "@tabler/icons-react";

export default function useProjects() {

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
    {
      icon: <IconAlertCircle/>,
      title: 'Challenge',
      value: 'front_end_challenge'
    },
  ]

  const videos = [
    {
      src: "/videos/modelo_landing_page.mp4",
      description: "Meu primeiro projeto de estudo sozinho, fiz ele em 2023 utilizando apenas HTML, CSS com Bootstrap e JavaScript.",
      url: [
        {
          url: 'https://github.com/Estevam993/modelo_landing_page',
          label: 'modelo_landing_page',
          icon: <IconBrandGithub/>
        }
      ],
      value: 'landing_page',
      color: 'blue'
    },
    {
      src: "/videos/admin_page.mp4",
      description: "Meu segundo projeto, porém agora bem mais avançado com back end em NestJs com autenticação JWT e banco de dados Postgrees e front-end com NextJs com Mui e Axios.",
      url: [
        {
          url: 'https://github.com/Estevam993/admin_page_back',
          label: 'admin_page_back',
          icon: <IconBrandGithub/>
        },
        {
          url: 'https://github.com/Estevam993/admin_page_front',
          label: 'admin_page_front',
          icon: <IconBrandGithub/>
        }
      ],
      value: 'admin_page',
      color: 'pink'
    },
    {
      src: "/videos/front_end_challenge.mp4",
      description: "Esse site foi um desafio que fiz para um processo seletivo. Fiz em NextJs e consumi a API da marvel para pesquisar e exibir os heróis. Para favoritar utilizei local storage.",
      url: [
        {
          url: 'https://frontend-challange-p2zmfeg4u-estevam993s-projects.vercel.app',
          label: 'Challenge',
          icon: <IconWorldWww/>
        }, {
          url: 'https://github.com/Estevam993/frontend-challange',
          label: 'frontend-challange',
          icon: <IconBrandGithub/>
        },
      ],
      value: 'front_end_challenge',
      color: 'green'
    }
  ]

  return {
    videos, projects
  }
}