import {JSX} from "react";
import Image from "next/image";
import profile from '@public/images/profile.jpg'
import {Info} from "@/components/index";
import infosObject from './infosObject'
import StackContainer from "@/components/StackContainer";
import StackLevel from "@/components/StackLevel";
import {
  IconBrandCss3,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconLayout,
  IconServer,
  IconTerminal
} from "@tabler/icons-react";

export default function AboutMe(): JSX.Element {

  const ProfilePhoto = (): JSX.Element => {
    return (
      <div className="flex items-center sm:justify-center flex-col sm:flex-row gap-6">
        <div className="w-[12rem]">
          <Image src={profile} className="rounded-full" alt="profile image"/>
        </div>
        <div className={'flex items-center flex-row '}>
          <h2 className="animate-typewriter text-2xl">
            João Estevam
          </h2>
        </div>
      </div>
    )
  }

  const description = (
    <div className={'flex justify-center w-full'} style={{marginTop: '1rem'}}>
      <div className="border-b border-b-gray-500/45 border-transparent" style={{maxWidth: '60rem'}}>
        E aí! Tenho 21 anos e moro em São Paulo desde que nasci.<br/>
        Meu maior hobbie é tocar guitarra e fazer música — desde que me entendo por gente, tem algo tocando no meu
        fone
        de ouvido.<br/><br/>
        Descobri a programação em 2021, durante meu curso no SENAI, e desde então me apaixonei pela área. Nunca mais
        larguei o osso.<br/><br/>
        Ainda sou júnior, mas tenho sede de aprendizado e me esforço para pensar e evoluir como um sênior.<br/><br/>
      </div>
    </div>

  )

  const infos = (
    <div>
      <div className={'grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-4'}>
        {infosObject.map(info => (
          <Info key={info.title} infoCard={info}/>
        ))}
      </div>
    </div>
  )

  return (
    <div
      className={'h-[100vh] overflow-auto'}
      style={{paddingBottom: '5rem', paddingTop: '2rem'}}
    >
      <ProfilePhoto/>
      {description}
      {infos}

      <div className={'grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-4'}>
        <StackContainer label={'Front End'} color={'blue'}>
          <StackLevel icon={<IconBrandHtml5/>} title={'HTML'} level={5} color={'blue'}/>
          <StackLevel icon={<IconBrandCss3/>} title={'CSS'} level={3} color={'blue'}/>
          <StackLevel icon={<IconBrandTailwind/>} title={'Tailwind'} level={3} color={'blue'}/>
          <StackLevel icon={<IconBrandJavascript/>} title={'Javascript'} level={4} color={'blue'}/>
          <StackLevel icon={<IconBrandTypescript/>} title={'Typescript'} level={3} color={'blue'}/>
          <StackLevel icon={<IconBrandReact/>} title={'React'} level={3} color={'blue'}/>
          <StackLevel icon={<IconBrandNextjs/>} title={'Next'} level={3} color={'blue'}/>
        </StackContainer>
        <StackContainer label={'Back End'} color={'red'}>
          <StackLevel icon={<IconBrandNodejs/>} title={'Node'} level={3} color={'red'}/>
          <StackLevel icon={<IconBrandTypescript/>} title={'Nest'} level={2} color={'red'}/>
          <StackLevel icon={<IconBrandPhp/>} title={'PHP'} level={4} color={'red'}/>
          <StackLevel icon={<IconBrandLaravel/>} title={'Laravel'} level={3} color={'red'}/>
        </StackContainer>
        <StackContainer label={'Data'} color={'pink'}>
          <StackLevel icon={<IconBrandMysql/>} title={'MySQL'} level={4} color={'pink'}/>
          <StackLevel icon={<IconServer/>} title={'SQL Server'} level={3} color={'pink'}/>
        </StackContainer>
        <StackContainer label={'DevOps & Tools'} color={'green'}>
          <StackLevel icon={<IconBrandGit/>} title={'Git'} level={4} color={'green'}/>
          <StackLevel icon={<IconBrandGithub/>} title={'GitHub'} level={4} color={'green'}/>
          <StackLevel icon={<IconBrandVercel/>} title={'Vercel'} level={3} color={'green'}/>
          <StackLevel icon={<IconBrandDocker/>} title={'Docker'} level={1} color={'green'}/>
          <StackLevel icon={<IconTerminal/>} title={'Shell / CLI'} level={3} color={'green'}/>
        </StackContainer>
        <StackContainer label={'Design & UI/UX'} color={'yellow'}>
          <StackLevel icon={<IconBrandFigma/>} title={'Figma'} level={3} color={'yellow'}/>
          <StackLevel icon={<IconLayout/>} title={'Design System'} level={2} color={'yellow'}/>
        </StackContainer>
      </div>
    </div>
  )
}