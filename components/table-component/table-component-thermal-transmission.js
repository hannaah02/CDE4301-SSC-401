const table9 = new gridjs.Grid({
  data: [
    [gridjs.html("Medium"), "Water"],
    [gridjs.html("Volume in receiver"), gridjs.html("<math><mi>0.198717</mi><mi>l</mi></math>")],
    [gridjs.html("Volume in intermediate pipe"), gridjs.html("<math><mi>0.057267</mi><mi>l</mi></math>")],
    [gridjs.html("Volume in TES"), gridjs.html("<math><mi>22</mi><mi>l</mi></math>")],
    [gridjs.html("Installable volume"), gridjs.html("<math><mi>22.255984</mi><mi>l</mi></math>")],

    [gridjs.html("Type of flow"), "Laminar (low speed flow)"],
    [gridjs.html("Flow rate"), gridjs.html("<math><mi>0.204184</mi><mo>-</mo><mi>0.408367</mi><mi>l</mi><mo>/</mo><mi>min</mi></math>")],
    [gridjs.html("Fluid flow mechanism"), "Pump"],
    [gridjs.html("Power consumption"), "44.45 W"],
    [gridjs.html("Pump height"), "0m above ground"],
    [gridjs.html("Length of pipes"), gridjs.html("Receiver length: 10.41 m<br />Intermediate piping length: 3 m")],

    [gridjs.html("Insulation material"), "Polyisocyanurate/Polyurethane foam (PIR/PUR)"],
    [gridjs.html("Thermal conductivity of insulating material"), gridjs.html("0.023 – 0.026 <math><mi>W</mi><mo>/</mo><mi>m</mi><mi>K</mi></math>")],
    [gridjs.html("Maximum heat loss in intermediate pipes"), "5% of power absorbed: 7.11 W"],
  ],
});
table9.render(document.getElementById("tt-specs"));

