function [pipe_efficiency, max_length, total_pipe] = pipe_efficiency_separate(rigs, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig)

% TES scaling

% Origin is the rig with the TES (first entry)
% Following that, the subsequent additional rigs are in specifc
% configurations in these coordinate forms

% x, y
% rigs = [[0,0], [1,0]];

% Calculating distance
distance_to_tes = [];
total_length = [];
total_pipe = 0;

for i = 1:length(rigs)
    rig = rigs(i,:);
    % fprintf('x %f and %f\n', rig(1), rig(2))
    distance = sqrt((rig(1) - 0)^2 + (rig(2) - 0)^2);
    distance_to_tes = [distance_to_tes distance];

    if i == 1
        total_distance = 1.5 + (1.5 - receiver_height) +...
            0.4 + (0.5 * receiver_diameter);
    else
        total_distance = 1.5 + (1.5 - receiver_height) +...
            (2 * distance) - (0.5 * receiver_diameter) + 0.2;
    end

    total_length = [total_length total_distance];

    total_pipe = total_pipe + total_distance;

end

heat_loss = heat_loss_per_meter * total_pipe;

pipe_efficiency = ( (power_per_rig * length(rigs)) - heat_loss)/(power_per_rig * length(rigs));

max_length = max(total_length);

fprintf('For rig size %f, total length is %f \n', length(rigs), total_pipe)
% 
% 
% % Average distance
% average_distance = total_distance/length(rigs);
% 
% efficiency_pipe = 1 - (0.05/3) * total_distance; % Pipe efficiecncy = 1 - Percentage loss per meter * Distance

% efficiency_pipe = 1 - (0.05/3) * average_distance;

% fprintf('\nRig size: %f m \n', length(rigs))
% fprintf('Total distance: %f m \n', total_distance)
% fprintf('Average distance: %f m \n', average_distance)
% fprintf('Pipe efficiency: %f m \n', efficiency_pipe)

end