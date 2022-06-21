import useTransitApi from './useTransitApi';
import { useStore } from '../store'; 

 const fetcher = (...args) => 
  fetch(...args)
    .then((res) => res.json())
    .then((items) => items.reduce((accum, item) => {
      accum.push({ id: item.place_code, label: item.description });
      return accum;
    }, []));

function useStops() {
  const { route, direction } = useStore();
  const url = (route && direction) ? `https://svc.metrotransit.org/nextripv2/stops/${route}/${direction}` : null;

  return useTransitApi(url, fetcher);
}

export default useStops;