# &lt;rubber-duck-debugger&gt;

> Custom Element with full-featured debugging tool, with blazing performance.

## Demo

[Check it live!](http://tomalec.github.io/rubber-duck-debugger)

## Install

Install the component using [Bower](http://bower.io/) or npm:

```sh
$ bower install rubber-duck-debugger --save
$ npm install tomalec/rubber-duck-debugger --save
```

Or [download as ZIP](https://github.com/tomalec/rubber-duck-debugger/archive/gh-pages.zip).

## Usage

1. Import Custom Element:

    ```html
    <script type="module" src="node_modules/rubber-duck-debugger/src/rubber-duck-debugger.js"></script>
    <!-- or -->
    <script type="module" src="bower_components/rubber-duck-debugger/src/rubber-duck-debugger.js"></script>
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

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
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
