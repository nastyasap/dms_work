import React from 'react';
import { VerticalTabs } from '../../components/MenuTabs/VerticalTabs';
import { HorizontalTabs } from '../../components/MenuTabs/HorizontalTabs';
import s from './FuelControl.module.scss';

export const FuelControl: React.FC = () => {
  return (
    <div>
      <HorizontalTabs />
      <VerticalTabs />
    </div>
  );
};
