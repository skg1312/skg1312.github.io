def binary_search(values_in_list, l, r, search_value):
	while l <= r:
		mid = l + (r-l)//2
		if values_in_list[mid] == search_value:
			return mid
		elif values_in_list[mid] < search_value:
			l = mid + 1
		else:
			r = mid - 1
	return -1
list_size = int(input("Enter size of list: "))
values_in_list = []
for i in range(list_size):
	take_input = int(input("Enter your number: "))
	values_in_list.append(take_input)
values_in_list.sort()
print("After sorting list is: ", values_in_list)
length_of_list = len(values_in_list)
search_value = int(input("The number to search for: "))
l = 0
r = length_of_list - 1
result = binary_search(values_in_list, l, r, search_value)
print("{} was found at index {}.".format(search_value, result))
