function total_eff = overall_sys_eff_8()

eff_near = 1 - ((0.05/3) * 0.5);
eff_far = 1 - ((0.05/3) * 1.5);

branch_1 = eff_far * (1 - ((0.05/3) * (13-11))); % 13,11,8,5,2
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * (11-8))); % 11
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * (8-5))); % 8
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * (5-2))); % 5
branch_1 = ((branch_1 + eff_near)/2) * (1 - ((0.05/3) * (2-1+0.5))); % 2

branch_2 = eff_near * (1 - ((0.05/3) * (11-8))); % 11,8,6,3
branch_2 = ((branch_2 + eff_near)/2) * (1 - ((0.05/3) * (8-6))); % 8
branch_2 = ((branch_2 + eff_near)/2) * (1 - ((0.05/3) * (6-3))); % 6
branch_2 = ((branch_2 + eff_near)/2) * (1 - ((0.05/3) * (3-1+0.5))); % 3

branch_3 = eff_near * (1 - ((0.05/3) * (12-9))); % 12,9,6,3
branch_3 = ((branch_3 + eff_near)/2) * (1 - ((0.05/3) * (9-6))); % 9
branch_3 = ((branch_3 + eff_near)/2) * (1 - ((0.05/3) * (6-3))); % 6
branch_3 = ((branch_3 + eff_near)/2) * (1 - ((0.05/3) * (3-1+0.5))); % 3

branch_4 = eff_near * (1 - ((0.05/3) * (12-9))); % 12,9,7,4,2
branch_4 = ((branch_4 + eff_near)/2) * (1 - ((0.05/3) * (9-7))); % 9
branch_4 = ((branch_4 + eff_near)/2) * (1 - ((0.05/3) * (7-4))); % 7
branch_4 = ((branch_4 + eff_near)/2) * (1 - ((0.05/3) * (4-2))); % 4
branch_4 = ((branch_4 + eff_far)/2) * (1 - ((0.05/3) * (2-1+0.5))); % 2

branch_5 = eff_near * (1 - ((0.05/3) * (13-10))); % 13,10,7,4,2
branch_5 = ((branch_5 + eff_near)/2) * (1 - ((0.05/3) * (10-7))); % 10
branch_5 = ((branch_5 + eff_near)/2) * (1 - ((0.05/3) * (7-4))); % 7
branch_5 = ((branch_5 + eff_near)/2) * (1 - ((0.05/3) * (4-2))); % 4
branch_5 = ((branch_5 + eff_far)/2) * (1 - ((0.05/3) * (2-1+0.5))); % 2

branch_6 = eff_near * (1 - ((0.05/3) * (13-10))); % 13,10,8,5,3
branch_6 = ((branch_6 + eff_near)/2) * (1 - ((0.05/3) * (10-8))); % 10
branch_6 = ((branch_6 + eff_near)/2) * (1 - ((0.05/3) * (8-5))); % 8
branch_6 = ((branch_6 + eff_near)/2) * (1 - ((0.05/3) * (5-3))); % 5
branch_6 = ((branch_6 + eff_far)/2) * (1 - ((0.05/3) * (3-1+0.5))); % 3

branch_7 = eff_near * (1 - ((0.05/3) * (11-8))); % 11,8,5,3
branch_7 = ((branch_7 + eff_near)/2) * (1 - ((0.05/3) * (8-5))); % 8
branch_7 = ((branch_7 + eff_near)/2) * (1 - ((0.05/3) * (5-3))); % 5
branch_7 = ((branch_7 + eff_far)/2) * (1 - ((0.05/3) * (3-1+0.5))); % 3

branch_8 = eff_near * (1 - ((0.05/3) * (11-9))); % 11,9,6,4
branch_8 = ((branch_8 + eff_near)/2) * (1 - ((0.05/3) * (9-6))); % 9
branch_8 = ((branch_8 + eff_near)/2) * (1 - ((0.05/3) * (6-4))); % 6
branch_8 = ((branch_8 + eff_far)/2) * (1 - ((0.05/3) * (4-1+0.5))); % 4

branch_9 = eff_near * (1 - ((0.05/3) * (12-9))); % 12,9,6,4
branch_9 = ((branch_9 + eff_near)/2) * (1 - ((0.05/3) * (9-6))); % 9
branch_9 = ((branch_9 + eff_near)/2) * (1 - ((0.05/3) * (6-4))); % 6
branch_9 = ((branch_9 + eff_far)/2) * (1 - ((0.05/3) * (4-1+0.5))); % 4

