// TODO:


let doesAliceGoToTheParty: boolean | null;
let doesPeterGoToTheParty: boolean | null;
let doesDilanGoToTheParty: boolean | null;
// @ts-ignore
console.log(`Alice: ${doesAliceGoToTheParty}; Peter: ${doesPeterGoToTheParty}; Dilan: ${doesDilanGoToTheParty}`);

doesAliceGoToTheParty = true;
doesPeterGoToTheParty = false;
doesDilanGoToTheParty = null; // null here shows that we do not know real value (e.g. Dilan hasn't replied yet)
console.log(`Alice: ${doesAliceGoToTheParty}; Peter: ${doesPeterGoToTheParty}; Dilan: ${doesDilanGoToTheParty}`);