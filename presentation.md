---
presentation:
  theme: white
  controls: true
  slideNumber: "c/t"
  center: true
  enableSpeakerNotes: true
  transition: "slide"
  navigationMode: "linear"
---

# Финансовая математика
### Методы анализа, наращения, дисконтирования и расчетов

Выполнил: Студент  
Дата сдачи: 01.06.2026 г.

---

## Раздел 1: Введение и дефиниции

**Финансовая математика** — это раздел прикладной математики, изучающий математические методы анализа финансовых операций, коммерческих расчетов и инвестиционных решений.

* **Предмет изучения:** изменение стоимости денежных средств во времени.
* **Ключевые факторы:** процентные ставки, временные интервалы, инфляционное давление и сопутствующие риски.

---

## Раздел 2: Простые процентные ставки

### Формулы простых процентов

При начислении простых процентов база остается неизменной:

* **Формула наращения (Будущая стоимость):**  
  $FV = PV \cdot (1 + n \cdot i)$

* **Формула дисконтирования (Текущая стоимость):**  
  $PV = \frac{FV}{1 + n \cdot i}$

*Где: $PV$ — исходная сумма, $FV$ — наращенный капитал, $i$ — годовая ставка, $n$ — период в годах ($t/T$).*

---

## 3 практики начисления процентов

При периоде операции $n < 1$ года применяются три мировых стандарта расчетов временной базы:

1. **ACT/ACT (Английская практика):** Точные проценты с точным числом дней. $T = 365$. Дни $t$ берутся строго по календарю.
2. **ACT/360 (Французская практика):** Обыкновенные проценты с точным числом дней. $T = 360$. Дни $t$ — по календарю.
3. **30/360 (Германская практика):** Обыкновенные проценты с приближенным числом дней. $T = 360$. Каждый полный месяц принимается равным строго 30 дням.

---

## Простые проценты: Наращение (Варианты 1-3)

* **Вариант 1 (ACT/ACT):** Вклад 100 000.00 руб., срок 73 дня, ставка 10%.  
  $FV = 100000.00 \cdot (1 + \frac{73}{365} \cdot 0.10) = 102000.00 \text{ руб.}$
* **Вариант 2 (ACT/360):** Кредит 100 000.00 руб., срок 90 дней, ставка 12%.  
  $FV = 100000.00 \cdot (1 + \frac{90}{360} \cdot 0.12) = 103000.00 \text{ руб.}$
* **Вариант 3 (30/360):** Займ 50 000.00 руб., 3 полных месяца (90 дней), ставка 8%.  
  $FV = 50000.00 \cdot (1 + \frac{90}{360} \cdot 0.08) = 51000.00 \text{ руб.}$

---

## Простые проценты: Дисконтирование (Варианты 4-6)

* **Вариант 4 (ACT/ACT):** Требуется получить 216 000.00 руб. через 146 дней при 20%.  
  $PV = \frac{216000.00}{1 + \frac{146}{365} \cdot 0.20} = 200000.00 \text{ руб.}$
* **Вариант 5 (ACT/360):** Вексель на 105 000.00 руб. со сроком 60 дней, дисконт 30%.  
  $PV = \frac{105000.00}{1 + \frac{60}{360} \cdot 0.30} = 100000.00 \text{ руб.}$
* **Вариант 6 (30/360):** Платёж 104 000.00 руб. через 120 дней при ставке 12%.  
  $PV = \frac{104000.00}{1 + \frac{120}{360} \cdot 0.12} = 100000.00 \text{ руб.}$

---

## Раздел 3: Сложные процентные ставки

### Формулы сложных процентов

При капитализации проценты в каждом новом периоде начисляются на сумму, включающую ранее начисленные проценты.

* **Формула наращения:**  
  $FV = PV \cdot (1 + i)^n$

* **Формула математического дисконтирования:**  
  $PV = \frac{FV}{(1 + i)^n}$

*Все финансовые результаты округляются до двух знаков после запятой.*

---

## Сложные проценты: Наращение (Варианты 7-9)

* **Вариант 7 (ACT/ACT):** Депозит 200 000.00 руб. на 2 года под 10% годовых.  
  $FV = 200000.00 \cdot (1 + 0.10)^2 = 242000.00 \text{ руб.}$
