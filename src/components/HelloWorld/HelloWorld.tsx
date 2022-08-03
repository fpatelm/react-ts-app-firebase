import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import styles from './HelloWorld.module.scss';

interface HelloWorldProps { }

const HelloWorld: FC<HelloWorldProps> = () => {
  return (
    <div className={styles.HelloWorld}>
      HelloWorld Component

    </div>
  );
}
export default HelloWorld;
