import {IconBriefcaseFilled, IconCirclePercentageFilled, IconFileCv, IconSchool} from "@tabler/icons-react";
import {InfoCard} from "@/types/infoCard";

const professionalInfo = {
  color: 'green',
  icon: <IconBriefcaseFilled/>,
  title: 'Objetivo Profissional',
  description: 'Busco oportunidades como desenvolvedor fullstack para aplicar minhas habilidades, ' +
    'utilizando frameworks modernos como Laravel, ASP.net React, Next.js e Nest.js. ' +
    'Meu objetivo é contribuir ativamente no desenvolvimento e manutenção de sistemas, ' +
    'sempre buscando aprimorar minhas competências e acompanhar as melhores práticas do mercado.'
}

const competencesInfo = {
  color: 'pink',
  icon: <IconCirclePercentageFilled/>,
  title: 'Competências',
  description: (
    <div>
      ▸ Linguagens e Tecnologias: PHP, Laravel, JavaScript, React.js, Next.js, Nest.js, MySQL, SQL Server.<br/>
      ▸ Aprendizado Contínuo: Estudo Nest.js e TypeScript para aprimoramento técnico.<br/>
      ▸ Habilidades: Desenvolvimento full stack, otimização de código, criação de novos módulos e manutenção de sistemas
      internos.<br/>
    </div>
  )
}

const experiencesInfo = {
  color: 'blue',
  icon: <IconFileCv/>,
  title: 'Experiência',
  description: (
    <div>
      <strong>Teltex Tecnologia</strong> - Estagiário Desenvolvimento Fullstack<br/>
      Janeiro de 2024 - Junho de 2024<br/><br/>

      <strong>Teltex Tecnologia</strong> - Assistente de Desenvolvimento Fullstack<br/>
      Junho de 2024 - Julho de 2025<br/>

    </div>
  )
}

const educationInfo = {
  color: 'red',
  icon: <IconSchool/>,
  title: 'Educação',
  description: (
    <div>
      <strong>SENAI Anchieta</strong> - Técnico em Mecatrônica<br/>
      <strong>SENAC</strong> - Tecnólogo em Análise e Desenvolvimento de Sistemas
    </div>
  )

}


const infosObject: InfoCard[] = [professionalInfo, competencesInfo, experiencesInfo, educationInfo]
export default infosObject