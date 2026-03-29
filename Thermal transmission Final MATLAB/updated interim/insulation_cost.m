% Aerogel

total_area = 0.1 * 0.1; % in m
cost = 10.01/2;
fprintf('\n\nFor aerogel \n')
cost_per_length = cost_insulation(cost, total_area);

thickness = 3; % mm
thickness_req = 8.510679; % mm
final_cost_per_length = (thickness_req/thickness) * cost_per_length;
fprintf('Total cost per length: %f\n', final_cost_per_length)

% Phenolic

total_area = (100 * 10 ^(-3))*(100 * 10 ^(-3));
cost = 9.27/10;
fprintf('\n\nFor phenolic foam \n')
cost_per_length = cost_insulation(cost, total_area);

thickness = 1; % mm
thickness_req = 16.243706; % mm
final_cost_per_length = (thickness_req/thickness) * cost_per_length;
fprintf('Total cost per length: %f\n', final_cost_per_length)

% PUR

total_area = 1 * 0.5;
cost = 4.29;
fprintf('\n\nFor PUR foam \n')
cost_per_length = cost_insulation(cost, total_area);

thickness = 20; % mm
thickness_req = 21.708707; % mm
final_cost_per_length_1 = (thickness_req/thickness) * cost_per_length;
thickness_req = 28.617394; % mm
final_cost_per_length_2 = (thickness_req/thickness) * cost_per_length;
fprintf('Total cost per length: %f - %f\n', final_cost_per_length_1, final_cost_per_length_2)

% PE

total_area = 1 * 1.2;
cost = 4.29;
fprintf('\n\nFor PE foam \n')
cost_per_length = cost_insulation(cost, total_area);

thickness = 5; % mm
thickness_req = 94.079069; % mm
final_cost_per_length = (thickness_req/thickness) * cost_per_length;
fprintf('Total cost per length: %f\n', final_cost_per_length)



function cost_per_length = cost_insulation(cost, total_area)

    OD = 9 * 10 ^(-3); % m
    
    perimeter = 2 * pi * (OD/2);
    
    total_length = total_area/perimeter;
    cost_per_length = cost/total_length;
    fprintf('Cost per length: %f\n', cost_per_length);

end

