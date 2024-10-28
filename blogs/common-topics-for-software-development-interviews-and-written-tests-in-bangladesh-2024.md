
![DALL·E 2024-10-29 00 20 33 - A modern thumbnail for a blog post on common software development interview topics in Bangladesh, 2024  The image should feature a clean, professional](https://github.com/user-attachments/assets/d00d2761-f93d-4681-88cc-9c1fc81cd4d2)

# Common Topics for Software Development Interviews and Written Tests in Bangladesh, 2024

I recently applied for some entry-level or mid-level software development positions in October 2024 and had several interviews. In my experience, they usually begin by asking questions on fundamental CSE topics. These topics are also commonly covered in the written exams and include questions relevant to the job post.

## For write code on pen and paper without an IDE

## 1. Prime Number Check

```python
def is_prime(n):
  if n <= 1:
    return False
  for i in range(2, int(n ** 0.5) + 1):
    if n % i == 0:
      return False
  return True


print(is_prime(17)) # Output: True
```

## 2. Leap Year Calculation

```python
def is_leap(year):
  return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

print(is_leap(2024)) # Output: True
```

## 3. Fibonacci Sequence

```python
def fibonacci(n):
    feb_seq = [0, 1]
    while len(feb_seq) < n:
        feb_seq.append(feb_seq[-2] + feb_seq[-1])
    return feb_seq[:n]

print(fibonacci(5)) # Output: [0, 1, 1, 2, 3]
```

## 4. Factorial Calculator

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5)) # Output: 120
```

## 5. Palindrome Checker

```python
def is_palindrom(s):
    return s == s[::-1]

print(is_palindrom('madam')) # Output: True
print(is_palindrom('cat')) # Output: False
```

## 6. Armstrong number

```python
def is_armstrong(n):
    digits = list(map(int, str(n)))
    power = len(digits)
    return n == sum([digit ** power for digit in digits])

print(is_armstrong(153)) # Output: True
```

## 7. Greatest Common Divisor (GCD)

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

print(gcd(60, 48)) # Output: 12
```

## 8. Sum of Digits

```python
def sum_of_digits(n):
    return sum(map(int, str(n)))

print(sum_of_digits(12345)) # Output: 15
```

## 9. Reverse a String

```python
def reverse_string(s):
    return s[::-1]

print(reverse_string('madam')) # Output: madam
```

## 10. Bubble Sort

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([0, 10, 11, 1, 2])) # Output: [0, 1, 2, 10, 11]
```

## 11. Binary Search

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
   
    while low <= high:
        mid = (low + high) //2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

arr = [1, 2, 4, 5, 7, 9, 0, 10]
target = 7

print(binary_search(arr, target))
```

## 12. Find Max value in array

```python
def find_max(arr):
    max_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
    return max_val

print(find_max([1, 2, 4, 10, 11, 0])) # Output: 11
```

## 13. Write a Python function to find the second largest number in a list.

```python
def second_largest(numbers):
    if len(numbers) < 2:
        return None
    unique_sorted = sorted(set(numbers), reverse=True)
    return unique_sorted[1] if len(unique_sorted) > 1 else None

# Example usage
print(second_largest([10, 5, 8, 12, 3, 12, 7]))  # Output: 10
print(second_largest([1, 1, 1]))  # Output: None
```

## 14. Remove duplicate in array

```python
arr = [1, 2, 2, 3, 4, 4, 5]
arr = list(set(arr))
print(arr) # Output might be in a different order
```

### 14.1 Using List Comprehension with enumerate

```python
arr = [1, 2, 2, 3, 4, 4, 5]
unique_arr = [item for index, item in enumerate(arr) if item not in arr[:index]]
print(unique_arr)  # Output: [1, 2, 3, 4, 5]
```

## 15. Swap value using a temporary variable

```python
a = 5
b = 10
temp = a
a = b
b = temp
print(a)  # Output: 10
print(b)  # Output: 5
```

## OOP
Object-oriented programming (OOP) is a computer programming model that organises software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behaviour.

Object-oriented programming (OOP) has four pillars of concept:
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism - Overloading and Overriding

### 1. Encapsulation

Encapsulation is the concept of bunding data (attributes) and methods(functions) that work on the data into a single unit, usually in the form of a class. It restricts direct access to certain components and ensures control over how data is accessed and modified.
Key point: Private attributes (denoted by an double underscore in __ python), access or modify the private attributes via getter and setter methods.

