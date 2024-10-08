import java.util.Scanner;

public class sumOfNumbersInString {
    public static void main(String[] args) {
       Scanner in = new Scanner(System.in);
        System.out.println("Enter ur string");
        String s = in.nextLine();
        int sum=0;
        for(int i=0;i<s.length();i++){
            if(Character.isDigit(s.charAt(i))){
                sum+=s.charAt(i);

             }u
        }
        System.out.println("Sum of numbers is "+sum);
    }
}
