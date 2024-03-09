
package Assignmentall50;
import java.util.ArrayList;


public class p19 {
    public static void main(String[] args) {
       
     ArrayList<String> colors=new ArrayList<>();
     colors.add("red");
     colors.add("Black");
     colors.add("Green");
     colors.add("Yellow");
     
     for(int i=0;i<colors.size();i++){
     System.out.println(colors.get(i));
         }
      System.out.println(colors.size());
      System.out.println(colors.get(2));
      colors.set(0, "Purple");
      colors.remove(3);
      System.out.println(colors);
      System.out.println(colors.size());
    }
}
