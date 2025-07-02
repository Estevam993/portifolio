"use client"
import {JSX, useState} from "react";

import {AboutMe, Footer, MainContainer, Projects} from "@/components";

export default function Home(): JSX.Element {
  const [view, setView] = useState('sobre_mim');

  return (
    <>
      <Footer setView={setView}/>
      <div className="flex items-center justify-center h-screen w-screen -mx-auto">
        <MainContainer>
          {view === 'sobre_mim' && (
            <AboutMe/>
          )}
          {view === 'projetos' && (
            <Projects/>
          )}
        </MainContainer>
      </div>
    </>
  );
}
