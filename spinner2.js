const loop = 5;

for (let i = 0; i < loop; i++) {
  setTimeout(() => process.stdout.write('\r|   '), 100 + (i * 800));
  setTimeout(() => process.stdout.write('\r/   '), 300 + (i * 800));
  setTimeout(() => process.stdout.write('\r-   '), 500 + (i * 800));
  setTimeout(() => process.stdout.write('\r\\   '), 700 + (i * 800));
}

// print new line after loop
setTimeout(() => /* New line */ process.stdout.write('\n'), 700 + ((loop - 1) * 800));

// Alternative solution by try putting the characters in an array?