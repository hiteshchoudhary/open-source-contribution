package Assignmentall50;

import java.util.Collections;
import java.util.ArrayList;
import java.util.Scanner;

public class p21 {

    public static void main(String[] args) {

        Scanner faaiz = new Scanner(System.in);
        ArrayList<String> colors = new ArrayList<>();
        colors.add("Red");
        colors.add("Black");
        colors.add("Green");
        colors.add("Yellow");

        for (int i = 0; i < colors.size(); i++) {
            System.out.println(colors.get(i));
        }

        System.out.println("List of operations:");
        System.out.println("1:Add color");
        System.out.println("2:Sort Colors");
        System.out.print("Select operation to perform:");

        int f = faaiz.nextInt();

        switch (f) {
            case (1):
                System.out.print("Enter the name of color you want to add:");
                String cl = faaiz.next();
                colors.add(cl);
                System.out.println("List of Colors");
                for (int i = 0; i < colors.size(); i++) {
                    System.out.println(colors.get(i));
                }

                break;

            case (2):
                Collections.sort(colors);
                for (int i = 0; i < colors.size(); i++) {
                    System.out.println(colors.get(i));
                }
                break;
        }
    }
}
