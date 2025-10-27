const table1 = new gridjs.Grid({
  columns: ["Term/Concepts", "Definition"],
  data: [
    [gridjs.html("Irradiance, <math> <mfrac> <mi> W </mi> <msup> <mi> m </mi> <mn> 2 </mn> </msup> </mfrac> </math>"), gridjs.html("Power of electromagnetic radiation (solar spectrum)/Radiant flux incident upon a surface. <br /><br /><b>Direct Normal Irradiance (DNI)</b>: Solar radiance received directly from the sun, measured on a surface perpendicular to the sun's rays. Critical for concentrating solar power (CSP) systems. <br /><b>Diffuse Horizontal Irradiance (DHI)</b>: Solar radiation scattered by the atmosphere and reaching the Earth's surface from all directions. Important on cloudy or hazy days. <br /><b>Global Horizontal Irradiance (GHI)</b>: The total solar radiation on a horizontal surface, combining both direct and diffuse components. <br /><br /><math><mi>GHI</mi> <mo>=</mo> <mi>DHI</mi> <mo>+</mo> <mi>DNI</mi> <mo></mo> <mi>cos</mi> <mo>(</mo> <mi>&theta;</mi> <mo>)</mo> </math>, <br />where <math><mi>&theta;</mi></math> is the solar zenith angle.")],
    /* References!! incomplete
    https://www.sciencedirect.com/science/article/abs/pii/B978012397021300003X (Chapter 3: Laws of Light)

    */

    [gridjs.html("Output of visible light, <math><mi>l</mi><mi>m</mi></math>"), gridjs.html("Unit for luminous flux, a measure of the total amount of visible light that a light source emits.")],

    [gridjs.html("Solar spectrum"), gridjs.html("The sun emits electromagnetic radiation within a range of wavelengths, which mainly consists of:<ol><li>Ultraviolet light: <math><mi>100</mi> <mo>-</mo> <mi>380</mi> <mi>n</mi><mi>m</mi></math> </li><li>Visible light: <math><mi>380</mi> <mo>-</mo> <mi>780</mi><mi>n</mi><mi>m</mi></math></li><li>Infrared light: <math><mi>780</mi><mi>n</mi><mi>m</mi> <mo>-</mo> <mi>1</mi><mi>m</mi><mi>m</mi></math></li></ol>")],
    /* References!!!
    https://sunwindsolar.com/blog/solar-radiation-spectrum/ */

    /*[gridjs.html("Absorptivity, <math><mi>&alpha;</mi></math>"), gridjs.html("The ability of a material to absorb light.")],
    [gridjs.html("Reflectivity, <math><mi>&rho;</mi></math>"), gridjs.html("The ability of a material to reflect light.")],
    [gridjs.html("Transmissivity, <math><mi>&tau;</mi></math>"), gridjs.html("The ability of a material to transmit light through it.")],*/
    [gridjs.html("Absorptivity, reflectivity and transmissivity"), gridjs.html("<b>Absorptivity, <math><mi>&alpha;</mi></math></b>: The ability of a material to absorb light.<br /><b>Reflectivity, <math><mi>&rho;</mi></math></b>: The ability of a material to reflect light.<br /><b>Transmissivity, <math><mi>&tau;</mi></math></b>: The ability of a material to transmit light through it.<br /><br /><math><mi>&alpha;</mi> <mo>+</mo> <mi>&rho;</mi> <mo>+</mo> <mi>&tau;</mi> <mo>=</mo> <mi>1</mi></math>")],

    [gridjs.html("Law of Reflection"), gridjs.html("The angle of the incident ray, <math><msub><mi>&theta;</mi><mn>i</mn></msub></math>, is equals to the angle of the reflected ray, <math><msub><mi>&theta;</mi><mn>r</mn></msub></math>.<br /><br /><math><msub><mi>&theta;</mi><mn>i</mn></msub><mo>=</mo><msub><mi>&theta;</mi><mn>r</mn></msub></math>")],  
    
    [gridjs.html("Lambert's Cosine Law"), gridjs.html("Describes the relationship between the intensity of the light, the angle of incidence of the light and the amount of light reflected off a surface. It assumes a Lambertian surface (perfect diffusion).<br /><br /><math><msub><mi>I</mi><mn>r</mn></msub><mo>=</mo><msub><mi>I</mi><mn>i</mn></msub><mi>cos</mi><mi>&theta;</mi></math>,<br />where <math><msub><mi>I</mi><mn>r</mn></msub></math> is the intensity of the reflected light,<br /><msub><mi>I</mi><mn>i</mn></msub> is the intensity of the incident light, and<br /><math><mi>&theta;</mi></math> is the angle of incidence of the incident light.")],
    /* References!!
    https://www.ownteacher.com/lamberts-cosine-law */

    [gridjs.html("Focal point"), gridjs.html("Cavitation.<br /><br />Focal point of parabolic dish: insert here.")],
    [gridjs.html("Concentration ratio of..?"), gridjs.html("Cavitation.<br /><br /><math><mfrac><mrow><mi>Area of receiver</mi></mrow><mrow><mi>Area exposed to sunlight</mi></mrow></mfrac></math>")],

    [gridjs.html("Luminence (of light)"), gridjs.html("Cavitation.")],
    [gridjs.html("Intensity (of light)"), gridjs.html("Cavitation.")],
    [gridjs.html("Linking luminence to intensity?"), gridjs.html("Cavitation.")],
    [gridjs.html("Inverse square law"), gridjs.html("Light intensity reduces with distance and its rate of decrease is proportional to the square of the distance between the source and the point.<br /><br /><math><mi>I</mi><mo>&prop;</mo><mfrac><mi>1</mi><mrow><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac></math>")],
    /* References!!
    https://www.sciencedirect.com/science/article/abs/pii/B978012397021300003X (Chapter 3: Laws of Light)
    https://www.sciencedirect.com/science/article/abs/pii/B978012397021300003X (Telecommunications Engineer's Reference Book, 8 - Sound, speech and hearing) */
    [gridjs.html("Solar concentration ratio"), gridjs.html("Cavitation.")],
    [gridjs.html("1 sun"), gridjs.html("Cavitation.")],


    [gridjs.html("Power formula 1"), gridjs.html("Cavitation.<br /><br /><math><mi>P</mi><mo>=</mo><mi>I</mi><mi>A</mi></math>,<br />where <math><mi>P</mi></math> is power,<br /><math><mi>I</mi></math> is intensity, and<br /><math><mi>A</mi></math> is area.")],
    [gridjs.html("Power formula 2"), gridjs.html("Cavitation.")],
    [gridjs.html("Optical efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Thermal efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Percentage difference of...?"), gridjs.html("Cavitation.")],
    [gridjs.html("Uniformity value of..?"), gridjs.html("Cavitation.")],



    [gridjs.html("View factor (<math><msub><mi>F</mi><mn>ij</mn></msub></math>)"), gridjs.html("The fraction of thermal energy emitted or radiated from a surface that is subjected onto another surface. It is purely geometrical and independant of physical properties.<br /><br /><math><mi>0</mi><mo>&le;</mo><msub><mi>F</mi><mn>ij</mn></msub><mo>&le;</mo><mi>1</mi></math>,<br />Applying to the radiative loss, <math><msub><mi>Q</mi><mn>ij</mn></msub><mo>=</mo><msub><mi>A</mi><mn>i</mn></msub><msub><mi>&epsilon;</mi><mn>i</mn></msub><msub><mi>F</mi><mn>ij</mn></msub><mi>&sigma;</mi><mo>(</mo><msubsup><mi>T</mi><mn>i</mn><mn>4</mn></msubsup><mo>-</mo><msubsup><mi>T</mi><mn>j</mn><mn>4</mn></msubsup><mo>)</mo></math>,<br />where <math><msub><mi>Q</mi><mn>ij</mn></msub></math> is the heat transfer rate,<br /><math><msub><mi>A</mi><mn>i</mn></msub></math> is the surface area,<br /><math><msub><mi>&epsilon;</mi><mn>i</mn></msub></math> is the emissivity of the object,<br /><math><msub><mi>F</mi><mn>ij</mn></msub></math> is the view factor,<br /><math><mi>&sigma;</mi></math> is the absorptivity of the object,<br /><math><msub><mi>T</mi><mn>i</mn></msub></math> is the temperature of the heated surface, and<br /><math><msub><mi>T</mi><mn>j</mn></msub></math> is the temperature of the surroundings.")],
    /* References!!!
    https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/05/Lesson-2-View-factors.pdf and
    http://imartinez.etsiae.upm.es/~isidoro/tc3/Radiation%20View%20factors.pdf */

    [gridjs.html("Optical efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Thermal efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Exergy efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Levelised Cost of Heat (LCOH)"), gridjs.html("Cavitation.")],
    [gridjs.html("Monte-Carlo Ray Tracing"), gridjs.html("Cavitation.")],
    [gridjs.html("SOLTrace"), gridjs.html("Cavitation.")],

    [gridjs.html("AM1.5G"), gridjs.html("AM1.5G is the global standardised solar spectrum for global horizontal irradiance. This is not 100% accurate for equatorial region which uses AM1.")],
    /* References!!!
    https://www.ossila.com/pages/standard-solar-spectrum
    https://g2voptics.com/solar-simulation/solar-energy-air-mass/
    */
  ],
});
table1.render(document.getElementById("Light"));

