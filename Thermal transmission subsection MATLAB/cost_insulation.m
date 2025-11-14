function cost_per_length = cost_insulation(cost, total_area)

    OD = 9 * 10 ^(-3); % m OD of hose
    
    perimeter = 2 * pi * (OD/2);
    
    total_length = total_area/perimeter;
    cost_per_length = cost/total_length;
    fprintf('Cost per length: %f\n', cost_per_length);

end