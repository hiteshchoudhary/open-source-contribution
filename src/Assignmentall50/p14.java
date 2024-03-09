
package Assignmentall50;


public class p14 {
     public static void main(String[] args) {
        
        int [][]matrixA = {{1,2,3},{4,5,6},{7,6,9}};
        int [][]matrixB = {{1,2,3},{4,5,6},{7,6,9}};
        
        
//   Simple For Loop
       for(int i=0;i<matrixA.length;i++){
             for(int j=0; j<matrixA.length; j++){
              System.out.print(matrixA[i][j]+ "  ");
             }
             System.out.print("   ");
             for(int j=0; j<matrixB.length; j++){
              System.out.print(matrixB[i][j]+ "  ");
             }

             System.out.print("  Sum:  ");
             for(int j=0; j<matrixB.length; j++){
              System.out.print(matrixB[i][j]+matrixA[i][j]+"  ");
             }
             System.out.println();
         }
    }
}
