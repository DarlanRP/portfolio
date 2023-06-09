/* eslint-disable react/function-component-definition */
import React, { FunctionComponent } from 'react';
import { IService } from '../type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-10 h-7 text-cyan-light dark:text-cyan-dark" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <h4 dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
