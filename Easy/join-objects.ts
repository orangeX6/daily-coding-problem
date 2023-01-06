type Data = {
  name: string;
  goals: number;
  assists: number;
  points: number;
  ppg?: number;
  pims?: number;
  bones?: number;
  ppa?: number;
};

const arr1: Data[] = [
  { name: 'Joe Brown', goals: 0, assists: 0, points: 0 },
  { name: 'Jim Bob', goals: 2, assists: 1, points: 3 },
  { name: 'Harry Styles', goals: 1, assists: 1, points: 2 },
  { name: 'Craig Mack', goals: 5, assists: 7, points: 12 },
  { name: 'Wés BÔS 🔥', goals: 5, assists: 7, points: 12 },
  { name: 'DOG', bones: 100000, goals: 5, assists: 7, points: 12 },
];
// prettier-ignore
const arr2: Data[] = [
    { name: 'Craig Mack', goals: 3, assists: 3, points: 6, ppg: 0, ppa: 0, pims: 0, },
    { name: 'Jim Bob', goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
    { name: 'Joe Brown', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
    { name: 'Harry Styles', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
  ];

function addItUp(...arraysOfData: Data[][]) {
  const goalsData = arraysOfData.flat();
  const goalsDataMap = new Map();
  goalsData.forEach((data: Data) => {
    if (goalsDataMap.has(data.name)) {
      for (let key in data) {
        const existingData = goalsDataMap.get(data.name);
        existingData[key] &&
          key !== 'name' &&
          (existingData[key] = existingData[key] + data[key as keyof Data]);
        goalsDataMap.set(data.name, { ...data, ...existingData });
      }
    } else goalsDataMap.set(data.name, data);
  });
  //   console.table(goalsData);

  return [...goalsDataMap.values()];
}

const result = addItUp(arr1, arr2);
console.table(result);
