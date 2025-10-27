const table1 = new gridjs.Grid({
  columns: ["HTF", "Heat Capacity (J/kgºC)", "Viscosity", "Cost (SGD/l)", "Availability"],
  data: [
    ["Water", "4180", "x", "x", "Easily available"],
  ],
});
table1.render(document.getElementById("HTF-table"));

const table2 = new gridjs.Grid({
  columns: ["Variable", "Used"],
  data: [
    ["Receiver", "Cylindrical-conical"],
    ["Light source", "White LED"],
    ["Volume of water in receiver", "0.1987 l"],
    ["Irradiance intensity", "?"],
    ["Flow rate", "0.1167l/min (10% of Grothen G928A Peristaltic pump)"],
  ],
});
table2.render(document.getElementById("Exp-1-details"));

const table3 = new gridjs.Grid({
  columns: ["Type of variable", "Measurements", "Measuring device"],
  data: [
    ["Main variables", gridjs.html("<ul><li>Temperature of water in inlet container</li><li>Temperature of water in outlet container</li></ul>"), "Thermocouple"],
    ["Additional variables", gridjs.html("<ul><li>Humidity</li><li>Temperature at centre of mirror</li><li>Temperature at bottom of receiver</li><li>Atmospheric temperature</li></ul>"), gridjs.html("<ul><li>Humidity sensor</li><li>Thermocouple</li></ul>")],
  ],
});
table3.render(document.getElementById("Exp-1-measurements"));

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
