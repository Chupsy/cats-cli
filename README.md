# Cats-cli

![Node.js CI](https://github.com/Chupsy/cats-cli/workflows/Node.js%20CI/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/Chupsy/cats-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/Chupsy/cats-cli)

Cats is a command line interface to help you to drive your backend server side architecture. The goal is to fit the clean architecture's principal. Here our credo : [The credo](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)

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

4. Install [TSLint](https://palantir.github.io/tslint/)

```
yarn global add tslint
```

## Installation

```
yarn global add cats-cli
```

## Command Line

| Commands          | Desciption                                          | Options |
| ----------------- | --------------------------------------------------- | ------- |
| `cats initialize` | Create in the current directory a brand new project | _None_  |