const table1 = new gridjs.Grid({
  columns: ["HTF", gridjs.html("<math><msub><mi>T</mi><mn>min</mn></msub></math>, <math><mo>&deg;</mo><mi>C</mi></math>"), gridjs.html("<math><msub><mi>T</mi><mn>min</mn></msub></math>, <math><mo>&deg;</mo><mi>C</mi></math>"), "Safety hazard", gridjs.html("Cost, USD/kg"), gridjs.html("Heat Capacity, <math><mi>kJ</mi><mo>/</mo><mi>kg</mi><mo>&deg;</mo><mi>C</mi></math>"), gridjs.html("Thermal conductivity, <math><mi>W</mi><mo>/</mo><mi>m</mi><mi>K</mi></math>"), gridjs.html("Density, <math><mi>kg</mi><mo>/</mo><msup><mi>m</mi><mn>3</mn></msup></math>"), gridjs.html("Dynamic viscosity, <math><mi>m</mi><mi>Pa</mi><mo>&dot;</mo><mi>s</mi></math><div></div>")],
  data: [
    ["Water", gridjs.html("<math><mi>0</mi></math>"), gridjs.html("<math><mi>100</mi></math>"), gridjs.html("Safe"), gridjs.html("<math><mi>0.0025</mi></math> [1]"), gridjs.html("<math><mi>4.180</mi></math>"), gridjs.html("<math><mi>0.65091</mi></math> [2]"), gridjs.html("<math><mi>1000</mi></math>"), gridjs.html("<math><mi>1.0518</mi></math>")],
    ["Water-Ethanol solution (10-50%)", gridjs.html("<math><mo>-</mo><mi>10</mi></math>"), gridjs.html("<math><mi>150</mi></math>"), gridjs.html("Flammable,<br />skin irritant,<br />eye irritant,<br />respiratory irritation [3]"), gridjs.html("<math><mi>1.5</mi></math>"), gridjs.html("<math><mi>3.5</mi><mo>-</mo><mi>4.0</mi></math>"), gridjs.html("<math><mi>0.4</mi><mo>-</mo><mi>0.55</mi></math>"), gridjs.html("<math><mi>850</mi></math>"), gridjs.html("<math><mi>1.5</mi><mo>-</mo><mi>0.4</mi></math>")],
    ["Synthetic oil (Therminol VP-1)", gridjs.html("<math><mi>15</mi></math>"), gridjs.html("<math><mi>393</mi></math>"), gridjs.html("Skin irritant,<br />harmful if inhaled,<br />respiratory irritant [4]"), gridjs.html("<math><mi>2.1</mi></math>"), gridjs.html("<math><mi>2.37</mi><mo>-</mo><mi>2.73</mi></math>"), gridjs.html("<math><mi>0.095</mi><mo>-</mo><mi>0.077</mi></math>"), gridjs.html("<math><mi>815</mi><mo>-</mo><mi>673</mi></math>"), gridjs.html("<math><mi>0.25</mi><mo>-</mo><mi>0.12</mi></math>")],
    ["NaK Eutectic Alloy (NaK-78)", gridjs.html("<math><mo>-</mo><mi>12.6</mi></math>"), gridjs.html("<math><mi>785</mi></math>"), gridjs.html("Water reactive,<br />skin corrosion,<br />serious eye damage [5]"), gridjs.html("<math><mi>2</mi></math>"), gridjs.html("<math><mi>0.872</mi><mo>-</mo><mi>0.893</mi></math>"), gridjs.html("<math><mi>24.1</mi><mo>-</mo><mi>26.3</mi></math>"), gridjs.html("<math><mi>659</mi><mo>-</mo><mi>779</mi></math>"), gridjs.html("<math><mi>0.279</mi><mo>-</mo><mi>0.131</mi></math>")],
  ],
  /* References!!
  [1] https://www.pub.gov.sg/Public/WaterLoop/Water-Price
  [2] https://www.engineeringtoolbox.com/water-liquid-gas-thermal-conductivity-temperature-pressure-d_2012.html
  [3] https://www.columbuschemical.com/MSDS/SDS/Ethanol%2050%25%2C%20%28v-v%29%208589.pdf
  [4] https://americasinternational.com/wp-content/uploads/2020/03/THERMINOL-VP1-SDS-EASTMAN.pdf
  [5] https://www.espimetals.com/index.php/msds/799-Potassium%20Sodium%20Alloy
  [6] https://www.semanticscholar.org/paper/Literature-Review-on-Heat-Transfer-Fluids-and-in-Heller/05353e299330ac84882ab456a6c63fcd9ecc3118
   */
});
table1.render(document.getElementById("htf-table"));

const table2 = new gridjs.Grid({
  data: [
    ["Receiver", "Cylindrical-conical"],
    ["Light source", "White LED"],
    ["Volume of water in receiver", gridjs.html("<math><mi>0.1987</mi><mi>l</mi></math>")],
    ["Irradiance intensity", gridjs.html("<math><mi>1000</mi><mfrac><mrow><mi>W</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac></math>")],
    ["Flow rate", gridjs.html("<math><mi>0.1167</mi><mi>l</mi><mo>/</mo><mi>min</mi></math> (10% of Grothen G928A Peristaltic pump)")],
  ],
});
table2.render(document.getElementById("exp-1-details"));

const table3 = new gridjs.Grid({
  columns: ["Measurements", "Measuring device"],
  data: [
    [gridjs.html("Temperature of water in inlet container"), "Thermocouple"],
    [gridjs.html("Temperature of water in outlet container"), "Thermocouple"],
  ],
});
table3.render(document.getElementById("exp-1-measurements"));

