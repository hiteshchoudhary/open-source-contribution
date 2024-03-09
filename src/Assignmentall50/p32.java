
package Assignmentall50;

class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient funds");
        }
    }
}

public class p32 {
    public static void main(String[] args){
    
       BankAccount personal = new BankAccount();
       
       personal.deposit(5400000);
       
       System.out.println(personal.getBalance());
    }
}
