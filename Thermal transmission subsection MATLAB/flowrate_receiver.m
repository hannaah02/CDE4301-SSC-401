function FR_lm = flowrate_receiver(power_receiver, inlet_T, outlet_T)
    % General properties
    g = 9.81;
    
    % HTF properties, Water
    HTF_dens = 1000; % kg/m^3, Density of HTF, water
    HTF_heat_capacity = 4180; % J/kgºC, Heat capacity of HTF, water
    
    % Inlet and outlet temp
    R_inlet = inlet_T; % ºC, Temperature of receiver inlet
    R_outlet = outlet_T; % ºC, Temperature of receiver outlet
    
    % Receiver dimensions
    R_ID = 4.93 * 10^-3; % m Inner diameter of receiver coil
    R_length = 10.41; % m Length of receiver coil
    
    % Receiver power input
    R_power = power_receiver; % W
    
    % Mass, flow rate
    R_HTF_mass = HTF_dens * (pi * (R_ID/2)^2) * R_length
    HTF_heat_absorbed = HTF_heat_capacity * R_HTF_mass * (R_outlet - R_inlet);
    max_time = HTF_heat_absorbed/R_power; % P = J/s
    
    V = R_length/max_time; % m/s
    FR_ms = (pi * (R_ID/2)^2) * V; % m^3/s
    FR_lm = FR_ms * 1000 * 60; % l/min
    FR_gpm = FR_lm * 0.2641720523438;

    fprintf('Flow rate requirement --------------------------\n');
    fprintf('The flow rate required is %f l/min.\n', FR_lm);
    fprintf('The flow rate required is %f g/min.\n', FR_gpm);
    fprintf('The flow rate required is %f m^3/s.\n\n', FR_ms);
end