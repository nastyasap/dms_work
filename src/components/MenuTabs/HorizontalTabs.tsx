import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const HorizontalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={false}
      aria-label="scrollable prevent tabs example"
    >
      <Tab label="2 недели" />
      <Tab label="1 месяц" />
      <Tab label="2 месяца" />
      <Tab label="3 месяца" />
    </Tabs>
  );
};
