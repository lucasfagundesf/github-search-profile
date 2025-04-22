# GitHub Profile Search

Um aplicativo web que permite buscar e visualizar perfis de usuários do GitHub de forma rápida e intuitiva.

## 📋 Sobre o Projeto

Este projeto é uma aplicação web desenvolvida com React que utiliza a API do GitHub para buscar informações detalhadas sobre perfis de usuários. Com uma interface amigável e responsiva, é possível visualizar dados como repositórios, seguidores, seguindo e outras estatísticas relevantes dos usuários do GitHub.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário
- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização
- [Material UI](https://mui.com/) - Biblioteca de componentes React para design rápido e avançado
  - Componentes utilizados: Alert, Box, CircularProgress
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Linguagem de programação
- [GitHub API](https://docs.github.com/en/rest) - API para acesso aos dados do GitHub

## ⚙️ Pré-requisitos

- Node.js (versão 10.7.x ou superior)
- npm ou yarn

## 🔧 Instalação

Siga estas etapas para executar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/lucasfagundesf/github-search-profile.git

# Entre no diretório do projeto
cd github-profile-search

# Instale as dependências
npm install
# ou
yarn install

# Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse o aplicativo em `http://localhost:5173/` no seu navegador.

## 🖥️ Como Usar

1. Digite o nome de usuário do GitHub na barra de pesquisa
2. Clique no botão "Buscar" ou pressione Enter
3. Visualize as informações detalhadas do perfil do usuário:
   - Avatar
   - Nome 
   - Bio 

## 📂 Estrutura do Projeto

```
github-profile-search/
├── public/
│   └── ...
├── src/
│   ├── assests/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── script.js
├── .gitignore
├── .eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🛠️ Funcionalidades

- Busca em tempo real de perfis do GitHub
- Visualização de informações detalhadas dos usuários
- Interface responsiva que se adapta a diferentes tamanhos de tela
- Indicador de carregamento com CircularProgress durante as requisições à API
- Notificações e alertas informativos utilizando o componente Alert
- Estruturação e organização do layout com Box do Material UI
- Design moderno combinando Tailwind CSS e componentes Material UI
- Tratamento de erros para usuários não encontrados

## 💻 Detalhes de Implementação

O projeto faz uso dos seguintes componentes do Material UI:
- **Alert**: Utilizado para exibir mensagens de erro quando um usuário não é encontrado ou quando ocorrem problemas na requisição à API
- **CircularProgress**: Implementado como indicador visual durante o carregamento de dados do perfil

## 🤝 Contribuição

Este projeto foi desenvolvido individualmente, mas sugestões e contribuições são bem-vindas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT 

## 📞 Contato

Lucas Fagundes Franco - [lucas_fagundesfranco@hotmail]

Link do projeto: [https://lucasfagundesf.github.io/github-search-profile](https://lucasfagundesf.github.io/github-search-profile)

## 🙏 Agradecimentos

- GitHub pela disponibilização da API
- Comunidades React, Material UI e Tailwind CSS pelos recursos e documentação
