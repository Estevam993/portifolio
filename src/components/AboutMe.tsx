import {JSX} from "react";
import Image from "next/image";
import profile from '@public/images/profile.jpg'
import {Info} from "@/components/index";
import infosObject from './infosObject'

export default function AboutMe(): JSX.Element {

  const ProfilePhoto = (): JSX.Element => {
    return (
      <div className="flex items-center flex-col gap-6">
        <div className="w-[12rem]">
          <Image src={profile} className="rounded-full" alt="profile image"/>
        </div>
        <div className={'sm:hidden flex items-center flex-row '}>
          <h2 className="animate-typewriter text-2xl">
            João Estevam
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div>
      <ProfilePhoto/>
      <div className={'grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-4'}>

        {infosObject.map(info => (
          <Info key={info.name} infoCard={info}/>
        ))}
        
      </div>
    </div>
  )
}