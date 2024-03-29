const balance = book => {
    book = book.replace(/[^a-z\d.\s]/gi, ``).split(`\n`).filter(Boolean);
    let original = +book.shift();
    let total = 0;
    book = book.map(val => `${val} Balance ${original - (total += +val.match(/\S+$/))}`.replace(/[\d.]+/g, (val, idx) => idx ? (+val).toFixed(2) : val));
    book.unshift(`Original Balance: ${original.toFixed(2)}`);
    book.push(`Total expense  ${total.toFixed(2)}`);
    book.push(`Average expense  ${(total / (book.length - 2)).toFixed(2)}`);
    return book.join(`\r\n`);
  };