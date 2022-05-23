import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { screen } from "@testing-library/react";
import renderWithRouterAndProvider from "../renderWithRouterAndProvider";

describe("1 - Renderiza a página do formulário", () => {

  it ("o título está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByText("Teste front-end")).toBeInTheDocument();
  });

  it("o campo 'Nome' está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByTestId("input-name")).toBeInTheDocument();
  });

  it("o campo 'Data Inicial' está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByTestId("input-initial-date")).toBeInTheDocument();
  });

  it("o campo 'Data Final' está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByTestId("input-final-date")).toBeInTheDocument();
  });

  it("o campo 'Propriedades' está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByTestId("select-properties")).toBeInTheDocument();
  });

  it("o campo 'Laboratório' está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByTestId("select-laboratory")).toBeInTheDocument();
  });

  it("o campo 'Observações' está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByTestId("textarea-observations")).toBeInTheDocument();
  });

  it("o botão 'SALVAR' está presente", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByText(/salvar/i)).toBeInTheDocument();
  });
});

describe("2 - Testa o formulário", () => {
  it("o formulário está vazio", () => {
    renderWithRouterAndProvider(<App />);
    expect(screen.getByTestId("input-name").value).toBe("");
    expect(screen.getByTestId("input-initial-date").value).toBe("");
    expect(screen.getByTestId("input-final-date").value).toBe("");
    expect(screen.getByTestId("select-properties").value).toBe("");
    expect(screen.getByTestId("select-laboratory").value).toBe("");
    expect(screen.getByTestId("textarea-observations").value).toBe("");
  });

  it("o formulário está preenchido", () => {
    renderWithRouterAndProvider(<App />);
    userEvent.type(screen.getByTestId("input-name"), "Teste");
    userEvent.type(screen.getByTestId("input-initial-date"), "01/01/2020");
    userEvent.type(screen.getByTestId("input-final-date"), "01/01/2020");
    userEvent.selectOptions(screen.getByTestId("select-properties"), "1");
    userEvent.selectOptions(screen.getByTestId("select-laboratory"), "1");
    userEvent.type(screen.getByTestId("textarea-observations"), "Teste");
    expect(screen.getByTestId("input-name").value).toBe("Teste");
    expect(screen.getByTestId("input-initial-date").value).toBe("01/01/2020");
    expect(screen.getByTestId("input-final-date").value).toBe("01/01/2020");
    expect(screen.getByTestId("select-properties").value).toBe("1");
    expect(screen.getByTestId("select-laboratory").value).toBe("1");
    expect(screen.getByTestId("textarea-observations").value).toBe("Teste");
  });
});
