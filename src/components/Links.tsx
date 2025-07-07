import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail} from "@tabler/icons-react";

const links = [
  {
    label: 'GitHub',
    icon: <IconBrandGithub/>,
    url: 'https://github.com/estevam993',
  },
  {
    label: 'LinkedIn',
    icon: <IconBrandLinkedin/>,
    url: 'https://www.linkedin.com/in/joão-vitor-estevam-462224235/'
  }
]

const contacts = [
  {
    label: 'E-mail',
    icon: <IconMail/>,
    description: 'joaovestevamr@gmail.com'
  },
  {
    label: 'Instagram',
    icon: <IconBrandInstagram/>,
    description: '@joao_o_estevam'
  },
]


export default function Links() {
  return (
    <div
      className={'h-[100vh] overflow-auto'}
      style={{paddingBottom: '5rem', paddingTop: '2rem'}}
    >
      <div className={'text-2xl text-center'}>
        Links e Contatos
      </div>
      <div className={'flex flex-col gap-4 '}>
        <div>
          <div className={'text-2xl'}>
            Links
          </div>
          <div className={'flex flex-col justify-center gap-4'}>
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  className={'flex flex-row items-center gap-2'}
                  href={link.url}
                  target={'_blank'}
                >
                  {link.icon}
                  {link.label}
                </a>
              )
            })
            }
          </div>
        </div>
        <div>
          <div className={'text-2xl'}>
            Contatos
          </div>
          <div className={'flex flex-col justify-center gap-4'}>
            {contacts.map((contact, index) => {
              return (
                <div
                  key={index}
                  className={'flex flex-row items-center gap-2'}
                >
                  {contact.icon} {contact.description}
                </div>
              )
            })
            }
          </div>
        </div>
      </div>

    </div>
  )
}