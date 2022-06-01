# snowpack-plugin-macros
This plugin adds basic macros to snowpack.

## Usage

### Install

```
npm install --save-dev snowpack-plugin-replace
```

### Config

add this plugin to your Snowpack config:

**snowpack.config.js**
```javascript
{
  plugins: [[
    'snowpack-plugin-replace',
    {
      "<matches>": ({results, contents, ext, path})=>""
    },
  ]]
}
```

The paramter object expects entries of the type: `String: Function`.

The key is used to create a RegExp which will be used to replace the content of the file.
The provided function is an extended replace callback function, with an object as its argument:

``` javascript
{
/// results of regexp replace function
/// will be of following layout:
/// [matches, ...positional_arguments, offset, contents, groups]
/// Find out more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter
results: [],

/// the content of the file being edited
contents: "",
/// the file extension
/// either .js or .css
ext: "",
/// path to the given file
path: ""
}
```

### Restrictions

This plugin works on the snowpack transform stage, so its only works on `*.js` or `*.css` files.

> *Don't worry about others file like `*.ts`, `*.less`, they will be transformed to one of the above by snowpack*

## Shoutouts
- to (monorailgun)[https://github.com/moonrailgun] for the (snowpack-plugin-replace)[https://github.com/moonrailgun/snowpack-plugin-replace] which I used as a starting point for this project
