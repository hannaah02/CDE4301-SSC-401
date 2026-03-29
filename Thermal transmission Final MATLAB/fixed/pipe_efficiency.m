function efficiency_pipe = pipe_efficiency(rigs, receiver_height)

% TES scaling

% Origin is the rig with the TES (first entry)
% Following that, the subsequent additional rigs are in specifc
% configurations in these coordinate forms

% x, y
% rigs = [[0,0], [1,0]];

% Calculating distance
distance_to_tes = [];
total_distance = 0;

for i = 1:length(rigs)
    rig = rigs(i,:);
    distance = sqrt((rig(1) - 0)^2 + (rig(2) - 0)^2);

    distance_to_tes = [distance_to_tes distance];

    total_distance = total_distance + 3 + (distance * 2);
end

total_eff = 0;
constant_distance = (1.5 * 2) - receiver_height + 1; % vertical distance + distance to and from pump

for i = 1:length(rigs)
    fprintf('i = %f \n', i);
    eff = 1 - (0.05/3) * (distance_to_tes(i) + constant_distance);
    fprintf('eff = %f \n', eff);
    total_eff = total_eff + eff;
end

efficiency_pipe = total_eff/length(rigs);

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