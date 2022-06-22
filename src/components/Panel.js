import { Box, Form, Heading } from 'grommet';
import { useStore } from '../store';
import SelectRoute from './SelectRoute';
import SelectDirection from './SelectDirection';
import StopList from './StopList';

function Panel() {
  const { route, direction } = useStore();

  return (
    <Box background='light-1' pad='medium'>
      <Form>
        <SelectRoute />
        { route && <SelectDirection /> }
        { direction && <StopList /> }
      </Form>
    </Box>
  )
}

export default Panel;