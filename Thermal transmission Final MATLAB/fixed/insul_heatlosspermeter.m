clear;clc;close all;
receiver_height = 0.16; % m
receiver_diameter = 0.2;

power_per_rig = 142.3;

L = 1;
To = 25;
Ti = 60;
r1 = (20 * 10^-3)/2;
r2 = (26.7 * 10-3)/2;
r3 = r2 + (19 * 10-3); % thickness
k_pipe = 14.4;
k_insulation = 0.036; % 0.037;
hc = 50;

k_water = 0.65091;
Nu_water = 4.36; 
h_water = (Nu_water * k_water)/(r1 * 2);
hi = h_water;

heat_loss_per_meter = (2 * pi * L * (Ti - To))/( ...
    (1/(r1 * hi)) + ...
    (log(r2/r1)/k_pipe) + ...
    (log(r3/r2)/k_insulation) + ...
    (1/(r3 * hc)))
