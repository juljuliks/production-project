/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  test('Test render', () => {
    render(<Modal isOpen>TEST</Modal>);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
