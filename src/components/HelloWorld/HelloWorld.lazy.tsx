import React, { lazy, Suspense } from 'react';

const LazyHelloWorld = lazy(() => import('./HelloWorld'));

const HelloWorld = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHelloWorld {...props} />
  </Suspense>
);

export default HelloWorld;
