function [total_eff, total_energy_collected] = overall_sys_eff(heat_loss_per_length, total_length_per_system, power_per_receiver)

total_eff = [];
total_energy_collected = [];

% n = 1:
total_length_external = 46 + (13.5 * 23) + (14 * 22) + (14 * 0.5);
no_system = 46 * 14;
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(1)));
total_eff_1 = (((no_system * 1) * power_per_receiver) - total_loss)/((no_system * 1) * power_per_receiver);
energy = (((no_system * 1) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_1];

% n = 2:
total_length_external = 44 + (13.5 * 12) + (11 * 14) + (14 * 0.5);
no_system = 23 * 14;
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(2)));
total_eff_2 = (((no_system * 2) * power_per_receiver) - total_loss)/((no_system * 2) * power_per_receiver);
energy = (((no_system * 2) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_2];

% n = 3:
total_length_external = 46 + (15 * 13.5) + 12.5 + (7 * 0.5 * 2) + (14 * 0.5 * 14);
no_system = (45 * 14 * 2/6);
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(3)));
total_eff_3 = (((no_system * 3) * power_per_receiver) - total_loss)/((no_system * 3) * power_per_receiver);
energy = (((no_system * 3) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_3];

% n = 4:
total_length_external = 44 + (12 * 13.5) + (7 * 0.5) + (11 * 14 * 0.5);
no_system = (46 * 14 * (1/4));
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(4)));
total_eff_4 = (((no_system * 4) * power_per_receiver) - total_loss)/((no_system * 4) * power_per_receiver);
energy = (((no_system * 4) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_4];

% n = 5:
total_length_external = 43.5 + (9 * 13.5) + (14 * 1 * 9);
no_system = (45 * 14 * (1/5));
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(5)));
total_eff_5 = (((no_system * 5) * power_per_receiver) - total_loss)/((no_system * 5) * power_per_receiver);
energy = (((no_system * 5) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_5];

% n = 6:
total_length_external = 43.5 + (12.5 * 15) + (7 * 0.5 * 15);
no_system = (45 * 14 * (1/6));
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(6)));
total_eff_6 = (((no_system * 6) * power_per_receiver) - total_loss)/((no_system * 6) * power_per_receiver);
energy = (((no_system * 6) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_6];

% n = 7:
no_system = 76;
total_length_external = 44 + (7 * 12.5) + (6 * 11.5) + (3 * 10.5) + (3 * 9.5) + (3 * 8.5) + (0.5 * no_system);
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(7)));
total_eff_7 = (((no_system * 7) * power_per_receiver) - total_loss)/((no_system * 7) * power_per_receiver);
energy = (((no_system * 7) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_7];

% n = 8:
no_system = 67;
no_long = 12;
total_length_external = 43 + (5 * 12.5) + (6 * 11.5) + (4 * 10.5) + (12 * 1.5) + (0.5 * (no_system - no_long));
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(8)));
total_eff_8 = (((no_system * 8) * power_per_receiver) - total_loss)/((no_system * 8) * power_per_receiver);
energy = (((no_system * 8) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_8];

% n = 9:
total_length_external = 43 + (8 * 12.5) + (8 * 1.5 * 7) + (4 * 0.5);
no_system = 12 * 45 * (1/9);
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(9)));
total_eff_9 = (((no_system * 9) * power_per_receiver) - total_loss)/((no_system * 9) * power_per_receiver);
energy = (((no_system * 9) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_9];

% n = 10:
no_system = 53;
no_x_long = 2;
no_long = 4;
total_length_external = 42 + (12.5 * 5) + (11.5 * 4) + (10.5 * 4) + (2.5 * no_x_long) + (1.5 * no_long) + (0.5 * (no_system - no_long - no_x_long));
total_loss = heat_loss_per_length * (total_length_external + (no_system * total_length_per_system(10)));
total_eff_10 = (((no_system * 10) * power_per_receiver) - total_loss)/((no_system * 10) * power_per_receiver);
energy = (((no_system * 10) * power_per_receiver) - total_loss);
total_energy_collected = [total_energy_collected energy];
total_eff = [total_eff total_eff_10];