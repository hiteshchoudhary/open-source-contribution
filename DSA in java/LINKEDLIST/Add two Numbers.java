import java.util.* ;
import java.io.*; 
/****************************************************************

    Following is the class structure of the Node class:

    class LinkedListNode {
        int data;
        LinkedListNode next;
        
        public LinkedListNode(int data) {
            this.data = data;
        }
    }

*****************************************************************/


public class Solution {
    static LinkedListNode addTwoNumbers(LinkedListNode head1, LinkedListNode head2) {
        // LinkedListNode sum = new LinkedListNode(0);
        // LinkedListNode head = sum;
        // int carry = 0;

        // while(head1 != null && head2 != null) {
        //     int result = head1.data + head2.data + carry;
        //     carry = result / 10;
        //     sum.next = new LinkedListNode(result % 10);

        //     sum = sum.next;
        //     head1 = head1.next;
        //     head2 = head2.next;
        // }

        // while(head1 != null) {
        //     int result = head1.data + carry;
        //     carry = result / 10;
        //     sum.next = new LinkedListNode(result % 10);

        //     sum = sum.next;
        //     head1 = head1.next;
        // }
        // while(head2 != null) {
        //     int result = head2.data + carry;
        //     carry = result / 10;
        //     sum.next = new LinkedListNode(result % 10);

        //     sum = sum.next;
        //     head2 = head2.next;
        // }

        // if(carry != 0) {
        //     sum.next = new LinkedListNode(carry);
        // }

        // return head.next;


        LinkedListNode result = new LinkedListNode(0);
        LinkedListNode head = result;
        int carry = 0;

        while(head1 != null || head2 != null) {
            int sum = carry;

            if(head1 != null) {
                sum += head1.data;
                head1 = head1.next;
            }
            if(head2 != null) {
                sum += head2.data;
                head2 = head2.next;
            }

            carry = sum / 10;
            sum = sum % 10;
            result.next = new LinkedListNode(sum);
            result = result.next;
        }

        if(carry != 0) {
            result.next = new LinkedListNode(carry);
            result = result.next;
        }

        return head.next;
    }
}