#### Example 
```python
class Person:
    def __init__(self, name, age):
        self.__name = name  # Private variable
        self.__age = age    # Private variable


    # Getter method for name
    def get_name(self):
        return self.__name


    # Setter method for name
    def set_name(self, name):
        self.__name = name


    # Getter method for age
    def get_age(self):
        return self.__age


    # Setter method for age
    def set_age(self, age):
        if age > 0:
            self.__age = age
        else:
            print("Age cannot be negative.")


# Usage
person = Person("Alice", 25)
print(person.get_name())  # Output: Alice
person.set_age(30)
print(person.get_age())   # Output: 30
```

### 2. Abstraction

Abstraction focuses on exposing only the necessary details while hiding the complexities. It is achieved using abstract classes or interfaces.

Key point: Abstract class contains one or more abstract methods (Methods without implementation). These abstract methods must be implemented by any concrete class ( a non-abstract class) that inherits from the abstract class.

#### Example 

```python
from abc import ABC, abstractmethod


# Abstract class
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass


# Concrete class
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius


    # Implementing the abstract method
    def area(self):
        return 3.14 * self.radius * self.radius


# Concrete class
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height


    # Implementing the abstract method
    def area(self):
        return self.width * self.height


# Usage
circle = Circle(5)
rectangle = Rectangle(4, 6)


print("Circle area:", circle.area())  # Output: Circle area: 78.5
print("Rectangle area:", rectangle.area())  # Output: Rectangle area: 24
```

### 3. Inheritance

Inheritance allows one class to inherit properties and methods from another class. This promotes code reuse and a hierarchical class structure.

Key point: Base class(parent class), the class whose properties and methods are inherited. Derived class(child class), the class that inherits properties and methods from the base class.

#### Example 

```python
# Base class
class Animal:
    def __init__(self, name):
        self.name = name


    def make_sound(self):
        print(f"{self.name} makes a sound")


# Derived class
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call the constructor of the base class
        self.breed = breed


    # Override the method
    def make_sound(self):
        print(f"{self.name} barks!")


# Derived class
class Cat(Animal):
    def make_sound(self):
        print(f"{self.name} meows!")


# Usage
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers")


dog.make_sound()  # Output: Buddy barks!
cat.make_sound()  # Output: Whiskers meows!
```

### 4. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common super class. It enables the same method to perform different behaviours based on the object calling it.

Key point: Method Overriding: Redefining a method in a derived class that exist in the base class. Method Overloading: Having multiple methods with the same name but different parameters (not supported natively in Python, but can be mimicked using default arguments or other techniques).

#### Example of Method Overloading

```python
class Calculator:
    def add(self, a, b, c=None):
        if c is not None:
            return a + b + c
        else:
            return a + b


calc = Calculator()
print(calc.add(1, 2))      # 3
print(calc.add(1, 2, 3))   # 6
```

#### Example of Method Overriding

```python
class Animal:
    def speak(self):
        return "Animal makes a sound"


class Dog(Animal):
    def speak(self):
        return "Dog barks"


dog = Dog()
print(dog.speak())  # Outputs: Dog barks
```

### BankAccount Class

```python
class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance
   
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
        else:
            raise ValueError("Deposit amount must be positive.")
   
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds.")
        self.balance -= amount
   
    def check_balance(self):
        return self.balance
```

## Shallow vs deep copy

- Shallow copy: Copies the reference to object not the objects themselves
- Deep copy: Copies the object and all nested objects, creating independent duplicates

```python
import copy

list1 = [[1, 2], [3, 4]]
shallow_copy = copy.copy(list1)
deep_copy = copy.deepcopy(list1)

list1[0][0] = 99  # Affects shallow_copy but not deep_copy
```

## Data Structures and Algorithms

### Stack

A stack is a linear data structure that follows the LIFO (Last in, First Out) principle. The last element added to the stack in the first one to be removed.

#### Common Operations:
- Push: Add an element to the top of the stack.
- Pop: Remove and return the top element from the stack.
- Peek: View the top element without removing it.

#### Real-world example:
- Think of a stack of plates. The last plate you put on the top is the first one you take off.
- Usages: Undo functionality in software like text editors or drawing programs

### Queue

A queue is a linear data structure that follows the FIFO(First in, First Out) principle. The first element added to the queue is the first one to be removed.

#### Common operations:

- Enqueue: Add an element to the end of the queue
- Dequeue: Remove an element to the first.

#### Real-world example:

