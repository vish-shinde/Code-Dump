import java.util.Scanner;

public class CountNums {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number:");
        int n = in.nextInt();
        System.out.println("Enter the number for which you want to check the occurences");
int num = in.nextInt();
        int count = 0;
        while(n > 0) {
            int rem =  n % 10;
            if (rem == num ) {
                count++;
            }
            n = n /10;
        }
//        System.out.println(");
        System.out.println("The Occurence of "+ num+ " is "+ count);
    }
}
