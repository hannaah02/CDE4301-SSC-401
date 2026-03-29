function T_change = flowrate_to_temp(power_receiver, FR_lm) % flow rate in l/min
    g = 9.81;
    
    % HTF properties, Water
    HTF_dens = 1000; % kg/m^3, Density of HTF, water
    HTF_heat_capacity = 4180; % J/kgºC, Heat capacity of HTF, water
    
    % Receiver dimensions
    R_ID = 4.93 * 10^-3; % m Inner diameter of receiver coil
    R_length = 10.41; % m Length of receiver coil
    
    % Receiver power input
    R_power = power_receiver; % W
    
    % Mass, flow rate
    R_HTF_mass = HTF_dens * (pi * (R_ID/2)^2) * R_length;
    R_HTF_volume = (pi * (R_ID/2)^2) * R_length;

    % Volume passing per unit
    FR_ms = (FR_lm/60) / 1000;
    time_taken = R_HTF_volume/FR_ms;

    % Total energy
    HTF_energy_absorbed = R_power * time_taken;

    % ∆T, Q = mc\Delta T
    T_change = HTF_energy_absorbed/(R_HTF_mass * HTF_heat_capacity);

    fprintf('Temperature change --------------------------\n');
    fprintf('The temperature change for flow rate of %f l/min is %f ºC.\n', FR_lm, T_change);
end