<p align="center">
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/84a216ea852ad8929e8441923658957662a14169/03-ignews/public/images/logo.svg" alt="IG News" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/tavareshenrique/">
      <img alt="Henrique Tavares" src="https://img.shields.io/badge/-Henrique Tavares-eba417?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-eba417">
</p>

> <b>ig.news</b> é o terceiro projeto criado no chapter 3 da trilha de React do Ignite da [Rocketseat](https://github.com/Rocketseat). O projeto consiste num blog onde para ler algum psoto você deverá ser assinante, e é usado a API do [Stripe](https://stripe.com/) para o controle de pagamento e salvando os dados dos inscritos no FaunaDB.

<div align="center">
  <sub>O <strong>ig.news</strong> foi desenvolvido com ❤︎ pelo
    <a href="https://github.com/tavareshenrique">Henrique Tavares</a>
  </sub>
</div>

# :pushpin: Conteúdo

- [Tecnologias](#computer-tecnologias)
- [Executando](#construction_worker-executando)
- [Desafios](#atom_symbol-desafios)
- [Autores](#computer-autores)
- [Licença](#closed_book-licença)

### Fotos

<div>
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview1.png" width="500px" />
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview2.png" width="500px" />
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview3.png" width="500px" />
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/main/03-ignews/src/assets/previews/preview4.png" width="500px" />
</div>

# :computer: Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [FaunaDB](https://fauna.com/)'
- [Axios](https://github.com/axios/axios)
- [Prismic](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# :construction_worker: Executando

```bash
# Clone o Repositório
$ git@github.com:tavareshenrique/ignite-reactjs.git
```

```bash
# Acesse a pasta do projeto
$ cd 03-ignews
```

```bash
# Crie um arquivo .env.local e configure as váriaveis de ambiente

# Stripe
STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_API_PRICE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCESS_URL=
STRIPE_CANCEL_URL=

# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# FaunaDB
FAUNADB_KEY=

# Prismic CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```

```bash
# Baixe as dependendências
$ yarn
```

```bash
# Execute
$ yarn start
```

Acesse <http://localhost:3000> para ver o resultado.

# :atom_symbol: Desafios

[Desafio 5](https://github.com/tavareshenrique/ignite-reactjs-desafio-5): desafio criando um Blog utilizando NextJS e Prismic.

# :computer: Autores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/Rocketseat" title="Linkedin">@Rocketseat</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Creators">🚀</a>
    </td>
  </tr>
</table>

# :closed_book: Licença

Este projeto está sob a licença [MIT](./LICENSE).
