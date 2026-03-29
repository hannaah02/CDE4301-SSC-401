function total_eff = overall_sys_eff()
% n = 1

% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 0.5);

% first
eff_branch = efficiency_ave;

for i=1:13
    eff_branch = eff_branch * (1 - ((0.05/3) * 1));
    eff_branch = (eff_branch + efficiency_ave + efficiency_ave)/3;
end
eff_branch = eff_branch * (1 - ((0.05/3) * 0.5));

total_eff_1 = eff_branch;
for i=1:23
    total_eff_1 = total_eff_1 * (1 - ((0.05/3) * 2));
    total_eff_1 = (total_eff_1 + eff_branch)/2;
end
total_eff_1 = total_eff_1 * (1 - ((0.05/3) * 1));

fprintf('Eff of system (n = 1) is %f\n', total_eff_1)

% n = 2, checked layout

% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 0.5);

% first
eff_branch = efficiency_ave;

for i=1:13
    eff_branch = eff_branch * (1 - ((0.05/3) * 1));
    eff_branch = (eff_branch + efficiency_ave + efficiency_ave)/3;
end
eff_branch = eff_branch * (1 - ((0.05/3) * 0.5));

eff_branch_last = efficiency_ave;

for i=1:11
    eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 1));
    eff_branch_last = (eff_branch_last + efficiency_ave)/2;
end
eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 0.5));

total_eff_2 = eff_branch * (1 - ((0.05/3) * 2));

for i=1:11
    total_eff_2 = (total_eff_2 + eff_branch)/2;
    total_eff_2 = total_eff_2 * (1 - ((0.05/3) * 4));
end

total_eff_2 = (total_eff_2 + eff_branch_last)/2;

fprintf('Eff of system (n = 2) is %f\n', total_eff_2)


% n = 3, checked layout

% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 0.5);

% first
eff_branch_first = efficiency_ave;

for i=1:6
    eff_branch_first = eff_branch_first * (1 - ((0.05/3) * 2));
    eff_branch_first = (eff_branch_first + efficiency_ave)/2;
end
eff_branch_first = eff_branch_first * (1 - ((0.05/3) * 1.5));

eff_branch = efficiency_ave;

for i=1:13
    eff_branch = eff_branch * (1 - ((0.05/3) * 1));
    eff_branch = (eff_branch + efficiency_ave + efficiency_ave)/3;
end
eff_branch = eff_branch * (1 - ((0.05/3) * 0.5));

% last
eff_branch_last = efficiency_ave;

for i=1:6
    eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 2));
    eff_branch_last = (eff_branch_last + efficiency_ave)/2;
end
eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 0.5));

total_eff_3 = eff_branch_first * (1 - ((0.05/3) * 3));

for i=1:14
    total_eff_3 = (total_eff_3 + eff_branch)/2;
    total_eff_3 = total_eff_3 * (1 - ((0.05/3) * 3));
end

total_eff_3 = (total_eff_3 + eff_branch_last)/2;
total_eff_3 = total_eff_3 * (1 - ((0.05/3) * 1)); 

fprintf('Eff of system (n = 3) is %f\n', total_eff_3)

% n = 4

% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 0.5);

% first
eff_branch = efficiency_ave;

for i=1:13
    eff_branch = eff_branch * (1 - ((0.05/3) * 1));
    eff_branch = (eff_branch + efficiency_ave)/2;
end
eff_branch = eff_branch * (1 - ((0.05/3) * 0.5));

% last
eff_branch_last = efficiency_ave;

for i=1:6
    eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 2));
    eff_branch_last = (eff_branch_last + efficiency_ave)/2;
end
eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 1.5));

total_eff_4 = eff_branch;

for i=1:11
    total_eff_4 = total_eff_4 * (1 - ((0.05/3) * 4));
    total_eff_4 = (total_eff_4 + eff_branch)/2;
end
total_eff_4 = (total_eff_4 + eff_branch_last)/2;


fprintf('Eff of system (n = 4) is %f\n', total_eff_4)

% n = 5

% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 1);

% first
eff_branch = efficiency_ave;

for i=1:13
    eff_branch = eff_branch * (1 - ((0.05/3) * 1));
    eff_branch = (eff_branch + efficiency_ave)/2;
end
eff_branch = eff_branch * (1 - ((0.05/3) * 0.5));

total_eff_5 = eff_branch;
for i=1:8
    total_eff_5 = total_eff_5 * (1 - ((0.05/3) * 5));
    total_eff_5 = (total_eff_5 + eff_branch)/2;
end
total_eff_5 = total_eff_5 * (1 - ((0.05/3) * 3.5));

fprintf('Eff of system (n = 5) is %f\n', total_eff_5)

% n = 6

% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 0.5);

% first
eff_branch = efficiency_ave;

for i=1:6
    eff_branch = eff_branch * (1 - ((0.05/3) * 2));
    eff_branch = (eff_branch + efficiency_ave)/2;
end
eff_branch = eff_branch * (1 - ((0.05/3) * 0.5));

total_eff_6 = eff_branch;
for i=1:14
    total_eff_6 = total_eff_6 * (1 - ((0.05/3) * 3));
    total_eff_6 = (total_eff_6 + eff_branch)/2;
end
total_eff_6 = total_eff_6 * (1 - ((0.05/3) * 2));

fprintf('Eff of system (n = 1) is %f\n', total_eff_6)

total_eff_7 = overall_sys_eff_7();

total_eff_8 = overall_sys_eff_8();

% n = 9

% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 1.5);

% first
eff_branch = efficiency_ave;

for i=1:3
    eff_branch = eff_branch * (1 - ((0.05/3) * 3));
    eff_branch = (eff_branch + efficiency_ave + efficiency_ave)/3;
end
eff_branch = eff_branch * (1 - ((0.05/3) * 3.5));

% last
% each rig to side pipe
efficiency_ave = 1 - ((0.05/3) * 0.5);
eff_branch_last = efficiency_ave;

for i=1:3
    eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 3));
    eff_branch_last = (eff_branch_last + efficiency_ave + efficiency_ave)/3;
end
eff_branch_last = eff_branch_last * (1 - ((0.05/3) * 3.5));

total_eff_9 = eff_branch;
for i=1:6
    total_eff_9 = total_eff_9 * (1 - ((0.05/3) * 6));
    total_eff_9 = (total_eff_9 + eff_branch)/2;
end
total_eff_9 = total_eff_9 * (1 - ((0.05/3) * 5));
total_eff_9 = (total_eff_9 + eff_branch_last)/2;
total_eff_9 = total_eff_9 * (1 - ((0.05/3) * 2));

fprintf('Eff of system (n = 9) is %f\n', total_eff_9)

total_eff_10 = overall_sys_eff_10();

rigs = [1,2,3,4,5,6,7,8,9,10];
total_eff = [total_eff_1,total_eff_2,total_eff_3,total_eff_4,total_eff_5,total_eff_6,total_eff_7,total_eff_8,total_eff_9,total_eff_10];
figure;
plot(rigs, total_eff);
grid on;
xlabel('No of rigs');
ylabel('Total efficiency between system and tank');
title('Total efficiency between system and tank vs number of rigs');
end