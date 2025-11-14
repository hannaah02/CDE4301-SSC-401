clc; clear; close all;

% Insulation

power_water = 142.3; % W
perc_loss = 5;
T_water = 60; % Assuming temp of water is 60ºC for the whole of the pipe
k_water = 650.91; % Thermal conductivity of water at 60ºC https://www.engineeringtoolbox.com/water-liquid-gas-thermal-conductivity-temperature-pressure-d_2012.html
L = 3.0; % Length of pipe. Here is total length to account for both sides



% Comparing insulation

k_insulation = 0.01;


% Aerogel
k_insulation = 0.014;
total_area = 0.1 * 0.1; % in m
cost = 10.01/2;
thickness = 3; % mm

fprintf('\n\nFor aerogel \n')

cost_length = cost_insulation(cost, total_area);

thickness_req = double(insulation_thickness(power_water, k_insulation, k_water, T_water, L, perc_loss)); % in mm
final_cost_per_length = cost_per_length(thickness, thickness_req, cost_length); % all in mm

% Phenolic
k_insulation = 0.020;
% total_area = (100 * 10 ^(-3))*(100 * 10 ^(-3));
% cost = 9.27/10;
% thickness = 1; % mm

total_area = (2000 * 10^(-3)) * (1200 * 10^(-3));
cost = 26.89;
thickness = 20; % mm

fprintf('\n\nFor phenolic foam \n')
cost_length = cost_insulation(cost, total_area);

thickness_req = insulation_thickness(power_water, k_insulation, k_water, T_water, L, perc_loss); % in mm
final_cost_per_length = cost_per_length(thickness, thickness_req, cost_length); % all in mm

% PUR
total_area = 1 * 0.5;
cost = 4.29;
thickness = 20; % mm

fprintf('\n\nFor PUR foam \n')
cost_length = cost_insulation(cost, total_area);

k_insulation = 0.023;
thickness_req = insulation_thickness(power_water, k_insulation, k_water, T_water, L, perc_loss); % in mm
final_cost_per_length = cost_per_length(thickness, thickness_req, cost_length); % all in mm

k_insulation = 0.026;
thickness_req = insulation_thickness(power_water, k_insulation, k_water, T_water, L, perc_loss); % in mm
final_cost_per_length = cost_per_length(thickness, thickness_req, cost_length); % all in mm

% PE
k_insulation = 0.04;
total_area = 1 * 1.2;
cost = 4.29;
thickness = 5; % mm

fprintf('\n\nFor PE foam \n')
cost_length = cost_insulation(cost, total_area);

thickness_req = insulation_thickness(power_water, k_insulation, k_water, T_water, L, perc_loss); % in mm
final_cost_per_length = cost_per_length(thickness, thickness_req, cost_length); % all in mm