const table2 = new gridjs.Grid({
  columns: ["Term/Concepts", "Definition"],
  data: [
    [gridjs.html("Flow rate (Q) <math><msup><mi>m</mi><mn>3</mn></msup><mo>/</mo><mi>s<mi></math>"), gridjs.html("Flow rate is the measure of the volume of fluid passing through per unit time.<br /><br /><math> <mi>Q</mi> <mo>=</mo><mi>V</mi><mi>A</mi></math>, <br />where <math><mi>V</mi></math> is the velocity, and <br /><math><mi>A</mi></math> is the area.")],
    [gridjs.html("Viscocity, <math><mi>&mu;</mi> <mo>/</mo> <mi>P</mi><mi>a</mi><mo>&sdot;</mo><mi>s</mi></math>"), gridjs.html("Unit for luminous flux, a measure of the total amount of visible light that a light source emits.")],

    [gridjs.html("Static Head (HS), <math> <mi>m</mi></math>"), gridjs.html("Static head is the total vertical distance between the surface of the water's origin to its destination.")],
    [gridjs.html("Friction Head (HF), <math> <mi>m</mi></math>"), gridjs.html("Friction head is the head loss due to friction as the fluid moves through the pipe.")],
    [gridjs.html("Pressure Head (HP), <math> <mi>m</mi></math>"), gridjs.html("Pressure head is the pressure the pump needs to overcome.")],

    [gridjs.html("Total Dynamic Head (TDH), <math> <mi>m</mi></math>"), gridjs.html("Summation of the head losses in a fluid system. It is the equivalent height the pump needs to raise the fluid and is used as a gauge for the energy required to pump a fluid through a system.")],

    [gridjs.html("Net Positive Suction Head (NPSH), <math> <mi>m</mi></math>"), gridjs.html("NPSH is the difference between the inlet pressure to the lowest pressure level inside the pump.")],

    [gridjs.html("Cavitation"), gridjs.html("Cavitation.")],

    [gridjs.html("Thermal resistance (<math><mi>&theta;</mi></math> or <math><msub><mi>R</mi><mn>th</mn></msub></math>), <math><mfrac><mrow><mi>&deg;</mi><mi>C</mi></mrow> <mrow><mi>W</mi></mrow></mfrac></math>"), gridjs.html("Thermal resistance informs how difficult it is to conduct heat.<br /><br /><math><mi>&theta;</mi><mo>=</mo><mfrac><mrow><mi>&Delta;</mi><mi>T</mi></mrow><mrow><mi>P</mi></mrow></mfrac></math>,<br />where <math><mi>&Delta;</mi><mi>T</mi></math> is the temperature difference between 2 points, and<br /><math><mi>P</mi></math> is the heat flow between the 2 points in <math><mi>W</mi></math>.")],

    [gridjs.html("Conductive thermal resistance (<math><mi>&theta;</mi></math> or <math><msub><mi>R</mi><mn>th</mn></msub></math>), <math><mfrac><mrow><mi>&deg;</mi><mi>C</mi></mrow> <mrow><mi>W</mi></mrow></mfrac></math>"), gridjs.html("<math><mi>&theta;</mi><mo>=</mo><mfrac><mrow><mi>L</mi></mrow><mrow><mi>k</mi><mi>A</mi></mrow></mfrac></math>,<br />where <math><mi>L</mi></math> is the length between 2 points,<br /><math><mi>k</mi></math> is the thermal conductivity, and<br /><math><mi>A</mi></math> is the cross-sectional area.")],

    [gridjs.html("Heat transfer across materials"), gridjs.html("Cavitation.")],
    [gridjs.html("Film coefficient (h), <math><mfrac><mrow><mi>W</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>&sdot;</mo><mi>K</mi></mrow></math>"), gridjs.html("The amount of heat flux required to cause a unit difference in temperature between the surface and the bulk temperature.")],
    /* References!!!
    https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/08/Lesson-2-Film-Coefficient-tp.pdf */

    [gridjs.html("Nusselt number"), gridjs.html("Nusselt is function of Re and Pr. *** add more!!")],
    /* References!!!
    https://www.sciencedirect.com/science/article/abs/pii/S136403212200586X
    https://www.thermal-engineering.org/what-is-laminar-vs-turbulent-nusselt-number-definition/
    */
  ],
});
table2.render(document.getElementById("Transmission"));

