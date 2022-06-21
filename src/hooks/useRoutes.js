import useTransitApi from './useTransitApi';

const fetcher = (...args) => 
  fetch(...args)
    .then((res) => res.json())
    .then((items) => items.reduce((accum, item) => {
      accum.push({ id: item.route_id, label: item.route_label });
      return accum;
    }, []));

function useRoutes() {  
  const url = 'https://svc.metrotransit.org/nextripv2/routes';
  return useTransitApi(url, fetcher);
}

export default useRoutes;