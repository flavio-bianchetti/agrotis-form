# Agrotis - Form

Este repositório contém o teste prático "_Agrotis - Form_", desafio técnico para a vaga de desenvolvedor Frontend. Este projeto consiste na construção de um formulário simples, seguindo o [template](https://www.figma.com/proto/PXi5PcZWks8Z7veqA8WU30/Teste-Front-end) fornecido pela empresa _[Agrotis](https://www.agrotis.com/solucoes/)_.

---

### Requisitos: 
- Desenvolver com html/css/vanilla ou React.
- Construção do formulario funcional.
- Seguir com fidelidade o prototipo.
- Dar um console.log dos dados de envio.
- Usar MATERIAL-UI para components default (icones/inputs/frames).
- Envio do formulario deve ter o seguinte formato:
```bash
    {
      nome: 'Jon doe',
      dataInicial: '2022-02-02T17:41:44Z',
      dataFinal: '2022-02-02T17:41:44Z',
      infosPropriedade: {
        id: 12345,
        nome: 'Nome Exemplo da fazenda'
    },
      cnpj: 'XX. XXX. XXX/0001-XX',
      laboratorio: {
        id: 1234,
        nome: 'Laboratorio exemplo'
    },
    observacoes: 'Observacao exemplo de teste'
}
```

---
### Itens Opcionais
- Usar styled-componts.
- Usar uma lib de formulario (react-hook-form por exemplo).
- Mockar chamadas de dados dos inputs de select.
- Caso escolha React, usar hooks.

---
### Profissional executor:

- _[Flávio Bianchetti](https://www.linkedin.com/in/flaviobianchetti/)_

---
### Tecnologias utilizadas na construção deste form:

<section>
  <a
    href="https://pt-br.reactjs.org/docs/getting-started.html"
    target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/React-563D7C?style=for-the-badge&logo=react&logoColor=61DAFB"
    />
  </a>
</section>

---

### Página do formulário:
- o formulário pode ser acessado _[aqui](agrotis-form-flavio-bianchetti.surge.sh)_.

### Instalação:

1. Abra o terminal, em um diretório de sua preferência, e faça o clone do projeto:
```bash
  git@github.com:flavio-bianchetti/agrotis-form.git
```

2. Entre no diretório do projeto:
```bash
  cd agrotis-form
```
3. Instale as dependências:
```bash
  npm install
```

4. Inicie a aplicação:
```bash
  npm start 
```
---
### Desafios encontrados no desenvolvimento:
- Aprender a trabalhar com o _[MUI](https://mui.com/pt/)_ em conjunto com o _[React-Hook-Form](https://react-hook-form.com/)_ em um curto intervalo de tempo foi um desafio. Há muito o que aprender ainda.

### Problemas conhecidos não resolvidos:
- **Avisos de tipagem no console:** os componentes que trabalham com _Date_ e _Numbers_ não estão sendo convertidos para _String_, ocorrendo avisos no console.
- **Cabeçalho:** alinhar corretamente os itens no cabeçalho.
- **Botão _'Salvar'_:** a cor do botão precisa ser alterada quando passar o mouse (_css hover_).
- **Componentes:** a cor dos componentes precisa ser alterada, quando pasar o mouse (_css hover_).
- **Componentes _Nome_ e _Datas_:** a disposição dos elementos na tela está incorreta conforme o modelo e precisa ser alterada.
- **Componente _Propriedades_: falta incluir o componente _[ListItemText](https://mui.com/pt/material-ui/api/list-item-text/)_ para ser exibido. Encontrei dificuldade em separar o nome da propriedade do CNPJ ao ser selecionado o item desejado.
- **Mensagens de alerta/sucesso:** não foram implementadas.
- **Testes:** Foi feita a cobertura de apenas 61.38% de todos os arquivos.
- **Complexidade do código:** com a correta utilização do _[MUI](https://mui.com/pt/)_ e do _[React-Hook-Form](https://react-hook-form.com/)_ acredito que a complexidade poderá ser bastante reduzida.

### Aprendizados:
- Utilização do _[MUI](https://mui.com/pt/)_ em conjunto com o _[React-Hook-Form](https://react-hook-form.com/)_.

### Considerações finais:
- Gostaria de agradecer à _[Agrotis](https://www.agrotis.com/solucoes/)_ e a toda a equipe avaliadora pela oportunidade e pelo tempo dispensado na avaliação deste teste técnico.

---

por _[Flávio Bianchetti - 2022](https://github.com/flavio-bianchetti)_.