* **Вариант 8 (ACT/360):** Вклад 100 000.00 руб. на 180 дней под 10% сложных.  
  $FV = 100000.00 \cdot (1 + 0.10)^{\frac{180}{360}} = 104880.88 \text{ руб.}$
* **Вариант 9 (30/360):** Инвестиция 300 000.00 руб. на 1.25 года под 12%.  
  $FV = 300000.00 \cdot (1 + 0.12)^{1.25} = 345745.36 \text{ руб.}$

---

## Сложные проценты: Дисконтирование (Варианты 10-12)

* **Вариант 10 (ACT/ACT):** Целевой капитал 1 210 000.00 руб. через 2 года при 10%.  
  $PV = \frac{1210000.00}{(1 + 0.10)^2} = 1000000.00 \text{ руб.}$
* **Вариант 11 (ACT/360):** Сумма к получению 110 000.00 руб. через 90 дней под 41.22%.  
  $PV = \frac{110000.00}{(1 + 0.4122)^{\frac{90}{360}}} = 100000.00 \text{ руб.}$
* **Вариант 12 (30/360):** Требуется 105 000.00 руб. через 180 дней, сложная ставка 10.25%.  
  $PV = \frac{105000.00}{(1 + 0.1025)^{\frac{180}{360}}} = 100000.00 \text{ руб.}$

---

## Раздел 4: Программная реализация на JavaScript

### Интерактивная таблица номеров дней

<div style="text-align: center; margin-bottom: 10px;">
  <button onclick="buildHtmlTable()" style="padding: 10px 20px; font-size: 16px; font-weight: bold; background: #1d3557; color: white; border: none; border-radius: 4px; cursor: pointer;">Сгенерировать таблицу дней</button>
</div>
<div id="table-container" style="max-height: 380px; overflow-y: auto; font-size: 11px;"></div>

<script>
function daysInMonth(month) { return 32 - new Date(2023, month, 32).getDate(); }
function getDayNumbersData() {
    var result = [];
    for (var day = 1; day <= 31; day++) {
        var row = { "День": day }; var total = 0;
        for (var m = 0; m < 12; m++) {
            var mName = new Date(2023, m, 1).toLocaleString('ru', {month:'short'});
            row[mName] = (day <= daysInMonth(m)) ? (total + day) : "-";
            total += daysInMonth(m);
        }
        result.push(row);
    }
    return result;
}
function buildHtmlTable() {
    var data = getDayNumbersData();
    var months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
    var html = '<table style="width:100%; border-collapse:collapse; text-align:center; color:#2b2d42;"><thead style="background:#f1faee; font-weight:bold;"><tr><th style="border:1px solid #ddd; padding:3px; color:#1d3557;">Дн</th>';
    months.forEach(function(m) { html += '<th style="border:1px solid #ddd; padding:3px; color:#1d3557;">' + m + '</th>'; });
    html += '</tr></thead><tbody>';
    data.forEach(function(row) {
        html += '<tr><td style="border:1px solid #ddd; padding:2px; font-weight:bold; background:#f8f9fa;">' + row["День"] + '</td>';
        months.forEach(function(m) { html += '<td style="border:1px solid #ddd; padding:2px;">' + row[m] + '</td>'; });
        html += '</tr>';
    });
    html += '</tbody></table>';
    document.getElementById('table-container').innerHTML = html;
}
</script>

---

## Интерактивный калькулятор финансовых операций

<div style="font-size: 14px; background: #f8f9fa; padding: 15px; border-radius: 8px; max-width: 620px; margin: 0 auto; text-align: left; color:#2b2d42;">
  <div style="margin-bottom: 8px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Сумма (PV), руб:</label>
    <input type="number" id="calc-pv" value="100000" style="padding:5px; width:130px; border:1px solid #ccc; border-radius:3px;">
  </div>
  <div style="margin-bottom: 8px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Ставка (Rate), %:</label>
    <input type="number" id="calc-rate" value="12" step="0.01" style="padding:5px; width:130px; border:1px solid #ccc; border-radius:3px;">
  </div>
  <div style="margin-bottom: 8px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Срок (Days), дней:</label>
    <input type="number" id="calc-days" value="180" style="padding:5px; width:130px; border:1px solid #ccc; border-radius:3px;">
  </div>
  <div style="margin-bottom: 10px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Режим:</label>
    <select id="calc-mode" style="padding:5px; width:140px; border:1px solid #ccc; border-radius:3px;">
      <option value="both">Все 6 вариантов</option>
      <option value="simple">Только простые</option>
      <option value="compound">Только сложные</option>
    </select>
  </div>
  <button onclick="runInteractiveCalc()" style="width:100%; padding:8px; font-size:15px; font-weight:bold; background:#1d3557; color:white; border:none; border-radius:4px; cursor:pointer;">Рассчитать</button>
