const PROFILE = {
  name: "Steve Hawkins",
  dob: "1975-04-07",
  weightLbs: 235,
  heightInches: 74,
  medication: "lisinopril-hctz 20-25 mg",
  fastStart: "18:30",
  fastEnd: "10:30",
  waterGoal: 3,
  proteinGoal: 170,
  carbGoal: 30,
  movementGoal: 45,
  stepsGoal: 8000,
  drinkLimit: 2,
};

const TASK_TEMPLATES = [
  {
    id: "hydrate",
    time: "06:45",
    title: "Hydrate before caffeine",
    instruction: "Drink 16 to 20 oz of water now. Start the day like you mean it.",
    category: "Hydration",
  },
  {
    id: "stand-start",
    time: "08:30",
    title: "Raise the desk",
    instruction: "Start work standing for 10 minutes. Do not melt into the chair immediately.",
    category: "Sit/Stand",
  },
  {
    id: "desk-reset-1",
    time: "09:30",
    title: "Desk reset",
    instruction: "Stand up and move for 10 minutes. Walk, stretch, or pace during a call.",
    category: "Sit/Stand",
  },
  {
    id: "breakfast",
    time: "10:30",
    title: "Break the fast",
    instruction: "Eat breakfast now. Protein first. Do not waste the eating window on junk.",
    category: "Meal",
  },
  {
    id: "desk-reset-2",
    time: "11:30",
    title: "Stand and reset",
    instruction: "Get upright and move for 10 minutes. Sitting all day is not neutral.",
    category: "Sit/Stand",
  },
  {
    id: "walk",
    time: "12:45",
    title: "Walk before lunch",
    instruction: "Take a brisk 15-minute walk. This is the easiest win of the day.",
    category: "Exercise",
  },
  {
    id: "lunch",
    time: "13:30",
    title: "Eat lunch",
    instruction: "Lunch now. Keep the carbs tight and the protein high.",
    category: "Meal",
  },
  {
    id: "desk-reset-3",
    time: "14:30",
    title: "Stand and move",
    instruction: "Another 10-minute desk reset. Use the standing desk or walk the floor.",
    category: "Sit/Stand",
  },
  {
    id: "mobility",
    time: "15:30",
    title: "Mobility and water",
    instruction: "Five minutes of mobility and another glass of water. Reset your body, not your excuses.",
    category: "Exercise",
  },
  {
    id: "snack",
    time: "16:00",
    title: "Snack only if planned",
    instruction: "If hunger is real, use a keto snack. If it is boredom, get up and move.",
    category: "Meal",
  },
  {
    id: "desk-reset-4",
    time: "16:30",
    title: "Final desk reset",
    instruction: "Stand up for 10 minutes and finish the work block without collapsing.",
    category: "Sit/Stand",
  },
  {
    id: "dinner",
    time: "18:00",
    title: "Eat dinner",
    instruction: "Dinner now. Keep it controlled so the fast starts clean.",
    category: "Meal",
  },
  {
    id: "fast-start",
    time: "18:30",
    title: "Close the kitchen",
    instruction: "Fasting starts now. No grazing, no drinks with calories, no exceptions.",
    category: "Fasting",
  },
  {
    id: "home-move",
    time: "20:00",
    title: "Home movement block",
    instruction: "Walk 15 to 20 minutes or do a quick bodyweight circuit before the night gets lazy.",
    category: "Exercise",
  },
];

const MEAL_LIBRARY = {
  breakfast: [
    {
      id: "breakfast-omelet",
      name: "Spinach cheddar omelet with avocado",
      note: "Three eggs, spinach, cheddar, and half an avocado. Heavy protein, low nonsense.",
      calories: 520,
      protein: 33,
      carbs: 7,
    },
    {
      id: "breakfast-scramble",
      name: "Turkey sausage egg scramble",
      note: "Eggs, turkey sausage, peppers, and salsa. Fast to make and still on plan.",
      calories: 470,
      protein: 35,
      carbs: 8,
    },
    {
      id: "breakfast-salmon",
      name: "Smoked salmon plate",
      note: "Smoked salmon, cucumber, cream cheese, and boiled eggs. Clean and filling.",
      calories: 430,
      protein: 34,
      carbs: 6,
    },
  ],
  lunch: [
    {
      id: "lunch-salad",
      name: "Chicken power salad",
      note: "Grilled chicken, romaine, cucumber, feta, olives, olive oil. Protein first, crunch second.",
      calories: 620,
      protein: 46,
      carbs: 10,
    },
    {
      id: "lunch-burger-bowl",
      name: "Burger bowl",
      note: "Beef patty, lettuce, pickles, cheddar, avocado, and mustard. Skip the bun and stay serious.",
      calories: 700,
      protein: 40,
      carbs: 11,
    },
    {
      id: "lunch-tuna",
      name: "Tuna lettuce boats",
      note: "Tuna, mayo, celery, lettuce, and a side of cucumbers. Fast, cold, effective.",
      calories: 480,
      protein: 38,
      carbs: 6,
    },
  ],
  dinner: [
    {
      id: "dinner-salmon",
      name: "Salmon with asparagus",
      note: "Salmon, asparagus, and butter. Finish the day like an adult.",
      calories: 640,
      protein: 45,
      carbs: 8,
    },
    {
      id: "dinner-steak",
      name: "Steak with cauliflower mash",
      note: "Steak, cauliflower mash, and greens. Heavy on protein, light on excuses.",
      calories: 720,
      protein: 50,
      carbs: 12,
    },
    {
      id: "dinner-taco",
      name: "Taco bowl",
      note: "Ground beef, lettuce, salsa, avocado, sour cream, and cheese. No chips. No shell.",
      calories: 680,
      protein: 42,
      carbs: 10,
    },
  ],
  snack: [
    {
      id: "snack-eggs",
      name: "Two eggs and cucumber",
      note: "Simple protein and crunch. Cheap hunger control.",
      calories: 180,
      protein: 13,
      carbs: 3,
    },
    {
      id: "snack-shake",
      name: "Low-carb protein shake",
      note: "Unsweetened shake when protein is behind and time is short.",
      calories: 190,
      protein: 30,
      carbs: 4,
    },
    {
      id: "snack-walnuts",
      name: "Walnuts and cheese",
      note: "Measured portion only. A snack is not a free-for-all.",
      calories: 230,
      protein: 10,
      carbs: 4,
    },
  ],
};

const DRINK_LIBRARY = [
  { id: "vodka-soda", name: "Vodka soda", calories: 100, carbs: 0, units: 1 },
  { id: "whiskey", name: "Whiskey neat", calories: 105, carbs: 0, units: 1 },
  { id: "dry-wine", name: "Dry wine", calories: 120, carbs: 4, units: 1 },
  { id: "light-beer", name: "Light beer", calories: 103, carbs: 6, units: 1 },
  { id: "low-carb-seltzer", name: "Low-carb seltzer", calories: 90, carbs: 2, units: 1 },
];

const OFFICE_MOVES = [
  {
    title: "Five-minute pace call",
    note: "Take the next call standing and pacing instead of sitting like a statue.",
  },
  {
    title: "Desk mobility circuit",
    note: "Ten arm circles, ten hip hinges, ten calf raises, and one slow minute of deep breathing.",
  },
  {
    title: "Chair squat block",
    note: "Ten chair squats every hour for three rounds. You do not need a gym for this.",
  },
  {
    title: "Hallway lap",
    note: "Walk the hallway or outside loop for ten minutes instead of opening another tab.",
  },
];

const HOME_MOVES = [
  {
    title: "20-minute brisk walk",
    note: "Keep the pace honest. You should breathe hard enough to know you are working.",
  },
  {
    title: "Quick bodyweight circuit",
    note: "Three rounds: 10 squats, 8 wall push-ups, 20 marching steps, 20-second plank.",
  },
  {
    title: "Stair block",
    note: "Ten minutes of stairs or incline walking. Short, sharp, effective.",
  },
  {
    title: "Mobility reset",
    note: "Hip flexor stretch, thoracic rotation, hamstring stretch, and shoulder opener for five minutes each.",
  },
];

const QUICK_MOVES = [
  {
    title: "Anywhere circuit A",
    note: "12 air squats, 8 incline push-ups, 20 marching steps, 20-second plank. No equipment. No excuse.",
  },
  {
    title: "Anywhere circuit B",
    note: "10 reverse lunges per side, 12 wall push-ups, 20 calf raises, 30 seconds fast marching.",
  },
  {
    title: "Desk-break circuit",
    note: "12 chair squats, 10 desk push-ups, 15 hip hinges, 20 shoulder circles, 20 seconds hard breathing reset.",
  },
  {
    title: "Hotel-room circuit",
    note: "10 squats, 10 glute bridges, 20 mountain climbers, 20-second wall sit. Repeat until the timer ends.",
  },
  {
    title: "Low-impact reset",
    note: "30 seconds marching, 10 sit-to-stands, 10 countertop push-ups, 30 seconds step jacks.",
  },
];

const KETO_POSITIVE_KEYWORDS = [
  "egg",
  "eggs",
  "omelet",
  "steak",
  "salmon",
  "tuna",
  "sardine",
  "burger",
  "beef",
  "chicken",
  "turkey",
  "sausage",
  "bacon",
  "ham",
  "pork",
  "shrimp",
  "brisket",
  "ribs",
  "ribeye",
  "sirloin",
  "salad",
  "cobb",
  "caesar",
  "lettuce wrap",
  "bunless",
  "avocado",
  "cheese",
  "broccoli",
  "asparagus",
  "cauliflower",
  "zucchini",
  "spinach",
  "fajita",
  "skewer",
  "kebab",
  "wings",
  "rotisserie",
  "meatballs",
  "lamb",
  "roast",
  "gyro",
  "protein bowl",
];

const KETO_NEGATIVE_KEYWORDS = [
  "bun",
  "bread",
  "tortilla",
  "rice",
  "fries",
  "potato",
  "hash brown",
  "toast",
  "pancake",
  "waffle",
  "oatmeal",
  "pasta",
  "noodle",
  "pizza",
  "chips",
  "nachos",
  "dessert",
  "cake",
  "cookie",
  "brownie",
  "ice cream",
  "milkshake",
  "sundae",
  "syrup",
  "honey",
  "teriyaki",
  "glazed",
  "sweet",
  "maple",
  "donut",
  "biscuit",
  "croissant",
  "wrap",
  "sub",
  "sandwich",
  "quesadilla",
  "burrito",
  "beans",
  "mac and cheese",
];

const MENU_NOISE_PATTERNS = [
  /order online/i,
  /start your order/i,
  /join rewards/i,
  /nutrition/i,
  /feedback/i,
  /gift card/i,
  /locations/i,
  /privacy/i,
  /terms/i,
  /download the app/i,
  /^home$/i,
  /^menu$/i,
  /^updated /i,
  /^published time:/i,
  /^url source:/i,
  /^title:/i,
  /^markdown content:/i,
];

