clc;clear;

power_receiver = 142.3; % W
inlet_T = 50; % ºC
outlet_T = 55; % ºC

flowrate_receiver(power_receiver, inlet_T, outlet_T);

interm_pipe_length = 3.0; % m, both sides
TES_volume = 22; % l
pump_height = 0;                % m

[total_dynamic_head, NPSHa_sixty] = pump_requirements(power_receiver, inlet_T, outlet_T, interm_pipe_length, TES_volume, pump_height);