</div>
<div id="calc-results" style="margin-top: 12px; font-size: 13px; text-align: left; max-width: 650px; margin-left: auto; margin-right: auto; color:#2b2d42;"></div>

<script>
function calculateCredit(pv, rate, days, practice, isCompound) {
    var T = (practice === 'ACT/ACT') ? 365 : 360;
    var n = days / T;
    var i = rate / 100;
    var fv = 0;
    if (!isCompound) {
        fv = pv * (1 + n * i);
    } else {
        fv = pv * Math.pow((1 + i), n);
    }
    return {
        payable: fv.toFixed(2),
        interest: (fv - pv).toFixed(2),
        n: n.toFixed(6),
        T: T
    };
}
function runInteractiveCalc() {
    var pv = parseFloat(document.getElementById('calc-pv').value);
    var rate = parseFloat(document.getElementById('calc-rate').value);
    var days = parseFloat(document.getElementById('calc-days').value);
    var mode = document.getElementById('calc-mode').value;

    if (isNaN(pv) || isNaN(rate) || isNaN(days) || pv <= 0 || rate <= 0 || days <= 0) {
        document.getElementById('calc-results').innerHTML = '<p style="color:#e63946; font-weight:bold;">Пожалуйста, введите корректные положительные значения.</p>';
        return;
    }

    var variants = [];
    if (mode === 'both' || mode === 'simple') {
        variants.push({label: '1. Простые ACT/ACT', data: calculateCredit(pv, rate, days, 'ACT/ACT', false)});
        variants.push({label: '2. Простые ACT/360', data: calculateCredit(pv, rate, days, 'ACT/360', false)});
        variants.push({label: '3. Простые 30/360', data: calculateCredit(pv, rate, days, '30/360', false)});
    }
    if (mode === 'both' || mode === 'compound') {
        variants.push({label: '4. Сложные ACT/ACT', data: calculateCredit(pv, rate, days, 'ACT/ACT', true)});
        variants.push({label: '5. Сложные ACT/360', data: calculateCredit(pv, rate, days, 'ACT/360', true)});
        variants.push({label: '6. Сложные 30/360', data: calculateCredit(pv, rate, days, '30/360', true)});
    }

    var html = '<table style="width:100%; border-collapse:collapse; text-align:center; font-size:12px;">';
    html += '<tr style="background:#1d3557; color:white; font-weight:bold;"><td style="padding:6px; border:1px solid #1d3557;">Вариант</td><td style="padding:6px; border:1px solid #1d3557;">n (лет)</td><td style="padding:6px; border:1px solid #1d3557;">T</td><td style="padding:6px; border:1px solid #1d3557;">FV (руб)</td><td style="padding:6px; border:1px solid #1d3557;">Проценты (руб)</td></tr>';
    var bgColors = ['#f8f9fa', '#ffffff'];
    variants.forEach(function(v, idx) {
        html += '<tr style="background:' + bgColors[idx % 2] + ';">';
        html += '<td style="padding:5px; border:1px solid #ddd; text-align:left;">' + v.label + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + v.data.n + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + v.data.T + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd; font-weight:bold; color:#1d3557;">' + v.data.payable + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + v.data.interest + '</td>';
        html += '</tr>';
    });
    html += '</table>';
    html += '<p style="margin-top:8px; font-size:11px; color:#6c757d;">Формулы: Простые — FV = PV × (1 + n × i); Сложные — FV = PV × (1 + i)^n. Округление до 2 знаков.</p>';
    document.getElementById('calc-results').innerHTML = html;
}
</script>

---

## Интерактивный калькулятор дисконтирования

