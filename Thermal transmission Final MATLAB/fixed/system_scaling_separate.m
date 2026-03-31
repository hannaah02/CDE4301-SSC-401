clear;clc;close all;
receiver_height = 0.16; % m
receiver_diameter = 0.2;

power_per_rig = 142.3;

L = 1;
To = 25;
Ti = 60;
r1 = (20 * 10^-3)/2;
r2 = (26.7 * 10-3)/2;
r3 = r2 + (25 * 10-3);
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

% heat_loss_uninsulated = (2 * pi * L * (Ti - To))/( ...
%     (1/(r1 * hi)) + ...
%     (log(r2/r1)/k_pipe) + ...
%     (1/(r2 * hc)))

% heat_loss_per_meter = (2 * pi * L * (Ti - To))/( ...
%     (log(r2/r1)/k_pipe) + ...
%     (1/(r2 * hc))) % ignoring convection of water and the conduction thorugh the pipe

% heat_loss_per_meter = 10; %(142.3 * 0.05)/3; https://www.engineeringtoolbox.com/heat-loss-insulated-pipes-d_1151.html
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Each rig consists of 1 loop

rig_2 = [[0,0],
    [1,0]];

rig_3 = [[0,0],
    [1,0],
    [0,1]];

rig_4 = [[0,0],
    [1,0],
    [0,1],
    [1,1]];

rig_5 = [[0,0],
    [0,1],
    [0,-1],
    [1,0],
    [1,1]];

rig_6 = [[0,0],
    [0,1],
    [1,0],
    [1,1],
    [-1,0],
    [-1,1]];

rig_7 = [[0,0],
    [0,1],
    [0,-1],
    [-1,0],
    [-1,1],
    [1,0],
    [1,1]];

rig_8 = [[0,0],
    [0,1],
    [0,-1],
    [-1,0],
    [-1,1],
    [-1,-1],
    [1,0],
    [1,1]];

rig_9 = [[0,0],
    [0,1],
    [0,-1],
    [1,0],
    [1,1],
    [1,-1],
    [-1,0],
    [-1,1],
    [-1,-1]];

rig_10 = [[0,0],
    [0,1],
    [0,-1],
    [1,0],
    [1,1],
    [1,-1],
    [-1,0],
    [-1,1],
    [-1,-1],
    [0, 2]];

no_rigs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

efficiency = [];
max_length_rig = [];
total_length_per_system = [];

% Single rig - To verify the distance
single_length = 1.5 + (1.5 - receiver_height) +...
            0.4 + (0.5 * receiver_diameter)
heat_loss = heat_loss_per_meter * single_length;
pipe_eff = (power_per_rig - heat_loss)/(power_per_rig);
max_length = single_length;
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system single_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_2, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_3, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_4, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_5, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_6, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_7, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_8, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_9, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

