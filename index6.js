name1 = " Rehan " + "\n" + " Qurashi";
console.log(name1);
name2 = "Rehan " + "\t" + " Qurashi";
console.log(name2);
// using regex to auto delete all spaces
console.log(name1.trim().replaceAll(/\s/g, ''));
console.log(name2.trim().replaceAll(/\s/g, ''));