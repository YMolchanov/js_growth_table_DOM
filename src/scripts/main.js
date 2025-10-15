'use strict';

// write code here
const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

function getRowCount() {
  return table && table.rows ? table.rows.length : 0;
}

function getColCount() {
  if (!table || !table.rows || table.rows.length === 0) {
    return 0;
  }

  return table.rows[0].cells.length;
}

function updateButtons() {
  const rowCount = getRowCount();
  const colCount = getColCount();

  appendRowBtn.disabled = rowCount >= MAX;
  removeRowBtn.disabled = rowCount <= MIN;
  appendColBtn.disabled = colCount >= MAX;
  removeColBtn.disabled = colCount <= MIN;
}

appendRowBtn.addEventListener('click', () => {
  const rowCount = getRowCount();
  const colCount = getColCount();

  if (rowCount < MAX && colCount > 0) {
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
  }
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  const rowCount = getRowCount();

  if (rowCount > MIN) {
    table.deleteRow(rowCount - 1);
  }
  updateButtons();
});

appendColBtn.addEventListener('click', () => {
  const colCount = getColCount();
  const rowCount = getRowCount();

  if (colCount < MAX && rowCount > 0) {
    for (let i = 0; i < rowCount; i++) {
      const row = table.rows[i];

      row.insertCell();
    }
  }
  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  const colCount = getColCount();
  const rowCount = getRowCount();

  if (colCount > MIN && rowCount > 0) {
    for (let i = 0; i < rowCount; i++) {
      const row = table.rows[i];

      row.deleteCell(row.cells.length - 1);
    }
  }
  updateButtons();
});

// Ініціалізація стану кнопок
updateButtons();
