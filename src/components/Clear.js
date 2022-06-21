import { Box, Button } from 'grommet';
import { useStore } from '../store';

function Clear() {
  const { reset, route, direction } = useStore();

  if (!route || !direction) return;

  return (
    <>
      <Box margin={{ top: 'medium' }}>
        <Button 
          primary
          width='100%'
          label='Clear Results'
          onClick={ () => reset() } />
      </Box>
    </>
  )
}

export default Clear;