const TESSERACT_SCRIPT_URL = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";

const MINDSET_MESSAGES = [
  "Your job is not to feel motivated. Your job is to obey the next alarm.",
  "Comfort built this mess. Repetition fixes it.",
  "Your blood pressure is not interested in negotiations.",
  "You wanted a hard line, so here it is: log the food, close the kitchen, move your body.",
  "Be strong and present for the people who count on you. That starts with the next choice.",
  "The version of you that wants to coast is not in charge today.",
];

const STORAGE_PREFIX = "diethawk-day-";
const MOVE_STORAGE_KEY = "diethawk-moves";
const INSTALL_DISMISS_KEY = "diethawk-install-dismissed";
const MEMORY_STORAGE_KEY = "diethawk-memory-v1";
const PAGE_LABELS = {
  today: "Today",
  schedule: "Schedule",
  meals: "Meals",
  restaurant: "Restaurant",
  memory: "Memory",
};

let state = loadState();
let memory = loadMemory();
let activeModalTaskId = null;
let toastTimer = null;
let tesseractLoaderPromise = null;

function init() {
  renderProfile();
  renderMindset();
  renderMeals();
  renderDrinkButtons();
  bindEvents();
  renderPageNavigation();
  refreshAll();
  registerServiceWorker();
  maybeAlertForDueTask();
  maybeAlertForMovementTimer();
  setInterval(liveTick, 1000);
  setInterval(tick, 1000 * 30);
}

function liveTick() {
  renderPhase();
  renderLocalClock();
  renderCategoryTimers();
  renderMovementTimer();
  maybeAlertForDueTask();
  maybeAlertForMovementTimer();
}

function tick() {
  state = ensureTodayState(state);
  saveState();
  refreshAll();
  maybeAlertForDueTask();
  maybeAlertForMovementTimer();
}

function bindEvents() {
  window.addEventListener("hashchange", () => {
    renderPageNavigation();
  });

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.addEventListener("click", () => {
      window.requestAnimationFrame(() => {
        renderPageNavigation();
      });
    });
  });

  document.getElementById("enable-notifications").addEventListener("click", requestNotifications);
  document.getElementById("refresh-mindset").addEventListener("click", () => {
    state.mindsetIndex = (state.mindsetIndex + 1) % MINDSET_MESSAGES.length;
    saveState();
    renderMindset();
  });

  document.getElementById("new-move").addEventListener("click", () => {
    state.moveSeed += 1;
    saveState();
    renderMoves();
  });

  document.getElementById("new-quick-move").addEventListener("click", () => {
    cycleQuickMove();
    saveState();
    refreshAll();
  });

  document.getElementById("restaurant-name").addEventListener("input", (event) => {
    state.restaurantAudit.restaurantName = event.target.value;
    saveState();
    renderMemory();
  });

  document.getElementById("restaurant-name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      analyzeRestaurant();
    }
  });

  document.getElementById("restaurant-url").addEventListener("input", (event) => {
    state.restaurantAudit.menuUrl = event.target.value;
    saveState();
  });

  document.getElementById("restaurant-url").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      analyzeRestaurant();
    }
  });

  document.getElementById("analyze-restaurant").addEventListener("click", () => {
    analyzeRestaurant();
  });

  document.getElementById("restaurant-photo-input").addEventListener("change", (event) => {
    handleRestaurantPhotoChange(event);
  });

  document.getElementById("clear-restaurant").addEventListener("click", () => {
    clearRestaurantAudit();
  });

  document.getElementById("export-memory").addEventListener("click", () => {
    exportMemory();
  });

  document.getElementById("clear-memory").addEventListener("click", () => {
    clearMemory();
  });

  document.getElementById("dismiss-install").addEventListener("click", () => {
    window.localStorage.setItem(INSTALL_DISMISS_KEY, "true");
    renderInstallState();
  });

  document.getElementById("reset-day").addEventListener("click", () => {
    if (!window.confirm("Reset today's logs and tasks?")) {
      return;
    }
    state = buildDefaultState(new Date());
    saveState();
    refreshAll();
    showToast("Day reset. Start over clean.");
  });

  document.getElementById("save-steps").addEventListener("click", () => {
    const input = document.getElementById("steps-input");
    const nextValue = Number.parseInt(input.value, 10);
    if (!Number.isFinite(nextValue) || nextValue < 0) {
      showToast("Use a real step number.");
      return;
    }
    state.steps = nextValue;
    saveState();
    refreshAll();
    showToast("Steps updated.");
  });

  document.querySelectorAll("[data-action='water-adjust']").forEach((button) => {
    button.addEventListener("click", () => {
      const amount = Number.parseFloat(button.dataset.amount || "0");
      state.waterLiters = roundToHalf(Math.max(0, state.waterLiters + amount));
      saveState();
      refreshAll();
    });
  });

  document.querySelectorAll("[data-action='movement-adjust']").forEach((button) => {
    button.addEventListener("click", () => {
      const amount = Number.parseInt(button.dataset.amount || "0", 10);
      state.movementMinutes = Math.max(0, state.movementMinutes + amount);
      saveState();
      refreshAll();
    });
  });

  document.querySelectorAll("[data-movement-minutes]").forEach((button) => {
    button.addEventListener("click", () => {
      const minutes = Number.parseInt(button.dataset.movementMinutes || "0", 10);
      if (!Number.isFinite(minutes) || minutes <= 0) {
        return;
      }
      startMovementTimer(minutes);
    });
  });

  document.getElementById("complete-movement-timer").addEventListener("click", () => {
    completeMovementTimer();
  });

  document.getElementById("reset-movement-timer").addEventListener("click", () => {
    resetMovementTimer();
  });

  document.getElementById("modal-done").addEventListener("click", () => {
    if (activeModalTaskId) {
      completeTask(activeModalTaskId);
      closeModal();
      setTimeout(maybeAlertForDueTask, 120);
    }
  });

  document.getElementById("modal-snooze-30").addEventListener("click", () => {
    if (activeModalTaskId) {
      snoozeTask(activeModalTaskId, 30);
      closeModal();
      setTimeout(maybeAlertForDueTask, 120);
    }
  });

  document.getElementById("modal-snooze-60").addEventListener("click", () => {
    if (activeModalTaskId) {
      snoozeTask(activeModalTaskId, 60);
      closeModal();
      setTimeout(maybeAlertForDueTask, 120);
    }
  });
}

function renderProfile() {
  document.getElementById("profile-age").textContent = String(getAge(PROFILE.dob));
  document.getElementById("profile-bmi").textContent = calculateBmi(PROFILE.weightLbs, PROFILE.heightInches).toFixed(1);
}

function renderMindset() {
  document.getElementById("mindset-message").textContent = MINDSET_MESSAGES[state.mindsetIndex % MINDSET_MESSAGES.length];
}

function renderMeals() {
  Object.entries(MEAL_LIBRARY).forEach(([group, meals]) => {
    const root = document.getElementById(`${group}-meals`);
    root.innerHTML = meals
      .map(
        (meal) => `
          <article class="meal-card">
            <div class="meal-top">
              <div>
                <h3>${meal.name}</h3>
                <p>${meal.note}</p>
              </div>
              <span class="meal-type">${group}</span>
            </div>
            <div class="meal-macros">
              <span>${meal.calories} cal</span>
              <span>${meal.protein} g protein</span>
              <span>${meal.carbs} g net carbs</span>
            </div>
            <button type="button" data-meal-id="${meal.id}" data-meal-group="${group}">Log this meal</button>
          </article>
        `,
      )
      .join("");
  });

  document.querySelectorAll("[data-meal-id]").forEach((button) => {
    button.addEventListener("click", () => {
      logMeal(button.dataset.mealId, button.dataset.mealGroup);
    });
  });
}

function renderDrinkButtons() {
  const root = document.getElementById("drink-buttons");
  root.innerHTML = DRINK_LIBRARY.map(
    (drink) => `
      <button type="button" data-drink-id="${drink.id}">
        ${drink.name}<br />${drink.calories} cal / ${drink.carbs} g carbs
      </button>
    `,
  ).join("");

  document.querySelectorAll("[data-drink-id]").forEach((button) => {
    button.addEventListener("click", () => {
      logDrink(button.dataset.drinkId);
    });
  });
}

function renderMoves() {
  const office = OFFICE_MOVES[state.moveSeed % OFFICE_MOVES.length];
  const home = HOME_MOVES[state.moveSeed % HOME_MOVES.length];
  document.getElementById("office-move-title").textContent = office.title;
  document.getElementById("office-move-text").textContent = office.note;
  document.getElementById("home-move-title").textContent = home.title;
  document.getElementById("home-move-text").textContent = home.note;
}

function refreshAll() {
  renderInstallState();
  renderPageNavigation();
  renderPhase();
  renderLocalClock();
  renderCategoryTimers();
  renderMovementTimer();
  renderRestaurantAudit();
  renderMemory();
  renderWarnings();
  renderTotals();
  renderGoals();
  renderTasks();
  renderTimeline();
  renderMoves();
  renderAlcohol();
  document.getElementById("steps-input").value = String(state.steps || 0);
}

function getCurrentPage() {
  const nextPage = window.location.hash.replace(/^#/, "").trim().toLowerCase();
  return PAGE_LABELS[nextPage] ? nextPage : "today";
}

function renderPageNavigation() {
  const currentPage = getCurrentPage();
  const currentPageLabel = document.getElementById("current-page-label");
  currentPageLabel.textContent = PAGE_LABELS[currentPage];

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    const isActive = link.dataset.pageLink === currentPage;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
      return;
    }
    link.removeAttribute("aria-current");
  });

  document.querySelectorAll("[data-page-section]").forEach((section) => {
    section.classList.toggle("page-hidden", section.dataset.pageSection !== currentPage);
  });
}

function renderInstallState() {
  const installCard = document.getElementById("install-card");
  const installMessage = document.getElementById("install-message");
  const dismissed = window.localStorage.getItem(INSTALL_DISMISS_KEY) === "true";
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const isAppleMobile = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);

  if (dismissed || isStandalone) {
    installCard.classList.add("hidden");
    return;
  }

  installCard.classList.remove("hidden");
  installMessage.textContent = isAppleMobile
    ? "Open this in Safari, tap Share, then Add to Home Screen. That gives the cleanest full-screen iPhone layout."
    : "For the best mobile layout, install this from your browser menu or add it to your Home Screen from Safari on iPhone.";
}

