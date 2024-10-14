// O(n^2) i.e O(n to the power 2) indiactes that the algorithm's execution time grows quadratically with the size of the input(n)

function findPairs(arr) {
  // Here we have a nested loop(a loop inside another loop).Well, this process is known as O(n^2)

  //   O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  //   Supposen we have one more loop and this one is O(n) since we r just itirating through the data here :

  //   O(n)
  for (let k = 0; k < arr.length; k++) {
    console.log("-------", arr[k]);
  }

  //   If we combine all the "O" operations, it becomes O(n^2+n)
  // O(n^2) is a Dominant term/operation cause it takes more time
  //   O(n) is a Non-Dominent term
  // So we remove the Non-Dominent Term and we r only left with O(n^2)
  //   This way we simplify our bigO
}
const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);