branch_10 = eff_near * (1 - ((0.05/3) * (12-10))); % 12,10,7,5,2
branch_10 = ((branch_10 + eff_near)/2) * (1 - ((0.05/3) * (10-7))); % 10
branch_10 = ((branch_10 + eff_near)/2) * (1 - ((0.05/3) * (7-5))); % 7
branch_10 = ((branch_10 + eff_far)/2) * (1 - ((0.05/3) * (5-2))); % 5
branch_10 = ((branch_10 + eff_far)/2) * (1 - ((0.05/3) * (2-1+0.5))); % 2

branch_11 = eff_near * (1 - ((0.05/3) * (13-10))); % 13,10,7,5,2
branch_11 = ((branch_11 + eff_near)/2) * (1 - ((0.05/3) * (10-7))); % 10
branch_11 = ((branch_11 + eff_near)/2) * (1 - ((0.05/3) * (7-5))); % 7
branch_11 = ((branch_11 + eff_far)/2) * (1 - ((0.05/3) * (5-2))); % 5
branch_11 = ((branch_11 + eff_far)/2) * (1 - ((0.05/3) * (2-1+0.5))); % 2

branch_12 = eff_near * (1 - ((0.05/3) * (13-11))); % 13,11,8
branch_12 = ((branch_12 + eff_near)/2) * (1 - ((0.05/3) * (11-8))); % 11
branch_12 = ((branch_12 + eff_near)/2) * (1 - ((0.05/3) * (8-1+0.5))); % 8

branch_13 = eff_near * (1 - ((0.05/3) * (11-8))); % 11,8,6,3
branch_13 = ((branch_13 + eff_near)/2) * (1 - ((0.05/3) * (8-6))); % 8
branch_13 = ((branch_13 + eff_near)/2) * (1 - ((0.05/3) * (6-3))); % 6
branch_13 = ((branch_13 + eff_near)/2) * (1 - ((0.05/3) * (3-1+0.5))); % 3

branch_14 = eff_near * (1 - ((0.05/3) * (12-9))); % 12,9,6,3
branch_14 = ((branch_14 + eff_near)/2) * (1 - ((0.05/3) * (9-6))); % 9
branch_14 = ((branch_14 + eff_near)/2) * (1 - ((0.05/3) * (6-3))); % 6
branch_14 = ((branch_14 + eff_near)/2) * (1 - ((0.05/3) * (3-1+0.5))); % 3

branch_15 = eff_near * (1 - ((0.05/3) * (12-9))); % 12,9,7,4
branch_15 = ((branch_15 + eff_near)/2) * (1 - ((0.05/3) * (9-7))); % 9
branch_15 = ((branch_15 + eff_near)/2) * (1 - ((0.05/3) * (7-4))); % 7
branch_15 = ((branch_15 + eff_near)/2) * (1 - ((0.05/3) * (4-1+0.5))); % 4

total_eff = branch_1 * (1 - ((0.05/3) * 3)); % end b4 2
total_eff = ((total_eff + branch_2)/2) * (1 - ((0.05/3) * 3)); % end b4 3
total_eff = ((total_eff + branch_3)/2) * (1 - ((0.05/3) * 3)); % end b4 4
total_eff = ((total_eff + branch_4)/2) * (1 - ((0.05/3) * 3)); % end b4 5
total_eff = ((total_eff + branch_5)/2) * (1 - ((0.05/3) * 3)); % end b4 6
total_eff = ((total_eff + branch_6)/2) * (1 - ((0.05/3) * 3)); % end b4 7
total_eff = ((total_eff + branch_7)/2) * (1 - ((0.05/3) * 3)); % end b4 8
total_eff = ((total_eff + branch_8)/2) * (1 - ((0.05/3) * 3)); % end b4 9
total_eff = ((total_eff + branch_9)/2) * (1 - ((0.05/3) * 3)); % end b4 10
total_eff = ((total_eff + branch_10)/2) * (1 - ((0.05/3) * 3)); % end b4 11
total_eff = ((total_eff + branch_11)/2) * (1 - ((0.05/3) * 3)); % end b4 12
total_eff = ((total_eff + branch_12)/2) * (1 - ((0.05/3) * 2)); % end b4 13
total_eff = ((total_eff + branch_13)/2) * (1 - ((0.05/3) * 3)); % end b4 14
total_eff = ((total_eff + branch_14)/2) * (1 - ((0.05/3) * 3)); % end b4 15
total_eff = ((total_eff + branch_15)/2) * (1 - ((0.05/3) * 2)); % end b4 15

fprintf('Eff of system (n = 8) is %f\n', total_eff)
end