function renderCategoryTimers() {
  const nextSitStandTask = getNextTaskByCategory("Sit/Stand");
  const status = document.getElementById("sitstand-status");
  const countdown = document.getElementById("sitstand-countdown");
  const instruction = document.getElementById("sitstand-instruction");
  const nextTime = document.getElementById("sitstand-next-time");
  const snoozes = document.getElementById("sitstand-snoozes");

  if (!nextSitStandTask) {
    setTimerPill(status, "DONE", "ready");
    countdown.textContent = "Done for today";
    instruction.textContent = "No more sit/stand tasks are queued. Still get up before the chair wins.";
    nextTime.textContent = "All posture tasks cleared";
    snoozes.textContent = "Keep breaking up the desk time";
    return;
  }

  const dueNow = nextSitStandTask.nextDue <= Date.now();
  setTimerPill(status, dueNow ? "UP NOW" : "NEXT", dueNow ? "due" : "ready");
  countdown.textContent = dueNow ? "Do it now" : formatPreciseDuration(nextSitStandTask.nextDue - Date.now());
  instruction.textContent = nextSitStandTask.instruction;
  nextTime.textContent = `Target time: ${formatClock(new Date(nextSitStandTask.nextDue))}`;
  snoozes.textContent = `Snoozes left: ${Math.max(0, 2 - nextSitStandTask.snoozeCount)}`;
}

function renderMovementTimer() {
  const quickMove = getQuickMove();
  const timerState = document.getElementById("movement-timer-state");
  const timerCountdown = document.getElementById("movement-timer-countdown");
  const timerInstruction = document.getElementById("movement-timer-instruction");
  const summary = document.getElementById("scheduled-movement-summary");

  document.getElementById("quick-move-title").textContent = quickMove.title;
  document.getElementById("quick-move-text").textContent = quickMove.note;

  const scheduledTask = getNextTaskByCategory("Exercise");
  const timer = state.movementTimer;
  const now = Date.now();

  if (timer.endAt && timer.endAt > now) {
    setTimerPill(timerState, "ACTIVE", "active");
    timerCountdown.textContent = formatPreciseDuration(timer.endAt - now);
    timerInstruction.textContent = "Move now. Keep going until the timer hits zero, then count the minutes.";
  } else if (timer.endAt && timer.endAt <= now) {
    setTimerPill(timerState, "TIME", "due");
    timerCountdown.textContent = "Log it now";
    timerInstruction.textContent = "The movement block is done. Count the minutes and start another round if you are still stiff.";
  } else if (scheduledTask) {
    const dueNow = scheduledTask.nextDue <= now;
    setTimerPill(timerState, dueNow ? "UP NOW" : "READY", dueNow ? "due" : "ready");
    timerCountdown.textContent = dueNow ? "Move now" : formatPreciseDuration(scheduledTask.nextDue - now);
    timerInstruction.textContent = dueNow
      ? scheduledTask.instruction
      : "Next movement block is coming. Start a 2, 5, or 10 minute timer now if you are fading.";
  } else {
    setTimerPill(timerState, "READY", "ready");
    timerCountdown.textContent = "Ready";
    timerInstruction.textContent = "No scheduled movement block is left. That is not permission to sit still for the rest of the day.";
  }

  summary.textContent = scheduledTask
    ? `Scheduled movement task: ${formatClock(new Date(scheduledTask.nextDue))} - ${scheduledTask.title}`
    : "No more scheduled movement tasks. Use the quick timer to add easy minutes anywhere.";
}

function renderPhase() {
  const now = new Date();
  const phase = getCurrentPhase(now);
  const badge = document.getElementById("phase-badge");
  badge.textContent = phase.name;
  badge.classList.toggle("eating", phase.name === "EATING WINDOW");
  document.getElementById("phase-countdown").textContent = `${formatDuration(phase.msUntilChange)} until ${phase.nextLabel}`;
  document.getElementById("phase-instruction").textContent = phase.instruction;
}

function renderLocalClock() {
  const now = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "local browser time";
  const localTime = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  document.getElementById("local-time-display").textContent = `Local time: ${localTime}`;
  document.getElementById("time-zone-display").textContent = `Timezone: ${timezone}`;
}

function renderWarnings() {
  const totals = getTotals();
  const warnings = [];
  const now = new Date();
  const phase = getCurrentPhase(now);

  if (state.waterLiters < 2 && now.getHours() >= 12) {
    warnings.push("Water is behind. Catch up now before the fatigue and cravings show up.");
  }

  if (totals.protein < 90 && now.getHours() >= 16) {
    warnings.push("Protein is low for this point in the day. Dinner needs to fix it.");
  }

  if (totals.carbs > PROFILE.carbGoal) {
    warnings.push("Net carbs are over the line. Shut down all extra carbs for the rest of the day.");
  }

  if (totals.drinks >= PROFILE.drinkLimit) {
    warnings.push("Alcohol is at or over the limit. No more tonight. Hydrate and stop digging.");
  } else if (totals.drinks === 1) {
    warnings.push("One drink logged. Water now, food under control, and do not let one become three.");
  }

  if (phase.name === "FASTING" && totals.drinks > 0) {
    warnings.push("Alcohol during the fasting window breaks the plan and raises dehydration risk.");
  }

  if (state.movementMinutes < 20 && now.getHours() >= 17) {
    warnings.push("Movement is too low. You still have time to save the day with a walk.");
  }

  if (warnings.length === 0) {
    warnings.push("Nothing urgent is broken. Stay sharp and keep stacking clean reps.");
  }

  document.getElementById("warning-message").textContent = warnings[0];
  document.getElementById("warning-chips").innerHTML = warnings
    .slice(1)
    .map((warning) => `<span class="warning-chip">${warning}</span>`)
    .join("");
}

function renderTotals() {
  const totals = getTotals();
  document.getElementById("water-value").textContent = `${state.waterLiters.toFixed(1)} L`;
  document.getElementById("movement-value").textContent = `${state.movementMinutes} min`;

  const entries = [
    { label: "Calories", value: `${totals.calories}` },
    { label: "Protein", value: `${totals.protein} g` },
    { label: "Net carbs", value: `${totals.carbs} g` },
    { label: "Meals logged", value: `${state.mealLog.length}` },
  ];

  document.getElementById("totals-grid").innerHTML = entries
    .map((entry) => `<span class="total-chip">${entry.label}: ${entry.value}</span>`)
    .join("");
}

function renderGoals() {
  const totals = getTotals();
  const goals = [
    {
      label: "Water",
      current: state.waterLiters,
      target: PROFILE.waterGoal,
      display: `${state.waterLiters.toFixed(1)} / ${PROFILE.waterGoal.toFixed(1)} L`,
      mode: "higher",
    },
    {
      label: "Protein",
      current: totals.protein,
      target: PROFILE.proteinGoal,
      display: `${totals.protein} / ${PROFILE.proteinGoal} g`,
      mode: "higher",
    },
    {
      label: "Net carbs",
      current: totals.carbs,
      target: PROFILE.carbGoal,
      display: `${totals.carbs} / ${PROFILE.carbGoal} g`,
      mode: "lower",
    },
    {
      label: "Movement",
      current: state.movementMinutes,
      target: PROFILE.movementGoal,
      display: `${state.movementMinutes} / ${PROFILE.movementGoal} min`,
      mode: "higher",
    },
    {
      label: "Steps",
      current: state.steps,
      target: PROFILE.stepsGoal,
      display: `${state.steps} / ${PROFILE.stepsGoal}`,
      mode: "higher",
    },
    {
      label: "Alcohol cap",
      current: totals.drinks,
      target: PROFILE.drinkLimit,
      display: `${totals.drinks} / ${PROFILE.drinkLimit} drinks`,
      mode: "lower",
    },
  ];

  document.getElementById("goals-list").innerHTML = goals
    .map((goal) => {
      const { ratio, tone } = getGoalRatio(goal.current, goal.target, goal.mode);
      return `
        <article class="goal-card">
          <div class="goal-head">
            <span>${goal.label}</span>
            <span>${goal.display}</span>
          </div>
          <div class="goal-bar">
            <div class="goal-fill ${tone}" style="width: ${Math.min(100, Math.max(4, ratio * 100))}%"></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTasks() {
  const sortedTasks = [...state.tasks].sort((left, right) => left.nextDue - right.nextDue);
  const now = Date.now();
  const nextTask = sortedTasks.find((task) => !task.completed);

  if (!nextTask) {
    document.getElementById("next-task-summary").textContent = "All scheduled tasks are done for today.";
  } else if (nextTask.nextDue <= now) {
    document.getElementById("next-task-summary").textContent = `Due now: ${nextTask.title}`;
  } else {
    document.getElementById("next-task-summary").textContent = `${formatClock(new Date(nextTask.nextDue))}: ${nextTask.title}`;
  }

  document.getElementById("task-list").innerHTML = sortedTasks
    .map((task) => {
      const due = !task.completed && task.nextDue <= now;
      const snoozed = task.snoozeCount > 0 && !task.completed && task.nextDue > getTaskBaseDue(task.id);
      const statusClass = [task.completed ? "completed" : "", due ? "due" : "", snoozed ? "snoozed" : ""]
        .filter(Boolean)
        .join(" ");
      const snoozesLeft = Math.max(0, 2 - task.snoozeCount);

      return `
        <article class="task-card ${statusClass}">
          <div class="task-top">
            <div>
              <h3>${task.title}</h3>
              <p class="support-text">${task.instruction}</p>
            </div>
            <span class="task-time">${formatClock(new Date(task.nextDue))}</span>
          </div>
          <div class="task-meta">
            <span class="warning-chip">${task.category}</span>
            <span class="warning-chip">Snoozes left: ${snoozesLeft}</span>
          </div>
          <div class="task-actions">
            <button type="button" data-task-action="done" data-task-id="${task.id}" ${task.completed ? "disabled" : ""}>Done</button>
            <button type="button" data-task-action="snooze-30" data-task-id="${task.id}" ${task.completed || snoozesLeft === 0 ? "disabled" : ""}>Snooze 30m</button>
            <button type="button" data-task-action="snooze-60" data-task-id="${task.id}" ${task.completed || snoozesLeft === 0 ? "disabled" : ""}>Snooze 60m</button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-task-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = button.dataset.taskId;
      const action = button.dataset.taskAction;
      if (action === "done") {
        completeTask(taskId);
      }
      if (action === "snooze-30") {
        snoozeTask(taskId, 30);
      }
      if (action === "snooze-60") {
        snoozeTask(taskId, 60);
      }
    });
  });
}

