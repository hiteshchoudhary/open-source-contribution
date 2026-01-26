import java.util.*;
public class insertion_sort_array {
    public static void insertion_sort(int array[]){
        for(int i =0;i<array.length-1;i++){
                int temp,index=i+1;
        // array[i+1] compare with all find its right place to insert and keep it in "index"
               temp = array[i+1] ;
            for(int j=0;j<=i;j++){
               if(temp<array[j]){
                   index = j;
                   break;            // break is most important in my loop otherwise index updated continuously.
               }
            }
            // first making place to insert the element at index position
            for(int k=i;k>=index;k--){
                array[k+1]=array[k];
            }
            // inserting
            array[index]= temp;
        }
    }
    // correct way to done insertion sort
    public static void insertion_2nd_method(int array[]){
        for(int i =0;i<array.length-1;i++){
            int temp=array[i+1];
            for(int j=i;j>=0;j--) {
                //push the elements till they are greater
                if (temp < array[j]) {
                 array[j+1]=array[j];
              array[j]= temp;
                }
            }
        }
    }

    public static void input_array(int array[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the elements of array:");
        for (int i = 0; i < array.length; i++) {
            array[i] = sc.nextInt();
        }
    }
    public static void output_array(int array[]){
        for(int i=0;i<array.length;i++){
            System.out.print(array[i]+" ");
        }
    }
    public static void main(String[] args){
        int array[] = new int[5];

        input_array(array);
     //   insertion_sort(array);
        insertion_2nd_method(array);
        output_array(array);

    }
}