<div style="font-size: 14px; background: #f8f9fa; padding: 15px; border-radius: 8px; max-width: 620px; margin: 0 auto; text-align: left; color:#2b2d42;">
  <div style="margin-bottom: 8px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Будущая сумма (FV), руб:</label>
    <input type="number" id="disc-fv" value="100000" style="padding:5px; width:130px; border:1px solid #ccc; border-radius:3px;">
  </div>
  <div style="margin-bottom: 8px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Ставка (Rate), %:</label>
    <input type="number" id="disc-rate" value="12" step="0.01" style="padding:5px; width:130px; border:1px solid #ccc; border-radius:3px;">
  </div>
  <div style="margin-bottom: 8px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Срок (Days), дней:</label>
    <input type="number" id="disc-days" value="180" style="padding:5px; width:130px; border:1px solid #ccc; border-radius:3px;">
  </div>
  <div style="margin-bottom: 10px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Режим:</label>
    <select id="disc-mode" style="padding:5px; width:140px; border:1px solid #ccc; border-radius:3px;">
      <option value="both">Все 6 вариантов</option>
      <option value="simple">Только простые</option>
      <option value="compound">Только сложные</option>
    </select>
  </div>
  <button onclick="runDiscountCalc()" style="width:100%; padding:8px; font-size:15px; font-weight:bold; background:#1d3557; color:white; border:none; border-radius:4px; cursor:pointer;">Рассчитать PV</button>
</div>
<div id="disc-results" style="margin-top: 12px; font-size: 13px; text-align: left; max-width: 650px; margin-left: auto; margin-right: auto; color:#2b2d42;"></div>

<script>
function calculateDiscount(fv, rate, days, practice, isCompound) {
    var T = (practice === 'ACT/ACT') ? 365 : 360;
    var n = days / T;
    var i = rate / 100;
    var pv = 0;
    if (!isCompound) {
        pv = fv / (1 + n * i);
    } else {
        pv = fv / Math.pow((1 + i), n);
    }
    return {
        present: pv.toFixed(2),
        discount: (fv - pv).toFixed(2),
        n: n.toFixed(6),
        T: T
    };
}
function runDiscountCalc() {
    var fv = parseFloat(document.getElementById('disc-fv').value);
    var rate = parseFloat(document.getElementById('disc-rate').value);
    var days = parseFloat(document.getElementById('disc-days').value);
    var mode = document.getElementById('disc-mode').value;

    if (isNaN(fv) || isNaN(rate) || isNaN(days) || fv <= 0 || rate <= 0 || days <= 0) {
        document.getElementById('disc-results').innerHTML = '<p style="color:#e63946; font-weight:bold;">Пожалуйста, введите корректные положительные значения.</p>';
        return;
    }

    var variants = [];
    if (mode === 'both' || mode === 'simple') {
        variants.push({label: '1. Простые ACT/ACT', data: calculateDiscount(fv, rate, days, 'ACT/ACT', false)});
        variants.push({label: '2. Простые ACT/360', data: calculateDiscount(fv, rate, days, 'ACT/360', false)});
        variants.push({label: '3. Простые 30/360', data: calculateDiscount(fv, rate, days, '30/360', false)});
    }
    if (mode === 'both' || mode === 'compound') {
        variants.push({label: '4. Сложные ACT/ACT', data: calculateDiscount(fv, rate, days, 'ACT/ACT', true)});
        variants.push({label: '5. Сложные ACT/360', data: calculateDiscount(fv, rate, days, 'ACT/360', true)});
        variants.push({label: '6. Сложные 30/360', data: calculateDiscount(fv, rate, days, '30/360', true)});
    }

    var html = '<table style="width:100%; border-collapse:collapse; text-align:center; font-size:12px;">';
    html += '<tr style="background:#1d3557; color:white; font-weight:bold;"><td style="padding:6px; border:1px solid #1d3557;">Вариант</td><td style="padding:6px; border:1px solid #1d3557;">n (лет)</td><td style="padding:6px; border:1px solid #1d3557;">T</td><td style="padding:6px; border:1px solid #1d3557;">PV (руб)</td><td style="padding:6px; border:1px solid #1d3557;">Дисконт (руб)</td></tr>';
    var bgColors = ['#f8f9fa', '#ffffff'];
    variants.forEach(function(v, idx) {
        html += '<tr style="background:' + bgColors[idx % 2] + ';">';
        html += '<td style="padding:5px; border:1px solid #ddd; text-align:left;">' + v.label + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + v.data.n + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + v.data.T + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd; font-weight:bold; color:#1d3557;">' + v.data.present + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + v.data.discount + '</td>';
        html += '</tr>';
    });
    html += '</table>';
    html += '<p style="margin-top:8px; font-size:11px; color:#6c757d;">Формулы: Простые — PV = FV / (1 + n × i); Сложные — PV = FV / (1 + i)^n. Округление до 2 знаков.</p>';
    document.getElementById('disc-results').innerHTML = html;
}
</script>