function renderTimeline() {
  document.getElementById("timeline-list").innerHTML = state.tasks
    .slice()
    .sort((left, right) => getTaskBaseDue(left.id) - getTaskBaseDue(right.id))
    .map((task) => {
      const baseDue = new Date(getTaskBaseDue(task.id));
      return `
        <article class="timeline-card">
          <div class="timeline-top">
            <div>
              <h3>${task.title}</h3>
              <p class="support-text">${task.instruction}</p>
            </div>
            <span class="timeline-time">${formatClock(baseDue)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderAlcohol() {
  const totals = getTotals();
  document.getElementById("drink-count").textContent = String(totals.drinks);
  document.getElementById("drink-calories").textContent = String(totals.drinkCalories);
  document.getElementById("drink-carbs").textContent = `${totals.drinkCarbs} g`;

  let message = "Zero drinks logged. Best case for fat loss, sleep, and hydration.";
  if (totals.drinks === 1) {
    message = "One drink logged. Follow it with water and keep the rest of the night tight.";
  }
  if (totals.drinks >= 2) {
    message = "Two drinks is the ceiling. Shut it down, hydrate, and stop there.";
  }
  if (totals.drinks > 2) {
    message = "You are off-plan on alcohol. The next right move is water, food discipline, and no more drinks.";
  }

  document.getElementById("alcohol-warning").textContent = message;
}

function renderRestaurantAudit() {
  const audit = state.restaurantAudit;
  const phase = getCurrentPhase(new Date());
  const scheduleContext = getMealScheduleContext(new Date(), phase);
  const badge = document.getElementById("restaurant-phase-badge");
  const verdict = document.getElementById("restaurant-verdict");
  const notes = document.getElementById("restaurant-notes");
  const sourceChip = document.getElementById("restaurant-source-chip");
  const contextChip = document.getElementById("restaurant-context-chip");
  const photoChip = document.getElementById("restaurant-photo-chip");
  const ocrChip = document.getElementById("restaurant-ocr-chip");
  const analyzeButton = document.getElementById("analyze-restaurant");
  const clearButton = document.getElementById("clear-restaurant");
  const photoInput = document.getElementById("restaurant-photo-input");

  syncInputValue("restaurant-name", audit.restaurantName);
  syncInputValue("restaurant-url", audit.menuUrl);

  setTimerPill(badge, phase.name === "FASTING" ? "FASTING" : "EAT WINDOW", phase.name === "FASTING" ? "due" : "active");
  contextChip.textContent = scheduleContext.chipText;
  sourceChip.textContent = audit.sourceLabel || "No menu loaded yet";
  photoChip.textContent = audit.photoName ? `Photo: ${audit.photoName}` : "No screenshot selected";
  ocrChip.textContent = audit.isOcrLoading
    ? `OCR: ${audit.ocrStatus}${audit.ocrProgress > 0 ? ` ${Math.round(audit.ocrProgress * 100)}%` : ""}`
    : `OCR: ${audit.ocrStatus}`;

  analyzeButton.disabled = audit.isLoading || audit.isOcrLoading;
  clearButton.disabled = audit.isLoading || audit.isOcrLoading;
  photoInput.disabled = audit.isLoading || audit.isOcrLoading;
  analyzeButton.textContent = audit.isOcrLoading ? "Reading Photo..." : audit.isLoading ? "Checking Menu..." : "Audit Menu";

  if (audit.isLoading) {
    verdict.className = "restaurant-verdict loading";
    verdict.textContent = "Pulling the menu now. Sit still and let me read the damage.";
    notes.textContent = "Restaurant name alone is enough for a best-effort lookup. A direct menu URL is faster, and pasted menu text is the fallback when the website is a mess.";
    renderRestaurantOptionList("restaurant-good-options", [], "No recommendations yet.", "good");
    renderRestaurantOptionList("restaurant-bad-options", [], "No warnings yet.", "bad");
    return;
  }

  if (audit.isOcrLoading) {
    verdict.className = "restaurant-verdict loading";
    verdict.textContent = "Reading the screenshot now. Hold still. A crooked menu photo gives crooked advice.";
    notes.textContent = "Get close, keep the menu flat, and fill the frame. The cleaner the shot, the less stupid the OCR output.";
    renderRestaurantOptionList("restaurant-good-options", [], "OCR is still reading the menu photo.", "good");
    renderRestaurantOptionList("restaurant-bad-options", [], "Warnings will populate after the text is extracted.", "bad");
    return;
  }

  if (!audit.verdict) {
    verdict.className = "restaurant-verdict idle";
    verdict.textContent = "No restaurant checked yet. Give me a name, a URL, or pasted menu text.";
    notes.textContent = "Restaurant name alone is enough for a best-effort lookup. A direct menu URL is faster, and pasted menu text is the fallback when the website is a mess.";
    renderRestaurantOptionList(
      "restaurant-good-options",
      [],
      "When the menu is loaded, the least-stupid options will land here.",
      "good",
    );
    renderRestaurantOptionList(
      "restaurant-bad-options",
      [],
      "The obvious carb wrecks will land here once there is a real menu to judge.",
      "bad",
    );
    return;
  }

  verdict.className = `restaurant-verdict ${audit.verdictTone}`;
  verdict.textContent = audit.verdict;
  notes.textContent = audit.notes;
  renderRestaurantOptionList(
    "restaurant-good-options",
    audit.goodOptions,
    phase.name === "FASTING"
      ? "You are fasting, so the immediate answer is still no calories. Later options will show up here when the menu has anything salvageable."
      : "Nothing worth endorsing. That is the whole point of the audit.",
    "good",
  );
  renderRestaurantOptionList(
    "restaurant-bad-options",
    audit.badOptions,
    "No obvious red flags were extracted from the menu text.",
    "bad",
  );
}

function renderRestaurantOptionList(elementId, items, emptyMessage, tone) {
  const root = document.getElementById(elementId);
  if (!items.length) {
    root.innerHTML = `<div class="restaurant-empty">${escapeHtml(emptyMessage)}</div>`;
    return;
  }

  root.innerHTML = items
    .map(
      (item) => `
        <article class="restaurant-option ${tone}">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.note)}</p>
        </article>
      `,
    )
    .join("");
}

function renderMemory() {
  const restaurantCount = memory.restaurants.entries.length;
  const auditCount = memory.restaurants.recentAudits.length;
  const mealCount = memory.preferences.favoriteMeals.length;
  const currentRestaurantName = (state.restaurantAudit.restaurantName || "").trim();
  const currentRestaurantMemory = getRestaurantMemoryFor(currentRestaurantName);

  document.getElementById("memory-overview").textContent = restaurantCount || mealCount
    ? "DietHawk now remembers repeated restaurants and meal patterns across days. That means less rework and better repeated calls."
    : "This is the v2 memory layer. Repeated meals and restaurant audits now persist across days instead of resetting at midnight.";
  document.getElementById("memory-stats-restaurants").textContent = `${restaurantCount} ${restaurantCount === 1 ? "place" : "places"} remembered`;
  document.getElementById("memory-stats-audits").textContent = `${auditCount} recent ${auditCount === 1 ? "audit" : "audits"}`;
  document.getElementById("memory-stats-meals").textContent = `${mealCount} recurring ${mealCount === 1 ? "meal" : "meals"}`;

  const callout = document.getElementById("restaurant-memory-callout");
  if (currentRestaurantMemory) {
    const rememberedSafeBets = currentRestaurantMemory.safeBets.length
      ? currentRestaurantMemory.safeBets.slice(0, 3).map((item) => item.title).join(", ")
      : "No saved best bets yet";
    callout.innerHTML = `
      <strong>${escapeHtml(currentRestaurantMemory.name)}</strong> has been audited ${currentRestaurantMemory.count} ${currentRestaurantMemory.count === 1 ? "time" : "times"}.<br />
      Last check: ${escapeHtml(formatMemoryTimestamp(currentRestaurantMemory.lastCheckedAt))}.<br />
      Remembered workable picks: ${escapeHtml(rememberedSafeBets)}.
    `;
  } else if (currentRestaurantName) {
    callout.textContent = `No saved memory for ${currentRestaurantName} yet. Audit it once and this panel will remember the least-stupid picks.`;
  } else {
    callout.textContent = "Type a restaurant name or run an audit and the memory layer will start stacking repeated safe bets here.";
  }

  renderMemoryRestaurantList();
  renderMemoryMealList();
}

function renderMemoryRestaurantList() {
  const root = document.getElementById("memory-restaurant-list");
  if (!memory.restaurants.entries.length) {
    root.innerHTML = '<div class="restaurant-empty">No restaurant memory yet. Run a few audits and repeated places will show up here.</div>';
    return;
  }

  root.innerHTML = memory.restaurants.entries
    .map((entry) => {
      const rememberedSafeBets = entry.safeBets.length
        ? entry.safeBets.slice(0, 2).map((item) => item.title).join(", ")
        : "No safe bets saved yet";
      const tone = entry.lastVerdictTone === "avoid" ? "bad" : "good";
      return `
        <article class="restaurant-option ${tone}">
          <h4>${escapeHtml(entry.name)}</h4>
          <p>${escapeHtml(rememberedSafeBets)}</p>
          <p class="memory-meta">${escapeHtml(formatMemoryTimestamp(entry.lastCheckedAt))} • ${escapeHtml(entry.lastSourceLabel || "Saved from audit")}</p>
        </article>
      `;
    })
    .join("");
}

function renderMemoryMealList() {
  const root = document.getElementById("memory-meal-list");
  if (!memory.preferences.favoriteMeals.length) {
    root.innerHTML = '<div class="restaurant-empty">No meal patterns yet. Log a few meals and the repeats will surface here.</div>';
    return;
  }

  root.innerHTML = memory.preferences.favoriteMeals
    .map((entry) => `
      <article class="restaurant-option good">
        <h4>${escapeHtml(entry.name)}</h4>
        <p>${escapeHtml(entry.group)} logged ${entry.count} ${entry.count === 1 ? "time" : "times"}.</p>
        <p class="memory-meta">Last logged ${escapeHtml(formatMemoryTimestamp(entry.lastLoggedAt))}</p>
      </article>
    `)
    .join("");
}

async function analyzeRestaurant() {
  const restaurantName = document.getElementById("restaurant-name").value.trim();
  const menuUrl = document.getElementById("restaurant-url").value.trim();
  const pastedMenuText = document.getElementById("restaurant-menu-text").value.trim();
  const currentAudit = state.restaurantAudit;

  if (!restaurantName && !menuUrl && !pastedMenuText) {
    showToast("Give me a restaurant name, a menu URL, or the menu text.");
    return;
  }

  state.restaurantAudit = {
    ...buildDefaultRestaurantAudit(),
    photoName: currentAudit.photoName,
    ocrStatus: currentAudit.ocrStatus,
    ocrProgress: currentAudit.ocrProgress,
    isOcrLoading: currentAudit.isOcrLoading,
    restaurantName,
    menuUrl,
    isLoading: true,
  };
  saveState();
  renderRestaurantAudit();

  try {
    const lookup = await lookupRestaurantMenu({ restaurantName, menuUrl, pastedMenuText });
    const resolvedRestaurantName = restaurantName || inferRestaurantNameFromUrl(lookup.sourceUrl);
    const sourceLabel = lookup.sourceLabel === "Pasted menu text" && currentAudit.photoName
      ? `Screenshot OCR: ${currentAudit.photoName}`
      : lookup.sourceLabel;
    const analysis = applyRestaurantMemory(
      analyzeRestaurantMenu({
        restaurantName: resolvedRestaurantName,
        menuText: lookup.menuText,
        sourceLabel,
        sourceUrl: lookup.sourceUrl,
      }),
      resolvedRestaurantName,
    );

    state.restaurantAudit = {
      ...buildDefaultRestaurantAudit(),
      photoName: currentAudit.photoName,
      ocrStatus: currentAudit.photoName ? "OCR complete" : currentAudit.ocrStatus,
      ocrProgress: currentAudit.ocrProgress,
      restaurantName: resolvedRestaurantName,
      menuUrl,
      ...analysis,
      sourceLabel,
      sourceUrl: lookup.sourceUrl,
      checkedAt: Date.now(),
    };
    saveState();
    rememberRestaurantAudit(state.restaurantAudit);
    renderRestaurantAudit();
    renderMemory();
    showToast("Restaurant audit ready.");
  } catch (error) {
    state.restaurantAudit = {
      ...buildDefaultRestaurantAudit(),
      photoName: currentAudit.photoName,
      ocrStatus: currentAudit.ocrStatus,
      ocrProgress: currentAudit.ocrProgress,
      restaurantName,
      menuUrl,
      verdictTone: "avoid",
      verdict:
        "I could not pull a usable menu from that. Give me the direct menu URL or paste the menu text instead of making me guess through a bad website.",
      notes: error instanceof Error ? error.message : String(error),
      sourceLabel: "Lookup failed",
      checkedAt: Date.now(),
    };
    saveState();
    renderRestaurantAudit();
    showToast("Menu lookup failed.");
  }
}

function clearRestaurantAudit() {
  state.restaurantAudit = buildDefaultRestaurantAudit();
  document.getElementById("restaurant-photo-input").value = "";
  document.getElementById("restaurant-menu-text").value = "";
  saveState();
  renderRestaurantAudit();
  renderMemory();
  showToast("Restaurant audit cleared.");
}

async function handleRestaurantPhotoChange(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  state.restaurantAudit = {
    ...state.restaurantAudit,
    photoName: file.name,
    sourceLabel: "Screenshot OCR",
    isOcrLoading: true,
    ocrStatus: "Loading OCR engine",
    ocrProgress: 0,
    verdictTone: "loading",
    verdict: "",
    notes: "",
    goodOptions: [],
    badOptions: [],
  };
  saveState();
  renderRestaurantAudit();

  try {
    const tesseract = await ensureTesseractLoaded();
    updateRestaurantOcrState({ ocrStatus: "Reading screenshot", ocrProgress: 0.02 });
    const result = await tesseract.recognize(file, "eng", {
      logger: (message) => {
        if (message.status || Number.isFinite(message.progress)) {
          updateRestaurantOcrState({
            ocrStatus: humanizeOcrStatus(message.status),
            ocrProgress: Number.isFinite(message.progress) ? message.progress : state.restaurantAudit.ocrProgress,
          });
        }
      },
    });

    const extractedText = cleanExtractedMenuText(result?.data?.text || "");
    if (extractedText.length < 30) {
      throw new Error("That screenshot did not produce enough readable text. Get closer, keep the menu flat, and try again.");
    }

    document.getElementById("restaurant-menu-text").value = extractedText;
    state.restaurantAudit = {
      ...state.restaurantAudit,
      isOcrLoading: false,
      ocrStatus: "OCR complete",
      ocrProgress: 1,
      sourceLabel: "Pasted menu text from screenshot",
    };
    saveState();
    renderRestaurantAudit();
    showToast("Menu photo read. Running audit.");
    await analyzeRestaurant();
  } catch (error) {
    state.restaurantAudit = {
      ...state.restaurantAudit,
      isOcrLoading: false,
      ocrStatus: "OCR failed",
      ocrProgress: 0,
      sourceLabel: "Screenshot OCR failed",
      verdictTone: "avoid",
      verdict: "That screenshot was too messy to trust. Hold the camera steady, fill the frame with the menu, and try again.",
      notes: error instanceof Error ? error.message : String(error),
      goodOptions: [],
      badOptions: [],
    };
    saveState();
    renderRestaurantAudit();
    showToast("Menu photo could not be read.");
  }
}

function updateRestaurantOcrState(partialState) {
  state.restaurantAudit = {
    ...state.restaurantAudit,
    ...partialState,
  };
  renderRestaurantAudit();
}

function ensureTesseractLoaded() {
  if (window.Tesseract) {
    return Promise.resolve(window.Tesseract);
  }

  if (tesseractLoaderPromise) {
    return tesseractLoaderPromise;
  }

  tesseractLoaderPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-tesseract="true"]');
    if (existingScript) {
      existingScript.addEventListener(
        "load",
        () => {
          if (window.Tesseract) {
            resolve(window.Tesseract);
            return;
          }
          reject(new Error("OCR engine loaded without exposing Tesseract."));
        },
        { once: true },
      );
      existingScript.addEventListener("error", () => reject(new Error("OCR engine failed to load.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = TESSERACT_SCRIPT_URL;
    script.async = true;
    script.dataset.tesseract = "true";
    script.onload = () => {
      if (window.Tesseract) {
        resolve(window.Tesseract);
        return;
      }
      reject(new Error("OCR engine loaded without exposing Tesseract."));
    };
    script.onerror = () => reject(new Error("OCR engine failed to load."));
    document.head.appendChild(script);
  }).catch((error) => {
    tesseractLoaderPromise = null;
    throw error;
  });

  return tesseractLoaderPromise;
}

function humanizeOcrStatus(status = "") {
  const normalized = status.toLowerCase();
  if (normalized.includes("loading tesseract core")) {
    return "Loading OCR core";
  }
  if (normalized.includes("initializing tesseract")) {
    return "Initializing OCR";
  }
  if (normalized.includes("loading language traineddata")) {
    return "Loading English pack";
  }
  if (normalized.includes("initializing api")) {
    return "Initializing text reader";
  }
  if (normalized.includes("recognizing text")) {
    return "Reading text";
  }
  return status ? status.replace(/^./, (char) => char.toUpperCase()) : "OCR working";
}

function cleanExtractedMenuText(text) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function lookupRestaurantMenu({ restaurantName, menuUrl, pastedMenuText }) {
  if (pastedMenuText) {
    return {
      menuText: pastedMenuText,
      sourceLabel: "Pasted menu text",
      sourceUrl: "",
    };
  }

  if (menuUrl) {
    const normalizedUrl = normalizeLookupUrl(menuUrl);
    const menuText = await fetchTextThroughProxy(normalizedUrl);
    if (!looksLikeMenuText(menuText, restaurantName)) {
      throw new Error("That URL loaded, but the returned text does not look like a usable menu.");
    }
    return {
      menuText,
      sourceLabel: `Direct menu URL: ${getHostLabel(normalizedUrl)}`,
      sourceUrl: normalizedUrl,
    };
  }

  if (!restaurantName) {
    throw new Error("No restaurant name was provided for a search lookup.");
  }

  const candidates = await searchRestaurantCandidates(restaurantName);
  for (const candidate of candidates) {
    try {
      const menuText = await fetchTextThroughProxy(candidate.url);
      if (looksLikeMenuText(menuText, restaurantName)) {
        return {
          menuText,
          sourceLabel: `Web lookup: ${candidate.title}`,
          sourceUrl: candidate.url,
        };
      }
    } catch {
      continue;
    }
  }

  throw new Error("Search found pages, but none of them yielded a menu worth trusting. Paste the menu text or provide the exact menu URL.");
}

async function searchRestaurantCandidates(restaurantName) {
  const searchUrl = `http://duckduckgo.com/html/?q=${encodeURIComponent(`${restaurantName} menu`)}`;
  const searchText = await fetchTextThroughProxy(searchUrl);
  const candidates = extractSearchCandidates(searchText, restaurantName);

  if (!candidates.length) {
    throw new Error("The web search did not return any useful menu candidates.");
  }

  return candidates.slice(0, 5);
}

