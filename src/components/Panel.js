import { Box, Form, Heading } from 'grommet';

import SelectRoute from './SelectRoute';
import SelectDirection from './SelectDirection';
import StopList from './StopList';

function Panel() {

  return (
    <Box background='light-1' pad='medium'>
      <Form>
        <SelectRoute />
        <SelectDirection />
        <StopList />
      </Form>
    </Box>
  )
}

export default Panel;