import { Box, Heading, List, Spinner, Text } from 'grommet';
import useStops from '../hooks/useStops';
import Clear from '../components/Clear';

function StopList() {
  const { data, isLoading, isError } = useStops();
  
  if (isLoading) return (
    <Box pad='small' align='center'>
      <Spinner />
    </Box>
  );

  return (
    <>
      <Box>
        <Box width='full' background='light-3' pad={{ 'left':'small', 'right':'small' }}>
          <Heading level='4' color='dark-5'>Available Stops</Heading>
        </Box>
        <List
          a11yTitle='Metro Transit Stops'
          data={ data }
          primaryKey={(item) => (
            <Text key={item.label} pad='xsmall'>
              { item.label }
            </Text>
          )}
          secondaryKey='id'
        />
      </Box>
      <Clear />
    </>
  )
}

export default StopList;