const table4 = new gridjs.Grid({
  data: [
    ["Temperature difference between inlet and outlet", gridjs.html("<math><mi>46</mi><mo>-</mo><mi>28.5</mi><mo>=</mo><mi>17.5<mo>&deg;</mo><mi>C</mi></math>")],
    ["Flow rate", gridjs.html("<math><mi>0.1167</mi><mi>l</mi><mo>/</mo><mi>min</mi></math>")],
    ["Specific heat capacity of water", gridjs.html("<math><mi>4180</mi><mi>J</mi><mo>/</mo><mi>k</mi><mi>g</mi><mo>&sdot;</mo><mi>&deg;</mi><mi>C</mi></math>")],
    ["Volume of water in receiver", gridjs.html("<math><mi>0.1987</mi><mi>l</mi></math>")],
    ["Mass of water in receiver", gridjs.html("<math><mi>0.1987</mi><mi>kg</mi></math>")],
    ["Time taken to flow through the receiver", gridjs.html("<math><<mfrac><mrow><mi>Volume</mi></mrow><mrow><msub><mi>Flow rate</mi><mn>l/min</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>0.1987</mi></mrow><mrow><mi>0.1167</mi></mrow></mfrac><mo>=</mo><mi>1.703</mi><mi>min</mi><mo>=</mo><mi>102.18</mi><mi>s</mi></math>")],
    ["Power absorbed by water (flowing system)", gridjs.html("<math><mfrac><mrow><mi>m</mi><msub><mi>C</mi><mn>p</mn></msub><mi>&Delta;</mi><mi>T</mi></mrow><mrow><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>0.1987</mi><mo>&times;</mo><mi>4180</mi><mo>&times;</mo><mi>17.5</mi></mrow><mrow><mi>102.18</mi></mrow></mfrac><mo>=</mo><mi>142.248</mi><mi>W</mi></math>")],
  ],
});
table4.render(document.getElementById("exp-1-results"));


const table5 = new gridjs.Grid({
  data: [
    ["Receiver", "Cylindrical-conical"],
    ["Light source", "White LED"],
    ["Irradiance intensity", gridjs.html("<math><mi>1000</mi><mfrac><mrow><mi>W</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac></math>")],
    ["Flow rate", gridjs.html("<math><mi>0.1167</mi><mi>l</mi><mo>/</mo><mi>min</mi></math> (10% of Grothen G928A Peristaltic pump)")],
  ],
});
table5.render(document.getElementById("exp-2-details"));

const table6 = new gridjs.Grid({
  columns: ["Measurements", "Measuring device"],
  data: [
    [gridjs.html("Temperature of water in container"), "Thermocouple"],
  ],
});
table6.render(document.getElementById("exp-2-measurements"));

const table7 = new gridjs.Grid({
  data: [
    ["Fluid", "Water",],
    ["Viscosity (dynamic)", gridjs.html("<math><mi>1.0518</mi><mi>m</mi><mi>Pa</mi><mo>&dot;</mo><mi>s</mi></math>"),],
    ["Density", gridjs.html("<math><mi>1000</mi><mfrac><mrow><mi>kg</mi></mrow><mrow><msup><mi>m</mi><mn>3</mn></msup></mrow></mfrac></math>"),],
    ["Temperature", gridjs.html("<math><mi>28</mi><mo>-</mo><mi>60</mi><mo>&deg;</mo><mi>C</mi></math>"),],
    ["Total dynamic head", gridjs.html("<math><mi>0.878400</mi><mi>m</mi></math>"),],
    [gridjs.html("NPSHa (at <math><<mi>60</mi><mo>&deg;</mo><mi>C</mi></math>)"), gridjs.html("<math><mi>7.483985</mi><mi>m</mi></math>"),],
    ["Flow rate", gridjs.html("<math><mi>0.204184</mi><mo>-</mo><mi>0.408367</mi><mi>l</mi><mo>/</mo><mi>min</mi></math>"),],
  ],
});
table7.render(document.getElementById("pump-reqs"));

