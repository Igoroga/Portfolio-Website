const epic = new Intl.Collator(undefined,
    {numeric:true}).compare;
console.log(['afsafaf12', 'dads22', 'fea2' , 'eqw4', '314dasd'].sort(epic))


const collator = new Intl.Collator().compare;
["a", "z", "A", "Z"].sort(collator)

console.log(["a", "z", "A", "Z"].sort(collator))


const filenameOrder = new Intl. Collator (undefined,
    {numeric: true }).compare;

    console.log(['afsafaf12', 'dads22', 'fea2' , 'eqw4', '314dasd'].sort(filenameOrder))
