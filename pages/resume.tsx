import React from 'react';
import { motion } from 'framer-motion';
import Bar from '../components/Bar';
import { languages } from '../data';
import { fadeInUp, routeAnimation } from '../animation';

const resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Formação acadêmica</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Análise e Desenvolvimento de Sistemas
            </h5>
            <p className="font-semibold">
              {' '}
              Universidade Nove de Julho(2017-2019)
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Cursos Técnicos</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Salesforce Developer</h5>
            <p className="font-semibold"> PragmaSchool (2023)</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">Trilhas Web</h5>
            <p className="font-semibold">Rocketseat(2021-2022)</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">ReactJS Completo</h5>
            <p className="font-semibold">B7Web(2022-2023)</p>
          </div>
        </motion.div>
      </div>
      <div className="mt-8">
        <h5 className="mb-5 my-3 text-2xl font-bold text-center">
          Linguagens & Frameworks
        </h5>
        <div className="grid gap-5 md:grid-cols-2 my-2">
          {languages.map((language) => (
            <Bar data={language} key={language.name} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