---

## Интерактивный калькулятор переменных ставок

<div style="font-size: 14px; background: #f8f9fa; padding: 15px; border-radius: 8px; max-width: 650px; margin: 0 auto; text-align: left; color:#2b2d42;">
  <p style="margin-bottom:10px; font-size:13px; color:#6c757d;">Введите исходную сумму и до 5 периодов с разными ставками.</p>
  <div style="margin-bottom: 8px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Сумма (PV), руб:</label>
    <input type="number" id="var-pv" value="100000" style="padding:5px; width:130px; border:1px solid #ccc; border-radius:3px;">
  </div>
  <div id="var-periods" style="margin-top:10px;">
    <div style="margin-bottom:6px;">
      <input type="number" id="vp-n1" value="1" placeholder="лет" style="padding:4px; width:70px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <input type="number" id="vp-r1" value="20" placeholder="ставка %" step="0.01" style="padding:4px; width:90px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <span style="font-size:12px; color:#6c757d;">Период 1</span>
    </div>
    <div style="margin-bottom:6px;">
      <input type="number" id="vp-n2" value="0.5" placeholder="лет" style="padding:4px; width:70px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <input type="number" id="vp-r2" value="25" placeholder="ставка %" step="0.01" style="padding:4px; width:90px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <span style="font-size:12px; color:#6c757d;">Период 2</span>
    </div>
    <div style="margin-bottom:6px;">
      <input type="number" id="vp-n3" value="0.5" placeholder="лет" style="padding:4px; width:70px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <input type="number" id="vp-r3" value="30" placeholder="ставка %" step="0.01" style="padding:4px; width:90px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <span style="font-size:12px; color:#6c757d;">Период 3</span>
    </div>
    <div style="margin-bottom:6px;">
      <input type="number" id="vp-n4" value="0" placeholder="лет" style="padding:4px; width:70px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <input type="number" id="vp-r4" value="0" placeholder="ставка %" step="0.01" style="padding:4px; width:90px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <span style="font-size:12px; color:#6c757d;">Период 4 (0 — пропустить)</span>
    </div>
    <div style="margin-bottom:6px;">
      <input type="number" id="vp-n5" value="0" placeholder="лет" style="padding:4px; width:70px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <input type="number" id="vp-r5" value="0" placeholder="ставка %" step="0.01" style="padding:4px; width:90px; border:1px solid #ccc; border-radius:3px; margin-right:6px;">
      <span style="font-size:12px; color:#6c757d;">Период 5 (0 — пропустить)</span>
    </div>
  </div>
  <div style="margin-top:10px;">
    <label style="display:inline-block; width:170px; font-weight:bold;">Тип процентов:</label>
    <select id="var-type" style="padding:5px; width:140px; border:1px solid #ccc; border-radius:3px;">
      <option value="simple">Простые</option>
      <option value="compound">Сложные</option>
    </select>
  </div>
  <button onclick="runVarRateCalc()" style="width:100%; padding:8px; font-size:15px; font-weight:bold; background:#1d3557; color:white; border:none; border-radius:4px; cursor:pointer; margin-top:10px;">Рассчитать множитель наращения</button>
</div>
<div id="var-results" style="margin-top: 12px; font-size: 13px; text-align: left; max-width: 650px; margin-left: auto; margin-right: auto; color:#2b2d42;"></div>

