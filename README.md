# &lt;rubber-duck-debugger&gt;

> Custom Element with full-featured debugging tool, with blazing performance.

## Demo

[Check it live!](http://tomalec.github.io/rubber-duck-debugger)

## Install

Install the component using NPM:

```sh
$ npm install tomalec/rubber-duck-debugger --save
```

Or [download as ZIP](https://github.com/tomalec/rubber-duck-debugger/archive/gh-pages.zip).

## Usage

1. Import Custom Element:

    ```js
    import 'rubber-duck-debugger';
    ```
    or
    ```html
    <script type="module" src="node_modules/rubber-duck-debugger/src/rubber-duck-debugger.js"></script>
    ```

2. Start using it!

    ```html
    <rubber-duck-debugger></rubber-duck-debugger>
    ```


## Methods

Method        | Parameters        | Returns | Description
---           | ---               | ---     | ---
`ask()`       | {String} question |         | Ask any kind of technical question. Describe problem well, to find out the solution.

## Properties

Property        | Type        |  Description
---           | ---               | ---
`listening`       | {Boolean} | Is duck listening to your problem.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install local dependencies:

    ```sh
    $ npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ npx grunt server
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For a detailed changelog, check [Releases](https://github.com/tomalec/rubber-duck-debugger/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
