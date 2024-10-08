import java.util.Scanner;

public class checkPalindrome {
    public static void main(String[] args) {
         Scanner in = new Scanner(System.in);
        System.out.println("Enter ur string");
        String s = in.nextLine();
        isPalindrome(s);
    }
    public static void isPalindrome(String str){
        int i=0,j=str.length()-1;
        while(i<=j){
            if(str.charAt(i)!=(str.charAt(j))){
                System.out.println("Given string is not a palindrome.");
                return;
        }
        i++;
        j--;

    }
    System.out.println("It is a palindrome");
}
    
}
