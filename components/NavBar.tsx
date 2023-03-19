import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavItem from './NavItem';

function NavBar() {
  const [active, setActive] = useState('');

  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') setActive('Sobre');
    if (router.pathname === '/projects') setActive('Projetos');
    if (router.pathname === '/resume') setActive('Resumo');
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-cyan-light dark:border-cyan-dark">
        {active}
      </span>
      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="Sobre" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resumo"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projetos"
          route="/projects"
        />
      </div>
    </div>
  );
}

export default NavBar;
