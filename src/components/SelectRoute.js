import { useState } from 'react';
import { Box, FormField, Select, Spinner } from 'grommet';
import { useStore } from '../store';
import useRoutes from '../hooks/useRoutes';
import FormSpinner from './FormSpinner';

function SelectRoute() {
  const { route, setRoute, reset} = useStore();
  const { data:defaultOptions, isLoading, isError } = useRoutes(); 
  const [ options, setOptions ] = useState(defaultOptions);
  
  const handleChange = (e) => {
    if (!!route) reset();
    setRoute(e.target.value);
  }

  const handleClose = () => setOptions(defaultOptions);

  const handleSearch = (text) => {
    const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    const regexp = new RegExp(escapedText, 'i');
    setOptions(defaultOptions.filter(o => o.label.match(regexp)));
  }

  if (isLoading) return <FormSpinner />;

  return (
    <FormField>
      <Select
        name="route"
        options={ options || defaultOptions }
        value={ route || '' }
        labelKey='label'
        valueKey={{ key: 'id', reduce: true }}
        placeholder='Select route'
        searchPlaceholder='Search'
        plain={ true }
        clear={{ position: 'bottom', label: 'Clear route' }}
        onChange={ handleChange }
        onClose={ handleClose }
        onSearch={ handleSearch }
      />  
    </FormField>
  )
}

export default SelectRoute;