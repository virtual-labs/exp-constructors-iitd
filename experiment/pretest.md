## Pre Test

Q1. What is false about constructor?<br>
A  Constructors cannot be synchronized in Java<br>
B  Java does not provide default copy constructor<br>
**C  Constructor can have a return type**<br>
D  “this” and “super” can be used in a constructor<br>

Q2. What would be behavior if the constructor has a return type?<br>
**A  Compilation error**<br>
B  Runtime error<br>
C  Compilation and runs successfully<br>
D  Only String return type is allowed<br>

Q3. What is default accessibility modifier of a default constructor?<br>
A Public<br>
B Private<br>
**C Same as class accessibility modifier**<br>
D Default<br>

Q4. We can declare constructor as private?<br>
**A Yes**<br>
B No<br>


Q5. What is the output of the below Java program with constructors?<br>

```
public class Constructor2
{
  int count=10;
  Constructor2(int count)
  {
    System.out.println("Count=" + count);
  }

  public static void main(String[] args)
  {
    Constructor2 con = new Constructor2();
  }
}
```
A) Count=0<br>
B) Count=10 <br>
**C) Compiler error**<br>
D) None of the above<br>
