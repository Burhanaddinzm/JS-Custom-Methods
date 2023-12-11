// const randomNumbers = [58, 75, -65, -15, -1, 83, -78, 51, 11, -60];

// randomNumbers.forEach((n, i, a) => console.log(n));
// const positiveNumbers = randomNumbers.filter((n) => n > 0
// )
// console.log(positiveNumbers);

// const negativeNumbers = randomNumbers.filter((n) => n < 0
// )
// console.log(negativeNumbers);

// const numbersDouble = randomNumbers.map((n) => n * 2)

// console.log(numbersDouble);

// console.log(randomNumbers.at(-1));

// console.log(randomNumbers.includes(58));

const athletes = [
  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];

//1
const worldRecord = athletes.filter((athlete) => {
  return athlete.hasWorldRecord;
});

console.log(worldRecord);
//2
const woman10Medals = athletes.filter((athlete) => {
  return athlete.hasWorldRecord && athlete.gender === "Female";
});

console.log(woman10Medals);
//3
const athleteNames = athletes.map((athlete) => {
  return athlete.name;
});

console.log(athleteNames);
//4
const athleteCountryName = athletes.map((athlete) => {
  return { name: athlete.name, country: athlete.country };
});

console.log(athleteCountryName);
//5
const medals = athletes.map((athlete) => {
  return athlete.totalMedals;
});

const totalMedals = medals.reduce((n, athlete) => {
  return (n += athlete);
});

console.log(totalMedals);
//6
const sortedMedals = medals.sort((a, b) => a - b);

console.log(sortedMedals);
//7
const names = athletes.map((a) => {
  return a.name;
});
//8
const sortedNames = names.sort();

console.log(sortedNames);

//9
let hasWR;
const maleAthlete = "Usain Bolt";
for (const item of athletes) {
  if (item.name === maleAthlete && item.gender === "Male") {
    hasWR = item.hasWorldRecord;
    break;
  }
}

console.log(hasWR);
//10

const americanWR = athletes.filter((athlete) => {
  if (athlete.country === "United States" && athlete.hasWorldRecord) {
    return athlete;
  }
});

console.log(americanWR);
//11
const maleAthletes = athletes.filter ((athlete) => {
    return athlete.gender == "Male";
    }
);

const maleAthleteAges = maleAthletes.map((athlete) => {
    return athlete.age;
});

const maleAthleteAgeSum = maleAthleteAges.reduce((n,athlete) =>{
    return n += athlete;
});

const maleAthleteAgeAvg = maleAthleteAgeSum/maleAthletes.length;

console.log(maleAthleteAgeAvg);
//
