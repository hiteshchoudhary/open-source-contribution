import java.util.Scanner;

public class removeVowel {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter ur string");
        String s = in.nextLine();
        removeVowel(s);
    }
    public static void removeVowel(String str1){
        StringBuilder sb = new StringBuilder();
        // String res="";
        String str=str1.toLowerCase();
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)!='a'&&str.charAt(i)!='e'&&str.charAt(i)!='i'&&str.charAt(i)!='o'&&str.charAt(i)!='u')
                // res=res+str.charAt(i); 
                sb.append(str.charAt(i));    
            }
            System.out.println("Output string:"+sb);
        }
        

    
}
