import Head from 'next/head';
import withRouterHydrate from '../hooks/withRouterHydrate';
import Panel from '../components/Panel';

function Page() {
  
  return (
    <>
      <Head>
        <title>NextStop</title>
        <meta name="description" content="View Available Stops by a given Route" />
      </Head>
      <Panel />
    </>
  );
}

export default withRouterHydrate(Page);