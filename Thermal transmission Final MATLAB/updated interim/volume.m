clc;clear;close all

htf_power = 142.3; % W
fprintf('For power absorbed by HTF of %f W\n', htf_power);
given_volume_TES = 58; % l
length_interm = 3;

htf_heat_capacity = 4180; % J/kgºC, Heat capacity of HTF, water
htf_dens = 1000; % kg/m^3, Density of HTF, water

volume_receiver = (pi * ((4.93 * 10^-3)/2)^2) * 10.41; % m^3, fixed the ID
volume_interm = (pi * ((6 * 10^-3)/2)^2) * length_interm; % m^3, fixed the ID

daylight_hours = 5.5;
daylight_seconds = 5.5 * 60 * 60;
total_energy_day = htf_power * daylight_seconds;

% Assuming the temperature of HTF at start of day is 30ºC
% Assuming raising temp of HTF to 60ºC
T_start = 30;
T_end = 60;

delta_T = T_end - T_start;

% Q = mc\Delta T

htf_mass = total_energy_day/(htf_heat_capacity * delta_T);
htf_volume = htf_mass/htf_dens; % in m ^3

fprintf('Volume required for 30ºC temperature change in 1 day: %f l\n', (htf_volume - volume_interm - volume_receiver) * 1000);

given_volume_TES_m3 = given_volume_TES / 1000; % l to m^3
total_vol = given_volume_TES_m3 + volume_receiver + volume_interm;
temp_rise = total_energy_day/(total_vol * htf_dens * htf_heat_capacity);

fprintf('Given %.2f l of HTF, temperature change in the TES in a day is: %f ºC\n', given_volume_TES, temp_rise);