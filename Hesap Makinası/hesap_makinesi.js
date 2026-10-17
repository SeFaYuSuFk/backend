function islem(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':   
            return a * b;
        case '/':   
            if (b === 0) return 'Hata: Sıfıra bölme hatası';
            return a / b;
        default:
            return 'Hata: Geçersiz işlem';
    }
}   

const islemler = [
    { a: 10, b: 5, operator: '+' },
    { a: 10, b: 5, operator: '-' },
    { a: 10, b: 5, operator: '*' },
    { a: 10, b: 5, operator: '/' },
  
];

islemler.forEach(({ a, b, operator }) => {
    const sonuc = islem(a, b, operator);
    console.log(`${a} ${operator} ${b} = ${sonuc}`);
});

console.log(islem(10, 5, '+')); // 15
console.log(islem(10, 5, '-')); // 5
console.log(islem(10, 5, '*')); // 50
console.log(islem(10, 5, '/')); // 2
