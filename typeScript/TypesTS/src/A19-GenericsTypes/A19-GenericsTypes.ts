const array = [1, 2, 3];

console.log(
  array.filter((val) => {
    return val < 5;
  }),
);

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

meuFilter(array, (val) => {
  return val < 5;
});
