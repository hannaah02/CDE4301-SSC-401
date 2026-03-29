clear;clc;clear all;

% Pipe insulation (twin wall)

% Insulation
% Water and pipe (same as standard opaque insulation)
power_water = 142.3; % W
perc_loss = 5;
T_water = 60; % Assuming temp of water is 60ºC for the whole of the pipe
k_water = 650.91; % Thermal conductivity of water at 60ºC https://www.engineeringtoolbox.com/water-liquid-gas-thermal-conductivity-temperature-pressure-d_2012.html
L = 3.0; % Length of pipe. Here is total length to account for both sides

% Insulation

k_stag_air = 26.62 * 10^-3; % W/m K at 30ºC, https://www.engineeringtoolbox.com/air-properties-viscosity-conductivity-heat-capacity-d_1509.html
k_plastic = 0.280; % Thermal Conductivity W/(m⋅K), assuming fully PP, https://thermtest.com/application/thermal-conductivity-of-polypropylene
% https://www.121signs.com/pp-corrugated-sheets.html#:~:text=Hollow%20PP%20Sheet/Corrugated%20Plastic%20Sheet%20/Coroplast%20sheet,printing%2C%20industrial%20packaging%2C%20and%20product%20protection%20industries.
% material polypropylene (PP) and polyethylene (HDPE), written as hollow PP
% sheet
thickness_air = (3.3 - (2*0.03)) * 10^-3; % m
thickness_plastic = 0.03 * 10^-3; % m to be updated

% % % % % % % % % % % % % % % % % % % % % % 
% % % % % % % % % % % % % % % % % % % % % % 

fprintf('For hose:\n')
% Hose
k_pipe = 0.19; % Thermal conductivity of hose (W/(m K)) https://www.engineeringtoolbox.com/thermal-conductivity-plastics-d_1786.html
pipe_ID = 6 * 10^-3; % m Inner diameter of pipe
pipe_OD = 9 * 10^-3; % m

no_layers = insulation_twinwall_layers(power_water, k_stag_air, k_plastic, k_water, T_water, L, perc_loss, thickness_air, thickness_plastic, k_pipe, pipe_ID, pipe_OD);

% % % % % % % % % % % % % % % % % % % % % % 
% % % % % % % % % % % % % % % % % % % % % % 

fprintf('\n\nFor stainless steel pipe (smallest):\n')
% Hose
k_pipe = 14.4; % Thermal conductivity of Steel - Stainless, Type 304 	14.4 (W/(m K)) https://www.engineeringtoolbox.com/thermal-conductivity-metals-d_858.html
pipe_ID = 3 * 10^-3; % m Inner diameter of pipe
pipe_OD = 10.3 * 10^-3; % m
% Smallest size: https://www.nandishwarsteel.com/stainless-steel-pipe-dimensions.html#:~:text=Table_title:%20STAINLESS%20STEEL%20PIPE%20DIMENSION%20AS%20PER,%7C%20Sch%2DXXS:%20%2D%20%7C%20:%20%2D%20%7C

% pipe_ID = 6 * 10^-3; % m Inner diameter of pipe
% pipe_OD = 13.7 * 10^-3; % m

no_layers = insulation_twinwall_layers(power_water, k_stag_air, k_plastic, k_water, T_water, L, perc_loss, thickness_air, thickness_plastic, k_pipe, pipe_ID, pipe_OD);


% % % % % % % % % % % % % % % % % % % % % % 
% % % % % % % % % % % % % % % % % % % % % % 

fprintf('\n\nFor stainless steel pipe (20mm):\n')
% Hose
k_pipe = 14.4; % Thermal conductivity of Steel - Stainless, Type 304 	14.4 (W/(m K)) https://www.engineeringtoolbox.com/thermal-conductivity-metals-d_858.html
pipe_ID = 20 * 10^-3; % m Inner diameter of pipe
pipe_OD = 26.7 * 10^-3; % m
% nominal bore 3/4: https://www.nandishwarsteel.com/stainless-steel-pipe-dimensions.html#:~:text=Table_title:%20STAINLESS%20STEEL%20PIPE%20DIMENSION%20AS%20PER,%7C%20Sch%2DXXS:%20%2D%20%7C%20:%20%2D%20%7C

% pipe_ID = 6 * 10^-3; % m Inner diameter of pipe
% pipe_OD = 13.7 * 10^-3; % m

no_layers = insulation_twinwall_layers(power_water, k_stag_air, k_plastic, k_water, T_water, L, perc_loss, thickness_air, thickness_plastic, k_pipe, pipe_ID, pipe_OD);
