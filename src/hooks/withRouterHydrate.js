import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../store';


const withRouterHydrate = (Component) => (props, context) => {
  const router = useRouter();
  const { route, setRoute, direction, setDirection } = useStore();

  useEffect(() => {
    if (!!route && !!direction) {
      router.push(`/${route}/${direction}`)
    } else if (!route || !direction) {
      Object.keys(router.query).length && router.push('/');
    }
  }, [ route, direction ]);
  
  useEffect(() => {
    if (!Object.keys(router.query).length) return;
    const { route, direction } = router.query;

    setRoute(route);
    setDirection(direction);
  }, [ router.query ]);

  return (<Component router={ router } { ...props } { ...context } />);
}

export default withRouterHydrate;