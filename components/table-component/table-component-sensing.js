const table1 = new gridjs.Grid({
  columns: ["HTF", "Heat Capacity (J/kgºC)", "Viscosity", "Cost (SGD/l)", "Availability"],
  data: [
    ["Water", "4180", "x", "x", "Easily available"],
  ],
});
table1.render(document.getElementById("HTF-table"));

const htftable = new gridjs.Grid({
  columns: ["HTF", "Heat Capacity (J/kgºC)", "Viscosity", "Cost (SGD/l)", "Availability"],
  data: [
    ["Water", "4180", "x", "x", "Easily available"],
    ["Water", "4180", "x", "x", "Easily available"],
  ],
});
htftable.render(document.getElementById("HTF-table"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