- Think of a line at a bank counter. The first person in line gets served first.
- Usages: Printer queue (Jobs are prints in the order they arrive) or handling requests in a web server.

### Example Stack and Queue
```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop() if not self.is_empty() else None

    def is_empty(self):
        return len(self.items) == 0

class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        return self.items.pop() if not self.is_empty() else None

    def is_empty(self):
        return len(self.items) == 0

# Example usage
stack = Stack()
stack.push(1)
stack.push(2)
print(stack.pop())  # Output: 2

queue = Queue()
queue.enqueue('a')
queue.enqueue('b')
print(queue.dequeue())  # Output: 'a'
```

### Reverse a Linked List

Linked List Overview: A linked list is a data structure in which each element (node) contains a data part and a reference (or pointer) to the next node in the sequence. Linked lists are useful for dynamic data storage where the size can change over time.

#### Types 

- Singly Linked list: Each node points to the next node.
- Doubly Linked list: Each node has pointers to both the next and previous nodes.

#### Implementing a Singly Linked List

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage
sll = SinglyLinkedList()
sll.insert(1)
sll.insert(2)
sll.insert(3)
sll.display()  # Output: 1 -> 2 -> 3 -> None
```

### Reversing a Singly Linked list

To reverse a linked list, we need to iterate through the list and reverse the next pointers of the nodes so that they point to the previous node. 

#### Example

```python
# Define a Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


# Function to reverse a linked list
def reverse_linked_list(head):
    prev = None
    current = head
   
    # Iterate through the list
    while current:
        next_node = current.next  # Store the next node
        current.next = prev       # Reverse the 'next' pointer
        prev = current            # Move prev to current node
        current = next_node       # Move to the next node
   
    # After the loop, prev will be the new head
    return prev


# Helper function to print a linked list
def print_linked_list(head):
    current = head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")


# Example Usage
# Creating a linked list: 1 -> 2 -> 3 -> 4 -> None
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)


print("Original Linked List:")
print_linked_list(head)


# Reversing the linked list
new_head = reverse_linked_list(head)


print("Reversed Linked List:")
print_linked_list(new_head)
```

#### Complexity
- Time Complexity: O(n) where n is the number of nodes in the linked list (we visit each node once)
- Space Complexity: O(1), because we only use a few extra pointers.

### Quicksort Algorithm and Time Complexity
Quicksort is a divide-and-conquer sorting algorithm that selects a “pivot” element and partitions the array into two sub-arrays: One with elements less than the pivot and the other with elements greater than the pivot. The process is recursively applied to both sub-arrays.

#### Steps
1. Pick a pivot: select a pivot element from the array(commonly the first, last or middle element or a random one)
2. Partitioning: Rearrange the array such that all elements less than the pivot are on the left side and all elements greater than the pivot are on the right side.
3. Recursion: Recursively apply the same process to the left and right sub-arrays
4. Base case: Stop when the sub-arrays contain only one element (already sorted).

#### Example 

```python
def quicksort(arr):
    # Base case: array is empty or has one element
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]  # Choose the middle element as the pivot
        left = [x for x in arr if x < pivot]   # All elements less than pivot
        middle = [x for x in arr if x == pivot]  # All elements equal to pivot
        right = [x for x in arr if x > pivot]  # All elements greater than pivot
       
        # Recursively apply quicksort to left and right sub-arrays
        return quicksort(left) + middle + quicksort(right)

# Example usage
arr = [3, 6, 8, 10, 1, 2, 1]
sorted_arr = quicksort(arr)
print("Sorted Array:", sorted_arr)
```

#### Complexity

##### Time

- Base case: O(n log n) occurs when the pivot consistently divides the array into balanced sub-arrays
- Average case: O(n log n) as the array is usually split in a relatively balanced manner.
- Worst case: O(n^2) occurs when the pivot divides the array into very unbalanced sub-arrays
- Worst case example:
- If the array is already sorted, and we always pick the first or last element as the pivot, we repeatedly partition the array into one large sub-array and one empty one, leading to O(n^2) behaviour.

##### Space

- O(log n) Due to the recursion stack in the best and average cases.
- O(n) in the worst case because of the recursion depth when the pivot leads to highly unbalanced partitions.

## CRUD operations in SQL

CRUD operations in SQL refer to the basic operations we can perform on a database: Create, Read, Update, and Delete.

### 1. Create (INSEART)

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Salary DECIMAL(10, 2)
);

INSERT INTO Employees (EmployeeID, FirstName, LastName, Salary)
VALUES (1, 'John', 'Doe', 50000.00);
```

