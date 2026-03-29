pipe_efficiency = 

% TES scaling

% Origin is the rig with the TES (first entry)
% Following that, the subsequent additional rigs are in specifc
% configurations in these coordinate forms

% x, y
rigs = [[0,0],
    [1,0]];

% Calculating distance
distance_to_tes = [];
total_distance = 0;
for i = 1:length(rigs)
    rig = rigs(i,:);
    distance = sqrt((rig(1) - 0)^2 + (rig(2) - 0)^2);

    distance_to_tes = [distance_to_tes distance];

    total_distance = total_distance + 3 + distance;
end

% Average distance
average_distance = total_distance/length(rigs);

efficiency_pipe = 1 - (0.05/3) * average_distance;

