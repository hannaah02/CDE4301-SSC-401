function [total_eff, total_energy_collected, total_energy_loss] = overall_sys_eff_shortened(heat_loss_per_length, total_length_per_system, power_per_receiver)

total_eff = [];
total_energy_collected = [];
total_energy_loss = [];

% n = 1: DONE
total_length_external = 26 + (13.5 * 13) + (14 * 13) + 11.5 + (12 * 0.5);
no_system = 375;
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(1)));
total_eff_1 = (((no_system * 1) * power_per_receiver) - total_loss)/((no_system * 1) * power_per_receiver);
energy = (((no_system * 1) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_1];
total_energy_loss = [total_energy_loss, total_loss];

% n = 2:
total_length_external = 26 + (13.5 * 7) + (6 * 14) + (14 * 0.5) + 10.5 + (0.5 * 6);
no_system = (14 * 13) + 6;
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(2)));
total_eff_2 = (((no_system * 2) * power_per_receiver) - total_loss)/((no_system * 2) * power_per_receiver);
energy = (((no_system * 2) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_2];
total_energy_loss = [total_energy_loss, total_loss];

% n = 3: DONE
total_length_external = 26 + (8 * 13.5) + 12.5 + (7 * 0.5) + (14 * 0.5 * 8) + 11.5 + (6 * 0.5);
no_system = (7 * 2 * 9) - 1;
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(3)));
total_eff_3 = (((no_system * 3) * power_per_receiver) - total_loss)/((no_system * 3) * power_per_receiver);
energy = (((no_system * 3) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_3];
total_energy_loss = [total_energy_loss, total_loss];

% n = 4: DONE
total_length_external = 27 + (7 * 13.5) + (7 * 0.5) + (6 * 14 * 0.5) + 4.5 + (3 * 0.5);
no_system = (13 * 7) + 3;
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(4)));
total_eff_4 = (((no_system * 4) * power_per_receiver) - total_loss)/((no_system * 4) * power_per_receiver);
energy = (((no_system * 4) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_4];
total_energy_loss = [total_energy_loss, total_loss];

% n = 5: DONE
total_length_external = 26 + (5 * 13.5) + (14 * 1 * 5) + 8.5 + (0.5 * 5);
no_system = ((25/5) * 2 * 7) + 5;
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(5)));
total_eff_5 = (((no_system * 5) * power_per_receiver) - total_loss)/((no_system * 5) * power_per_receiver);
energy = (((no_system * 5) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_5];
total_energy_loss = [total_energy_loss, total_loss];

% n = 6: STOPPED HERE (DONE ALR)
fprintf('FOR 6\n')
total_length_external = 25 + (12.5 * 9) + (7 * 0.5 * 9)
no_system = 9 * 7
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(6)));
total_eff_6 = (((no_system * 6) * power_per_receiver) - total_loss)/((no_system * 6) * power_per_receiver);
energy = (((no_system * 6) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_6];
total_energy_loss = [total_energy_loss, total_loss];

% n = 7: DONE
no_system = 54;
total_length_external = 32 + (5 * 12.5) + (4 * 11.5) + (2 * 10.5) + (3 * 9.5) + (2 * 8.5) + (0.5 * no_system);
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(7)));
total_eff_7 = (((no_system * 7) * power_per_receiver) - total_loss)/((no_system * 7) * power_per_receiver);
energy = (((no_system * 7) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_7];
total_energy_loss = [total_energy_loss, total_loss];

% n = 8: DONE
no_system = 47;
no_long = 9;
total_length_external = 31 + (4 * 12.5) + (6 * 11.5) + (4 * 10.5) + 9.5 + (12 * 1.5) + (0.5 * (no_system - no_long));
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(8)));
total_eff_8 = (((no_system * 8) * power_per_receiver) - total_loss)/((no_system * 8) * power_per_receiver);
energy = (((no_system * 8) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_8];
total_energy_loss = [total_energy_loss, total_loss];

% n = 9: DONE
fprintf('FOR 9\n')
total_length_external = 30 + (5 * 10.5) + (8 * 1.5 * 4) + (4 * 0.5) + (1.5 * 6) + 7.5
no_system = (4 * 9) + 6
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(9)));
total_eff_9 = (((no_system * 9) * power_per_receiver) - total_loss)/((no_system * 9) * power_per_receiver);
energy = (((no_system * 9) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_9];
total_energy_loss = [total_energy_loss, total_loss];

% n = 10: DONE
no_system = 38;
no_x_long = 0;
no_long = 3;
total_length_external = 32 + (12.5 * 5) + (11.5 * 4) + (10.5 * 3) + 4.5 + (2.5 * no_x_long) + (1.5 * no_long) + (0.5 * (no_system - no_long - no_x_long));
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(10)));
total_eff_10 = (((no_system * 10) * power_per_receiver) - total_loss)/((no_system * 10) * power_per_receiver);
energy = (((no_system * 10) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_10];
total_energy_loss = [total_energy_loss, total_loss];