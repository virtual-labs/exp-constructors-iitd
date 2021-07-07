### What is constructor in java?
- In Java, a constructor is a block of codes similar to the method. -
- It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory.
- It is a special type of method which is used to initialize the object.
- Every time an object is created using the new() keyword, at least one constructor is called.
- It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default.

### Why it is called constructor?
It is called constructor because it constructs the values at the time of object creation. It is not necessary to write a constructor for a class. It is because java compiler creates a default constructor if your class doesn't have any.

### Need of Constructor?
Think of a Box. If we talk about a box class then it will have some class variables (say length, breadth, and height). But when it comes to creating its object(i.e Box will now exist in the computer’s memory), then can a box be there with no value defined for its dimensions. The answer is no. 
So constructors are used to assign values to the class variables at the time of object creation, either explicitly done by the programmer or by Java itself (default constructor).

### Rules for creating Java constructor
There are three rules defined for the constructor.
- A constructor name must be the same as its class name
- A constructor must have no explicit return type
- A constructor cannot be abstract, static, final, and synchronized

### Types of Java constructors
There are two types of constructors in Java:
1.	Default constructor (No-argument constructor)
2.	Parameterized constructor

### Java Default Constructor or No-argument constructor
- A constructor that has no parameter is known as the default constructor. 
- If we don’t define a constructor in a class, then the compiler creates default constructor(with no arguments) for the class. 
- If we write a constructor with arguments or no-arguments then the compiler does not create a default constructor. 
- Default constructor provides the default values to the object like 0, null, etc. depending on the type.



#### Example of Default Constructor or No-argument constructor
Java Program to illustrate calling a no-argument constructor

```sh
//This is a java Input/Output package
import java.io.*;

class ABC
{ 	//This is instance variable or fields of this class.
	int num;
	String name;

	// this would be invoked while an object of that class is created.
	ABC()
	{
		System.out.println("Constructor called");
	}
}

class GFG
{
	public static void main (String[] args)
	{
		// this would invoke default constructor.
		ABC obj1 = new ABC();

		// Default constructor provides the default values to the object like 0, null
		System.out.println(obj1.name);
		System.out.println(obj1.num);
	}
}

```


#### OUTPUT
```sh
Constructor called
null
0
```

### Java Parameterized Constructor
 - A constructor that has parameters is known as parameterized constructor. 
 - If we want to initialize fields of the class with your own values, then use a parameterized constructor.
 
### Why use the parameterized constructor?
The parameterized constructor is used to provide different values to distinct objects. However, you can provide the same values also.


#### Example of parameterized constructor
Java Program to illustrate calling of parameterized constructor.
In this example, we have created the constructor of class ABC that have two parameters name and id. We can have any number of parameters in the constructor.

```sh

import java.io.*;

class ABC
{
	//This is instance variable or fields of this class.
	String name;
	int id;

	// constructor would initialize instance variable or fields with the values of passed arguments while object of that class created.
	ABC(String name, int id)
	{
		this.name = name;
		this.id = id;
	}
}

class GFG
{
	public static void main (String[] args)
	{
		// this would invoke the parameterized constructor.
		ABC obj1 = new ABC("adam", 1); // Here you are passing arguments to the parameterized constructor
		System.out.println("Name :" + obj1.name + " and Id :" + obj1.id);
	}
}

```

#### OUTPUT
```sh
Name :adam and Id :1
```

### What is Constructor Overloading in Java?
- In Java, a constructor is just like a method but without return type. It can also be overloaded like Java methods.
- Constructor overloading in Java is a technique of having more than one constructor with different parameter lists. 
- They are arranged in a way that each constructor performs a different task. 
- They are differentiated by the compiler by the number of parameters in the list and their types.

#### Example of Constructor Overloading

```

//Java program to overload constructors  
class Student{  
    int id;  
    String name;  
    int age;  
    //creating two argument constructor  
    Student(int i,String n)
    {  
    id = i;  
    name = n;  
    }  
    //creating three argument constructor  
    Student(int i,String n,int a)
    {  
    id = i;  
    name = n;  
    age=a;  
    }  
    void display()
    {
    System.out.println(id+" "+name+" "+age);
    }  
   
    public static void main(String args[])
    {  
    Student s1 = new Student(111,"Karan");  
    Student s2 = new Student(222,"Aryan",25);  
    s1.display();  
    s2.display();  
   }  
}  

```

#### OUTPUT
```sh
111 Karan 0
222 Aryan 25
```