<script>
function runVarRateCalc() {
    var pv = parseFloat(document.getElementById('var-pv').value);
    var type = document.getElementById('var-type').value;
    if (isNaN(pv) || pv <= 0) {
        document.getElementById('var-results').innerHTML = '<p style="color:#e63946; font-weight:bold;">Введите корректную сумму.</p>';
        return;
    }
    var periods = [];
    for (var k = 1; k <= 5; k++) {
        var n = parseFloat(document.getElementById('vp-n' + k).value);
        var r = parseFloat(document.getElementById('vp-r' + k).value);
        if (!isNaN(n) && !isNaN(r) && n > 0) {
            periods.push({n: n, rate: r});
        }
    }
    if (periods.length === 0) {
        document.getElementById('var-results').innerHTML = '<p style="color:#e63946; font-weight:bold;">Заполните хотя бы один период с положительной длительностью.</p>';
        return;
    }
    var html = '<table style="width:100%; border-collapse:collapse; text-align:center; font-size:12px;">';
    html += '<tr style="background:#1d3557; color:white; font-weight:bold;"><td style="padding:6px; border:1px solid #1d3557;">№</td><td style="padding:6px; border:1px solid #1d3557;">n (лет)</td><td style="padding:6px; border:1px solid #1d3557;">Ставка, %</td><td style="padding:6px; border:1px solid #1d3557;">n × i</td></tr>';
    var K = 0;
    var detail = '';
    periods.forEach(function(p, idx) {
        var i = p.rate / 100;
        var contrib = p.n * i;
        if (type === 'simple') {
            K += contrib;
        }
        html += '<tr style="background:' + (idx % 2 ? '#ffffff' : '#f8f9fa') + ';">';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + (idx + 1) + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + p.n + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + p.rate + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + contrib.toFixed(6) + '</td>';
        html += '</tr>';
    });
    if (type === 'simple') {
        var multiplier = 1 + K;
        var fv = pv * multiplier;
        html += '</table>';
        detail = '<p style="margin-top:10px; font-size:14px;"><b>Множитель наращения K = 1 + ' + K.toFixed(6) + ' = ' + multiplier.toFixed(6) + '</b></p>';
        detail += '<p style="font-size:14px;"><b>FV = ' + pv.toFixed(2) + ' × ' + multiplier.toFixed(6) + ' = ' + fv.toFixed(2) + ' руб.</b></p>';
        detail += '<p style="font-size:12px; color:#6c757d;">Формула: FV = PV × (1 + Σ nₖ × iₖ)</p>';
    } else {
        var multiplierC = 1;
        var detailC = '<p style="margin-top:10px; font-size:13px;">Расчёт по периодам:</p>';
        periods.forEach(function(p, idx) {
            var i = p.rate / 100;
            multiplierC *= Math.pow(1 + i, p.n);
            detailC += '<p style="font-size:12px;">Период ' + (idx+1) + ': (1 + ' + i + ')^' + p.n + ' → множитель = ' + multiplierC.toFixed(6) + '</p>';
        });
        var fvC = pv * multiplierC;
        html += '</table>';
        detail = detailC;
        detail += '<p style="margin-top:8px; font-size:14px;"><b>Множитель K = ' + multiplierC.toFixed(6) + '</b></p>';
        detail += '<p style="font-size:14px;"><b>FV = ' + pv.toFixed(2) + ' × ' + multiplierC.toFixed(6) + ' = ' + fvC.toFixed(2) + ' руб.</b></p>';
        detail += '<p style="font-size:12px; color:#6c757d;">Формула: FV = PV × Π(1 + iₖ)^nₖ</p>';
    }
    document.getElementById('var-results').innerHTML = html + detail;
}
</script>

---

## Исходный код: Тестирование алгоритмов

```javascript
// Функция расчёта для всех практик
function calculateCredit(pv, rate, days, practice, isCompound) {
    var T = (practice === 'ACT/ACT') ? 365 : 360;
    var n = days / T;
    var i = rate / 100;
    var fv = isCompound
        ? pv * Math.pow(1 + i, n)
        : pv * (1 + n * i);
    return { FV: fv.toFixed(2), interest: (fv - pv).toFixed(2) };
}

// Тестовые вызовы
var principal = 100000;
var rate = 12;
var term = 180;

console.log("1. Простые ACT/ACT:", calculateCredit(principal, rate, term, 'ACT/ACT', false));
console.log("2. Простые ACT/360:", calculateCredit(principal, rate, term, 'ACT/360', false));
console.log("3. Простые 30/360:", calculateCredit(principal, rate, term, '30/360', false));
console.log("4. Сложные ACT/ACT:", calculateCredit(principal, rate, term, 'ACT/ACT', true));
console.log("5. Сложные ACT/360:", calculateCredit(principal, rate, term, 'ACT/360', true));
console.log("6. Сложные 30/360:", calculateCredit(principal, rate, term, '30/360', true));