function extractSearchCandidates(searchText, restaurantName) {
  const matches = Array.from(searchText.matchAll(/\[([^\]]+)\]\((http[^)]+)\)/g));
  const tokens = tokenizeRestaurantName(restaurantName);
  const seen = new Set();

  return matches
    .map((match) => {
      const title = match[1].trim();
      const rawUrl = match[2].trim();
      const decodedUrl = decodeSearchUrl(rawUrl);

      if (!title || !decodedUrl || !/^https?:/i.test(decodedUrl)) {
        return null;
      }

      const host = getHostLabel(decodedUrl);
      const path = getUrlPath(decodedUrl);
      const key = `${host}:${title.toLowerCase()}`;
      if (seen.has(key) || host.includes("duckduckgo.com") || host.includes("external-content.")) {
        return null;
      }
      seen.add(key);

      const haystack = `${title} ${decodedUrl}`.toLowerCase();
      let score = 0;
      if (/menu/.test(haystack)) {
        score += 6;
      }
      if (/prices|nutrition|calories/.test(haystack)) {
        score += 2;
      }
      if (/menu|nutrition/.test(path)) {
        score += 3;
      }
      if (tokens.some((token) => host.includes(token) || haystack.includes(token))) {
        score += 3;
      }
      if (/order now|order online|start your order|rewards/.test(haystack)) {
        score -= 4;
      }
      if (path === "/" && /order now|home/.test(haystack)) {
        score -= 5;
      }
      if (/doordash|ubereats|grubhub|postmates/.test(host)) {
        score -= 2;
      }
      if (/feedback|privacy|terms/.test(haystack)) {
        score -= 3;
      }

      return {
        title,
        url: decodedUrl,
        score,
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score);
}

function analyzeRestaurantMenu({ restaurantName, menuText, sourceLabel, sourceUrl }) {
  const now = new Date();
  const phase = getCurrentPhase(now);
  const scheduleContext = getMealScheduleContext(now, phase);
  const menuLines = extractMenuLines(menuText);
  const evaluations = menuLines
    .map((line) => evaluateMenuLine(line))
    .filter((item) => item && (item.score > 0 || item.status === "bad"));

  const goodOptions = evaluations
    .filter((item) => item.status === "good" || item.status === "conditional")
    .sort((left, right) => right.score - left.score)
    .slice(0, 5)
    .map(({ title, note }) => ({ title, note }));

  const badOptions = evaluations
    .filter((item) => item.status === "bad")
    .sort((left, right) => left.score - right.score)
    .slice(0, 5)
    .map(({ title, note }) => ({ title, note }));

  let verdictTone = "go";
  let verdict = `There are workable options here. Pick one of the least stupid entries below, strip the starch, and move on.`;

  if (phase.name === "FASTING") {
    verdictTone = "hold";
    verdict = `The menu is not the problem. The clock is. You are fasting until ${PROFILE.fastEnd}. Water, black coffee, or unsweet tea are the adult choices right now.`;
  } else if (!goodOptions.length) {
    verdictTone = "avoid";
    verdict = `${restaurantName || "This place"} looks like a carb trap with better branding. Nothing here stands out as worth touching if you want to stay on plan.`;
  } else if (!scheduleContext.onSchedule) {
    verdictTone = "caution";
    verdict = `You could make this work, but the timing is off your default meal schedule. If you eat now, call it a deliberate audible, not discipline.`;
  }

  const sourceText = sourceUrl
    ? `Source: ${getHostLabel(sourceUrl)} via ${sourceLabel}.`
    : `Source: ${sourceLabel}.`;

  return {
    verdictTone,
    verdict,
    notes: `${scheduleContext.message} ${sourceText}`.trim(),
    goodOptions,
    badOptions,
  };
}

function getMealScheduleContext(now, phase = getCurrentPhase(now)) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "local browser time";
  const localTime = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
  const meals = TASK_TEMPLATES.filter((task) => task.category === "Meal").map((task) => {
    const due = timeToday(task.time, now);
    const isSnack = task.id === "snack";
    return {
      ...task,
      due,
      start: due.getTime() - (isSnack ? 30 : 45) * 60 * 1000,
      end: due.getTime() + (isSnack ? 45 : 75) * 60 * 1000,
    };
  });

  if (phase.name === "FASTING") {
    return {
      onSchedule: false,
      chipText: `Clock: ${localTime} | Fasting in ${timezone}`,
      message: `It is ${localTime} in ${timezone}. Your eating window opens at ${PROFILE.fastEnd}. Ordering food now is freelancing against your own plan.`,
    };
  }

  const currentWindow = meals.find((meal) => now.getTime() >= meal.start && now.getTime() <= meal.end);
  if (currentWindow) {
    return {
      onSchedule: true,
      chipText: `Clock: ${localTime} | On schedule for ${currentWindow.title.toLowerCase()}`,
      message: `It is ${localTime} in ${timezone}, and you are inside the ${currentWindow.title.toLowerCase()} lane. Keep the order tight and stop there.`,
    };
  }

  const nextMeal = meals.find((meal) => meal.due.getTime() > now.getTime());
  if (nextMeal) {
    return {
      onSchedule: false,
      chipText: `Clock: ${localTime} | Next meal ${formatClock(nextMeal.due)}`,
      message: `It is ${localTime} in ${timezone}. Your eating window is open, but the next planned meal is ${nextMeal.title.toLowerCase()} at ${formatClock(nextMeal.due)}.`,
    };
  }

  return {
    onSchedule: false,
    chipText: `Clock: ${localTime} | Eating window closes at ${PROFILE.fastStart}`,
    message: `It is ${localTime} in ${timezone}. The next move is to finish clean and close the kitchen by ${PROFILE.fastStart}.`,
  };
}

