## сходный код: Тестирование алгоритмов

```javascript
const principal = 100000; const rate = 12; const term = 180;

console.log("1. ростые ACT/ACT:", calculateCredit(principal, rate, term, 'ACT/ACT', false));
console.log("2. ростые ACT/360:", calculateCredit(principal, rate, term, 'ACT/360', false));
console.log("3. ростые 30/360: ", calculateCredit(principal, rate, term, '30/360', false));

console.log("4. Сложные ACT/ACT:", calculateCredit(principal, rate, term, 'ACT/ACT', true));
console.log("5. Сложные ACT/360:", calculateCredit(principal, rate, term, 'ACT/360', true));
console.log("6. Сложные 30/360: ", calculateCredit(principal, rate, term, '30/360', true));
```
