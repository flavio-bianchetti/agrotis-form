import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterProvider from '../renderWithRouterProvider';


describe('1 - Renderiza a página do formulário', () => {
  it ('o título está presente', () => {
    const { getByText } = renderWithRouterProvider(<App />);
    expect(getByText(/teste front-end/i)).toBeInTheDocument();
  });

  it('o campo "Nome" está presente', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('input-name')).toBeInTheDocument();
  });

  it('o campo "Data Inicial" está presente', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('input-initial-date')).toBeInTheDocument();
  });

  it('o campo "Data Final" está presente', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('input-final-date')).toBeInTheDocument();
  });

  it('o campo "Propriedades" está presente', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('select-properties')).toBeInTheDocument();
  });

  it('o campo "Laboratório" está presente', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('select-laboratory')).toBeInTheDocument();
  });

  it('o campo "Observações" está presente', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('textarea-observations')).toBeInTheDocument();
  });

  it('o botão "SALVAR" está presente', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('button-save')).toBeInTheDocument();
  });

  it('o botão "SALVAR" está desabilitado', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('button-save')).toBeDisabled();
  });

  it('o botão "SALVAR" fica habilitado após a inserção das informações', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    const name = getByTestId('input-name');
    const initialDate = getByTestId('input-initial-date');
    const finalDate = getByTestId('input-final-date');
    const properties = getByTestId('select-properties');
    const laboratory = getByTestId('select-laboratory');
    const observations = getByTestId('textarea-observations');
    const button = getByTestId('button-save');
    userEvent.type(name, 'Sebastião Ferreira Maia');
    userEvent.type(initialDate, '01/01/2022');
    userEvent.type(finalDate, '01/01/2023');
    userEvent.type(properties, 'Agrotis 1');
    userEvent.type(laboratory, 'Agro Skynet');
    userEvent.type(observations, 'Não há observações');
    expect(button).not.toBeDisabled();
  });
});