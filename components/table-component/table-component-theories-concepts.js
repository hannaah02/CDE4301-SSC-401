const table1 = new gridjs.Grid({
  columns: ["Term/Concepts", "Definition"],
  data: [
    /* Sunlight */

    [gridjs.html("Solar spectrum"), gridjs.html("The sun emits electromagnetic radiation within a range of wavelengths, which mainly consists of:<ol><li>Ultraviolet light: <math><mi>100</mi> <mo>-</mo> <mi>380</mi> <mi>n</mi><mi>m</mi></math> </li><li>Visible light: <math><mi>380</mi> <mo>-</mo> <mi>780</mi><mi>n</mi><mi>m</mi></math></li><li>Infrared light: <math><mi>780</mi><mi>n</mi><mi>m</mi> <mo>-</mo> <mi>1</mi><mi>m</mi><mi>m</mi></math></li></ol> [1]")],
    /* References!!!
    https://sunwindsolar.com/blog/solar-radiation-spectrum/ */

    [gridjs.html("Azimuth angle"), gridjs.html("Azimuth angle is the horizontal angle between the direction of the sun and true north measured clockwise. [2]")],
    /* References!!
    https://arka360.com/ros/solar-angles */

    [gridjs.html("Altitude angle"), gridjs.html("Altitude angle is the angular distance between the sun's rays and the horizon. [2]")],
    /* References!!
    https://arka360.com/ros/solar-angles */

    [gridjs.html("Solar zenith angle"), gridjs.html("Solar zenith angle is the angle that the sun makes with the normal to a horizontal surface. [2]")],
    /* References!!
    https://arka360.com/ros/solar-angles */

    [gridjs.html("Irradiance, <math> <mfrac> <mi> W </mi> <msup> <mi> m </mi> <mn> 2 </mn> </msup> </mfrac> </math>"), gridjs.html("Power of electromagnetic radiation (solar spectrum)/Radiant flux incident upon a surface. <br /><br /><b>Direct Normal Irradiance (DNI)</b>: Solar radiance received directly from the sun, measured on a surface perpendicular to the sun's rays. Critical for concentrating solar power (CSP) systems. <br /><b>Diffuse Horizontal Irradiance (DHI)</b>: Solar radiation scattered by the atmosphere and reaching the Earth's surface from all directions. Important on cloudy or hazy days. <br /><b>Global Horizontal Irradiance (GHI)</b>: The total solar radiation on a horizontal surface, combining both direct and diffuse components. <br /><br /><math><mi>GHI</mi> <mo>=</mo> <mi>DHI</mi> <mo>+</mo> <mi>DNI</mi> <mi>cos</mi> <mo>(</mo> <mi>&theta;</mi> <mo>)</mo> </math>, <br />where <math><mi>&theta;</mi></math> is the solar zenith angle. [3][4]")],
    /* References!!
    https://www.sciencedirect.com/science/article/abs/pii/B978012397021300003X (Chapter 3: Laws of Light)
    https://www.sevensensor.com/solar-irradiance-in-pv-systems-poa-ghi-dhi-dni
    */

    [gridjs.html("AM1.5G"), gridjs.html("AM1.5G is the global horizontal irradiance spectrum. AM1.5 refers to an air mass of 1.5 and can be calculated using <math><mi>AM</mi><mo>=</mo><mfrac><mrow><mi>1</mi></mrow><mrow><mi>cos</mi><mi>&theta;</mi></mrow></mfrac></math>, where <math><mi>&theta;</mi></math> is the solar zenith angle. [5]")],
    /* References!!
    https://www.ossila.com/pages/standard-solar-spectrum */

    /* [gridjs.html("AM1.5G"), gridjs.html("AM1.5G is the global standardised solar spectrum for global horizontal irradiance. This is not 100% accurate for equatorial region which uses AM1.")], */
    /* References!!!
    https://www.ossila.com/pages/standard-solar-spectrum
    https://g2voptics.com/solar-simulation/solar-energy-air-mass/
    */

    [gridjs.html("1 sun"), gridjs.html("1 sun is the standard illumination at AM1.5 which is <math><mi>1000</mi><mfrac><mrow><mi>W</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac></math>. [6]")],
    /* References!!
    https://www.pveducation.org/pvcdrom/solar-cell-operation/effect-of-light-intensity */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Light */

     [gridjs.html("Intensity"), gridjs.html("Intensity is the power per unit area.<br /><br /><math><mi>I</mi><mo>=</mo><mfrac><mrow><mi>P</mi></mrow><mrow><mi>A</mi></mrow></mfrac></math>,<br />where <math><mi>I</mi></math> is intensity,<br /><math><mi>P</mi></math> is power, and<br /><math><mi>A</mi></math> is area.")],

     [gridjs.html("Inverse square law"), gridjs.html("Light intensity reduces with distance and its rate of decrease is proportional to the square of the distance between the source and the point.<br /><br /><math><mi>I</mi><mo>&prop;</mo><mfrac><mi>1</mi><mrow><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac></math> [3][7]")],
    /* References!!
    https://www.sciencedirect.com/science/article/abs/pii/B978012397021300003X (Chapter 3: Laws of Light)
    https://www.sciencedirect.com/science/article/abs/pii/B978012397021300003X (Telecommunications Engineer's Reference Book, 8 - Sound, speech and hearing) */

    [gridjs.html("Lumen, <math><mi>l</mi><mi>m</mi></math>"), gridjs.html("Unit for luminous flux, a measure of the total amount of visible light that a light source emits. [8]")],

    /* References!!
    https://lamptwist.com/pages/lighting-guide-lumen-lm */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Optics */

    /*[gridjs.html("Absorptivity, <math><mi>&alpha;</mi></math>"), gridjs.html("The ability of a material to absorb light.")],
    [gridjs.html("Reflectivity, <math><mi>&rho;</mi></math>"), gridjs.html("The ability of a material to reflect light.")],
    [gridjs.html("Transmissivity, <math><mi>&tau;</mi></math>"), gridjs.html("The ability of a material to transmit light through it.")],*/

    [gridjs.html("Absorptivity, reflectivity and transmissivity"), gridjs.html("<b>Absorptivity, <math><mi>&alpha;</mi></math></b>: The ability of a material to absorb light.<br /><b>Reflectivity, <math><mi>&rho;</mi></math></b>: The ability of a material to reflect light.<br /><b>Transmissivity, <math><mi>&tau;</mi></math></b>: The ability of a material to transmit light through it.<br /><br /><math><mi>&alpha;</mi> <mo>+</mo> <mi>&rho;</mi> <mo>+</mo> <mi>&tau;</mi> <mo>=</mo> <mi>1</mi></math>")],

    [gridjs.html("Law of Reflection"), gridjs.html("The angle of the incident ray, <math><msub><mi>&theta;</mi><mn>i</mn></msub></math>, is equals to the angle of the reflected ray, <math><msub><mi>&theta;</mi><mn>r</mn></msub></math>.<br /><br /><math><msub><mi>&theta;</mi><mn>i</mn></msub><mo>=</mo><msub><mi>&theta;</mi><mn>r</mn></msub></math> [9]")],  
    /* References!!!
    https://byjus.com/physics/reflection-of-light-laws-of-reflection/ */
    
    [gridjs.html("Lambert's Cosine Law"), gridjs.html("Describes the relationship between the intensity of the light, the angle of incidence of the light and the amount of light reflected off a surface. It assumes a Lambertian surface (perfect diffusion).<br /><br /><math><msub><mi>I</mi><mn>r</mn></msub><mo>=</mo><msub><mi>I</mi><mn>i</mn></msub><mi>cos</mi><mi>&theta;</mi></math>,<br />where <math><msub><mi>I</mi><mn>r</mn></msub></math> is the intensity of the reflected light,<br /><math><msub><mi>I</mi><mn>i</mn></msub></math> is the intensity of the incident light, and<br /><math><mi>&theta;</mi></math> is the angle of incidence of the incident light. [10]")],
    /* References!!
    https://byjus.com/physics/lamberts-cosine-law/ */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Reflector */

    [gridjs.html("Focal point"), gridjs.html("Focal point is the distance from the centre of a curved surface where all the light rays concentrate to.<br /><br />Focal point of parabolic dish:<br /><math><mi>f</mi><mo>=</mo><mfrac><mrow><msup><mi>D</mi><mn>2</mn></msup></mrow><mrow><mi>16</mi><mi>d</mi></mrow></mfrac></math>,<br />where <math><mi>f</mi></math> is the focal point,<br /><math><mi>D</mi></math> is the diameter, and<br /><math><mi>d</mi></math> is the depth.")],

    [gridjs.html("Optical efficiency <math><mo>(</mo><msub><mi>&eta;</mi><mn>opt</mn></msub><mo>)</mo></math>"), gridjs.html("The optical efficiency of a reflector.<br /><br /><math><msub><mi>&eta;</mi><mn>opt</mn></msub><mo>=</mo><msub><mi>&eta;</mi><mn>reflect</mn></msub><mo>&times;</mo><msub><mi>&eta;</mi><mn>intercept</mn></msub><mo>&times;</mo><msub><mi>&eta;</mi><mn>cos</mn></msub><mo>&times;</mo><msub><mi>&eta;</mi><mn>shading</mn></msub><mo>&times;</mo><msub><mi>&eta;</mi><mn>soiling</mn></msub></math>,<br />where <math><msub><mi>&eta;</mi><mn>opt</mn></msub></math> is the optical efficiency,<br ><math><msub><mi>&eta;</mi><mn>reflect</mn></msub></math> is the mirror reflectivity (fraction of light reflected by heliostats),<br /><math><msub><mi>&eta;</mi><mn>intercept</mn></msub></math> is the fraction of reflected rays hitting teh receiver,<br /><math><msub><mi>&eta;</mi><mn>cos</mn></msub></math> is the cosine factor for incidence angle between heliostat normal and sun rays,<br /><math><msub><mi>&eta;</mi><mn>shading</mn></msub></math> is the loss due to heliostats shading each other or being blocked, and<br /><math><msub><mi>&eta;</mi><mn>soiling</mn></msub></math> is the loss due to dust, dirt, or other surface degradation.")],

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Receiver */

    [gridjs.html("Concentration ratio"), gridjs.html("Concentration ratio is the ratio of the area of the receiver to the area exposed to sunlight. This ratio is imporant when designing solar dishes.<br /><br /><math><mi>Concentration ratio</mi><mo>=</mo><mfrac><mrow><mi>Area of receiver</mi></mrow><mrow><mi>Area exposed to sunlight</mi></mrow></mfrac></math> [11]")],
    /* References!!!
    https://www.sciencedirect.com/topics/engineering/concentration-ratio
    */

    [gridjs.html("Power formula 1"), gridjs.html("<math><mi>P</mi><mo>=</mo><mi>I</mi><mi>A</mi></math>,<br />where <math><mi>P</mi></math> is power,<br /><math><mi>I</mi></math> is intensity, and<br /><math><mi>A</mi></math> is area.")],

    [gridjs.html("Power formula 2"), gridjs.html("<math><mi>P</mi><mo>=</mo><mfrac><mrow><mi>Q</mi></mrow><mrow><mi>t</mi></mrow></mfrac></math>,<br />where <math><mi>P</mi></math> is power,<br /><math><mi>Q</mi></math> is heat gain, and<br /><math><mi>t</mi></math> is time.")],

    [gridjs.html("Thermal efficiency of solar collector"), gridjs.html("Thermal efficiency is the fraction of energy converted to useful work.<br /><br /><math><mi>&eta;</mi><mo>=</mo><mfrac><mrow><mover><mi>Q</mi><mn>&dot;</mn></mover></mrow><mrow><msub><mi>A</mi><mn>c</mn></msub><msub><mi>I</mi><mn>s</mn></msub></mrow></mfrac></math>,<br />where <math><mi>&eta;</mi></math> is the thermal efficiency of the solar collector,<br /><math><msub><mi>A</mi><mn>c</mn></msub></math> is the area of absorber plate, and<br /><math><msub><mi>I</mi><mn>s</mn></msub></math> is the light intensity on absorber plate. [12][13]")],
    /* References!!
    https://www.researchgate.net/publication/369806018_Investigation_of_Tungsten_Halogen_Lamp_for_Possible_Usage_as_Heat_Source_for_Testing_Solar_Collector
    https://energyeducation.ca/encyclopedia/Thermal_efficiency */

    [gridjs.html("Percentage difference in thermal efficiency of solar collector testing under natural and articifial sunlight <math><mo>(</mo><mi>%</mi><msub><mi>d</mi><mn>eff</mn></msub><mo>)</mo></math>"), gridjs.html("Percentage difference in thermal efficiency of solar collector testing under natural and articifial sunlight is the ratio of the difference between the natural and artificial sunliht to the natural sunlight.<br /><br /><math><mi>%</mi><msub><mi>d</mi><mn>eff</mn></msub><mo>=</mo><mfrac><mrow><mo>|</mo><msub><mi>&eta;</mi><mn>natural</mn></msub><mo>-</mo><msub><mi>&eta;</mi><mn>artificial</mn></msub><mo>|</mo></mrow><mrow><msub><mi>&eta;</mi><mn>natural</mn></msub></mrow></mfrac><mo>&times;</mo><mi>100</mi><mi>%</mi></math>,<br />where <math><mi>%</mi><msub><mi>d</mi><mn>eff</mn></msub></math> is the percentage difference,<br /><math><msub><mi>&eta;</mi><mn>natural</mn></msub></math> is the thermal efficiency of the solar collector under natural sunlight, and<br /><math><msub><mi>&eta;</mi><mn>artificial</mn></msub></math> is the thermal efficiency of the solar collector under artificial sunlight. [12]")],
    /* References!!
    https://www.researchgate.net/publication/369806018_Investigation_of_Tungsten_Halogen_Lamp_for_Possible_Usage_as_Heat_Source_for_Testing_Solar_Collector */

    [gridjs.html("Uniformity value <math><mo>(</mo><mi>%</mi><msub><mi>u</mi><mn>xy</mn></msub><mo>)</mo></math>"), gridjs.html("Uniformity value is a measure of the incident light intensity at each position on the light field relative to the average light intensity on the field.<br /><br /><math><mi>%</mi><msub><mi>u</mi><mn>xy</mn></msub><mo>=</mo><mo>|</mo><mfrac><mrow><msub><mi>I</mi><mn>xy</mn></msub><mo>-</mo><msub><mi>I</mi><mn>average</mn></msub></mrow><mrow><msub><mi>I</mi><mn>average</mn></msub></mrow></mfrac><mo>|</mo><mo>&times;</mo><mi>100</mi></math>,<br />where <math><mi>%</mi><msub><mi>u</mi><mn>xy</mn></msub></math> is the uniformity value,<br /><math><msub><mi>I</mi><mn>xy</mn></msub></math> is the irradiance intensity at any x-y position, and<br /><math><msub><mi>I</mi><mn>average</mn></msub></math> is the average irradiance intensity on the light field. [12]")],
    /* References!!
    https://www.researchgate.net/publication/369806018_Investigation_of_Tungsten_Halogen_Lamp_for_Possible_Usage_as_Heat_Source_for_Testing_Solar_Collector */


    [gridjs.html("View factor <math><mo>(</mo><msub><mi>F</mi><mn>ij</mn></msub><mo>)</mo></math>"), gridjs.html("The fraction of thermal energy emitted or radiated from a surface that is subjected onto another surface. It is purely geometrical and independant of physical properties.<br /><br /><math><mi>0</mi><mo>&le;</mo><msub><mi>F</mi><mn>ij</mn></msub><mo>&le;</mo><mi>1</mi></math>,<br />Applying to the radiative loss, <math><msub><mi>Q</mi><mn>ij</mn></msub><mo>=</mo><msub><mi>A</mi><mn>i</mn></msub><msub><mi>&epsilon;</mi><mn>i</mn></msub><msub><mi>F</mi><mn>ij</mn></msub><mi>&sigma;</mi><mo>(</mo><msubsup><mi>T</mi><mn>i</mn><mn>4</mn></msubsup><mo>-</mo><msubsup><mi>T</mi><mn>j</mn><mn>4</mn></msubsup><mo>)</mo></math>,<br />where <math><msub><mi>Q</mi><mn>ij</mn></msub></math> is the heat transfer rate,<br /><math><msub><mi>A</mi><mn>i</mn></msub></math> is the surface area,<br /><math><msub><mi>&epsilon;</mi><mn>i</mn></msub></math> is the emissivity of the object,<br /><math><msub><mi>F</mi><mn>ij</mn></msub></math> is the view factor,<br /><math><mi>&sigma;</mi></math> is the absorptivity of the object,<br /><math><msub><mi>T</mi><mn>i</mn></msub></math> is the temperature of the heated surface, and<br /><math><msub><mi>T</mi><mn>j</mn></msub></math> is the temperature of the surroundings. [14][15]")],
    /* References!!!
    https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/05/Lesson-2-View-factors.pdf and
    http://imartinez.etsiae.upm.es/~isidoro/tc3/Radiation%20View%20factors.pdf */


    /* Additional terms to add:
    [gridjs.html("Optical efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Thermal efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Exergy efficiency"), gridjs.html("Cavitation.")],
    [gridjs.html("Levelised Cost of Heat (LCOH)"), gridjs.html("Cavitation.")],
    [gridjs.html("Monte-Carlo Ray Tracing"), gridjs.html("Cavitation.")],
    [gridjs.html("SOLTrace"), gridjs.html("Cavitation.")], */

  ],
});
table1.render(document.getElementById("Light"));

