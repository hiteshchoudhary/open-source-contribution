
package Assignmentall50;

public class p27 {
    public static void main(String[] args) {
        char ch = 'e';
        char lowercaseCh = Character.toLowerCase(ch);
        
        if (lowercaseCh == 'a' || lowercaseCh == 'e' || lowercaseCh == 'i' || lowercaseCh == 'o' || lowercaseCh == 'u') {
            System.out.println(ch + " is a vowel");
        } else {
            System.out.println(ch + " is a consonant");
        }
    }
}