const table8 = new gridjs.Grid({
  columns: ["Model", "Specifications", "Other notes"],
  data: [
    ["Grothen G328A", gridjs.html("<ul><li>Output voltage: 24V 1A</li><li>Flow rate: 0.114 - 0. 500 l/min</li><li>DC motor: 12V</li><li>AC input: 240V</li></ul> [8]"), gridjs.html("<b>Cons:</b><br />-<br /><b>Pros:</b><br />0.114 l/min gives <math><mi>17.9</mi><mo>&deg;</mo><mi>C</mi></math> change and 0.500 l/min gives <math><mi>4.1</mi><mo>&deg;</mo><mi>C</mi></math> change, which is within the range required.")],
    ["Grothen G928", gridjs.html("<ul><li>Motor power: 12V, 24V(Optional)</li><li>Type: Peristaltic pump</li><li>Flow rate: 0.500 l/min</li><li>DC motor current: 0.5 - 1 A, 4A (stall)</li></ul> [9][10]"), gridjs.html("<b>Cons:</b><br />0.500 l/min gives <math><mi>4.1</mi><mo>&deg;</mo><mi>C</mi></math> change, which is slightly out of the requirements.<br />Modifications are required to ensure it can be used outdoors.<br /><b>Pros:</b><br />As connections have to be done ourselves, it will be easier to connect to solar panels.")],
    ["USB Mini Submersible Water Pump", gridjs.html("<ul><li>Power: 0.4 - 1.5 W</li><li>DC Voltage: 2.5 - 6 V</li><li>Working current: 130 - 220 mA</li><li>Head: 0.40 - 1.10 m</li><li>Flow rate: 1.33 - 2.00 l/min</li></ul> [11]"), gridjs.html("<b>Cons:</b><br />This is one of the lowest possible flow rate for aquarium pumps and the flow rate of 1.33 l/min gives <math><mi>1.54</mi><mo>&deg;</mo><mi>C</mi></math> change and 2.00 l/min gives <math><mi>1.02</mi><mo>&deg;</mo><mi>C</mi></math> change, which is very small.<br /><b>Pros:</b><br />Since it is submersible, it will not take space within the limited space below the receiver and reflectors.<br />Also, it does not require as much modification to make it suitable for usage outdoors.")],
  ],
});
table8.render(document.getElementById("pump-options"));
/* References!!
[8] https://www.amazon.com/NTBL-Peristaltic-114-500ml-Adjustable-Vulcanized/dp/B0BNL1514C
[9] https://www.walmart.ca/en/ip/Graflsoa-GROTHEN-G928-High-Flow-Peristaltic-Pump-304-Stainless-Steel-Frame-12V-24V-DC-Motor-500mL-min-Flow-Rate-Easy-Maintenance-Wide-Applications-La/45MRVPFB4B6P
[10] https://shopee.sg/Peristaltic-Pump-Dosing-Pump-500ml-min-12V-DC-Grothen-G928-For-Analytical-Lab-i.352892875.26482359116
[11] https://www.voltaat.com/products/usb-mini-submersible-water-pump
*/

const table10 = new gridjs.Grid({
  columns: ["Pump", "Flow rate, l/min", gridjs.html("Temperature rise, <math><mi>&deg;</mi><mi>C</mi></math>"), "Power consumption, W", "Cost, SGD"],
  data: [
    ["Goethe G328A [8]", "0.114 - 0. 500", gridjs.html("4.1 - 17.9"), "44.45", "86.98 [15]"],
    ["Grothen G928 [9][10]", "0.500", gridjs.html("4.1"), "6 - 24", "38.18 [16]"],
    ["USB Mini Submersible Water Pump [11]", "1.33 - 2.00", gridjs.html("1.02 - 1.54"), "0.4 - 1.5", "5"],
  ],
});
table10.render(document.getElementById("pump-specs"));
/* References!!
https://www.amazon.com/NTBL-Peristaltic-114-500ml-Adjustable-Vulcanized/dp/B0BNL1514C (same as above)
https://www.walmart.ca/en/ip/Graflsoa-GROTHEN-G928-High-Flow-Peristaltic-Pump-304-Stainless-Steel-Frame-12V-24V-DC-Motor-500mL-min-Flow-Rate-Easy-Maintenance-Wide-Applications-La/45MRVPFB4B6P (same as above)
https://www.voltaat.com/products/usb-mini-submersible-water-pump (same as above)
https://www.aliexpress.com/item/1005006398985788.html#nav-specification
https://shopee.sg/Peristaltic-Pump-Dosing-Pump-500ml-min-12V-DC-Grothen-G928-For-Analytical-Lab-i.352892875.26482359116
https://shopee.sg/product/261596770/24001582496?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkY0N5akVpcE5OamJEdjRRTHBOTzhmazBSdGV5RWpMdWQwT0dzaWRYcFo1cXFLNTlRNWhRRzJjUE1OVmZxRU5EUTFvVThkSmtlSFI4c05zL2E2UUp4d3B2aTBpT3pQMW5wanI2aE9WRHcySFA&gad_source=4&gad_campaignid=20887891397
https://shopee.sg/product/277026990/23492563891?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkY0N5akVpcE5OamJEdjRRTHBOTzhmbGNRZkxIVjh5dlcvZlBXQTV6VExwSjZmVTRZb2tBZlN3Uk1kK2VwZjRwQWlBd2dIMU9FNVpsSWR6NkJaaUJ5OXNHaXNBaHMrUStQd1AvNkNJRjJjd2o&gad_source=1&gad_campaignid=20887585400
https://www.walmart.ca/en/ip/Graflsoa-GROTHEN-G928-High-Flow-Peristaltic-Pump-304-Stainless-Steel-Frame-12V-24V-DC-Motor-500mL-min-Flow-Rate-Easy-Maintenance-Wide-Applications-La/45MRVPFB4B6P
https://www.voltaat.com/products/usb-mini-submersible-water-pump
*/

