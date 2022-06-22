import { Box, FormField, Spinner } from 'grommet';

function FormSpinner() {

  return (
    <FormField>
      <Box pad='small' align='center'>
        <Spinner />
      </Box>
    </FormField>
  )
}

export default FormSpinner;