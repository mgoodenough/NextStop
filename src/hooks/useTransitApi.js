import useSWR from 'swr';

function useTransitApi(url, fetcher) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useTransitApi;