const table11 = new gridjs.Grid({
  columns: ["Insulation material", gridjs.html("Thermal conductivity <math><mi>W</mi><mo>/</mo><mi>m</mi><mi>K</mi></math>"), "Cost per unit length", "Thickness required, mm", "Cost per unit length to meet thickness required, SGD", "Durability"],
  data: [
    ["Aerogel", gridjs.html("0.014 [23]"), "14.15 SGD for 3mm [17]", "8.510679", "40.15", "20-30 years [20]"],
    ["Polyisocyanurate/Polyurethane foam (PIR/PUR)", gridjs.html("0.023 – 0.026 [23]"), "0.24 SGD for 20mm [18]", "21.708707 - 28.617394", "0.26 - 0.35", "40 years [21]"],
    ["Polyethelyne (PE) foam", gridjs.html("0.04 [24]"), "0.10 SGD for 5mm [19]", "94.079069", "1.90", "15-20  years [22]"],
  ],
});
table11.render(document.getElementById("insulation-table"));
/* References
[17] https://shopee.sg/Silica-Nano-Aerogel-CompoSite-Thermal-insulation-Blanket-Silica-Thermal-insulation-Material-Nano-Thermal-insulation-Gel-Board-i.1356232114.29878292492
[18] https://shopee.sg/product/280224396/19407230558?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkY0N5akVpcE5OamJEdjRRTHBOTzhma0tPTDdGMkNHK2pnbDREOFQrOGpaRzRsclp1Y2RQbnNQNHZ1KzAya2FjWmxlNDBUY01DaUx2NFk4aGJUUjcrVlNHYXNkRFZqZG1qc1dXUlZLbzRQeng&gad_source=1&gad_campaignid=1690731353
[19] https://shopee.sg/product/265054860/27713302260?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkY0N5akVpcE5OamJEdjRRTHBOTzhma0N0WjlCZDNmbXQ1eExIN0M1NlNWa2RFUUdYNG1FSXd2azkralQyMzNMY09OL09zc000dzk1dFJjcUFsQ2RyeWpqY3BxdWRScjNEODZXNWhRUG82dWo
[20] https://www.farersteelpipe.com/blog/what-is-the-typical-lifespan-of-aerogel-felt-in-different-applications-1329997.html
[21] https://www.generalplastics.com/blog/10-things-you-must-know-before-using-polyurethane-foam-boards-for-insulation
[22] https://www.lukwom.com/What-is-the-life-expectancy-of-PE-insulation-id48918585.html
[23] http://www.greenspec.co.uk/building-design/insulation-materials-thermal-properties/
[24] https://therubbercompany.com/sponge-foam/polyethylene-foam/polyethylene-foam
[25] https://www.alaskapuf.com/difference-between-pir-and-puf-insulation.php */

const table12 = new gridjs.Grid({
  columns: [gridjs.html("<math><mi>&Delta;</mi><mi>T</mi></math>, <math><mi>&deg;</mi><mi>C</mi></math>"), gridjs.html("Flow rate, <math><mi>l</mi><mo>/</mo><mi>min</mi></math>")],
  data: [
    ["5", "0.408367"],
    ["10", "0.204184"],
  ],
});
table12.render(document.getElementById("pump-FR-from-temp-change"));


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
