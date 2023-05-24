import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('Header componentinde "Emoji Search" başlığı görüntüleniyor', () => {
  // Componenti render edin
  const { getByText } = render(<Header />);

  // Başlığı kontrol edin
  const titleElement = getByText(/Emoji Search/i);
  expect(titleElement).toBeInTheDocument();
});
