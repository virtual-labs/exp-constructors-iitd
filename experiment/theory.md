### Constructor
In Java, a constructor is a block of codes similar to the method. It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory. It is a special type of method which is used to initialize the object.
Every time an object is created using the new() keyword, at least one constructor is called. It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default.  The constructor cannot have a return type. It should create and return new object. Hence it would give compilation error.

### Rules for creating Java constructor
There are two rules defined for the constructor.
1.	Constructor name must be the same as its class name
2.	A Constructor must have no explicit return type
3.	A Java constructor cannot be abstract, static, final, and synchronized

### Types of Java constructors
There are two types of constructors in Java:
1.	Default constructor (no-arg constructor)
2.	Parameterized constructor

### Java Default Constructor
A constructor is called "Default Constructor" when it doesn't have any parameter.

### Syntax of default constructor
```sh
<class_name>(){
}
```

### Example of default constructor
In this example, we are creating the no-arg constructor in the Bike class. It will be invoked at the time of object creation.
```sh
	class Bike1{  
	//creating a default constructor  
	Bike1()
	{
	System.out.println("Bike is created");
	}  
	public static void main(String args[])
	{  
	//calling a default constructor  
Bike1 b=new Bike1();  
}  
}  
```


### OUTPUT
```sh
Bike is created
```

### Java Parameterized Constructor
A constructor which has a specific number of parameters is called a parameterized constructor.
### Why use the parameterized constructor?
The parameterized constructor is used to provide different values to distinct objects. However, you can provide the same values also.


### Example of parameterized constructor
In this example, we have created the constructor of Student class that have two parameters. We can have any number of parameters in the constructor.

```sh
1.	class Student4
2.	{  
3.	    int id;  
4.	    String name;  
5.	    //creating a parameterized constructor  
6.	    Student4(int i,String n)
7.	{  
8.	    id = i;  
9.	    name = n;  
  }  
    void display()
{
System.out.println(id+" "+name);
}  
   
    public static void main(String args[])
{  
   //creating objects and passing values  
    Student4 s1 = new Student4(111,"Karan");  
    Student4 s2 = new Student4(222,"Aryan");  
   //calling method to display the values of object  
    s1.display();  
    s2.display();  
  }  
}  
```

### OUTPUT
```sh
111 Karan
222 Aryan
```

