function final_cost_per_length = cost_per_length(thickness, thickness_req, cost_per_length) % all in mm
    
    final_cost_per_length = (thickness_req/thickness) * cost_per_length;
    fprintf('Total cost per length: %f\n', final_cost_per_length);

end