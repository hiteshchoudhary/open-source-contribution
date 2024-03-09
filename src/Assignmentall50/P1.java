
package Assignmentall50;
import java.util.*;
abstract class CMS{
abstract public void Courses();
abstract public void Result();
public void Info(){
    System.out.println("Your Info");
}
}
class Student extends CMS{
 public void Courses(){
     System.out.println("Number of Courses =5");
 }
 public void Result(){
     System.out.println("Result Has been Uploaded");
 }
    public void Enroll(){
        System.out.println("Go and enroll");
    }
}
class Teachers extends CMS{
public void Courses(){
    System.out.println("YOu can choos whatever you want to teach");
}
public void Result(){
    System.out.println("Upload Result Here");
}
public void  TakeAttendance(){
            System.out.println("No. of student today");
}
}
public class P1 {
 public static void main(String []args){
  Student s= new Student();
  Teachers t= new Teachers();
  s.Info();
  t.Info();
  s.Courses();
  t.Courses();
  t.Result();
  s.Result();
  
  s.Enroll();
  t.TakeAttendance();
 }    
}

