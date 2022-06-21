import useTransitApi from './useTransitApi';
import { useStore } from '../store';

const fetcher = (...args) => 
  fetch(...args)
    .then((res) => res.json())
    .then((items) => items.reduce((accum, item) => {
      accum.push({ id: item.direction_id.toString(), label: item.direction_name });
      return accum;
    }, []));

function useDirection() {
  const { route } = useStore();
  const url = (route) ? `https://svc.metrotransit.org/nextripv2/directions/${route}` : null;

  return useTransitApi(url, fetcher);
}

export default useDirection;