import { LitElement, html, css } from 'lit';
import { instance } from '@viz-js/viz';

export class QuiDot extends LitElement {
  static properties = {
    dot: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      overflow: auto;
    }
    svg {
      width: 100%;
    }
  `;

  constructor() {
    super();
    this.dot = '';
    this._viz = null;
  }

  async firstUpdated() {
    this._viz = await instance();
    this._renderGraph();
  }

  updated(changedProps) {
    if (changedProps.has('dot') && this._viz) {
      this._renderGraph();
    }
  }

  async _renderGraph() {
    try {
      const svg = await this._viz.renderSVGElement(this.dot);
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(svg);
    } catch (error) {
      this.shadowRoot.innerHTML = `<pre style="color:red;">${error}</pre>`;
    }
  }

  render() {
    return html``;
  }
}

customElements.define('qui-dot', QuiDot);
