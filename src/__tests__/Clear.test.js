import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import Clear from '../components/Clear';

describe('Clear Component', () => {
  it('Component does not render without state.', async () => {
    const { queryByText } = render(<Clear />);
    
    await waitFor(() => {
      expect(queryByText('Clear Results')).toBeNull()
    })
  });
});