function extractMenuLines(menuText) {
  const body = menuText.includes("Markdown Content:") ? menuText.split("Markdown Content:").slice(1).join("Markdown Content:") : menuText;
  const cleaned = body
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\r/g, "");

  const unique = [];
  const seen = new Set();

  cleaned
    .split("\n")
    .map((line) => line.replace(/^[-*#\s>]+/, "").trim())
    .filter((line) => line.length >= 8 && line.length <= 120)
    .forEach((line) => {
      if (MENU_NOISE_PATTERNS.some((pattern) => pattern.test(line)) || /https?:\/\//i.test(line)) {
        return;
      }

      const normalized = line.toLowerCase();
      if (seen.has(normalized)) {
        return;
      }

      seen.add(normalized);
      unique.push(line);
    });

  return unique.slice(0, 160);
}

function evaluateMenuLine(line) {
  const lower = line.toLowerCase();
  const positiveHits = countKeywordHits(lower, KETO_POSITIVE_KEYWORDS);
  const negativeHits = countKeywordHits(lower, KETO_NEGATIVE_KEYWORDS);

  if (positiveHits === 0 && negativeHits === 0) {
    return null;
  }

  const notes = [];
  if (lower.includes("burger")) {
    notes.push("Order it bunless and replace fries with a side salad or extra veg.");
  }
  if (lower.includes("salad") || lower.includes("cobb") || lower.includes("caesar")) {
    notes.push("Skip croutons and sweet dressing. Use oil, vinegar, ranch, or Caesar if the label looks sane.");
  }
  if (lower.includes("fajita") || lower.includes("bowl")) {
    notes.push("Keep the meat, cheese, salsa, and veg. Skip rice, beans, chips, and tortillas.");
  }
  if (lower.includes("omelet") || lower.includes("egg") || lower.includes("eggs")) {
    notes.push("Kill the toast, hash browns, pancakes, and fruit sides.");
  }
  if (lower.includes("wings")) {
    notes.push("Take plain or dry-rub wings. Sweet sauce is clown food.");
  }
  if ((lower.includes("steak") || lower.includes("salmon") || lower.includes("chicken") || lower.includes("shrimp") || lower.includes("pork")) && negativeHits === 0) {
    notes.push("Keep the protein. Replace the starch with vegetables if the kitchen will do it.");
  }

  let score = positiveHits * 2 - negativeHits * 2 + (notes.length > 0 ? 1 : 0);
  const clearlyBad = /dessert|milkshake|pizza|pasta|waffle|pancake|donut|fries|nachos|cookie|brownie/.test(lower);
  let status = "bad";

  if (!clearlyBad && score >= 4 && negativeHits <= 1) {
    status = "good";
  } else if (!clearlyBad && (score >= 1 || notes.length > 0) && positiveHits > 0) {
    status = "conditional";
  }

  if (clearlyBad) {
    score -= 4;
  }

  const title = line.length > 92 ? `${line.slice(0, 89)}...` : line;
  let note = "Mostly carb baggage. Leave it alone.";
  if (status === "good") {
    note = notes[0] || "Protein-forward and not obviously loaded with carb nonsense.";
  } else if (status === "conditional") {
    note = notes[0] || "This only works if you strip out the starch and sweet junk.";
  } else if (clearlyBad) {
    note = "This is dessert, bread, or starch doing a bad impression of a meal. Keep your hands off it.";
  } else if (negativeHits > 0 && positiveHits > 0) {
    note = "The protein is trying, but the starch is louder. Skip it unless the kitchen can rebuild it your way.";
  }

  return { title, note, status, score };
}

function countKeywordHits(haystack, keywords) {
  return keywords.reduce((count, keyword) => count + (haystack.includes(keyword) ? 1 : 0), 0);
}

function looksLikeMenuText(menuText, restaurantName) {
  const lines = extractMenuLines(menuText);
  const foodishLines = lines.filter((line) => countKeywordHits(line.toLowerCase(), [...KETO_POSITIVE_KEYWORDS, ...KETO_NEGATIVE_KEYWORDS]) > 0);
  const tokens = tokenizeRestaurantName(restaurantName);
  const textLower = menuText.toLowerCase();
  const mentionsRestaurant = !tokens.length || tokens.some((token) => textLower.includes(token));
  return lines.length >= 8 && foodishLines.length >= 4 && mentionsRestaurant;
}

async function fetchTextThroughProxy(targetUrl) {
  const response = await fetch(buildProxyUrl(targetUrl));
  if (!response.ok) {
    throw new Error(`Lookup failed with status ${response.status}.`);
  }

  const text = await response.text();
  if (!text || text.length < 200) {
    throw new Error("The fetched page came back too thin to trust.");
  }

  return text;
}

function buildProxyUrl(targetUrl) {
  const normalizedUrl = normalizeLookupUrl(targetUrl);
  return `https://r.jina.ai/http://${normalizedUrl.replace(/^https?:\/\//i, "")}`;
}

function normalizeLookupUrl(rawUrl) {
  const trimmed = rawUrl.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return new URL(withProtocol).toString();
}

function decodeSearchUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.hostname.includes("duckduckgo.com") && parsed.pathname === "/l/") {
      const target = parsed.searchParams.get("uddg");
      return target ? decodeURIComponent(target) : "";
    }
    return rawUrl;
  } catch {
    return "";
  }
}

function getHostLabel(url) {
  try {
    return new URL(url).hostname.replace(/^www\./i, "");
  } catch {
    return url;
  }
}

function getUrlPath(url) {
  try {
    return new URL(url).pathname.toLowerCase();
  } catch {
    return "";
  }
}

function inferRestaurantNameFromUrl(url) {
  if (!url) {
    return "This place";
  }

  try {
    const host = new URL(url).hostname.replace(/^www\./i, "");
    return host.split(".")[0].replace(/[-_]/g, " ");
  } catch {
    return "This place";
  }
}

function tokenizeRestaurantName(restaurantName) {
  return (restaurantName || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 3);
}

