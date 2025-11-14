const table2 = new gridjs.Grid({
  columns: ["Term/Concepts", "Definition"],
  data: [

    /* Heat Transfer Fluid (HTF) */

    [gridjs.html("Heat transfer coefficient (HTC) in transient heat conduction"), gridjs.html("Heat transfer coefficient describes the efficiency of the heat transfer.<br /><br /><math><mi>HTC</mi><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>&rho;</mi><msub><mi>C</mi><mn>p</mn></msub></mrow><mrow><mi>t</mi></mrow></mfrac></msqrt></math>,<br />where <math><mi>HTC</mi></math> is the heat transfer coefficient,<br /><math><mi>k</mi></math> is the thermal conductivity,<br /><math><mi>&rho;</mi></math> is the density,<br /><math><msub><mi>C</mi><mn>p</mn></msub></math> is the specific heat capacity, and<br /><math><mi>t</mi></math> is the time. [71]")],
    /* References!!!
    https://thermtest.com/the-ultimate-guide-to-heat-transfer-fluids
    */

    [gridjs.html("Thermal stability"), gridjs.html("Thermal stability is the materials ability to resist breaking down under heat. [72]")],
    /* References!!
    https://www.sciencedirect.com/topics/materials-science/thermal-stability
    Not: https://www.sciencedirect.com/science/article/abs/pii/B9780128498767000105 */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Fluid motion */

    [gridjs.html("Nusselt number (Nu)"), gridjs.html("Nusselt number is the ratio between the convective and conductive heat transfer. Nusselt number is also a function of Reynold's number and Prandtl's number.<br /><br /><math><mi>Nu</mi><mo>=</mo><mfrac><mrow><mi>hL</mi></mrow><mrow><mi>k</mi></mrow></mfrac></math>,<br />where <math><mi>h</mi></math> is the convective heat transfer coefficient,<br /><math><mi>L</mi></math> is the charactertistic length, and<br /><math><mi>k</mi></math> is the thermal conductivity. [73]<br /><br /><b>For flat plate (laminar):</b> <math><mi>Nu</mi><mo>=</mo><mi>0.664</mi><msup><mi>Re</mi><mn>0.5</mn></msup><msup><mi>Pr</mi><mn>1/3</mn></msup></math> for <math><mi>Re</mi><mo>></mo><mi>5</mi><mo>&times;</mo><msup><mi>10</mi><mn>5</mn></msup></math><br /><b>For circular tube under constant surface temperature (laminar):</b> <math><mi>Nu</mi><mo>=</mo><mi>3.66</mi></math><br /><b>For cicular tube under constant surface heat flux (laminar):</b> <math><mi>Nu</mi><mo>=</mo><mi>4.36</mi></math>,<br />where Re is Reynold's number, and<br />Pr is Prandtl's number. [74]")],
    /* References!!!
    https://www.sciencedirect.com/topics/chemical-engineering/nusselt-number
    Not: www.sciencedirect.com/science/article/pii/S0017931016302083
    https://www.thermal-engineering.org/what-is-laminar-vs-turbulent-nusselt-number-definition/
    */

    [gridjs.html("Flow rate (Q), <math><mfrac><mrow><msup><mi>m</mi><mn>3</mn></msup></mrow><mrow><mi>s<mi></mrow></mfrac></math>"), gridjs.html("Flow rate is the measure of the volume of fluid passing through per unit time.<br /><br /><math> <mi>Q</mi> <mo>=</mo><mi>V</mi><mi>A</mi></math>, <br />where <math><mi>V</mi></math> is the velocity, and <br /><math><mi>A</mi></math> is the area.")],

    [gridjs.html("Viscocity, <math><mfrac><mrow><mi>&mu;</mi> </mrow><mrow> <mi>P</mi><mi>a</mi><mo>&sdot;</mo><mi>s</mi></mrow></mfrac></math>"), gridjs.html("Measure of a fluid's resistance to flow.")],

    [gridjs.html("Static Head (HS), <math> <mi>m</mi></math>"), gridjs.html("Static head is the total vertical distance between the surface of the water's origin to its destination. [75]")],
    /* References!!
    https://iwakiamerica.com/blog/the-science-behind-total-dynamic-head-and-its-relevance-in-fluid-dynamics/ */

    [gridjs.html("Friction Head (HF), <math> <mi>m</mi></math>"), gridjs.html("Friction head is the head loss due to friction as the fluid moves through the pipe. [75]")],
    /* References!!
    https://iwakiamerica.com/blog/the-science-behind-total-dynamic-head-and-its-relevance-in-fluid-dynamics/ */

    [gridjs.html("Pressure Head (HP), <math> <mi>m</mi></math>"), gridjs.html("Pressure head is the pressure the pump needs to overcome. [76]")],
    /* References!!
    https://www.globalpumps.com.au/blog/what-role-does-head-pressure-play */

    [gridjs.html("Total Dynamic Head (TDH), <math> <mi>m</mi></math>"), gridjs.html("Summation of the head losses in a fluid system. It is the equivalent height the pump needs to raise the fluid and is used as a gauge for the energy required to pump a fluid through a system. [75][77]")],
    /* References!!
    https://www.grundfos.com/content/dam/global/page-assets/learn/ecademy/pdfs/us-course-108L-module-1-pump-selection-basics.pdf
    https://iwakiamerica.com/blog/the-science-behind-total-dynamic-head-and-its-relevance-in-fluid-dynamics/
    Not: https://www.linkedin.com/posts/fernando-romo-sanchez-6ba025303_pump-performance-curves-are-vital-for-calculating-activity-7377459998903201792-jHOM */

    [gridjs.html("Differential pressure <math><mo>(</mo><mi>&Delta;</mi><mi>P</mi><mo>)</mo></math>, bar"), gridjs.html("Differential pressure is the difference in pressure between 2 points.<br /><br /><math><mi>&Delta;</mi><mi>P</mi><mo>=</mo><mi>0.0981</mi><mo>&times;</mo><mi>TDH</mi><mo>&times;</mo><mi>SG</mi></math>,<br />where <math><mi>TDH</mi></math> is the head, and<br /><math><mi>SG</mi></math> is the specific gravity of the fluid. [87]")],
    /* References!!
    [35] https://www.engineeringtoolbox.com/pump-head-pressure-d_663.html */


    [gridjs.html("Net Positive Suction Head (NPSH), <math> <mi>m</mi></math>"), gridjs.html("NPSH is the difference between the inlet pressure to the lowest pressure level inside the pump. [78]")],
    /* References!!
    https://www.grundfos.com/sg/learn/research-and-insights/npsh-net-positive-suction-head */

    [gridjs.html("Net Positive Suction Head Available (NPSHa), <math> <mi>m</mi></math>"), gridjs.html("NPSHs is the NPSH available in the system. NPSHa needs to be higher than the NPSH required (NPSHr) of a pump.<br /><br /><math><msub><mi>NPSH</mi><mn>a</mn></msub><mo>=</mo><msub><mi>h</mi><mn>a</mn></msub><mo>-</mo><msub><mi>h</mi><mn>vpa</mn></msub><mo>+</mo><msub><mi>h</mi><mn>st</mn></msub><mo>-</mo><msub><mi>h</mi><mn>f</mn></msub></math>,<br />where <math><msub><mi>h</mi><mn>a</mn></msub></math> is the absolute pressure,<br /><math><msub><mi>h</mi><mn>vpa</mn></msub></math> is the absolute value of the vapour head,<br /><math><msub><mi>h</mi><mn>st</mn></msub></math> is the static head, and<br /><math><msub><mi>h</mi><mn>f</mn></msub></math> is the friction head. [79][80]")],
    /* References!! 
     https://www.northridgepumps.com/article-67_low-npsh-pumps-guide
     https://www.pumpsandsystems.com/npsh-calculation-step-step-guide */

    [gridjs.html("Net Positive Suction Head Required (NPSHr), <math> <mi>m</mi></math>"), gridjs.html("NPSHr is the lowest inlet pressure required for the pump to work properly and reduce cavitation or flashing. [78]")],
    /* References!! 
    https://www.grundfos.com/sg/learn/research-and-insights/npsh-net-positive-suction-head */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Power */

    [gridjs.html("Power"), gridjs.html("<math><mi>P</mi><mo>=</mo><mi>I</mi><mi>V</mi></math>,<br />where <math><mi>P</mi></math> is the power,<br /><math><mi>I</mi></math> is the current, and<br /><math><mi>V</mi></math> is the voltage.")],

    [gridjs.html("AC Current input"), gridjs.html("<math><msub><mi>I</mi><mn>AC</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mn>DC</mn></msub></mrow><mrow><mi>PF</mi><mo>&dot;</mo><mi>&eta;</mi><mo>&dot;</mo><msub><mi>V</mi><mn>AC</mn></msub></mrow></mfrac></math>,<br />where <math><msub><mi>I</mi><mn>AC</mn></msub></math> is the AC input current (for 1-phase),<br /><math><mi>PF</mi></math> is the power factor,<br /><math><mi>&eta;</mi></math> is the efficiency, and<br /><math><msub><mi>V</mi><mn>AC</mn></msub></math> is the AC input voltage. [81]")],
    /* References!!
    [29] https://magna-power.com/learn/kb/calculating-power-supply-ac-input-current */

    [gridjs.html("Power factor (PF)"), gridjs.html("Power factor is a measure of energy efficiency and is the ratio of the working power (in kW) to apparent power (in kVA). [82]")],
    /* References!!
    [30] https://www.fluke.com/en-sg/learn/blog/power-quality/power-factor-formula */

    [gridjs.html("Power factor correction (PFC)"), gridjs.html("Power factor correction is the methods used to improve a device's power factor. [83]")],
    /* References!!
    [31] https://www.monolithicpower.com/en/learning/resources/power-factor-correction */

    [gridjs.html("Switching power supply (SMPS)"), gridjs.html("SMPS is a form of AC to DC power converter that has higher efficiency than linear power supply. [84]")],
    /* References!!
    [32] https://www.tek.com/en/blog/what-is-a-switching-power-supply */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Insulation */

    [gridjs.html("Thermal resistance <math><mo>(</mo><mi>&theta;</mi></math> or <math><mi>R</mi><mo>)</mo></math>, <math><mfrac><mrow><mi>&deg;</mi><mi>C</mi></mrow> <mrow><mi>W</mi></mrow></mfrac></math>"), gridjs.html("Thermal resistance is the ability of a material to resist the transfer of heat.<br /><br /><math><mi>R</mi><mo>=</mo><mfrac><mrow><mi>&Delta;</mi><mi>T</mi></mrow><mrow><mover><mi>Q</mi><mn>&dot;</mn></mover></mrow></mfrac></math>,<br />where <math><mi>R</mi></math> is the thermal resistance,<br /><math><mi>&Delta;</mi><mi>T</mi></math> is the temperature difference, and<br /><math><mover><mi>Q</mi><mn>&dot;</mn></mover></math> is the power dissipated.<br /><br />In conduction, the thermal resistance is:<br /><math><mi>R</mi><mo>=</mo><mfrac><mrow><mi>L</mi></mrow><mrow><mi>kA</mi></mrow></mfrac></math>,<br />where <math><mi>L</mi></math> is the length of material the heat is conducted through (perpendicular to the heat flow),<br /><math><mi>k</mi></math> is the thermal conductivity, and<br /><math><mi>A</mi></math> is the cross-sectional area perpendicular to the heat flow.<br /><br />In convection, the thermal resistance is:<br /><math><mi>R</mi><mo>=</mo><mfrac><mrow><mi>1</mi></mrow><mrow><mi>h</mi><msub><mi>A</mi><mn>s</mn></msub></mrow></mfrac></math>,<br />where <math><mi>h</mi></math> is the convection heat transfer coefficient, and<br /><math><mi>A</mi></math> is the cross-sectional area perpendicular to the heat flow. [85][86]")],
    
    /* References!!
    https://www.xometry.com/resources/materials/thermal-resistance/
    https://community.cadence.com/cadence_blogs_8/b/pcb/posts/ee-thermal-101-thermal-basics-for-electrical-engineers-part-2-of-4-893913089 */

    /* Same as convection heat transfer coefficient
    [gridjs.html("Film coefficient (h), <math><mfrac><mrow><mi>W</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>&sdot;</mo><mi>K</mi></mrow></math>"), gridjs.html("The amount of heat flux required to cause a unit difference in temperature between the surface and the bulk temperature.")],
    /* References!!!
    https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/08/Lesson-2-Film-Coefficient-tp.pdf */

    [gridjs.html("Specific Heat Capacity <math><mo>(</mo><msub><mi>C</mi><mn>p</mn></msub><mo>)</mo></math>, <math><mi>J</mi><mo>/</mo><mi>k</mi><mi>g</mi><mo>&sdot;</mo><mi>K</mi></math>"), gridjs.html("Amount of energy used to increase temperature of the goven object with mass of 1kg by 1K.<br /><br /><math><mi>Q</mi><mo>=</mo><mi>m</mi><msub><mi>C</mi><mn>p</mn></msub><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math>, <br />where <math><mi>Q</mi></math> is the heat added, <br /><math><mi>m</mi></math> is the mass, <br /><math><msub><mi>C</mi><mn>p</mn></msub></math> is the specific heat capacity, and <br /><math><msub><mi>T</mi><mn>1</mn></msub></math> and <math><msub><mi>T</mi><mn>2</mn></msub></math> are the initial and final temperatures respectively.")],

    [gridjs.html("Thermal conductivity (k), <math><mi>W</mi><mo>/</mo><mi>m</mi><mi>K</mi></math>"), gridjs.html("Amount of heat transferred per unit time through a unit area of a material, when there is a unit temperature difference across a unit thickness.")],

    [gridjs.html("Convection heat transfer, <math><mi>W</mi></math>"), gridjs.html("Energy transfer rate by movement of the fluid.<br /><br /><math><mover><mi>Q</mi><mo>&dot;</mo></mover><mo>=</mo><mi>h</mi><mi>A</mi><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math>,<br />where <math><mover><mi>Q</mi><mo>&dot;</mo></mover></math> is the heat transfer rate, <br /><math><mi>h</mi></math> is the convective heat transfer coefficient,<br /><math><mi>A</mi></math> is the area,<br /><math><msub><mi>T</mi><mn>1</mn></msub></math> is the temperature of the heated surface, and<br /><math><msub><mi>T</mi><mn>2</mn></msub></math> is the temperature of the fluid.")],

    [gridjs.html("Radiative heat transfer, <math><mi>W</mi></math>"), gridjs.html("Energy transfer rate by radiation.<br /><br /><math><mover><mi>Q</mi><mo>&dot;</mo></mover><mo>=</mo><mi>&epsilon;</mi><mi>&sigma;</mi><mi>A</mi><mo>(</mo><msubsup><mi>T</mi><mn>1</mn><mn>4</mn></msubsup><mo>-</mo><msubsup><mi>T</mi><mn>2</mn><mn>4</mn></msubsup><mo>)</mo></math>,<br />where <math><mover><mi>Q</mi><mo>&dot;</mo></mover></math> is the heat transfer rate, <br /><math><mi>&epsilon;</mi></math> is the emissivity of the object,<br /><math><mi>&sigma;</mi></math> is the absorptivity of the object,<br /><math><mi>A</mi></math> is the area,<br /><math><msub><mi>T</mi><mn>1</mn></msub></math> is the temperature of the heated surface, and<br /><math><msub><mi>T</mi><mn>2</mn></msub></math> is the temperature of the fluid.")],
    
    [gridjs.html("Conduction heat transfer (Fourier's law), <math><mi>W</mi></math>"), gridjs.html("Energy transfer rate through a material by conduction.<br /><br /><math><mover><mi>Q</mi><mo>&dot;</mo></mover><mo>=</mo><mo>-</mo><mi>k</mi><mi>A</mi><mfrac><mi>dT</mi><mi>dx</mi></mfrac></math>,<br />where <math><mover><mi>Q</mi><mo>&dot;</mo></mover></math> is the heat transfer rate, <br /><math><mi>k</mi></math> is the thermal conductivity,<br /><math><mi>A</mi></math> is the area, and<br /><math><mfrac><mi>dT</mi><mi>dx</mi></mfrac></math> is the temperature gradient.")],

    [gridjs.html("Heat transfer rate"), gridjs.html("<math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>net</mn></msub><mo>=</mo><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>convection</mn></msub><mo>+</mo><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>radiative</mn></msub><mo>+</mo><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>conduction</mn></msub></math>,<br />where <math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>net</mn></msub></math> is the total heat transfer rate,<br /><math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>convection</mn></msub></math> is the convective heat transfer rate,<br /><math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>radiative</mn></msub></math> is the radiative heat transfer rate, and<br /><math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>conduction</mn></msub></math> is the conductive heat transfer rate.")],

  ],
});
table2.render(document.getElementById("Transmission"));


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
