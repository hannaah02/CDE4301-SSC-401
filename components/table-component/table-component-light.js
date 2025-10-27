const table1 = new gridjs.Grid({
  columns: ["Term", "Measurements by Bellos et al", "Measurements after scaling by 2.12"],
  data: [
    [gridjs.html("<math><mi>L</mi></math>"), gridjs.html("<math><mi>121</mi><mi>m</mi><mi>m</mi></math>"), gridjs.html("<math><mi>256.5</mi><mi>m</mi><mi>m</mi></math>")],
    [gridjs.html("<math><msub><mi>L</mi><mn>1</mn></msub></math>"), gridjs.html("<math><mi>48.4</mi><mi>m</mi><mi>m</mi></math>"), gridjs.html("<math><mi>102.6</mi><mi>m</mi><mi>m</mi></math>")],
    [gridjs.html("<math><mi>&Psi;</mi></math>"), gridjs.html("<math><mi>26.03</mi><mi>m&deg;</mi></math>"), gridjs.html("<math><mi>26.03</mi><mi>m&deg;</mi></math>")],
    [gridjs.html("<math><mi>D</mi></math>"), gridjs.html("<math><mi>70.9</mi><mi>m</mi><mi>m</mi></math> (by geometry)"), gridjs.html("<math><mi>150</mi><mi>m</mi><mi>m</mi></math>")],
  ],
});
table1.render(document.getElementById("Cylindrical-conical-receiver-measurements"));

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