function syncInputValue(elementId, nextValue) {
  const element = document.getElementById(elementId);
  if (!element || element === document.activeElement) {
    return;
  }
  if (element.value !== nextValue) {
    element.value = nextValue;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cycleQuickMove() {
  state.quickMoveIndex = (state.quickMoveIndex + 1) % QUICK_MOVES.length;
  state.movementTimer.exerciseIndex = state.quickMoveIndex;
}

function startMovementTimer(minutes) {
  state.movementTimer = {
    endAt: Date.now() + minutes * 60 * 1000,
    durationMinutes: minutes,
    exerciseIndex: state.quickMoveIndex,
    alertedAt: null,
  };
  saveState();
  refreshAll();
  showToast(`Movement timer started for ${minutes} minutes.`);
}

function completeMovementTimer() {
  if (!state.movementTimer.durationMinutes) {
    showToast("Start a timer first.");
    return;
  }

  state.movementMinutes += state.movementTimer.durationMinutes;
  state.movementTimer = normalizeMovementTimer(null, state.quickMoveIndex);
  saveState();
  refreshAll();
  showToast("Movement logged.");
}

function resetMovementTimer() {
  state.movementTimer = normalizeMovementTimer(null, state.quickMoveIndex);
  saveState();
  refreshAll();
  showToast("Movement timer reset.");
}

function logMeal(mealId, group) {
  const meal = MEAL_LIBRARY[group].find((entry) => entry.id === mealId);
  if (!meal) {
    return;
  }

  state.mealLog.push({
    id: meal.id,
    group,
    calories: meal.calories,
    protein: meal.protein,
    carbs: meal.carbs,
    loggedAt: new Date().toISOString(),
  });
  rememberMeal(meal, group);
  saveState();
  refreshAll();
  showToast(`${meal.name} logged.`);
}

function buildDefaultMemory() {
  return {
    version: 1,
    updatedAt: null,
    preferences: {
      coachingTone: "hardline",
      favoriteMeals: [],
    },
    restaurants: {
      entries: [],
      recentAudits: [],
    },
  };
}

function normalizeMemory(memoryState) {
  const defaults = buildDefaultMemory();
  return {
    ...defaults,
    ...memoryState,
    updatedAt: typeof memoryState?.updatedAt === "string" ? memoryState.updatedAt : defaults.updatedAt,
    preferences: {
      coachingTone: typeof memoryState?.preferences?.coachingTone === "string"
        ? memoryState.preferences.coachingTone
        : defaults.preferences.coachingTone,
      favoriteMeals: Array.isArray(memoryState?.preferences?.favoriteMeals)
        ? memoryState.preferences.favoriteMeals
            .filter((item) => item && typeof item.id === "string" && typeof item.name === "string")
            .map((item) => ({
              id: item.id,
              name: item.name,
              group: typeof item.group === "string" ? item.group : "meal",
              count: Number.isFinite(item.count) ? item.count : 1,
              lastLoggedAt: typeof item.lastLoggedAt === "string" ? item.lastLoggedAt : new Date().toISOString(),
            }))
            .slice(0, 8)
        : defaults.preferences.favoriteMeals,
    },
    restaurants: {
      entries: Array.isArray(memoryState?.restaurants?.entries)
        ? memoryState.restaurants.entries
            .filter((item) => item && typeof item.name === "string")
            .map((item) => ({
              name: item.name,
              normalizedName: typeof item.normalizedName === "string" ? item.normalizedName : normalizeMemoryKey(item.name),
              count: Number.isFinite(item.count) ? item.count : 1,
              lastCheckedAt: Number.isFinite(item.lastCheckedAt) ? item.lastCheckedAt : Date.now(),
              lastVerdictTone: typeof item.lastVerdictTone === "string" ? item.lastVerdictTone : "idle",
              lastVerdict: typeof item.lastVerdict === "string" ? item.lastVerdict : "",
              lastSourceLabel: typeof item.lastSourceLabel === "string" ? item.lastSourceLabel : "",
              safeBets: normalizeMemoryOptions(item.safeBets),
              avoids: normalizeMemoryOptions(item.avoids),
            }))
            .slice(0, 12)
        : defaults.restaurants.entries,
      recentAudits: Array.isArray(memoryState?.restaurants?.recentAudits)
        ? memoryState.restaurants.recentAudits
            .filter((item) => item && typeof item.name === "string")
            .map((item) => ({
              name: item.name,
              normalizedName: typeof item.normalizedName === "string" ? item.normalizedName : normalizeMemoryKey(item.name),
              checkedAt: Number.isFinite(item.checkedAt) ? item.checkedAt : Date.now(),
              verdictTone: typeof item.verdictTone === "string" ? item.verdictTone : "idle",
              sourceLabel: typeof item.sourceLabel === "string" ? item.sourceLabel : "",
              safeBets: normalizeMemoryOptions(item.safeBets),
              avoids: normalizeMemoryOptions(item.avoids),
            }))
            .slice(0, 8)
        : defaults.restaurants.recentAudits,
    },
  };
}

function normalizeMemoryOptions(items) {
  return Array.isArray(items)
    ? items
        .filter((item) => item && typeof item.title === "string" && typeof item.note === "string")
        .map((item) => ({ title: item.title, note: item.note }))
        .slice(0, 5)
    : [];
}

function loadMemory() {
  const raw = window.localStorage.getItem(MEMORY_STORAGE_KEY);
  if (!raw) {
    return buildDefaultMemory();
  }

  try {
    return normalizeMemory(JSON.parse(raw));
  } catch {
    return buildDefaultMemory();
  }
}

function saveMemory() {
  memory.updatedAt = new Date().toISOString();
  window.localStorage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(memory));
}

function normalizeMemoryKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getRestaurantMemoryFor(restaurantName) {
  const normalizedName = normalizeMemoryKey(restaurantName);
  if (!normalizedName) {
    return null;
  }
  return memory.restaurants.entries.find((entry) => entry.normalizedName === normalizedName) || null;
}

function rememberRestaurantAudit(audit) {
  const name = (audit.restaurantName || inferRestaurantNameFromUrl(audit.sourceUrl)).trim();
  const normalizedName = normalizeMemoryKey(name);
  if (!normalizedName) {
    return;
  }

  const existingEntry = getRestaurantMemoryFor(name);
  const nextEntry = {
    name,
    normalizedName,
    count: (existingEntry?.count || 0) + 1,
    lastCheckedAt: Number.isFinite(audit.checkedAt) ? audit.checkedAt : Date.now(),
    lastVerdictTone: audit.verdictTone || "idle",
    lastVerdict: audit.verdict || "",
    lastSourceLabel: audit.sourceLabel || "",
    safeBets: mergeMemoryOptions(existingEntry?.safeBets || [], audit.goodOptions || []),
    avoids: mergeMemoryOptions(existingEntry?.avoids || [], audit.badOptions || []),
  };

  memory.restaurants.entries = [
    nextEntry,
    ...memory.restaurants.entries.filter((entry) => entry.normalizedName !== normalizedName),
  ]
    .sort((left, right) => right.lastCheckedAt - left.lastCheckedAt)
    .slice(0, 12);

  memory.restaurants.recentAudits = [
    {
      name,
      normalizedName,
      checkedAt: nextEntry.lastCheckedAt,
      verdictTone: audit.verdictTone || "idle",
      sourceLabel: audit.sourceLabel || "",
      safeBets: normalizeMemoryOptions(audit.goodOptions).slice(0, 3),
      avoids: normalizeMemoryOptions(audit.badOptions).slice(0, 3),
    },
    ...memory.restaurants.recentAudits.filter(
      (entry) => !(entry.normalizedName === normalizedName && entry.checkedAt === nextEntry.lastCheckedAt),
    ),
  ].slice(0, 8);

  saveMemory();
}

function rememberMeal(meal, group) {
  const existingEntry = memory.preferences.favoriteMeals.find((entry) => entry.id === meal.id);
  if (existingEntry) {
    existingEntry.count += 1;
    existingEntry.lastLoggedAt = new Date().toISOString();
  } else {
    memory.preferences.favoriteMeals.push({
      id: meal.id,
      name: meal.name,
      group,
      count: 1,
      lastLoggedAt: new Date().toISOString(),
    });
  }

  memory.preferences.favoriteMeals = memory.preferences.favoriteMeals
    .slice()
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }
      return new Date(right.lastLoggedAt).getTime() - new Date(left.lastLoggedAt).getTime();
    })
    .slice(0, 8);

  saveMemory();
}

function mergeMemoryOptions(existingItems, nextItems) {
  const merged = [];
  const seen = new Set();

  [...normalizeMemoryOptions(nextItems), ...normalizeMemoryOptions(existingItems)].forEach((item) => {
    const key = item.title.toLowerCase();
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    merged.push(item);
  });

  return merged.slice(0, 5);
}

function applyRestaurantMemory(analysis, restaurantName) {
  const remembered = getRestaurantMemoryFor(restaurantName);
  if (!remembered) {
    return analysis;
  }

  const noteBits = [`Memory: ${remembered.count} prior ${remembered.count === 1 ? "audit" : "audits"} for ${remembered.name}.`];
  if (remembered.safeBets.length) {
    noteBits.push(`Previous workable picks: ${remembered.safeBets.slice(0, 3).map((item) => item.title).join(", ")}.`);
  }

  return {
    ...analysis,
    notes: `${analysis.notes} ${noteBits.join(" ")}`.trim(),
    goodOptions: analysis.goodOptions.length ? analysis.goodOptions : remembered.safeBets,
  };
}

