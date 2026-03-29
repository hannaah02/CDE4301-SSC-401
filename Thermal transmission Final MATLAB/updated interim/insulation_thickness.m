function thickness = insulation_thickness(power_water, k_insulation, k_water, T_water, L, perc_loss, k_pipe, pipe_ID, pipe_OD) % in m

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

syms r3 real

eqn = Q == (2 * pi * L * (Ti - To))/( ...
    (1/(r1 * hi)) + ...
    (log(r2/r1)/k_pipe) + ...
    (log(r3/r2)/k_insulation) + ...
    (1/(r3 * hc)));

r_insulation = vpasolve(eqn, r3, r2 + 0.001);

thickness = (r_insulation - r2) * 1000;

fprintf('Thickness of insulation required: %f mm\n', thickness);

% Q = total heat loss (W)
% L = length of pipe
% Ti = temp inside pipe
% To = temp outside env
% r1 = inside radius of pipe (m)
% r2 = outside radius of pipe (m)
% r3 = outside radius of insulation (m)
% hi = inside film heat transfer coefficient (W/m^2K) or convective heat transfer coefficient
% hc = outside convective film heat transfer coefficient (W/m^2K) or convective heat transfer coefficient
% k_pipe = thermal conductivity of pipe material (W/mK)
% k_insulation = thermal conductivity of insulating material (W/mK)

end