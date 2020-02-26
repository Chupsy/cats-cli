# Cats-cli

![Node.js CI](https://github.com/Chupsy/cats-cli/workflows/Node.js%20CI/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/Chupsy/cats-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/Chupsy/cats-cli)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
![GitHub](https://img.shields.io/github/license/chupsy/cats-cli)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3699/badge)](https://bestpractices.coreinfrastructure.org/projects/3699)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Cats is a command line interface to help you to drive your backend server side architecture. The goal is to fit the clean architecture's ideas.

## About

This project aims to be a simple CLI allowing user to create, handle and modify easily their back-end projects in clean architecture by guiding them through all the steps. Cats is not meant to block you in a specific implementation, but to guide you in order to have a simple, yet powerful architecture.

If you encounter an bug, wish to contribute, or simply have a question, feel free to check the [contributing guidelines](CONTRIBUTING.md) and our [code of conduct](CODE_OF_CONDUCT.md) to help you through it!

## Disclaimer

As you may know, clean architecture is a principle, and can be interpreted in many ways. We do not claim to have the real and final architecture for this in typescript, this is simply our understanding of it.

Feel free to contribute!

## Prerequisite

1. Install [NodeJS](https://nodejs.org/en/), [NPM](https://www.npmjs.com/) should come with. Please use at least one of both LTS.
2. Install [Yarn 2](https://yarnpkg.com/getting-started/install), it is the as NPM but faster and stronger :

```
npm install -g yarn@berry
```

3. Install [Typescript](https://www.typescriptlang.org/)

```
yarn global add typescript
```

## Installation

```
yarn global add cats-cli
OR
npm install -g cats-cli
```

## Command Line

| Commands          | Desciption                                          | Options |
| ----------------- | --------------------------------------------------- | ------- |
| `cats initialize` | Create in the current directory a brand new project | _None_  |

## Documentation

You can find a lot of documentation for clean architecture, in a lot of languages. For our part, we believe that these resources are the best to start with:

-   [Uncle Bob's blog](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
-   [Uncle Bob's book](https://books.google.fr/books/about/Clean_Architecture.html?id=uGE1DwAAQBAJ&source=kp_book_description&redir_esc=y)
-   [Martin Fowler's Patterns of Enterprise Application Architecture](https://books.google.fr/books/about/Patterns_of_Enterprise_Application_Archi.html?id=Jl5rkQnbfAIC&source=kp_book_description&redir_esc=y)
-   [explicit architecture](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)

## License

This project is under the GNU GENERAL PUBLIC LICENSE V3, feel free to [check it](LICENSE.md) before using this package.
