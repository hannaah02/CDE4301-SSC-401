function [pipe_efficiency, total_distance] = pipe_efficiency_single(length_from_layout, rigs, receiver_height, receiver_diameter, heat_loss_per_meter, power_per_rig)

if rigs == 1
    total_distance = 1.5 + (1.5 - receiver_height) +...
            0.4 + (0.5 * receiver_diameter);
else
    total_distance =  1.5 + 1.5 - receiver_height + (receiver_height * (rigs - 1)) + ...
        length_from_layout - (0.5 * receiver_diameter) + 0.2;
end

heat_loss = heat_loss_per_meter * total_distance;

pipe_efficiency = ( (power_per_rig * rigs) - heat_loss)/(power_per_rig * rigs);

% fprintf('\nRig size: %f m \n', rigs)
% fprintf('Total distance: %f m \n', total_length)
% fprintf('Average distance: %f m \n', average_distance)
% fprintf('Pipe efficiency: %f m \n', efficiency_pipe)
fprintf('For rig size %f, total length is %f \n', rigs, total_distance)

end