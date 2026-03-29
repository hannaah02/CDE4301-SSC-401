clear;clc;close all;
receiver_height = 0.16; % m
receiver_diameter = 0.2;

power_per_rig = 142.3;

L = 1;
To = 25;
Ti = 60;
r1 = (26.7 * 10-3)/2;
r2 = r1 + (25 * 10-3);
k_pipe = 0.037;
hc = 50;

heat_loss_per_meter = (2 * pi * L * (Ti - To))/( ...
    (log(r2/r1)/k_pipe) + ...
    (1/(r2 * hc))) % ignoring convection of water and the conduction thorugh the pipe

% heat_loss_per_meter = 10; %(142.3 * 0.05)/3; https://www.engineeringtoolbox.com/heat-loss-insulated-pipes-d_1151.html
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Each system have 1 loop

no_rigs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
pipe_length_by_rig = [1, 2, 2+sqrt(2), 4, 4+sqrt(2), 6, 6+sqrt(2), 8, 8+sqrt(2), 8+(2*sqrt(2))];

efficiency_single_loop = [];
total_distance_list = [];

for i = 1: length(no_rigs)
    [efficiency_pipe, total_distance] = pipe_efficiency_single(pipe_length_by_rig(i), no_rigs(i), receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig);
    efficiency_single_loop = [efficiency_single_loop efficiency_pipe];
    total_distance_list = [total_distance_list total_distance];
end


figure;
plot(no_rigs, efficiency_single_loop);
grid on;
xlabel('Number of rigs');
ylabel('Pipe Efficiency (over 1)');
title('Thermal efficiency of pipe in system of rigs (Single loop, series system)');

% fall in efficiency (incremental)
eff_drop_inc = zeros(1, length(efficiency_single_loop)-1);

for i = 2:length(efficiency_single_loop)
    eff_drop_inc(i-1) = ...
        (efficiency_single_loop(i-1) - efficiency_single_loop(i)) / efficiency_single_loop(i-1) * 100;
end

% figure;
% plot(no_rigs(2:end), eff_drop_inc);
% grid on;
% xlabel('Number of rigs');
% ylabel('Incremental efficiency drop (%)');
% title('Marginal Pipe Efficiency Loss per Additional Rig (Single loop)');

% cumulative fall
eff_drop_cum = ...
    (efficiency_single_loop(1) - efficiency_single_loop) / efficiency_single_loop(1) * 100;

% figure;
% plot(no_rigs, eff_drop_cum);
% grid on;
% xlabel('Number of rigs');
% ylabel('Cumulative efficiency drop (%)');
% title('Cumulative Pipe Efficiency Loss vs Single Rig (Single loop)');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Flow rate, ignoring losses through pipe
flow_rate = zeros(1,length(no_rigs)-1);

power_receiver = 142.3; % W
inlet_T = 50; % ºC
outlet_T = 55; % ºC

for i = 1: length(no_rigs)

    % fprintf('i: %f\n', i)
    % fprintf('Rig number: %f \n', no_rigs(i))
    FR_lm = flowrate_by_system_size(power_receiver, inlet_T, outlet_T, no_rigs(i));
    flow_rate(i) = FR_lm;

end

figure;
plot(no_rigs, flow_rate);
grid on;
xlabel('Number of rigs');
ylabel('Flow rate required for 5ºC temperature rise (l/min)');
title('Flow Rate Required (For Temperature Rise) per Additional Rig (Single loop, series system)');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% SMALLEST PIPE 1/8
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% fprintf('smallest\n')
pipe_ID = 3 * 10^-3 % m Inner diameter of pipe
L_npsh = 0.5; % m

NPSHa_list_18 = zeros(1,length(no_rigs)-1);
sys_head_list_18 = zeros(1,length(no_rigs)-1);

