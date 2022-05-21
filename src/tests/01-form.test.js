import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {render as rtlRender, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// solução encontrada em:
// https://testing-library.com/docs/example-codesandbox/
const render = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(component, { wrapper: Router });
};

describe('1 - Renderiza a página do formulário', () => {
  it ('o título está presente', () => {
    render(<App />);
    expect(screen.getByText(/teste front-end/i)).toBeInTheDocument();
  });

  it('o campo "Nome" está presente', () => {
    render(<App />);
    expect(screen.getByTestId('input-name')).toBeInTheDocument();
  });

  it('o campo "Data Inicial" está presente', () => {
    render(<App />);
    expect(screen.getByTestId('input-initial-date')).toBeInTheDocument();
  });

  it('o campo "Data Final" está presente', () => {
    render(<App />);
    expect(screen.getByTestId('input-final-date')).toBeInTheDocument();
  });

  it('o campo "Propriedades" está presente', () => {
    render(<App />);
    expect(screen.getByTestId('select-properties')).toBeInTheDocument();
  });

  it('o campo "Laboratório" está presente', () => {
    render(<App />);
    expect(screen.getByTestId('select-laboratory')).toBeInTheDocument();
  });

  it('o campo "Observações" está presente', () => {
    render(<App />);
    expect(screen.getByTestId('textarea-observations')).toBeInTheDocument();
  });

  it('o botão "SALVAR" está presente', () => {
    render(<App />);
    expect(screen.getByTestId('button-save')).toBeInTheDocument();
  });

  it('o botão "SALVAR" está desabilitado', () => {
    render(<App />);
    expect(screen.getByTestId('button-save')).toBeDisabled();
  });

  it('o botão "SALVAR" fica habilitado após a inserção das informações', () => {
    render(<App />);
    const name = screen.getByTestId('input-name');
    const initialDate = screen.getByTestId('input-initial-date');
    const finalDate = screen.getByTestId('input-final-date');
    const properties = screen.getByTestId('select-properties');
    const laboratory = screen.getByTestId('select-laboratory');
    const observations = screen.getByTestId('textarea-observations');
    const button = screen.getByTestId('button-save');
    userEvent.type(name, 'Sebastião Ferreira Maia');
    userEvent.type(initialDate, '01/01/2022');
    userEvent.type(finalDate, '01/01/2023');
    userEvent.type(properties, 'Agrotis 1');
    userEvent.type(laboratory, 'Agro Skynet');
    userEvent.type(observations, 'Não há observações');
    expect(button).not.toBeDisabled();
  });
});
