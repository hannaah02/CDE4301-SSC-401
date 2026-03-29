function total_eff = overall_sys_eff_10()

eff_near = 1 - ((0.05/3) * 0.5);
eff_far = 1 - ((0.05/3) * 1.5);

branch_1 = (1 - ((0.05/3) * 2.5)) * (1 - ((0.05/3) * 2)); % before 11
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 8
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 5
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 2
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * 1.5));

branch_2 = eff_far * (1 - ((0.05/3) * 3)); % before 9
branch_2 = ((branch_2 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 6
branch_2 = ((branch_2 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 3
branch_2 = ((branch_2 + eff_near)/2) * (1 - ((0.05/3) * 2.5));

branch_3 = eff_near * (1 - ((0.05/3) * 3)); % before 10
branch_3 = ((branch_3 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 7
branch_3 = ((branch_3 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 4
branch_3 = ((branch_3 + eff_near)/2) * (1 - ((0.05/3) * 3.5));

branch_4 = eff_near * (1 - ((0.05/3) * 3)); % before 8
branch_4 = ((branch_4 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 5
branch_4 = ((branch_4 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 2
branch_4 = ((branch_4 + eff_near)/2) * (1 - ((0.05/3) * 1.5));

% branch_5 = eff_far * (1 - ((0.05/3) * 3)); % before 9 (as 2) 
% branch_5 = ((branch_5 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 6
% branch_5 = ((branch_5 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 3
% branch_5 = ((branch_5 + eff_near)/2) * (1 - ((0.05/3) * 2.5));
% 
% branch_6 = eff_near * (1 - ((0.05/3) * 3)); % before 10 (as 3) 
% branch_6 = ((branch_6 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 7
% branch_6 = ((branch_6 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 4
% branch_6 = ((branch_6 + eff_near)/2) * (1 - ((0.05/3) * 3.5));
% 
% branch_7 = eff_near * (1 - ((0.05/3) * 3)); % before 8 (as 4)
% branch_7 = ((branch_7 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 5
% branch_7 = ((branch_7 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 2
% branch_7 = ((branch_7 + eff_near)/2) * (1 - ((0.05/3) * 1.5));
% 
% branch_8 = eff_far * (1 - ((0.05/3) * 3)); % before 9 (as 2)
% branch_8 = ((branch_8 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 6
% branch_8 = ((branch_8 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 3
% branch_8 = ((branch_8 + eff_near)/2) * (1 - ((0.05/3) * 2.5));
% 
% branch_9 = eff_near * (1 - ((0.05/3) * 3)); % before 10 (as 3)
% branch_9 = ((branch_9 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 7
% branch_9 = ((branch_9 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 4
% branch_9 = ((branch_9 + eff_near)/2) * (1 - ((0.05/3) * 3.5));
% 
% branch_10 = eff_near * (1 - ((0.05/3) * 3)); % before 8 (as 4) 
% branch_10 = ((branch_10 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 5
% branch_10 = ((branch_10 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 2
% branch_10 = ((branch_10 + eff_near)/2) * (1 - ((0.05/3) * 1.5));

% 11 as per 2
% 12 as per 3

branch_13 = eff_near * (1 - ((0.05/3) * 3)); % before 8 (as 4) 
branch_13 = ((branch_13 + eff_near)/2) * (1 - ((0.05/3) * 3)); % before 5
branch_13 = ((branch_13 + eff_near)/2) * (1 - ((0.05/3) * 1.5));

total_eff = branch_1;
for i=2:12
    if ismember(i, [2, 5, 8, 11])
        total_eff = total_eff * (1 - ((0.05/3) * 3));
        total_eff = (total_eff + branch_2)/2;
    elseif ismember(i, [3, 6, 9, 12])
        total_eff = total_eff * (1 - ((0.05/3) * 3));
        total_eff = (total_eff + branch_3)/2;
    elseif ismember(i, [4, 7, 10])
        total_eff = total_eff * (1 - ((0.05/3) * 3));
        total_eff = (total_eff + branch_4)/2;
    end
end

total_eff = total_eff * (1 - ((0.05/3) * 3));
total_eff = (total_eff + branch_13)/2;
total_eff = total_eff * (1 - ((0.05/3) * 2));

fprintf('Eff of system (n = 10) is %f\n', total_eff)
end