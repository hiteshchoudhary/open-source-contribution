import java.util.Scanner;

public class printReverse {
    public static void main(String[] args) {
         Scanner in = new Scanner(System.in);
        System.out.println("Enter ur string:");
        String s = in.nextLine();
        StringBuilder sb= new StringBuilder();
        for(int i=s.length()-1;i>=0;i--){
            sb.append(s.charAt(i));

        }
        // StringBuilder also has a built in method reverse() for reversing the String 
        System.out.println("Reverse:"+sb);
    }
}
