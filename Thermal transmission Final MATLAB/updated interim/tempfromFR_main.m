clc;clear;close all

power_receiver = 142.3; % W

FR_lm = 20/1000
T_change = flowrate_to_temp(power_receiver, FR_lm);

FR_lm = 0.190
T_change = flowrate_to_temp(power_receiver, FR_lm);

FR_lm = 0.114;
T_change = flowrate_to_temp(power_receiver, FR_lm);

FR_lm = 0.5;
T_change = flowrate_to_temp(power_receiver, FR_lm);

FR_lm = 1.2;
T_change = flowrate_to_temp(power_receiver, FR_lm);

FR_lm = 1.6;
T_change = flowrate_to_temp(power_receiver, FR_lm);