function formatMemoryTimestamp(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown time";
  }
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function exportMemory() {
  const blob = new Blob([JSON.stringify(memory, null, 2)], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `diethawk-memory-${getDateKey(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
  showToast("Memory exported.");
}

function clearMemory() {
  if (!window.confirm("Clear all stored DietHawk memory across days?")) {
    return;
  }
  memory = buildDefaultMemory();
  saveMemory();
  renderMemory();
  showToast("Memory cleared.");
}

function logDrink(drinkId) {
  const drink = DRINK_LIBRARY.find((entry) => entry.id === drinkId);
  if (!drink) {
    return;
  }

  state.drinkLog.push({
    id: drink.id,
    calories: drink.calories,
    carbs: drink.carbs,
    units: drink.units,
    loggedAt: new Date().toISOString(),
  });
  saveState();
  refreshAll();
  showToast(`${drink.name} logged.`);
}

function completeTask(taskId) {
  const task = state.tasks.find((entry) => entry.id === taskId);
  if (!task) {
    return;
  }
  task.completed = true;
  saveState();
  refreshAll();
  showToast(`Done: ${task.title}`);
}

function snoozeTask(taskId, minutes) {
  const task = state.tasks.find((entry) => entry.id === taskId);
  if (!task || task.snoozeCount >= 2) {
    showToast("No snoozes left for that task.");
    return;
  }
  task.snoozeCount += 1;
  task.nextDue = Date.now() + minutes * 60 * 1000;
  task.lastAlertedForDue = null;
  saveState();
  refreshAll();
  showToast(`${task.title} snoozed ${minutes} minutes.`);
}

function maybeAlertForDueTask() {
  if (activeModalTaskId) {
    return;
  }

  const now = Date.now();
  const nextDueTask = state.tasks.find(
    (task) => !task.completed && task.nextDue <= now && task.lastAlertedForDue !== task.nextDue,
  );

  if (!nextDueTask) {
    return;
  }

  nextDueTask.lastAlertedForDue = nextDueTask.nextDue;
  saveState();
  openModal(nextDueTask);
  sendNotification(nextDueTask);
}

function maybeAlertForMovementTimer() {
  const timer = state.movementTimer;
  if (!timer.endAt || timer.endAt > Date.now() || timer.alertedAt === timer.endAt) {
    return;
  }

  timer.alertedAt = timer.endAt;
  saveState();
  showToast("Movement timer done. Count it now.");

  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  new Notification("DietHawk: movement timer complete", {
    body: `${getQuickMove(timer.exerciseIndex).title} is done. Count the minutes and move on.`,
    tag: "movement-timer",
  });
}

function openModal(task) {
  activeModalTaskId = task.id;
  document.getElementById("task-modal-title").textContent = task.title;
  document.getElementById("task-modal-body").textContent = task.instruction;
  const modal = document.getElementById("task-modal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  const snooze30 = document.getElementById("modal-snooze-30");
  const snooze60 = document.getElementById("modal-snooze-60");
  const outOfSnoozes = task.snoozeCount >= 2;
  snooze30.disabled = outOfSnoozes;
  snooze60.disabled = outOfSnoozes;
}

function closeModal() {
  activeModalTaskId = null;
  const modal = document.getElementById("task-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function requestNotifications() {
  if (!("Notification" in window)) {
    showToast("Notifications are not supported here.");
    return;
  }

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      showToast("Alerts enabled while the app is active.");
      return;
    }
    showToast("Notification permission was not granted.");
  });
}

function sendNotification(task) {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }
  new Notification(`DietHawk: ${task.title}`, {
    body: task.instruction,
    tag: task.id,
  });
}

function getNextTaskByCategory(category) {
  return state.tasks
    .filter((task) => task.category === category && !task.completed)
    .sort((left, right) => left.nextDue - right.nextDue)[0];
}

function getQuickMove(index = state.quickMoveIndex) {
  return QUICK_MOVES[index % QUICK_MOVES.length];
}

function setTimerPill(element, text, tone) {
  element.textContent = text;
  element.className = `timer-pill ${tone}`;
}

function getCurrentPhase(now) {
  const fastEnd = timeToday(PROFILE.fastEnd, now);
  const fastStart = timeToday(PROFILE.fastStart, now);

  if (now >= fastEnd && now < fastStart) {
    return {
      name: "EATING WINDOW",
      nextLabel: "fast start",
      msUntilChange: fastStart.getTime() - now.getTime(),
      instruction: "Eat inside the plan window, center protein, and stop by 6:30 PM.",
    };
  }

  let nextEnd = fastEnd;
  if (now >= fastStart) {
    nextEnd = timeTomorrow(PROFILE.fastEnd, now);
  }

  return {
    name: "FASTING",
    nextLabel: "eating window",
    msUntilChange: nextEnd.getTime() - now.getTime(),
    instruction: "No calories. Water, black coffee, or unsweet tea only until 10:30 AM.",
  };
}

function getTotals() {
  const mealTotals = state.mealLog.reduce(
    (sum, meal) => ({
      calories: sum.calories + meal.calories,
      protein: sum.protein + meal.protein,
      carbs: sum.carbs + meal.carbs,
    }),
    { calories: 0, protein: 0, carbs: 0 },
  );

  const drinkTotals = state.drinkLog.reduce(
    (sum, drink) => ({
      drinkCalories: sum.drinkCalories + drink.calories,
      drinkCarbs: sum.drinkCarbs + drink.carbs,
      drinks: sum.drinks + drink.units,
    }),
    { drinkCalories: 0, drinkCarbs: 0, drinks: 0 },
  );

  return {
    calories: mealTotals.calories + drinkTotals.drinkCalories,
    protein: mealTotals.protein,
    carbs: mealTotals.carbs + drinkTotals.drinkCarbs,
    drinkCalories: drinkTotals.drinkCalories,
    drinkCarbs: drinkTotals.drinkCarbs,
    drinks: drinkTotals.drinks,
  };
}

function getGoalRatio(current, target, mode) {
  if (mode === "higher") {
    const ratio = Math.min(1, current / target);
    const tone = ratio >= 1 ? "good" : ratio >= 0.6 ? "warn" : "";
    return { ratio, tone };
  }

  if (current === 0) {
    return { ratio: 1, tone: "good" };
  }

  const ratio = Math.max(0, 1 - current / target);
  const tone = current <= target ? (current <= target * 0.5 ? "good" : "warn") : "";
  return { ratio, tone };
}

function buildDefaultState(date) {
  const key = getDateKey(date);
  return {
    dateKey: key,
    mealLog: [],
    drinkLog: [],
    waterLiters: 0,
    movementMinutes: 0,
    steps: 0,
    mindsetIndex: Math.floor(Math.random() * MINDSET_MESSAGES.length),
    moveSeed: getStoredMoveSeed(),
    quickMoveIndex: Math.floor(Math.random() * QUICK_MOVES.length),
    movementTimer: normalizeMovementTimer(null, 0),
    restaurantAudit: buildDefaultRestaurantAudit(),
    tasks: TASK_TEMPLATES.map((template) => ({
      ...template,
      nextDue: timeToday(template.time, date).getTime(),
      snoozeCount: 0,
      completed: false,
      lastAlertedForDue: null,
    })),
  };
}

function ensureTodayState(existingState) {
  const today = new Date();
  const todayKey = getDateKey(today);
  if (!existingState || existingState.dateKey !== todayKey) {
    return buildDefaultState(today);
  }
  return normalizeState(existingState, today);
}

function normalizeState(existingState, date) {
  const defaults = buildDefaultState(date);
  const existingTasks = new Map((existingState.tasks || []).map((task) => [task.id, task]));

  return {
    ...defaults,
    ...existingState,
    mealLog: Array.isArray(existingState.mealLog) ? existingState.mealLog : [],
    drinkLog: Array.isArray(existingState.drinkLog) ? existingState.drinkLog : [],
    waterLiters: Number.isFinite(existingState.waterLiters) ? existingState.waterLiters : 0,
    movementMinutes: Number.isFinite(existingState.movementMinutes) ? existingState.movementMinutes : 0,
    steps: Number.isFinite(existingState.steps) ? existingState.steps : 0,
    mindsetIndex: Number.isInteger(existingState.mindsetIndex) ? existingState.mindsetIndex : defaults.mindsetIndex,
    moveSeed: Number.isInteger(existingState.moveSeed) ? existingState.moveSeed : defaults.moveSeed,
    quickMoveIndex: Number.isInteger(existingState.quickMoveIndex)
      ? Math.abs(existingState.quickMoveIndex) % QUICK_MOVES.length
      : defaults.quickMoveIndex,
    movementTimer: normalizeMovementTimer(existingState.movementTimer, defaults.quickMoveIndex),
    restaurantAudit: normalizeRestaurantAudit(existingState.restaurantAudit),
    tasks: TASK_TEMPLATES.map((template) => {
      const existingTask = existingTasks.get(template.id);
      const baseDue = timeToday(template.time, date).getTime();

      if (!existingTask) {
        return {
          ...template,
          nextDue: baseDue,
          snoozeCount: 0,
          completed: false,
          lastAlertedForDue: null,
        };
      }

      return {
        ...template,
        ...existingTask,
        nextDue: Number.isFinite(existingTask.nextDue) ? existingTask.nextDue : baseDue,
        snoozeCount: Number.isFinite(existingTask.snoozeCount)
          ? Math.max(0, Math.min(2, existingTask.snoozeCount))
          : 0,
        completed: Boolean(existingTask.completed),
        lastAlertedForDue: existingTask.lastAlertedForDue ?? null,
      };
    }),
  };
}

function buildDefaultRestaurantAudit() {
  return {
    restaurantName: "",
    menuUrl: "",
    photoName: "",
    isLoading: false,
    isOcrLoading: false,
    ocrStatus: "OCR idle",
    ocrProgress: 0,
    sourceLabel: "",
    sourceUrl: "",
    verdictTone: "idle",
    verdict: "",
    notes: "",
    goodOptions: [],
    badOptions: [],
    checkedAt: null,
  };
}

function normalizeRestaurantAudit(audit) {
  const defaults = buildDefaultRestaurantAudit();
  return {
    ...defaults,
    ...(audit || {}),
    restaurantName: typeof audit?.restaurantName === "string" ? audit.restaurantName : defaults.restaurantName,
    menuUrl: typeof audit?.menuUrl === "string" ? audit.menuUrl : defaults.menuUrl,
    photoName: typeof audit?.photoName === "string" ? audit.photoName : defaults.photoName,
    isLoading: false,
    isOcrLoading: false,
    ocrStatus: typeof audit?.ocrStatus === "string" ? audit.ocrStatus : defaults.ocrStatus,
    ocrProgress: Number.isFinite(audit?.ocrProgress) ? audit.ocrProgress : defaults.ocrProgress,
    sourceLabel: typeof audit?.sourceLabel === "string" ? audit.sourceLabel : defaults.sourceLabel,
    sourceUrl: typeof audit?.sourceUrl === "string" ? audit.sourceUrl : defaults.sourceUrl,
    verdictTone: typeof audit?.verdictTone === "string" ? audit.verdictTone : defaults.verdictTone,
    verdict: typeof audit?.verdict === "string" ? audit.verdict : defaults.verdict,
    notes: typeof audit?.notes === "string" ? audit.notes : defaults.notes,
    goodOptions: Array.isArray(audit?.goodOptions)
      ? audit.goodOptions
          .filter((item) => item && typeof item.title === "string" && typeof item.note === "string")
          .slice(0, 5)
      : defaults.goodOptions,
    badOptions: Array.isArray(audit?.badOptions)
      ? audit.badOptions
          .filter((item) => item && typeof item.title === "string" && typeof item.note === "string")
          .slice(0, 5)
      : defaults.badOptions,
    checkedAt: Number.isFinite(audit?.checkedAt) ? audit.checkedAt : defaults.checkedAt,
  };
}

function normalizeMovementTimer(timer, fallbackIndex) {
  return {
    endAt: Number.isFinite(timer?.endAt) ? timer.endAt : null,
    durationMinutes: Number.isFinite(timer?.durationMinutes) ? timer.durationMinutes : 0,
    exerciseIndex: Number.isInteger(timer?.exerciseIndex)
      ? Math.abs(timer.exerciseIndex) % QUICK_MOVES.length
      : fallbackIndex,
    alertedAt: Number.isFinite(timer?.alertedAt) ? timer.alertedAt : null,
  };
}

function loadState() {
  const todayKey = getDateKey(new Date());
  const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${todayKey}`);
  if (!raw) {
    return buildDefaultState(new Date());
  }

  try {
    const parsed = JSON.parse(raw);
    return ensureTodayState(parsed);
  } catch {
    return buildDefaultState(new Date());
  }
}

function saveState() {
  window.localStorage.setItem(`${STORAGE_PREFIX}${state.dateKey}`, JSON.stringify(state));
  window.localStorage.setItem(MOVE_STORAGE_KEY, String(state.moveSeed));
}

function getStoredMoveSeed() {
  const value = Number.parseInt(window.localStorage.getItem(MOVE_STORAGE_KEY) || "0", 10);
  return Number.isFinite(value) ? value : 0;
}

function getTaskBaseDue(taskId) {
  const task = state.tasks.find((entry) => entry.id === taskId);
  if (!task) {
    return Date.now();
  }
  return timeToday(task.time, new Date()).getTime();
}

function getAge(dob) {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDelta = now.getMonth() - birth.getMonth();
  const dayDelta = now.getDate() - birth.getDate();
  if (monthDelta < 0 || (monthDelta === 0 && dayDelta < 0)) {
    age -= 1;
  }
  return age;
}

function calculateBmi(weightLbs, heightInches) {
  return (weightLbs / (heightInches * heightInches)) * 703;
}

function timeToday(timeString, baseDate = new Date()) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date(baseDate);
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function timeTomorrow(timeString, baseDate = new Date()) {
  const date = timeToday(timeString, baseDate);
  date.setDate(date.getDate() + 1);
  return date;
}

function formatClock(date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function formatDuration(milliseconds) {
  const totalMinutes = Math.max(0, Math.round(milliseconds / (1000 * 60)));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`;
}

function formatPreciseDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`;
  }

  return `${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function roundToHalf(value) {
  return Math.round(value * 2) / 2;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") {
    return;
  }

  navigator.serviceWorker.register("./sw.js").catch(() => {
    showToast("Service worker registration failed.");
  });
}

init();