const table2 = new gridjs.Grid({
  columns: ["Term/Concepts", "Definition"],
  data: [

    /* Heat Transfer Fluid (HTF) */

    [gridjs.html("Heat transfer coefficient (HTC) in transient heat conduction"), gridjs.html("Heat transfer coefficient describes the efficiency of the heat transfer.<br /><br /><math><mi>HTC</mi><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mi>&rho;</mi><msub><mi>C</mi><mn>p</mn></msub></mrow><mrow><mi>t</mi></mrow></mfrac></msqrt></math>,<br />where <math><mi>HTC</mi></math> is the heat transfer coefficient,<br /><math><mi>k</mi></math> is the thermal conductivity,<br /><math><mi>&rho;</mi></math> is the density,<br /><math><msub><mi>C</mi><mn>p</mn></msub></math> is the specific heat capacity, and<br /><math><mi>t</mi></math> is the time. [16]")],
    /* References!!!
    https://thermtest.com/the-ultimate-guide-to-heat-transfer-fluids
    */

    [gridjs.html("Thermal stability"), gridjs.html("Thermal stability is the materials ability to resist breaking down under heat. [17]")],
    /* References!!
    https://www.sciencedirect.com/topics/materials-science/thermal-stability
    Not: https://www.sciencedirect.com/science/article/abs/pii/B9780128498767000105 */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Fluid motion */

    [gridjs.html("Nusselt number (Nu)"), gridjs.html("Nusselt number is the ratio between the convective and conductive heat transfer. Nusselt number is also a function of Reynold's number and Prandtl's number.<br /><br /><math><mi>Nu</mi><mo>=</mo><mfrac><mrow><mi>hL</mi></mrow><mrow><mi>k</mi></mrow></mfrac></math>,<br />where <math><mi>h</mi></math> is the convective heat transfer coefficient,<br /><math><mi>L</mi></math> is the charactertistic length, and<br /><math><mi>k</mi></math> is the thermal conductivity. [18]<br /><br /><b>For flat plate (laminar):</b> <math><mi>Nu</mi><mo>=</mo><mi>0.664</mi><msup><mi>Re</mi><mn>0.5</mn></msup><msup><mi>Pr</mi><mn>1/3</mn></msup></math> for <math><mi>Re</mi><mo>></mo><mi>5</mi><mo>&times;</mo><msup><mi>10</mi><mn>5</mn></msup></math><br /><b>For circular tube under constant surface temperature (laminar):</b> <math><mi>Nu</mi><mo>=</mo><mi>3.66</mi></math><br /><b>For cicular tube under constant surface heat flux (laminar):</b> <math><mi>Nu</mi><mo>=</mo><mi>4.36</mi></math>,<br />where Re is Reynold's number, and<br />Pr is Prandtl's number. [19]")],
    /* References!!!
    https://www.sciencedirect.com/topics/chemical-engineering/nusselt-number
    Not: www.sciencedirect.com/science/article/pii/S0017931016302083
    https://www.thermal-engineering.org/what-is-laminar-vs-turbulent-nusselt-number-definition/
    */

    [gridjs.html("Flow rate (Q), <math><mfrac><mrow><msup><mi>m</mi><mn>3</mn></msup></mrow><mrow><mi>s<mi></mrow></mfrac></math>"), gridjs.html("Flow rate is the measure of the volume of fluid passing through per unit time.<br /><br /><math> <mi>Q</mi> <mo>=</mo><mi>V</mi><mi>A</mi></math>, <br />where <math><mi>V</mi></math> is the velocity, and <br /><math><mi>A</mi></math> is the area.")],

    [gridjs.html("Viscocity, <math><mfrac><mrow><mi>&mu;</mi> </mrow><mrow> <mi>P</mi><mi>a</mi><mo>&sdot;</mo><mi>s</mi></mrow></mfrac></math>"), gridjs.html("Unit for luminous flux, a measure of the total amount of visible light that a light source emits.")],

    [gridjs.html("Static Head (HS), <math> <mi>m</mi></math>"), gridjs.html("Static head is the total vertical distance between the surface of the water's origin to its destination. [20]")],
    /* References!!
    https://iwakiamerica.com/blog/the-science-behind-total-dynamic-head-and-its-relevance-in-fluid-dynamics/ */

    [gridjs.html("Friction Head (HF), <math> <mi>m</mi></math>"), gridjs.html("Friction head is the head loss due to friction as the fluid moves through the pipe. [20]")],
    /* References!!
    https://iwakiamerica.com/blog/the-science-behind-total-dynamic-head-and-its-relevance-in-fluid-dynamics/ */

    [gridjs.html("Pressure Head (HP), <math> <mi>m</mi></math>"), gridjs.html("Pressure head is the pressure the pump needs to overcome. [21]")],
    /* References!!
    https://www.globalpumps.com.au/blog/what-role-does-head-pressure-play */

    [gridjs.html("Total Dynamic Head (TDH), <math> <mi>m</mi></math>"), gridjs.html("Summation of the head losses in a fluid system. It is the equivalent height the pump needs to raise the fluid and is used as a gauge for the energy required to pump a fluid through a system. [20][22]")],
    /* References!!
    https://www.grundfos.com/content/dam/global/page-assets/learn/ecademy/pdfs/us-course-108L-module-1-pump-selection-basics.pdf
    https://iwakiamerica.com/blog/the-science-behind-total-dynamic-head-and-its-relevance-in-fluid-dynamics/
    Not: https://www.linkedin.com/posts/fernando-romo-sanchez-6ba025303_pump-performance-curves-are-vital-for-calculating-activity-7377459998903201792-jHOM */

    [gridjs.html("Differential pressure <math><mo>(</mo><mi>&Delta;</mi><mi>P</mi><mo>)</mo></math>, bar"), gridjs.html("Differential pressure is the difference in pressure between 2 points.<br /><br /><math><mi>&Delta;</mi><mi>P</mi><mo>=</mo><mi>0.0981</mi><mo>&times;</mo><mi>TDH</mi><mo>&times;</mo><mi>SG</mi></math>,<br />where <math><mi>TDH</mi></math> is the head, and<br /><math><mi>SG</mi></math> is the specific gravity of the fluid. [35]")],
    /* References!!
    [35] https://www.engineeringtoolbox.com/pump-head-pressure-d_663.html */


    [gridjs.html("Net Positive Suction Head (NPSH), <math> <mi>m</mi></math>"), gridjs.html("NPSH is the difference between the inlet pressure to the lowest pressure level inside the pump. [23]")],
    /* References!!
    https://www.grundfos.com/sg/learn/research-and-insights/npsh-net-positive-suction-head */

    [gridjs.html("Net Positive Suction Head Available (NPSHa), <math> <mi>m</mi></math>"), gridjs.html("NPSHs is the NPSH available in the system. NPSHa needs to be higher than the NPSH required (NPSHr) of a pump.<br /><br /><math><msub><mi>NPSH</mi><mn>a</mn></msub><mo>=</mo><msub><mi>h</mi><mn>a</mn></msub><mo>-</mo><msub><mi>h</mi><mn>vpa</mn></msub><mo>+</mo><msub><mi>h</mi><mn>st</mn></msub><mo>-</mo><msub><mi>h</mi><mn>f</mn></msub></math>,<br />where <math><msub><mi>h</mi><mn>a</mn></msub></math> is the absolute pressure,<br /><math><msub><mi>h</mi><mn>vpa</mn></msub></math> is the absolute value of the vapour head,<br /><math><msub><mi>h</mi><mn>st</mn></msub></math> is the static head, and<br /><math><msub><mi>h</mi><mn>f</mn></msub></math> is the friction head. [24][25]")],
    /* References!! 
     https://www.northridgepumps.com/article-67_low-npsh-pumps-guide
     https://www.pumpsandsystems.com/npsh-calculation-step-step-guide */

    [gridjs.html("Net Positive Suction Head Required (NPSHr), <math> <mi>m</mi></math>"), gridjs.html("NPSHr is the lowest inlet pressure required for the pump to work properly and reduce cavitation or flashing. [23]")],
    /* References!! 
    https://www.grundfos.com/sg/learn/research-and-insights/npsh-net-positive-suction-head */

    [gridjs.html("Cavitation"), gridjs.html("Cavitation refers to the phenomenon in pumps caused by the formation and implosion of vapor bubbles due to pressure variations. This phenomenon damages metal components. The damage leaves a cratered surface. [26][27]")],
    /* References!!
    https://www.csidesigns.com/blog/articles/what-is-pump-cavitation-and-how-to-prevent-it
    https://tameson.com/pages/cavitation-flashing */

    [gridjs.html("Flashing"), gridjs.html("Flashing is the beginning stages of cavitation. Vapour bubbles form as the liquid passes thorugh an area of presssure lower than the vapour pressure, but does not implode. Excessive bubbles chokes valves, increasing flow velocity, which causes damage. The damage caused leaves a smooth and shiny surface. [27]")],
    /* References!!
    https://tameson.com/pages/cavitation-flashing */

    [gridjs.html("Vapour pressure"), gridjs.html("Vapour pressure is the pressure exerted by a vapour with its liquid or solid phases in a closed system, at a given temperature at thermal equilibrium. [28]")],
    /* References!!
    https://byjus.com/chemistry/liquid-state-vapour-pressure/ */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ /* REFERENCES NOT ADDED */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Power */

    [gridjs.html("Power"), gridjs.html("<math><mi>P</mi><mo>=</mo><mi>I</mi><mi>V</mi></math>,<br />where <math><mi>P</mi></math> is the power,<br /><math><mi>I</mi></math> is the current, and<br /><math><mi>V</mi></math> is the voltage.")],

    [gridjs.html("AC Current input"), gridjs.html("<math><msub><mi>I</mi><mn>AC</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mn>DC</mn></msub></mrow><mrow><mi>PF</mi><mo>&dot;</mo><mi>&eta;</mi><mo>&dot;</mo><msub><mi>V</mi><mn>AC</mn></msub></mrow></mfrac></math>,<br />where <math><msub><mi>I</mi><mn>AC</mn></msub></math> is the AC input current (for 1-phase),<br /><math><mi>PF</mi></math> is the power factor,<br /><math><mi>&eta;</mi></math> is the efficiency, and<br /><math><msub><mi>V</mi><mn>AC</mn></msub></math> is the AC input voltage. [29]")],
    /* References!!
    [29] https://magna-power.com/learn/kb/calculating-power-supply-ac-input-current */

    [gridjs.html("Power factor (PF)"), gridjs.html("Power factor is a measure of energy efficiency and is the ratio of the working power (in kW) to apparent power (in kVA). [30]")],
    /* References!!
    [30] https://www.fluke.com/en-sg/learn/blog/power-quality/power-factor-formula */

    [gridjs.html("Power factor correction (PFC)"), gridjs.html("Power factor correction is the methods used to improve a device's power factor. [31]")],
    /* References!!
    [31] https://www.monolithicpower.com/en/learning/resources/power-factor-correction */

    [gridjs.html("Switching power supply (SMPS)"), gridjs.html("SMPS is a form of AC to DC power converter that has higher efficiency than linear power supply. [32]")],
    /* References!!
    [32] https://www.tek.com/en/blog/what-is-a-switching-power-supply */

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Insulation */

    [gridjs.html("Thermal resistance <math><mo>(</mo><mi>&theta;</mi></math> or <math><mi>R</mi><mo>)</mo></math>, <math><mfrac><mrow><mi>&deg;</mi><mi>C</mi></mrow> <mrow><mi>W</mi></mrow></mfrac></math>"), gridjs.html("Thermal resistance is the ability of a material to resist the transfer of heat.<br /><br /><math><mi>R</mi><mo>=</mo><mfrac><mrow><mi>&Delta;</mi><mi>T</mi></mrow><mrow><mover><mi>Q</mi><mn>&dot;</mn></mover></mrow></mfrac></math>,<br />where <math><mi>R</mi></math> is the thermal resistance,<br /><math><mi>&Delta;</mi><mi>T</mi></math> is the temperature difference, and<br /><math><mover><mi>Q</mi><mn>&dot;</mn></mover></math> is the power dissipated.<br /><br />In conduction, the thermal resistance is:<br /><math><mi>R</mi><mo>=</mo><mfrac><mrow><mi>L</mi></mrow><mrow><mi>kA</mi></mrow></mfrac></math>,<br />where <math><mi>L</mi></math> is the length of material the heat is conducted through (perpendicular to the heat flow),<br /><math><mi>k</mi></math> is the thermal conductivity, and<br /><math><mi>A</mi></math> is the cross-sectional area perpendicular to the heat flow.<br /><br />In convection, the thermal resistance is:<br /><math><mi>R</mi><mo>=</mo><mfrac><mrow><mi>1</mi></mrow><mrow><mi>h</mi><msub><mi>A</mi><mn>s</mn></msub></mrow></mfrac></math>,<br />where <math><mi>h</mi></math> is the convection heat transfer coefficient, and<br /><math><mi>A</mi></math> is the cross-sectional area perpendicular to the heat flow. [33][34]")],
    /* References!!
    https://www.xometry.com/resources/materials/thermal-resistance/
    https://community.cadence.com/cadence_blogs_8/b/pcb/posts/ee-thermal-101-thermal-basics-for-electrical-engineers-part-2-of-4-893913089 */

    /* Same as convection heat transfer coefficient
    [gridjs.html("Film coefficient (h), <math><mfrac><mrow><mi>W</mi></mrow><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>&sdot;</mo><mi>K</mi></mrow></math>"), gridjs.html("The amount of heat flux required to cause a unit difference in temperature between the surface and the bulk temperature.")],
    /* References!!!
    https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/08/Lesson-2-Film-Coefficient-tp.pdf */
  ],
});
table2.render(document.getElementById("Transmission"));