for i = 1: length(no_rigs)
    % fprintf('i: %f \n', i)
    [NPSHa, sys_head] = NPSH_system_head_single(flow_rate(i), pipe_ID, L_npsh, no_rigs(i), total_distance_list(i), receiver_height);

    NPSHa_list_18(i) = NPSHa;
    sys_head_list_18(i) = sys_head;
end

% figure;
% plot(flow_rate, NPSHa_list_18);
% grid on;
% xlabel('Flow rate');
% ylabel('NPSH available in system/m');
% title('NPSH available vs flow rate (1/8 inch pipe) (Single loop, series system)');
% 
% figure;
% plot(flow_rate, sys_head_list_18);
% xlim([0 5]);
% grid on;
% xlabel('Flow rate');
% ylabel('Head in system/m');
% title('Head in system vs flow rate (1/8 inch pipe) (Single loop, series system)');

figure;
plot(no_rigs, NPSHa_list_18);
grid on;
xlabel('No of rigs');
ylabel('NPSH available in system/m');
title('NPSH available vs no of rigs (1/8 inch pipe) (Single loop, series system)');

figure;
plot(no_rigs, sys_head_list_18);
xlim([0 5]);
grid on;
xlabel('No of rigs');
ylabel('Head in system/m');
title('Head in system vs no of rigs (1/8 inch pipe) (Single loop, series system)');


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 3/4
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% fprintf('3/4 \n')
pipe_ID = 20 * 10^-3 % m Inner diameter of pipe
L_npsh = 0.5; % m

NPSHa_list_34 = zeros(1,length(no_rigs)-1);
sys_head_list_34 = zeros(1,length(no_rigs)-1);

for i = 1: length(no_rigs)
    fprintf('i: %f \n', i)
    [NPSHa, sys_head] = NPSH_system_head_single(flow_rate(i), pipe_ID, L_npsh, no_rigs(i), total_distance_list(i), receiver_height);

    NPSHa_list_34(i) = NPSHa;
    sys_head_list_34(i) = sys_head;
end

% figure;
% plot(flow_rate, NPSHa_list_34);
% grid on;
% xlabel('Flow rate');
% ylabel('NPSH available in system/m');
% title('NPSH available vs flow rate (3/4 inch pipe) (Single loop, series system)');
% 
% figure;
% plot(flow_rate, sys_head_list_34);
% grid on;
% xlabel('Flow rate');
% ylabel('Head in system/m');
% title('Head in system vs flow rate (3/4 inch pipe) (Single loop, series system)')

figure;
plot(no_rigs, NPSHa_list_34);
grid on;
xlabel('No of rigs');
ylabel('NPSH available in system/m');
title('NPSH available vs no of rigs (3/4 inch pipe) (Single loop, series system)');

figure;
plot(no_rigs, sys_head_list_34);
grid on;
xlabel('No of rigs');
ylabel('Head in system/m');
title('Head in system vs no of rigs (3/4 inch pipe) (Single loop, series system)')

% figure;
% plot(flow_rate, sys_head_list); hold on;
% % plot(Q_1*1000*60,H_quad_1,'r');
% plot(Q,H_gamma, 'm');
% plot(Q,H_shurflo,'r')
% plot(Q,H_gear,'g')
% % plot(Q,H_cat,'k')
% xlim([0 5]);
% grid on;
% legend('System Head', ...
%     'ProMinent Gamma X Chemical Dosing Pump (600 - 900)', ...
%        'SHURflo 8000-713-238 (220 - 320)', ...
%        'Micropump GA gear pump (350 - 3300)'); %, ...
%        %'CAT 3CP plunger pump (2400 - 2900)');
% xlabel('Flow rate');
% ylabel('Head in system/m');
% title('Head in system vs flow rate (3/4 pipe)');


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% fprintf('1 \n')
pipe_ID = 25 * 10^-3 % m Inner diameter of pipe
L_npsh = 0.5; % m

NPSHa_list_1 = zeros(1,length(no_rigs)-1);
sys_head_list_1 = zeros(1,length(no_rigs)-1);

