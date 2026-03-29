function insulation_twinwall_layers = insulation_twinwall_layers(power_water, k_stag_air, k_plastic, k_water, T_water, L, perc_loss, thickness_air, thickness_plastic, k_pipe, pipe_ID, pipe_OD) % in m

% power_water, k_insulation_air, k_insulation_plastic, k_water, T_water, L,
% perc_loss, thickness_air, thickness_plastic % mm

% Fixed parameters
max_heat_loss = (perc_loss/100) * power_water; % W
h_air = 50; % set as average https://www.engineersedge.com/heat_transfer/convective_heat_transfer_coefficients__13378.htm
Nu_water = 4.36; % https://repository.up.ac.za/server/api/core/bitstreams/e88e9466-73c1-4110-9287-294a60dc546c/content
h_water = (Nu_water * k_water)/pipe_ID; % Nu = (h * L)/k;

% through https://amarineblog.com/2020/11/12/thermal-insulation-calculation-guide/

Q = max_heat_loss;
Ti = T_water; % ºC Temperature within hose, assumed to be 60ºC
To = 30; % ºC Temperature of surroundings
r1 = pipe_ID/2;
r2 = pipe_OD/2;
hi = h_water;
hc = h_air;


no_layers = 0;
Q_loss_n_layer = 0;

% R of hose (absorber)
R_absorber = log(r2/r1)/ (2*pi*L*k_pipe);
R_conv_inner = 1 / (hi * 2 * pi * r1 * L);

R_total = R_absorber + R_conv_inner; % without outer convection

last_radius = r2;

% To check Q of rubber
R_conv_outer = 1 / (hc * 2 * pi * last_radius * L);

Q_loss_n_layer = (Ti - To)/(R_total + R_conv_outer);
fprintf('At layer: %f \n', no_layers);
fprintf('Q: %f \n\n', Q_loss_n_layer);

while Q_loss_n_layer > Q

    R_air = log((last_radius + thickness_air)/last_radius)/ (2*pi*L*k_stag_air);
    last_radius = last_radius + thickness_air;

    R_plastic = log((last_radius + thickness_plastic)/last_radius)/ (2*pi*L*k_plastic);
    last_radius = last_radius + thickness_plastic;

    R_total = R_total + R_air + R_plastic;

    R_conv_outer = 1 / (hc * 2 * pi * last_radius * L);

    no_layers = no_layers + 1;

    Q_loss_n_layer = (Ti - To)/(R_total + R_conv_outer);

    fprintf('At layer: %f \n', no_layers);
    fprintf('Q: %f \n\n', Q_loss_n_layer);

end

fprintf('Minimum layers required: %f \n', no_layers);
fprintf('Thickness required: %f cm\n', no_layers * (thickness_plastic + thickness_air) * 100);

insulation_twinwall_layers = no_layers;

end