clc;clear;

% General properties
g = 9.81;

% HTF properties, Water
HTF_dens = 1000; % kg/m^3, Density of HTF, water
HTF_heat_capacity = 4180; % J/kgºC, Heat capacity of HTF, water

% Inlet and outlet temp
R_inlet = 58.5; % ºC, Temperature of receiver inlet
R_outlet = 62.5; % ºC, Temperature of receiver outlet

% Receiver dimensions
R_ID = 4.93 * 10^-3; % m Inner diameter of receiver coil
R_length = 10.41; % m Length of receiver coil

% Receiver power input
R_power = 9.858; % 616; % W

% Mass, flow rate
R_HTF_mass = HTF_dens * (pi * (R_ID/2)^2) * R_length;
HTF_heat_absorbed = HTF_heat_capacity * R_HTF_mass * (R_outlet - R_inlet);
max_time = HTF_heat_absorbed/R_power % P = J/s

V_min = R_length/max_time; % m/s
FR_min_ms = (pi * (R_ID/2)^2) * V_min; % m^3/s
FR_min_lm = FR_min_ms * 1000 * 60 % l/min
FR_min_gpm = FR_min_lm * 0.2641720523438;

% Dimensions, height
TES_height = 0.5;               % m
R_height = 1.5;                 % m
interm_pipe_length = 1.5;       % m
pump_height = 0;                % m

% % % % % % % % % % % % % % % 
% Installable volume all in litres
% % % % % % % % % % % % % % % 
R_HTF_volume = (pi * (R_ID/2)^2) * R_length * 1000              % Volume of HTF in receiver
interm_volume = (pi * (R_ID/2)^2) * (1.5 * 2) * 1000;           % (both sides) Volume of HTF in pipes between subsystems
TES_volume = 25;                                                % assuming 25l, Volume of HTF in TES box
pipe_volume = R_HTF_volume + interm_volume;                     % in l, Total volume in pipes
installable_volume = pipe_volume + TES_volume;                  % in, l Total volume of HTF

R_HTF_mass = (R_HTF_volume/1000) * HTF_dens

% Head
min_pump_head = R_height - pump_height;                         % m, vertical distance only

friction_head_loss = 0.8784;        % friction factor of copper (1/4" OD at spec FR)
% HF = f * ((R_length + 2 * interm_pipe_length)/R_ID) * ((V_min^2)/(2 * g))
pressure_loss = 0.08617;            % bar
% https://www.omnicalculator.com/physics/friction-loss
% 0.00493 m
% 13.41 m
% 0.000007390 m^3/s
% copper

% suction_head = TES_height - pump_height;
% discharge_head = pump_height - TES_height; % 0; % m
pressure_head = 0; %pressure_loss/(HTF_dens * g);
static_head = 0; % suction_head + discharge_head

total_dynamic_head = static_head + pressure_head + friction_head_loss;

% NPSHa
pa = 101325; % assuming atm
abs_pa = pa/(HTF_dens * g);

vapour_pressure_sixty = 19.29 * 1000; % Pa https://www.omnicalculator.com/chemistry/vapour-pressure-of-water
vapour_pressure_eighty = 46.19 * 1000; % Pa same as above (https://www.omnicalculator.com/chemistry/vapour-pressure-of-water)
vpa_sixty = vapour_pressure_sixty/(HTF_dens * g);
vpa_eighty = vapour_pressure_eighty/(HTF_dens * g);

NPSHa = abs_pa - vpa_sixty + static_head - friction_head_loss;
NPSHa = abs_pa - vpa_eighty + static_head - friction_head_loss;

% Insulation
max_heat_loss = 30; % W

% Water: 
% Heating maximum: 80ºC (set > 60ºC (PCM ideal temp)), Receiver input temp: 60ºC, 
% Heat capacity: 4180J/kgºC
% Heat absorbed by water 83,600J/kg
% Vol of water in receiver: 201.642x10^-6 m^3
% Density of water: 997 kg/m^3
% Mass of water: 0.20104 kg
% Heat absorbed by water: 16806.9 J
% Power by receiver: 616 W
% Maximum duration to spend in receiver: 27.28 s
% Flow rate maximum: 