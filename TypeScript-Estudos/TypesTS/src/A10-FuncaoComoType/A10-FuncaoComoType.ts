type MapStringCallback = (item: string) => string;
function mapString(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];
  for (let i of array) {
    newArray.push(callbackfn(i));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapString(abc, (value) => {
  return value.toUpperCase();
});

export default 1;