for i = 1: length(no_rigs)
    % fprintf('i: %f \n', i)
    [NPSHa, sys_head] = NPSH_system_head_single(flow_rate(i), pipe_ID, L_npsh, no_rigs(i), total_distance_list(i), receiver_height);

    NPSHa_list_1(i) = NPSHa;
    sys_head_list_1(i) = sys_head;
end

% figure;
% plot(flow_rate, NPSHa_list_1);
% grid on;
% xlabel('Flow rate');
% ylabel('NPSH available in system/m');
% title('NPSH available vs flow rate (1 inch pipe) (Single loop, series system)');
% 
% figure;
% plot(flow_rate, sys_head_list_1);
% grid on;
% xlabel('Flow rate');
% ylabel('Head in system/m');
% title('Head in system vs flow rate (1 inch pipe) (Single loop, series system)')

figure;
plot(no_rigs, NPSHa_list_1);
grid on;
xlabel('No of rigs');
ylabel('NPSH available in system/m');
title('NPSH available vs no of rigs (1 inch pipe) (Single loop, series system)');

figure;
plot(no_rigs, sys_head_list_1);
grid on;
xlabel('No of rigs');
ylabel('Head in system/m');
title('Head in system vs no of rigs (1 inch pipe) (Single loop, series system)')

% figure;
% plot(flow_rate, NPSHa_list_18, 'k'); hold on;
% plot(flow_rate, NPSHa_list_34, 'r');
% plot(flow_rate, NPSHa_list_1, 'b');
% grid on;
% legend('Pipe size 1/8 inch', ...
%     'Pipe size 3/4 inch', ...
%        'Pipe size 1 inch');
% xlabel('Flow rate');
% ylabel('NPSH available in system/m');
% title('NPSH available vs flow rate (comparison) (Single loop, series system)');
% 
% figure;
% plot(flow_rate, sys_head_list_18, 'k'); hold on;
% plot(flow_rate, sys_head_list_34, 'r');
% plot(flow_rate, sys_head_list_1, 'b');
% grid on;
% legend('Pipe size 1/8 inch', ...
%     'Pipe size 3/4 inch', ...
%        'Pipe size 1 inch');
% xlabel('Flow rate');
% ylabel('Head in system/m');
% title('Head in system vs flow rate (comparison) (Single loop, series system)')

figure;
plot(no_rigs, NPSHa_list_18, 'k'); hold on;
plot(no_rigs, NPSHa_list_34, 'r');
plot(no_rigs, NPSHa_list_1, 'b');
grid on;
legend('Pipe size 1/8 inch', ...
    'Pipe size 3/4 inch', ...
       'Pipe size 1 inch');
xlabel('No of rigs');
ylabel('NPSH available in system/m');
title('NPSH available vs no of rigs (comparison) (Single loop, series system)');

figure;
plot(no_rigs, sys_head_list_18, 'k'); hold on;
plot(no_rigs, sys_head_list_34, 'r');
plot(no_rigs, sys_head_list_1, 'b');
grid on;
legend('Pipe size 1/8 inch', ...
    'Pipe size 3/4 inch', ...
       'Pipe size 1 inch');
xlabel('No of rigs');
ylabel('Head in system/m');
title('Head in system vs no of rigs (comparison) (Single loop, series system)')

% Not much difference between 3/4 to 1 pipe

[total_eff, total_energy_collected] = overall_sys_eff(heat_loss_per_meter, total_distance_list, power_per_rig);

figure;
plot(no_rigs, total_eff);
grid on;
xlabel('No of rigs');
ylabel('Efficiency of entire system');
title('Efficiency of entire system vs no of rigs (Single loop, series system)')

figure;
plot(no_rigs, total_energy_collected);
grid on;
xlabel('No of rigs');
ylabel('Total energy provided by system (W)');
title('Useful energy generated by system vs no of rigs (Single loop, series system)')