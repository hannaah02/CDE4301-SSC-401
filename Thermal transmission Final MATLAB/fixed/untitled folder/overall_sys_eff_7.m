function total_eff = overall_sys_eff_7()
% ignoring mixing and all mass flow are equal

% rig size = 7
% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 0.5);
% for 

% branch 1: 1,8,15,22:
eff_branch_1 = 1 - ((0.05/3) * (13 - 8 + 0.5)); % 1, 13
eff_branch_1 = (eff_branch_1 + efficiency_ave)/2; % 2, 8
eff_branch_1 = eff_branch_1 * (1 - ((0.05/3) * (8 - 6)));
eff_branch_1 = (eff_branch_1 + efficiency_ave)/2; % 3, 6
eff_branch_1 = eff_branch_1 * (1 - ((0.05/3) * (6 - 1 + 0.5)));

% branch 2: 2,9,16
eff_branch_2 = 1 - ((0.05/3) * (13 - 11 + 0.5)); % 1, 13
eff_branch_2 = (eff_branch_2 + efficiency_ave)/2; % 2, 11
eff_branch_2 = eff_branch_2 * (1 - ((0.05/3) * (11 - 6)));
eff_branch_2 = (eff_branch_2 + efficiency_ave)/2; % 3, 6
eff_branch_2 = eff_branch_2 * (1 - ((0.05/3) * (6 - 4)));
eff_branch_2 = (eff_branch_2 + efficiency_ave)/2; % 4, 4
eff_branch_1 = eff_branch_2 * (1 - ((0.05/3) * (4 - 1 + 0.5)));

% branch 3: 3,10,17
eff_branch_3 = 1 - ((0.05/3) * (11 - 9 + 0.5)); % 1, 11
eff_branch_3 = (eff_branch_3 + efficiency_ave)/2; % 2, 9
eff_branch_3 = eff_branch_3 * (1 - ((0.05/3) * (9 - 4)));
eff_branch_3 = (eff_branch_3 + efficiency_ave)/2; % 3, 4
eff_branch_3 = eff_branch_3 * (1 - ((0.05/3) * (4 - 2)));
eff_branch_3 = (eff_branch_3 + efficiency_ave)/2; % 4, 2
eff_branch_3 = eff_branch_3 * (1 - ((0.05/3) * (2 - 1 + 0.5)));

% branch 4: 4,11,18:
eff_branch_4 = 1 - ((0.05/3) * (9 - 7 + 0.5)); % 1, 9
eff_branch_4 = (eff_branch_4 + efficiency_ave)/2; % 2, 7
eff_branch_4 = eff_branch_4 * (1 - ((0.05/3) * (7 - 2)));
eff_branch_4 = (eff_branch_4 + efficiency_ave)/2; % 3, 2
eff_branch_4 = eff_branch_4 * (1 - ((0.05/3) * (2 - 1 + 0.5)));

% branch 5: 5,12,19:
eff_branch_5 = 1 - ((0.05/3) * (12 - 7 + 0.5)); % 1, 12
eff_branch_5 = (eff_branch_5 + efficiency_ave)/2; % 2, 7
eff_branch_5 = eff_branch_5 * (1 - ((0.05/3) * (7 - 5)));
eff_branch_5 = (eff_branch_5 + efficiency_ave)/2; % 3, 5
eff_branch_5 = eff_branch_5 * (1 - ((0.05/3) * (5 - 1 + 0.5)));

% branch 6: 6,13,20
eff_branch_6 = 1 - ((0.05/3) * (12 - 10 + 0.5)); % 1, 12
eff_branch_6 = (eff_branch_6 + efficiency_ave)/2; % 2, 10
eff_branch_6 = eff_branch_6 * (1 - ((0.05/3) * (10 - 5)));
eff_branch_6 = (eff_branch_6 + efficiency_ave)/2; % 3, 5
eff_branch_6 = eff_branch_6 * (1 - ((0.05/3) * (5 - 3)));
eff_branch_6 = (eff_branch_6 + efficiency_ave)/2; % 4, 3
eff_branch_6 = eff_branch_6 * (1 - ((0.05/3) * (3 - 1 + 0.5)));

% branch 7: 7,14,21:
eff_branch_7 = 1 - ((0.05/3) * (10 - 8 + 0.5)); % 1, 10
eff_branch_7 = (eff_branch_7 + efficiency_ave)/2; % 2, 8
eff_branch_7 = eff_branch_7 * (1 - ((0.05/3) * (8 - 3)));
eff_branch_7 = (eff_branch_7 + efficiency_ave)/2; % 3, 3
eff_branch_7 = eff_branch_7 * (1 - ((0.05/3) * (3 - 1 + 0.5)));

total_eff = eff_branch_1 * (1 - ((0.05/3) * 2));
for i = 2:22
    if ismember(i, [8, 15, 22])
        total_eff = (total_eff + eff_branch_1)/2;
        total_eff = total_eff * (1 - ((0.05/3) * 2));
    elseif ismember(i, [2,9,16])
        total_eff = (total_eff + eff_branch_2)/2;
        total_eff = total_eff * (1 - ((0.05/3) * 2));
    elseif ismember(i, [3,10,17])
        total_eff = (total_eff + eff_branch_3)/2;
        total_eff = total_eff * (1 - ((0.05/3) * 2));
    elseif ismember(i, [4,11,18])
        total_eff = (total_eff + eff_branch_4)/2;
        total_eff = total_eff * (1 - ((0.05/3) * 2));
    elseif ismember(i, [5,12,19])
        total_eff = (total_eff + eff_branch_5)/2;
        total_eff = total_eff * (1 - ((0.05/3) * 2));
    elseif ismember(i, [6,13,20])
        total_eff = (total_eff + eff_branch_6)/2;
        total_eff = total_eff * (1 - ((0.05/3) * 2));
    elseif ismember(i, [7,14,21])
        total_eff = (total_eff + eff_branch_7)/2;
        total_eff = total_eff * (1 - ((0.05/3) * 2));
    end
end

fprintf('Eff of system (n = 7) is %f\n', total_eff)
end