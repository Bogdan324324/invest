## Таблица порядковых номеров дней (евисокосный год)

```javascript
// ункция генерирует массив объектов без учета високосных лет (2023 год)
function daysInMonth(month) { return 32 - new Date(2023, month, 32).getDate(); }

function getDayNumbersData() {
    let result = [];
    for (let day = 1; day <= 31; day++) {
        let row = { "ень": day }; let total = 0;
        for (let m = 0; m < 12; m++) {
            let mName = new Date(2023, m, 1).toLocaleString('ru', {month:'short'});
            row[mName] = (day <= daysInMonth(m)) ? (total + day) : "-";
            total += daysInMonth(m);
        }
        result.push(row);
    }
    return result;
}
```
