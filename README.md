# babel-plugin-s2s-action-builders

> generate declaration of action name

## Install

```
$ yarn add --dev babel-plugin-s2s-action-builders
```

## s2s.config.js

s2s-action-builders plugin watch the `src/builders/*.js` files.

```js
module.exports = {
  watch: './**/*.js',
  plugins: [
    {
      test: /src\/builders\/.*\.js/,
      plugin: ['s2s-action-builders']
    }
  ]
}
```
## Start s2s

Start the s2s with yarn command

`yarn run s2s`

## Usage

You create a `src/builders/*.js`.

#### In:

In the action builder file, type action name with camelcase such as `searchPokemon` and save it.

```js
searchPokemon
```

It will be expanded like this.

#### Out:

```js
let searchPokemon;

```

#### Request/Success/Failure pattern

Type action name containing "Request" with camelcase and save it.

```js
getPokemonRequest
```

It will be expanded like this.

#### Out:

```js
let getPokemonRequest;
let getPokemonSuccess;
let getPokemonFailure;

```

# Test

This plugin has two test files. \
First is babel plugin main test file named `test.js` on root directory. \
Next is a `test/index.js` that will be transformed by the plugin.

Run this command.

` npm run test`

Test will run and you can see what happen.

If you modify the target javascript source code, please change the `test/index.js`.
