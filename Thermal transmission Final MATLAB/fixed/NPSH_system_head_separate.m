function [NPSHa, sys_head] = NPSH_system_head_separate(flow_rate, pipe_ID, L_npsh, no_rigs, pipe_length_by_rig, receiver_height) % FR in l/min

% NPSH available
dens = 1000;
g = 9.81;
surface2pump = - 0.5; % m (surface over pump)
pressure_tank = 413685; % Pa (60 psi), pressure setting of pressure release valve
% assume top of range https://www.whirlpoolwaterheaters.com/support/help/checking-water-pressure/6
pressure_vapour = 12.352 * 10^3; % Pa, 50degC, https://www.engineeringtoolbox.com/water-vapor-saturation-pressure-d_599.html

% K Values, https://www.av8rdas.com/uploads/1/0/3/2/103277290/piping_system_fundamentals_valve_and_fittings_chapter.pdf
K_tank_connector = 0.78; % Assuming pipe protrusion
K_90_elbow = 0.75; % Assuming standard type https://neutrium.net/articles/fluid-flow/pressure-loss-from-fittings-excess-head-k-method/
K_coupler = 0.04; % https://neutrium.net/articles/fluid-flow/pressure-loss-from-fittings-excess-head-k-method/

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Pipe dimensions
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Receiver dimensions
R_ID = 4.93 * 10^-3; % m Inner diameter of receiver coil
R_length = 10.41; % m Length of receiver coil

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% % https://www.av8rdas.com/uploads/1/0/3/2/103277290/piping_system_fundamentals_valve_and_fittings_chapter.pdf
% theta = 45; % deg
% if pipe_ID < R_ID
%     beta = pipe_ID/R_ID; % Smaller divided by larger
% else
%     beta = R_ID/pipe_ID; % Smaller divided by larger
% end
% 
% K_reducer = (0.8 * sin(deg2rad(theta)) * (1 - beta^2))/beta^4;
% K_enlarger = (2.6 * sin(deg2rad(theta)) * (1 - beta^2))/beta^4;

K_reducer = 0.5; % https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/09/Lesson-4-Minor-Losses-in-Pipes-and-Ducts-Handout.pdf
K_enlarger = (1 - (pi * R_ID^2)/(pi * pipe_ID^2))^2; % https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/09/Lesson-4-Minor-Losses-in-Pipes-and-Ducts-Handout.pdf

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Assuming turbulence
roughness_coeff = 0.0015 * 10^-3; % https://www.sanha.com/en/Planning-and-Installation/Fitting-materials/Stainless-steel/
f_pipe = 0.02;


FR = flow_rate /(1000 * 60);
V = FR/(pi * (pipe_ID/2)^2); % m/s
h_friction_fittings = ((K_tank_connector + K_coupler) * V^2)/(2 * g);
h_friction_pipe = ((f_pipe * L_npsh)/pipe_ID) * ((V^2)/(2 * g));

h_friction_total = h_friction_pipe + h_friction_fittings;

NPSHa = (pressure_tank/(dens * g)) -...
    surface2pump -...
    h_friction_total -...
    (pressure_vapour/(dens * g));

% Calculate the system head

H_static = 0; % loop

K_total = 2 * K_tank_connector + ...
    no_rigs * K_reducer + ...
    no_rigs * K_enlarger + ...
    ((2 * no_rigs) + 1) * K_90_elbow + ...
    (2 * K_coupler)

L_total = 2.5 + pipe_length_by_rig + (no_rigs * receiver_height) + (1.5 - receiver_height);

h_friction_fittings = (K_total * V^2)/(2 * g);
h_friction_pipe = ((f_pipe * L_total)/pipe_ID) * ((V^2)/(2 * g));

V_coil = FR/(pi * (R_ID/2)^2); % m/s
L_total_coil = R_length * no_rigs;
h_friction_coil = ((f_pipe * L_total_coil)/R_ID) * ((V_coil^2)/(2 * g));

h_friction_total = h_friction_pipe + h_friction_coil + h_friction_fittings;

sys_head = H_static + ...
    h_friction_total;

end