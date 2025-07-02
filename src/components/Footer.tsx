import {ReactElement} from "react";
import {Menu} from "@/types";
import {IconCode, IconHelpHexagon, IconMessage} from "@tabler/icons-react";
import {Tooltip} from "@/components/index";

const menus: Menu[] = [
  {
    name: 'Sobre Mim',
    path: 'sobre_mim',
    icon: <IconHelpHexagon/>
  },
  {
    name: 'Projetos',
    path: 'projetos',
    icon: <IconCode/>
  },
  {
    name: 'Contatos',
    path: 'contatos',
    icon: <IconMessage/>
  }
]

export default function Footer({setView}: { setView: (value: string) => void }): ReactElement {

  const handleClick = (path: string): void => {
    setView(path);
  }

  const Menus = ({menus}: { menus: Menu[] }) => {
    return (
      <div
        className={'flex items-center gap-4'}
      >
        {menus.map((menu, index) =>
          <div
            key={index}
            className={`hover:scale-[1.05] border-purple-300 cursor-pointer transition-border duration-300 ease-in-out `}
            onClick={() => handleClick(menu.path)}
          >
            <Tooltip label={menu.name} className={'hidden sm:block'}>
              {menu.icon}
            </Tooltip>
            <div className={'sm:hidden flex items-center flex-col gap-1'}>
              {menu.icon}
              {menu.name}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={'w-full flex items-center justify-center fixed bottom-0 backdrop-blur-sm'}
      style={{
        padding: '1rem',
      }}
    >
      <Menus menus={menus}/>
    </div>
  )
}