const table3 = new gridjs.Grid({
  columns: ["Term/Concepts", "Definition"],
  data: [
    [gridjs.html("Specific Heat Capacity <math><mo>(</mo><msub><mi>C</mi><mn>p</mn></msub><mo>)</mo></math>, <math><mi>J</mi><mo>/</mo><mi>k</mi><mi>g</mi><mo>&sdot;</mo><mi>K</mi></math>"), gridjs.html("Amount of energy used to increase temperature of the goven object with mass of 1kg by 1K.<br /><br /><math><mi>Q</mi><mo>=</mo><mi>m</mi><msub><mi>C</mi><mn>p</mn></msub><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math>, <br />where <math><mi>Q</mi></math> is the heat added, <br /><math><mi>m</mi></math> is the mass, <br /><math><msub><mi>C</mi><mn>p</mn></msub></math> is the specific heat capacity, and <br /><math><msub><mi>T</mi><mn>1</mn></msub></math> and <math><msub><mi>T</mi><mn>2</mn></msub></math> are the initial and final temperatures respectively.")],
    
    [gridjs.html("Specific latent heat of vaporisation (L), <math><mi>J</mi><mo>/</mo><mi>k</mi><mi>g</mi></math>"), gridjs.html("Amount of energy used to completely vaporise 1kg of the given liquid.<br /><br /><math><mi>Q</mi><mo>=</mo><mi>L</mi><mi>m</mi></math>, <br />where <math><mi>Q</mi></math> is the heat added, <br /><math><mi>L</mi></math> is the specific latent heat of vaporisation, and <br /><math><mi>m</mi></math> is the mass.")],

    [gridjs.html("Thermal conductivity (k), <math><mi>W</mi><mo>/</mo><mi>m</mi><mi>K</mi></math>"), gridjs.html("Amount of heat transferred per unit time through a unit area of a material, when there is a unit temperature difference across a unit thickness.")],

    [gridjs.html("Emmissivity <math><mo>(</mo><mi>&epsilon;</mi><mo>)</mo></math>"), gridjs.html("Emmisivity is the ratio of the thermal radiation emitted by a material's surface to the radiation emitted by an ideal blackbody at the same temperature.<br /><br /><math><mi>0</mi><mo>&le;</mo><mi>&epsilon;</mi><mo>&le;</mo><mi>1</mi></math>.")],

    [gridjs.html("Heat flux (q)"), gridjs.html("Heat flux is the amount of heat energy flowing through each square meter of a surface every second. <br /><br /><math><mi>q</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>Q</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>A</mi></math>, <br />where <math><mi>q</mi></math> is the heat flux, <br /><math><mi>Q</mi></math> is the heat, <br /><math><mi>t</mi></math> is the time, and <br /><math><mi>A</mi></math> is the area.")],

    [gridjs.html("Convection heat transfer, <math><mi>W</mi></math>"), gridjs.html("Energy transfer rate by movement of the fluid.<br /><br /><math><mover><mi>Q</mi><mo>&dot;</mo></mover><mo>=</mo><mi>h</mi><mi>A</mi><mo>(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>-</mo><msub><mi>T</mi><mn>2</mn></msub><mo>)</mo></math>,<br />where <math><mover><mi>Q</mi><mo>&dot;</mo></mover></math> is the heat transfer rate, <br /><math><mi>h</mi></math> is the convective heat transfer coefficient,<br /><math><mi>A</mi></math> is the area,<br /><math><msub><mi>T</mi><mn>1</mn></msub></math> is the temperature of the heated surface, and<br /><math><msub><mi>T</mi><mn>2</mn></msub></math> is the temperature of the fluid.")],

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
