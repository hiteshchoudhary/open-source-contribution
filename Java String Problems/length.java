public class length {
    public static void main(String[] args) {
        String  str = "Akash";
        int count=0;
        // for(int i=0;i<str.length();i++){
        //     count++;
        // }
        // System.out.println("Count is:"+count);
        for(char ch: str.toCharArray()){
            count++;
        }
        System.out.println("length is:"+count);
    }
    
}
