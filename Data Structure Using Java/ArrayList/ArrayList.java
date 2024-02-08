public class ArrayList {
    private static final int DEFAULT_ARRAY_SIZE = 5;
    private int[] array;
    private int index;

    public ArrayList() {
        this.array = new int[DEFAULT_ARRAY_SIZE];
        this.index = 0;
    }

    public void insert(int val) {
        if (index == array.length) {
            resizeArray();
        }
        array[index++] = val;
    }

    public void insert(int val, int indexPos) {
        if (indexPos < 0 || indexPos > index) {
            System.out.println("Array Index Out of Bound Exception");
            return;
        }
        if (index == array.length) {
            resizeArray();
        }
        for (int i = index; i > indexPos; i--) {
            array[i] = array[i - 1];
        }
        array[indexPos] = val;
        index++;
    }

    private void resizeArray() {
        int newSize = array.length * 2;
        int[] newArray = new int[newSize];
        System.arraycopy(array, 0, newArray, 0, index);
        array = newArray;
    }

    public void remove(int indexPos) {
        if (indexPos < 0 || indexPos >= index) {
            System.out.println("Array Index Out of Bound Exception");
            return;
        }
        for (int i = indexPos; i < index - 1; i++) {
            array[i] = array[i + 1];
        }
        index--;
    }
    public int size() {
        return index;
    }
    public void show() {
        System.out.print("[");
        for (int i = 0; i < index; i++) {
            System.out.print(array[i]);
            if (i == index - 1) {
                System.out.print("]");
            } else {
                System.out.print(", ");
            }
        }
        System.out.println();
    }

    public void sort() {
        for (int i = 0; i < index - 1; i++) {
            for (int j = 0; j < index - 1; j++) {
                if (array[j] > array[j+1]){
                    int temp = array[j+1];
                    array[j+1] = array[j];
                    array[j] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        ArrayList arr = new ArrayList();
        arr.insert(10);
        arr.insert(50);
        arr.insert(20);
        arr.insert(40);
        arr.insert(60);
        arr.insert(30);
        arr.insert(30,3);
        arr.sort();
        arr.size();
        arr.show();
    }
}

