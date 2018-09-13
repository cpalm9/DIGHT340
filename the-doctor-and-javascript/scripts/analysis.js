// Dr Who Actors console group start
console.groupCollapsed('Dr Who Actors');
  for(actor of actors){
    console.table(actor)
  }
console.groupEnd();

// Array.map()
console.groupCollapsed('Array.map()');
  actors.map(actor => {
    console.table(actor);
  });
console.groupEnd();

console.groupCollapsed('Array.map() :: Full Name');
  actors.map(actor => console.log(`Full Name: ${actor.first_name} ${actor.last_name}`));
console.groupEnd();

// Array.filter()
console.groupCollapsed('Classic Era');
  const classicEra = actors.filter(actor => {
    return actor.tenure_start < 2005
  });
  console.table(classicEra);
console.groupEnd();

console.groupCollapsed('Modern Era');
  const modernEra = actors.filter(actor => {
    return actor.tenure_start >= 2005
  });
  console.table(modernEra);
console.groupEnd();

// sort the array
console.groupCollapsed('Sorted Array by length of tenure');
  const lengthOfTenure = actors.sort((a, b) => {
    let lastDoctor = ((a.tenure_end - a.tenure_start) <= 0 )? 1 : a.tenure_end - a.tenure_start;
    let nextDoctor = ((b.tenure_end - b.tenure_start) <= 0 )? 1 : b.tenure_end - b.tenure_start;

    a.years = lastDoctor;
    b.years = nextDoctor;

    return (lastDoctor > nextDoctor ? -1 : 1);
  }).map(actor => {
    return `${actor.first_name} ${actor.last_name} [${actor.years}]`
  });
  console.table(lengthOfTenure);
console.groupEnd();

// Sort based on when they first appeared
console.groupCollapsed('Sort by first appearance');
  const firstAppearance = actors.sort((a,b) => {
    let lDoctor = a.tenure_start;
    let nDoctor = b.tenure_start;

    return (lDoctor > nDoctor ? -1 : 1);
  });
  console.table(firstAppearance);
console.groupEnd();

// Sort based on last name
console.groupCollapsed('Sort by last name');
  const lastNames = actors.sort((a,b) => {
    let lastDoctorName = a.last_name;
    let nextDoctorName = b.last_name;

    return (lastDoctorName < nextDoctorName ? -1 : 1);
  });
  console.table(lastNames);
console.groupEnd();

// .map() movie ratings
console.groupCollapsed('Movie ratings map()');
  topRated.map(movie => console.log(`${movie.title} [${movie.actor}]`))
console.groupEnd();