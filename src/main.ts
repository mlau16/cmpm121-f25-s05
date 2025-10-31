// ===== CMPM 121 Refactored Counter =====

// ===== CONSTANTS ======
const IDS = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
  counter: "counter",
};

const COLORS = {
  even: "lightblue",
  odd: "pink",
};

const TITLE = "CMPM 121 Project";

// ===== COUNTER STATE =====
const state = { count: 0 };

// ===== UI SETUP =====
function setupUI() {
  document.body.innerHTML = `
    <h1>${TITLE}</h1>
    <p>Counter: <span id="${IDS.counter}">0</span></p>
    <button id="${IDS.increment}">Click Me!</button>
    <button id="${IDS.decrement}">Decrement</button>
    <button id="${IDS.reset}">Reset</button>
  `;
}

function updateUI() {
  const counterElement = document.getElementById(IDS.counter);
  if (!counterElement) return;
  counterElement.textContent = String(state.count);
  document.title = `Clicked ${state.count}`;
  document.body.style.backgroundColor = state.count % 2 === 0
    ? COLORS.even
    : COLORS.odd;
}

// ===== EVENT HANDLERS =====
function addEventListeners(): void {
  document.getElementById(IDS.increment)?.addEventListener("click", () => {
    state.count++;
    updateUI();
  });

  document.getElementById(IDS.decrement)?.addEventListener("click", () => {
    state.count--;
    updateUI();
  });

  document.getElementById(IDS.reset)?.addEventListener("click", () => {
    state.count = 0;
    updateUI();
  });
}

// ===== START APP =====
function start(): void {
  setupUI();
  addEventListeners();
  updateUI();
}
start();