const table3 = new gridjs.Grid({
  columns: ["Term/Concepts", "Definition"],
  data: [
    [gridjs.html("Specific Heat Capacity (<math><msub><mi>C</mi><mn>p</mn></msub></math>), <math><mi>J</mi><mo>/</mo><mi>k</mi><mi>g</mi><mo>&sdot;</mo><mi>K</mi></math>"), gridjs.html("Amount of energy used to increase temperature of the goven object with mass of 1kg by 1K.<br /><br /><math><mi>Q</mi><mo>=</mo><mi>m</mi><msub><mi>C</mi><mn>p</mn></msub><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math>, <br />where <math><mi>Q</mi></math> is the heat added, <br /><math><mi>m</mi></math> is the mass, <br /><math><msub><mi>C</mi><mn>p</mn></msub></math> is the specific heat capacity, and <br /><math><msub><mi>T</mi><mn>1</mn></msub></math> and <math><msub><mi>T</mi><mn>2</mn></msub></math> are the initial and final temperatures respectively.")],
    
    [gridjs.html("Specific latent heat of vaporisation (L), <math><mi>J</mi><mo>/</mo><mi>k</mi><mi>g</mi></math>"), gridjs.html("Amount of energy used to completely vaporise 1kg of the given liquid.<br /><br /><math><mi>Q</mi><mo>=</mo><mi>L</mi><mi>m</mi></math>, <br />where <math><mi>Q</mi></math> is the heat added, <br /><math><mi>L</mi></math> is the specific latent heat of vaporisation, and <br /><math><mi>m</mi></math> is the mass.")],

    [gridjs.html("Thermal conductivity (k), <math><mi>J</mi><mo>/</mo><mi>k</mi><mi>g</mi></math>"), gridjs.html("Amount of heat transferred per unit time through a unit area of a material, when there is a unit temperature difference across a unit thickness.")],

    [gridjs.html("Emmissivity (<math><mi>&epsilon;</mi></math>)"), gridjs.html("Emmisivity is the ratio of the thermal radiation emitted by a material's surface to the radiation emitted by an ideal blackbody at the same temperature.<br /><br /><math><mi>0</mi><mo>&le;</mo><mi>&epsilon;</mi><mo>&le;</mo><mi>1</mi></math>.")],

    [gridjs.html("Heat flux (q)"), gridjs.html("Heat flux is the amount of heat energy flowing through each square meter of a surface every second. <br /><br /><math><mi>q</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>Q</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>A</mi></math>, <br />where <math><mi>q</mi></math> is the heat flux, <br /><math><mi>Q</mi></math> is the heat, <br /><math><mi>t</mi></math> is the time, and <br /><math><mi>A</mi></math> is the area.")],

    [gridjs.html("Convection heat transfer, <math><mi>W</mi></math>"), gridjs.html("Energy transfer rate by movement of the fluid.<br /><br /><math><mover><mi>Q</mi><mo>&dot;</mo></mover><mo>=</mo><msub><mi>h</mi><mn>c</mn></msub><mi>A</mi><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math>,<br />where <math><mover><mi>Q</mi><mo>&dot;</mo></mover></math> is the heat transfer rate, <br /><math><msub><mi>h</mi><mn>c</mn></msub></math> is the convective heat transfer coefficient,<br /><math><mi>A</mi></math> is the area,<br /><math><msub><mi>T</mi><mn>1</mn></msub></math> is the temperature of the heated surface, and<br /><math><msub><mi>T</mi><mn>2</mn></msub></math> is the temperature of the fluid.")],

    [gridjs.html("Radiative heat transfer, <math><mi>W</mi></math>"), gridjs.html("Energy transfer rate by radiation.<br /><br /><math><mover><mi>Q</mi><mo>&dot;</mo></mover><mo>=</mo><mi>&epsilon;</mi><mi>&sigma;</mi><mi>A</mi><mo>(</mo><msubsup><mi>T</mi><mn>1</mn><mn>4</mn></msubsup><mo>-</mo><msubsup><mi>T</mi><mn>2</mn><mn>4</mn></msubsup><mo>)</mo></math>,<br />where <math><mover><mi>Q</mi><mo>&dot;</mo></mover></math> is the heat transfer rate, <br /><math><mi>&epsilon;</mi></math> is the emissivity of the object,<br /><math><mi>&sigma;</mi></math> is the absorptivity of the object,<br /><math><mi>A</mi></math> is the area,<br /><math><msub><mi>T</mi><mn>1</mn></msub></math> is the temperature of the heated surface, and<br /><math><msub><mi>T</mi><mn>2</mn></msub></math> is the temperature of the fluid.")],
    
    [gridjs.html("Conduction heat transfer (Fourier's law), <math><mi>W</mi></math>"), gridjs.html("Energy transfer rate through a material by conduction.<br /><br /><math><mover><mi>Q</mi><mo>&dot;</mo></mover><mo>=</mo><mo>-</mo><mi>k</mi><mi>A</mi><mfrac><mi>dT</mi><mi>dx</mi></mfrac></math>,<br />where <math><mover><mi>Q</mi><mo>&dot;</mo></mover></math> is the heat transfer rate, <br /><math><mi>k</mi></math> is the thermal conductivity,<br /><math><mi>A</mi></math> is the area, and<br /><math><mfrac><mi>dT</mi><mi>dx</mi></mfrac></math> is the temperature gradient.")],

    [gridjs.html("Heat transfer rate"), gridjs.html("<math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>net</mn></msub><mo>=</mo><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>convection</mn></msub><mo>+</mo><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>radiative</mn></msub><mo>+</mo><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>conduction</mn></msub></math>,<br />where <math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>net</mn></msub></math> is the total heat transfer rate,<br /><math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>convection</mn></msub></math> is the convective heat transfer rate,<br /><math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>radiative</mn></msub></math> is the radiative heat transfer rate, and<br /><math><msub><mover><mi>Q</mi><mo>&dot;</mo></mover><mn>conduction</mn></msub></math> is the conductive heat transfer rate.")],

    [gridjs.html("Heat gain by absorptivity at constant pressure"), gridjs.html("<math><mi>Q</mi><mo>=</mo><mi>&alpha;</mi><mi>m</mi><msub><mi>C</mi><mn>p</mn></msub><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math>,<br />where <math><mi>Q</mi></math> is the heat gained,<br /><math><mi>&alpha;</mi></math> is the absorptivity,<br /><math><mi>m</mi></math> is the mass,<br /><math><msub><mi>C</mi><mn>p</mn></msub></math> is the specific heat at constant pressure, and<br /><math><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math> is the temperature difference between the surfaces.")],

  ],
});
table3.render(document.getElementById("Thermal"));


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
