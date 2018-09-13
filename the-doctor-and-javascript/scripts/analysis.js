// Dr Who Actors console group start
console.groupCollapsed('Dr Who Actors');
for(actor of actors){
  console.table(actor)
}
// Dr Who Actors console group end
console.groupEnd();

console.groupCollapsed('Array.map()');
actors.map(actor => {
  console.table(actor);
})
console.groupEnd();
