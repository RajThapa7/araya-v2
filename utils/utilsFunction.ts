const mergeTwoArray = (arr1: any[], arr2: any[], key: string) => {
  const map = new Map();

  const arr3 = [...arr1, ...arr2];

  for (const obj of arr3) {
    if (!map.has(obj[key])) {
      // add
      map.set(obj[key], obj);
    } else {
      // update
      map.set(obj[key], {
        ...map.get(obj[key]),
        ...obj,
      });
    }
  }

  return Array.from(map, ([_, value]) => ({ ...value }));
};

export { mergeTwoArray };
