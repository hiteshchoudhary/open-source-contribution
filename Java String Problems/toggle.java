import java.util.Scanner;

public class toggle {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        
        System.out.println("Enter a String:");
        String str = in.nextLine();

        String res="";

        for(char c: str.toCharArray()){
            if(Character.isLowerCase(c)){
                res=res+Character.toUpperCase(c);
            }
            else{
                res=res+Character.toLowerCase(c);
            }
        }
        System.out.println("Result : "+res);
    }
    
}