### 2. Read (SELECT)

```sql 
SELECT FirstName, LastName, Salary
FROM Employees
WHERE Salary > 40000;
```

### 3. Update(UPDATE)

```sql
UPDATE Employees
SET Salary = 55000
WHERE EmployeeID = 1;
```

### 4. Delete (DELETE)

```sql
DELETE FROM Employees
WHERE EmployeeID = 1;
```

## SQL Basics

### JOIN

There are different types of joins, but the most common is the INNER JOIN, which returns only matching rows between two tables.

```sql
-- Table: Orders
OrderID | CustomerID | OrderDate
--------------------------------
1       | 1          | 2024-01-01
2       | 2          | 2024-02-01


-- Table: Customers
CustomerID | Name       | City
------------------------------
1          | John Smith | New York
2          | Jane Doe   | Los Angeles


-- INNER JOIN Example
SELECT Orders.OrderID, Customers.Name, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;


-- Result
OrderID | Name       | OrderDate
--------------------------------
1       | John Smith | 2024-01-01
2       | Jane Doe   | 2024-02-01
```

### GROUP BY and HAVING

- Group by is used to group records with the same values.
- Having is used to filter records after Group by is applied

```sql
SELECT City, COUNT(CustomerID) AS NumberOfCustomers
FROM Customers
GROUP BY City
HAVING COUNT(CustomerID) > 1;
```

### Aggregate Functions

```sql
-- Count the number of employees
SELECT COUNT(*) AS TotalEmployees
FROM Employees;


-- Find the maximum salary
SELECT MAX(Salary) AS HighestSalary
FROM Employees;


-- Find the average salary
SELECT AVG(Salary) AS AverageSalary
FROM Employees;


-- Find the total salary cost
SELECT SUM(Salary) AS TotalSalaryCost
FROM Employees;
```

### ACID Properties

ACID is an acronym that stands for Atomicity, Consistency, Isolation, and Durability. These are key properties of database transactions to ensure data integrity.

### ACID Explained:

- Atomicity: Ensures that all operations within a transaction are completed successfully, or none of them are. If one part of a transaction fails, the entire transaction is rolled back.
- - Example: Transferring money from one bank account to another – either both accounts are updated, or none are.
- Consistency: Ensures that a transaction brings the database from one valid state to another, maintaining all predefined rules (such as constraints, triggers).
- - Example: If a field is marked as NOT NULL, no transaction should allow inserting a NULL value.
- Isolation: Ensures that concurrent execution of transactions leads to the same state as if the transactions were executed sequentially.
- - Example: If two users try to book the last seat in a cinema simultaneously, only one transaction should succeed.
- Durability: Once a transaction has been committed, it remains so, even in the case of a system failure (e.g., power outage).
- - Example: After transferring money, the updated balances should remain persistent even if the system crashes.

## Basic AI Knowledge

Question: Explain the difference between supervised and unsupervised learning in machine learning.

### Supervised Learning:

- Uses labeled data
- The algorithm learns to predict outputs based on input features
- Examples: classification, regression
- Use case: spam detection, price prediction

### Unsupervised Learning:

- Uses unlabeled data
- The algorithm finds patterns or structures in the data
- Examples: clustering, dimensionality reduction
- Use case: customer segmentation, anomaly detection
- Python example of supervised learning (Linear Regression):

```python
from sklearn.linear_model import LinearRegression
import numpy as np

# Sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make a prediction
print(model.predict([[6]]))  # Predict for X = 6
```

## Analytical Skills

Question: Given a scenario: "A city wants to optimize its traffic light system to reduce congestion." Describe your approach to analyzing this problem and proposing a solution.

### Approach:

1. Data Collection:
- Traffic flow patterns
- Peak hours and congestion points
- Current traffic light timings

2. Analysis:
- Identify bottlenecks and high-congestion areas
- Analyze the relationship between light timings and traffic flow

3. Propose Solution:
- Implement an AI-based adaptive traffic control system
- Use real-time data from sensors and cameras
- Dynamically adjust light timings based on current traffic conditions

4. Implementation:
- Start with a pilot program in high-congestion areas
- Use machine learning algorithms to continuously improve the system

5. Evaluation:
- Compare traffic flow before and after implementation
- Measure reduction in average wait times and overall congestion


These may not be enough, but they cover 70-80% of frequently asked topics. Start with these related topics. If you plan on applying, learn more about these areas.

Thank you very much for reading my blog. 🙌
