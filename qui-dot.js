import { LitElement, html, css } from 'lit';
import { instance } from '@viz-js/viz';
import Panzoom from '@panzoom/panzoom';

export class QuiDot extends LitElement {
  static properties = {
    dot: { type: String },
    enablePanZoom: { type: String },
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
    this.enablePanZoom = 'true';
    this._viz = null;
  }

  async firstUpdated() {
    this._viz = await instance();
    this._renderGraph();
  }

  updated(changedProps) {
    if ((changedProps.has('dot') || changedProps.has('enablePanZoom')) && this._viz) {
      this._renderGraph();
    }
  }

  async _renderGraph() {
    try {
      const svg = await this._viz.renderSVGElement(this.dot);
      this.shadowRoot.innerHTML = '';
      const container = document.createElement('div')
      container.appendChild(svg);
      this.shadowRoot.appendChild(container);
      if (this.enablePanZoom === 'true') {
        const panzoom = Panzoom(svg);
        container.addEventListener('wheel', panzoom.zoomWithWheel)
      }
    } catch (error) {
      this.shadowRoot.innerHTML = `<pre style='color:red;'>${error}</pre>`;
    }
  }

  render() {
    return html``;
  }
}

customElements.define('qui-dot', QuiDot);
