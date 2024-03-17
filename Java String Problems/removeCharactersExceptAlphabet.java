import java.util.Scanner;

public class removeCharactersExceptAlphabet {
    public static void main(String[] args) {
         Scanner in = new Scanner(System.in);
        System.out.println("Enter ur string");
        String str = in.nextLine();

        StringBuilder sb= new StringBuilder();
        String s= str.toLowerCase();
        for(int i=0;i<s.length()-1;i++){
            if(s.charAt(i)>='a'&&s.charAt(i)<='z'){

                sb.append(s.charAt(i));
            }
        }
        System.out.println("output:"+sb.toString());
    }
}
