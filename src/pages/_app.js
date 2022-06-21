import { Grommet } from 'grommet';
import theme from '../themes/theme';
import StoreProvider from '../store';
import Layout from '../layouts/Layout';

function NextStop({ Component, pageProps }) {

  return (
    <StoreProvider>
      <Grommet theme={ theme } full={ true }>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </Grommet>
    </StoreProvider>
  )
}

export default NextStop;