[pipe_eff, max_length, total_length] = pipe_efficiency_separate(rig_10, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
efficiency = [efficiency pipe_eff];
max_length_rig = [max_length_rig max_length];
total_length_per_system = [total_length_per_system total_length];

figure;
plot(no_rigs, efficiency);
grid on;
xlabel('System size');
ylabel('Pipe Efficiency (over 1)');
title('Thermal efficiency of pipe in system of rigs vs System size (Separate loop, parallel system)');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Flow rate, ignoring losses through pipe

power_receiver = 142.3; % W
inlet_T = 50; % ºC
outlet_T = 55; % ºC

flow_rate = flowrate_by_system_size(power_receiver, inlet_T, outlet_T, 1);

fprintf('Flow rate required thorugh each loop is %.3f\n', flow_rate);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% SMALLEST PIPE 1/8
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% fprintf('smallest\n')
pipe_ID = 3 * 10^-3; % m Inner diameter of pipe
L_npsh = 0.5; % m

NPSHa_list_18 = zeros(1,length(no_rigs)-1);
sys_head_list_18 = zeros(1,length(no_rigs)-1);

for i = 1: length(no_rigs)
    % fprintf('i: %f \n', i)
    [NPSHa, sys_head] = NPSH_system_head_separate(flow_rate, pipe_ID, L_npsh, 1, max_length_rig(i), receiver_height);

    NPSHa_list_18(i) = NPSHa;
    sys_head_list_18(i) = sys_head;
end

figure;
plot(no_rigs, NPSHa_list_18);
grid on;
xlabel('System size');
ylabel('NPSH available in system/m');
title('NPSH available vs System size (1/8 inch pipe) (Separate loop, parallel system)');

figure;
plot(no_rigs, sys_head_list_18);
grid on;
xlabel('System size');
ylabel('Head in system/m');
title('Head in system vs System size (1/8 inch pipe) (Separate loop, parallel system)');


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 3/4
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% fprintf('3/4 \n')
pipe_ID = 20 * 10^-3; % m Inner diameter of pipe
L_npsh = 0.5; % m

NPSHa_list_34 = zeros(1,length(no_rigs)-1);
sys_head_list_34 = zeros(1,length(no_rigs)-1);

for i = 1: length(no_rigs)
    % fprintf('i: %f \n', i)
    [NPSHa, sys_head] = NPSH_system_head_separate(flow_rate, pipe_ID, L_npsh, 1, max_length_rig(i), receiver_height);

    NPSHa_list_34(i) = NPSHa;
    sys_head_list_34(i) = sys_head;
end

figure;
plot(no_rigs, NPSHa_list_34);
grid on;
xlabel('System size');
ylabel('NPSH available in system/m');
title('NPSH available vs System size (3/4 inch pipe) (Separate loop, parallel system)');

figure;
plot(no_rigs, sys_head_list_34);
grid on;
xlabel('System size');
ylabel('Head in system/m');
title('Head in system vs System size (3/4 inch pipe) (Separate loop, parallel system)')


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% fprintf('1 \n')
pipe_ID = 25 * 10^-3; % m Inner diameter of pipe
L_npsh = 0.5; % m

NPSHa_list_1 = zeros(1,length(no_rigs)-1);
sys_head_list_1 = zeros(1,length(no_rigs)-1);

for i = 1: length(no_rigs)
    % fprintf('i: %f \n', i)
    [NPSHa, sys_head] = NPSH_system_head_separate(flow_rate, pipe_ID, L_npsh, 1, max_length_rig(i), receiver_height);

    NPSHa_list_1(i) = NPSHa;
    sys_head_list_1(i) = sys_head;
end

figure;
plot(no_rigs, NPSHa_list_1);
grid on;
xlabel('System size');
ylabel('NPSH available in system/m');
title('NPSH available vs System size (1 inch pipe) (Separate loop, parallel system)');

figure;
plot(no_rigs, sys_head_list_1);
grid on;
xlabel('System size');
ylabel('Head in system/m');
title('Head in system vs System size (1 inch pipe) (Separate loop, parallel system)')

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

figure;
plot(no_rigs, NPSHa_list_18, 'k'); hold on;
plot(no_rigs, NPSHa_list_34, 'r');
plot(no_rigs, NPSHa_list_1, 'b');
grid on;
legend('Pipe size 1/8 inch', ...
    'Pipe size 3/4 inch', ...
       'Pipe size 1 inch');
xlabel('System size');
ylabel('NPSH available in system/m');
title('NPSH available vs System size (comparison) (Separate loop, parallel system)');

figure;
plot(no_rigs, sys_head_list_18, 'k'); hold on;
plot(no_rigs, sys_head_list_34, 'r');
plot(no_rigs, sys_head_list_1, 'b');
grid on;
legend('Pipe size 1/8 inch', ...
    'Pipe size 3/4 inch', ...
       'Pipe size 1 inch');
xlabel('System size');
ylabel('Head in system/m');
title('Head in system vs System size (comparison) (Separate loop, parallel system)')

% Not much difference between 3/4 to 1 pipe

[total_eff, total_energy_collected, total_energy_loss] = overall_sys_eff(heat_loss_per_meter, total_length_per_system, power_per_rig);

figure;
plot(no_rigs, total_eff);
grid on;
xlabel('System size');
ylabel('Efficiency of entire system');
title('Efficiency of entire system vs System size (Separate loop, parallel system)')

figure;
plot(no_rigs, total_energy_collected);
grid on;
xlabel('System size');
ylabel('Total energy provided by system (W)');
title('Useful energy generated by system vs System size (Separate loop, parallel system)')

figure;
plot(no_rigs, (total_energy_loss./total_energy_collected).*100);
grid on;
xlabel('System size');
ylabel('Percentage loss of energy of total energy dellivered');
title('Pipe loss as percentage of total energy delivered vs System size (Separate loop, parallel system)')