import { RiComputerLine } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaSass, FaSalesforce } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { DiReact, DiCss3Full, DiJavascript1 } from 'react-icons/di';
import { IProject, IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: FaSalesforce,
    title: 'Salesforce',
    about:
      'Desenvolvimento de aplicativos do básico ao avançado pelos cursos do <b>Trailhead/PragmaSchool</b>.',
  },
  {
    Icon: RiComputerLine,
    title: 'Lightning Web Component',
    about:
      'Desenvolvimento de componentes <b>Lightning Web Component (LWC)</b>.',
  },
  {
    Icon: DiReact,
    title: 'ReactJS',
    about:
      'Desenvolvimento de sites usando <b>ReactJS</b> e com utilização de typeScript.',
  },
  {
    Icon: SiNextdotjs,
    title: 'NextJS',
    about:
      'Desenvolvimento de sites com renderização híbrida estática e de servidor.',
  },
  {
    Icon: SiTailwindcss,
    title: 'Tailwindcss',
    about: 'Estilização de sites utilizando o Framework TailwindCSS.',
  },
  {
    Icon: DiJavascript1,
    title: 'Javascript',
    about: 'Desenvolvimento de sites usando <b>Javascript</b>.',
  },
];

export const languages: ISkill[] = [
  {
    name: 'Salesforce',
    level: '85%',
    Icon: FaSalesforce,
  },
  {
    name: 'HTML5',
    level: '89%',
    Icon: AiFillHtml5,
  },
  {
    name: 'CSS',
    level: '80%',
    Icon: DiCss3Full,
  },
  {
    name: 'JS',
    level: '89%',
    Icon: DiJavascript1,
  },
  {
    name: 'ReactJS',
    level: '85%',
    Icon: DiReact,
  },
  {
    name: 'NextJS',
    level: '80%',
    Icon: SiNextdotjs,
  },
  {
    name: 'TypeScript',
    level: '90%',
    Icon: SiTypescript,
  },
  {
    name: 'Tailwindcss',
    level: '75%',
    Icon: SiTailwindcss,
  },
  {
    name: 'SCSS',
    level: '73%',
    Icon: FaSass,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Netflix',
    description: 'Clone da página inicial da Netflix feito com React. Para conseguir acesso aos dados de filmes e séries foi ultilizado uma API do The Movie Database (TMDB).',
    imagePath: '/images/netflix.png',
    deployedUrl: 'https://netflixreact-dac17.web.app/',
    githubUrl: 'https://github.com/DarlanRP/NetflixClone',
    keyTechs: ['React', 'JS', 'CSS'],
  },
  {
    id: 2,
    name: 'LetmeAsk',
    description: 'Projeto NLW realizado na Rocketseat feito com React. Para conseguir criar uma sala ou realizar uma pergunta em uma sala existente, você precisa estar logado com sua conta do Google.',
    imagePath: '/images/letmeask.png',
    deployedUrl: 'https://letmeask-4894c.web.app/',
    githubUrl: 'https://github.com/DarlanRP/Chat-P-R-Com-REACT/tree/main/aula/letmeask',
    keyTechs: ['React', 'Typescript', 'SCCS'],
  },
  {
    id: 3,
    name: 'PokemonDex',
    description: 'Site de pokemons utilizando a PokéAPI',
    imagePath: '/images/pokemon.png',
    deployedUrl: 'https://pokemon-dex-orcin.vercel.app/',
    githubUrl: 'https://github.com/DarlanRP/PokemonDex',
    keyTechs: ['React', 'Typescript', 'JS'],
  },
  {
    id: 4,
    name: 'Cardápio de Pizzas',
    description: 'This is a DEX',
    imagePath: '/images/pizzaria.png',
    deployedUrl: 'https://pizzaria-one-mocha.vercel.app/',
    githubUrl: 'https://github.com/DarlanRP/Pizzaria',
    keyTechs: ['Javascript', 'HTML', 'CSS'],
  },
  {
    id: 5,
    name: 'Controle Financeiro',
    description: 'Sistema financeiro feito com Javascript.',
    imagePath: '/images/finances.png',
    deployedUrl: 'https://teste-63172.firebaseapp.com/#',
    githubUrl: 'https://github.com/DarlanRP/App-Finances',
    keyTechs: ['Javascript', 'HTML', 'CSS'],
  },
  {
    id: 6,
    name: 'Controle Financeiro React',
    description: 'Sistema financeiro feito com React.JS.',
    imagePath: '/images/financesReact.png',
    deployedUrl: 'https://financesreact.web.app/',
    githubUrl: 'https://github.com/DarlanRP/FinancesReact',
    keyTechs: ['React', 'Typescript.js', 'JS'],
  },
];
