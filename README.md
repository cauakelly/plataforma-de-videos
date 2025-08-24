# Plataforma de Vídeos

Este projeto é uma plataforma de vídeos construída com React e Vite.

## Requisitos
- Node.js >= 16
- npm >= 7

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd plataforma_de_videos
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Pacotes necessários

- **react**
- **react-dom**
- **react-router-dom**
- **vite**

Estes pacotes já estão listados no `package.json` e serão instalados com o comando acima.

## Scripts

- `npm run dev` — Inicia o servidor de desenvolvimento Vite
- `npm run build` — Gera a versão de produção
- `npm run preview` — Visualiza a versão de produção

## Estrutura do projeto

```
plataforma_de_videos/
  src/
    pages/
      Login.jsx
      Dashboard.jsx
      ...
    App.jsx
    main.jsx
  public/
  package.json
  vite.config.js
  README.md
```

## Observações
- O projeto utiliza CSS Modules para estilização dos componentes.
- Para rodar, basta instalar as dependências e executar `npm run dev`.

## Dependências extras
Se adicionar bibliotecas como ícones (ex: FontAwesome), instale com:
```bash
npm install @fortawesome/fontawesome-free
```
E importe no seu componente conforme a documentação.

---

Dúvidas ou sugestões? Abra uma issue!
