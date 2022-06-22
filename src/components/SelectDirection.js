import { FormField, Select } from 'grommet';
import { useStore } from '../store';
import useDirection from '../hooks/useDirection';
import FormSpinner from './FormSpinner';

function SelectDirection() {
  const { data:defaultOptions, isLoading } = useDirection();
  const { direction, setDirection } = useStore();

  const handleChange = (e) => {    
    setDirection(e.target.value);
  }

  if (isLoading) return <FormSpinner />;
  
  return (
    <FormField>
      <Select
        name='direction'
        options={ defaultOptions }
        value={ direction || '' }
        onChange={ handleChange }
        labelKey='label'
        valueKey={{ key: 'id', reduce: true }}
        placeholder='Select direction'
        plain={ true }
      />
    </FormField>
  )
}

export default SelectDirection;