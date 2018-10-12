import java.util.*;

public class Solution {

    public static boolean canWin(int leap, int[] game,int position) {
        // Return true if you can win the game; otherwise, return false.
        if(position<0||game[position]==1)
        {
            return false;
        }
        if(position+leap>=game.length||position+1>=game.length)
        {
            return true;
        }
        game[position]=1;
        return (canWin(leap,game,position+leap)||canWin(leap,game,position+1)||canWin(leap,game,position-1));
      
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int q = scan.nextInt();
        while (q-- > 0) {
            int n = scan.nextInt();
            int leap = scan.nextInt();
            
            int[] game = new int[n];
            for (int i = 0; i < n; i++) {
                game[i] = scan.nextInt();
            }
            int position=0;
            System.out.println( (canWin(leap, game,position)) ? "YES" : "NO" );
        }
        scan.close();
    }
}