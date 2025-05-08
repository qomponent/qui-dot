# qui-dot
A Lit-based web component to show dot files

## Installation

```bash
npm i @qomponent/qui-dot
```

## Usage

```javascript


import { LitElement, html, css } from 'lit';
import '@qomponent/qui-dot';

class MyMainComponent extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`<qui-dot dot="digraph { Hello -> World }"></qui-dot>
    `;
  }
}

customElements.define('my-main-component', MyMainComponent);


```

## Example

To run the example:

```bash
npm install
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)
