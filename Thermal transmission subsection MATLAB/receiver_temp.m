clc; clear all;

% % Data
% General
L_coil = 10.41; % m Length of receiver coil

% Steady state
T_copper_ss = 70;
T_water_ss = 62.5; 

% Water
T_initial_water = 32;
T_final_water = 60;
time_water = 766;

dens_water = 997; % kg/m^3
k_water = 598.03 * (10^-3); % W/m.K, Thermal conductivity, at 20ºC, https://www.engineeringtoolbox.com/water-liquid-gas-thermal-conductivity-temperature-pressure-d_2012.html
% k_water = 650.91 * (10^-3); % W/m.K, Thermal conductivity, at 60ºC, https://www.engineeringtoolbox.com/water-liquid-gas-thermal-conductivity-temperature-pressure-d_2012.html
c_water = 4180; % J/kgºC, Heat capacity of HTF, water
mass_water = 0.1987; % kg

Q_water = mass_water * c_water * (T_final_water - T_initial_water); % in J
P_water = Q_water/time_water;

% Copper
T_initial_copper = 32.2;
T_final_copper = 65;
time_copper = 587;

k_copper = 413; % W/m.K, Thermal conductivity, https://www.engineeringtoolbox.com/thermal-conductivity-metals-d_858.html
c_copper = 385; % J/kgºC, Heat capacity
mass_copper = 9.561; % kg

Q_copper = mass_copper * c_copper * (T_final_copper - T_initial_copper); % in J
P_copper = Q_copper/time_copper;

% % Inner temperature of copper at steady state, Fourier's Law

Q_fourier = P_water;
r_inner = (4.93 * 10^-3)/2; % in m
r_outer = (6.35 * 10^-3)/2; % in m
T_outer_ss = T_copper_ss; % Temp of copper at steady state

% Formula: Q = 2 * pi * k * L * \DeltaT /ln(r_outer / r_inner)
% \DeltaT = T_outer - T_inner
% https://engineeringlibrary.org/reference/conduction-heat-transfer-doe-handbook

T_inner_ss = (Q_fourier * log(r_inner/r_outer))/(2 * pi * k_copper * L_coil) + T_outer_ss;

% % hflow_water assuming laminar flow in pipe (uniform heat flux)

Nu = 4.36; % https://repository.up.ac.za/server/api/core/bitstreams/e88e9466-73c1-4110-9287-294a60dc546c/content (this cite books:
% [2] Y.A. Cengel, A.J. Ghajar, Heat and Mass Transfer: Fundamentals and Applications, 5th ed., McGraw-Hill, 2015.
% [3] J.H.I. Lienhard, J.H.V. Lienhard, A Heat Transfer Textbook, 3rd ed., Phlogiston Press, Cambridge, 2008.
% [4] A. Bejan, Convection Heat Transfer, 4th ed., John Wiley & Sons, Hoboken, 2013.
% [5] J.P. Holman, Heat Transfer, 9th ed., McGraw-Hill, New York, 2002.
% [6] T.L. Bergman, A.S. Lavine, F.P. Incropera, D.P. De Witt, Fundamentals of Heat and Mass Transfer, 8th ed., Wiley, New York, 2017.
% [7] R.K. Shah, A.L. London, Laminar Flow Forced Convection in Ducts: A Source Book for Compact Heat Exchanger Analytical Data, Academic Press, 1978.

h_flow = Nu * k_water/(r_inner * 2);

% % Power for water flowing by Newton's law of convective heat transfer and mc\Delta T

% A = 2 * pi * r_inner * L_coil % Area of heat transfer
% P_flow = h_flow * A * (T_inner_ss - T_water_ss)

% Assuming variables: mass flow rate, initial temp
flow_rate_lmin = 0.5; % l/min
flow_rate_ms = flow_rate_lmin/ (1000 * 60);
mass_flow_rate_kgs = dens_water * flow_rate_ms;
T_in = 20;


A_perimeter = 2 * pi * r_inner;
A_cs = pi * (r_inner ^ 2);
dTdx = @(x,T) (h_flow * A_perimeter * (T_inner_ss - T))/(mass_flow_rate_kgs * c_water);

[x,T] = ode45(dTdx, [0 L_coil], T_in);

figure;
plot(x, T);