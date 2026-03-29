function [total_dynamic_head, NPSHa_sixty] = pump_requirements(power_receiver, inlet_T, outlet_T, interm_pipe_length, TES_volume, pump_height) % Utilising vapour pressure at 60ºC

    % General properties
    g = 9.81;
    
    % HTF properties, Water
    HTF_dens = 1000; % kg/m^3, Density of HTF, water
    HTF_heat_capacity = 4180; % J/kgºC, Heat capacity of HTF, water
    HTF_SG = 0.9850; % at 60ºC with 2ºC reference, https://www.engineeringtoolbox.com/water-temperature-specific-gravity-d_1179.html
    
    % Inlet and outlet temp
    R_inlet = inlet_T; % ºC, Temperature of receiver inlet
    R_outlet = outlet_T; % ºC, Temperature of receiver outlet
    
    % Receiver dimensions
    R_ID = 4.93 * 10^-3; % m Inner diameter of receiver coil
    R_length = 10.41; % m Length of receiver coil
    
    % Receiver power input
    R_power = power_receiver; % W
    
    % Mass, flow rate
    R_HTF_mass = HTF_dens * (pi * (R_ID/2)^2) * R_length;
    R_HTF_vol = (pi * (R_ID/2)^2) * R_length;
    HTF_heat_absorbed = HTF_heat_capacity * R_HTF_mass * (R_outlet - R_inlet);
    max_time = HTF_heat_absorbed/R_power; % P = J/s
    
    V_min = R_length/max_time; % m/s
    FR_min_ms = (pi * (R_ID/2)^2) * V_min; % m^3/s
    FR_min_lm = FR_min_ms * 1000 * 60; % l/min
    FR_min_gpm = FR_min_lm * 0.2641720523438;
    
    % Dimensions, height
    R_height = 1.5;                 % m
    
    % % % % % % % % % % % % % % % 
    % Installable volume all in litres
    % % % % % % % % % % % % % % % 
    R_HTF_volume = (pi * (R_ID/2)^2) * R_length * 1000;              % Volume of HTF in receiver
    interm_volume = (pi * (R_ID/2)^2) * (interm_pipe_length) * 1000;           % (both sides) Volume of HTF in pipes between subsystems
    pipe_volume = R_HTF_volume + interm_volume;                     % in l, Total volume in pipes
    installable_volume = pipe_volume + TES_volume;                  % in, l Total volume of HTF
    
    fprintf('Volume --------------------------\n');
    fprintf('The volume in the receiver is: %f l\n', R_HTF_volume);
    fprintf('The volume in the hose is: %f l\n', interm_volume);
    fprintf('The volume in all pipes is: %f l\n', interm_volume + R_HTF_volume);
    fprintf('The installable volume is: %f l\n\n', installable_volume);
    
    R_HTF_mass = (R_HTF_volume/1000) * HTF_dens;
    
    % Head
    min_pump_head = R_height - pump_height;                         % m, vertical distance only
    
    friction_head_loss = 0.7564;        % friction factor of copper (1/4" OD at spec FR)
    % HF = f * ((R_length + 2 * interm_pipe_length)/R_ID) * ((V_min^2)/(2 * g))
    pressure_loss = 0.0742;            % bar
    % https://www.omnicalculator.com/physics/friction-loss
    % 0.00493 m
    % 13.41 m
    % 0.409 l/min
    % 0.000007390 m^3/s
    % copper
    
    % suction_head = TES_height - pump_height;
    % discharge_head = pump_height - TES_height; % 0; % m
    pressure_head = 0; % pressure_loss/(HTF_dens * g);
    total_static_head = 0; % suction_head + discharge_head
    
    total_dynamic_head = total_static_head + pressure_head + friction_head_loss;

    fprintf('Requirements --------------------------\n');
    fprintf('The total dynamic head is: %f m\n', total_dynamic_head);

    % Differential pressure
    diff_pa = 0.0981 * total_dynamic_head * HTF_SG;
    fprintf('The differential pressure is: %f bar\n', diff_pa);
    
    % NPSHa
    pa = 101325; % assuming atm
    abs_pa = pa/(HTF_dens * g);
    
    vapour_pressure_sixty = 19.29 * 1000; % Pa at 60ºC https://www.omnicalculator.com/chemistry/vapour-pressure-of-water
    vpa_sixty = vapour_pressure_sixty/(HTF_dens * g);
    NPSHa_sixty = abs_pa - vpa_sixty + total_static_head - friction_head_loss;
    fprintf('The NPSHa (at 60ºC): %f m\n', NPSHa_sixty);
    
    % vapour_pressure_eighty = 46.19 * 1000; % Pa same as above (https://www.omnicalculator.com/chemistry/vapour-pressure-of-water)
    % vpa_eighty = vapour_pressure_eighty/(HTF_dens * g);
    % NPSHa_eighty = abs_pa - vpa_eighty + static_head - friction_head_loss;
    % fprintf('The NPSHa (at 80ºC): %f m', NPSHa_eighty);

end