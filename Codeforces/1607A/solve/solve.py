number_of_alphabet = int(input())
answer_list = [] 

for i in range(number_of_alphabet):  
  alphabet_list = input() 
  alphabet_example = input() 
  alphabet_dict = dict() 
  alphabet_split = list(alphabet_list) 
  n = 1
  for j in alphabet_split: 
    alphabet_dict[j] = n 
    n += 1 
  alphabet_example_split = list(alphabet_example) 
  for a in range(0, len(alphabet_example_split)):  
    alphabet_example_split[a] = alphabet_dict[alphabet_example_split[a]]  
  diff_list = []
  for r in range(0, len(alphabet_example_split) - 1):
    diff = alphabet_example_split[r + 1] - alphabet_example_split[r]
    if(diff >= 0): 
      diff = diff 
    else: 
      diff = diff * (-1)
    diff_list.append(diff)  
  sum_of_list = sum(diff_list) 
  answer_list.append(sum_of_list) 

for i in answer_list:
  print(i) 

