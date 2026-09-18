## рограмма расчета кредита (6 вариантов)

```javascript
// асчет по 3 практикам, для простых и сложных ставок от 30 дней до 10 лет
function calculateCredit(pv, rate, days, practice, isCompound) {
    let T = (practice === 'ACT/ACT') ? 365 : 360; 
    let n = days / T;
    let i = rate / 100;
    let fv = 0;

    if (!isCompound) {
        fv = pv * (1 + n * i);
    } else {
        fv = pv * Math.pow((1 + i), n);
    }
    
    return {
        initial: pv.toFixed(2),
        payable: fv.toFixed(2),
        interest: (fv - pv).toFixed(2)
    };
}
```
