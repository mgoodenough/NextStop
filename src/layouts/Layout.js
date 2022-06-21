import Head from 'next/head';
import { Bus, Github } from 'grommet-icons';
import { 
  Anchor, 
  Avatar,
  Box, 
  Card, 
  CardBody,
  CardHeader,
  Heading,
  Main, 
  Nav, 
  Footer } from 'grommet';

function Layout({ children }) {

  return (
    <Box fill={ true }>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Main
        align='center'
        fill={ false }
        pad='large'
        responsive={ true }>
        <Card 
          background='white'
          border={{ color: 'light-6', size: 'xsmall' }}
          elevation='large'
          round='small'
          width='large'>
          <CardHeader margin='auto' pad='medium'>
            <Avatar background='light-3' size='large'>
              <Bus color='#0053A0' size='large' />
            </Avatar>
            <Heading color='#0053A0'>NextStop</Heading>
          </CardHeader>
          <CardBody>
            { children }
          </CardBody>
        </Card>           
      </Main>

      <Footer 
        background='light-3'>
        <Nav direction="row" align="center">
          <Anchor
            a11yTitle='Github repository'
            href='https://github.com/mgoodenough/NextStop'
            icon={<Github color="black" />}
            target='_blank'
            rel='noreferrer noopener'
          />
        </Nav>
      </Footer>
    </Box>
  )
}

export default Layout;