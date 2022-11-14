import sys

def start(num):
    print('........开始初始化.......')
    lista = []
    for i in range(num):
        lista.append(False)
    return lista


def get_status(list_checked, all_s):
    print(f'当前全选框状态：\n{all_s}')
    print(f'当前复选框状态：\n{list_checked}')


def check_button(list_checked, all_s):
    print('1:输入对应复选框的序号则为单击一次该对象')
    print('2:输入"0"为单击全选框,其余输入为退出')
    while True:
        try:
            num_c = int(input('输入选择的操作：\n'))
            if num_c > len(list_checked):
                raise ValueError
            break
        except ValueError:
            print('.........测试结束........')
            sys.exit()
    if num_c == 0:
        # print('all_S:', all_s)
        all_s = not all_s
        # print('all_S:', all_s)
        if not all_s:
            for i in range(len(list_checked)):
                list_checked[i] = False
    else:
        list_checked[num_c-1] = not list_checked[num_c-1]


    if all_s:
        for i in range(len(list_checked)):
            list_checked[i] = True
    elif list_checked == [True] * len(list_checked):
        all_s = True
    return list_checked, all_s


print('.........测试开始........')
while True:
    try:
        num_b = int(input('输入复选框个数：\n'))
        if num_b <= 0:
            raise ValueError
        break
    except ValueError:
        print('请输入正整数！\n')
all_status = False
list_check = start(num_b)
get_status(list_check, all_status)
while True:
    list_check, all_status = check_button(list_check, all_status)
    get_status(list_check, all_status)
