const PROFILE = {
  name: "Steve Hawkins",
  dob: "1975-04-07",
  weightLbs: 235,
  heightInches: 74,
  medication: "lisinopril-hctz 20-25 mg",
  healthConcerns: ["high blood pressure", "high cholesterol"],
  fastStart: "18:30",
  fastEnd: "10:30",
  waterGoal: 3,
  proteinGoal: 170,
  carbGoal: 30,
  movementGoal: 45,
  stepsGoal: 8000,
  heartSmartMealGoal: 2,
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
      name: "Spinach feta omelet with avocado",
      note: "Eggs, spinach, feta, and avocado. Lower saturated-fat drag than the cheese-bomb version, still keto, still useful.",
      calories: 490,
      protein: 31,
      carbs: 7,
      heartScore: 1,
    },
    {
      id: "breakfast-scramble",
      name: "Turkey and egg-white scramble",
      note: "Turkey, egg whites, peppers, spinach, and salsa. Better for the cholesterol problem than leaning on sausage.",
      calories: 410,
      protein: 37,
      carbs: 8,
      heartScore: 1,
    },
    {
      id: "breakfast-salmon",
      name: "Smoked salmon plate",
      note: "Smoked salmon, cucumber, avocado, and boiled eggs. Cleaner fats, solid protein, less nonsense.",
      calories: 420,
      protein: 34,
      carbs: 6,
      heartScore: 2,
    },
  ],
  lunch: [
    {
      id: "lunch-salad",
      name: "Chicken power salad",
      note: "Grilled chicken, romaine, cucumber, feta, olives, olive oil. Good keto structure and a cleaner cholesterol move.",
      calories: 620,
      protein: 46,
      carbs: 10,
      heartScore: 2,
    },
    {
      id: "lunch-burger-bowl",
      name: "Lean burger bowl",
      note: "Lean beef patty, lettuce, pickles, tomato, avocado, and mustard. Better than a bun, but not the daily cholesterol special.",
      calories: 630,
      protein: 42,
      carbs: 11,
      heartScore: -1,
    },
    {
      id: "lunch-tuna",
      name: "Tuna lettuce boats",
      note: "Tuna, olive-oil mayo, celery, lettuce, and cucumbers. Fast, cold, and better for the LDL issue than processed meat shortcuts.",
      calories: 480,
      protein: 38,
      carbs: 6,
      heartScore: 2,
    },
  ],
  dinner: [
    {
      id: "dinner-salmon",
      name: "Salmon with asparagus",
      note: "Salmon, asparagus, and olive oil. Finish the day like an adult and stop pretending fried junk is your only option.",
      calories: 610,
      protein: 45,
      carbs: 8,
      heartScore: 2,
    },
    {
      id: "dinner-steak",
      name: "Steak with cauliflower mash",
      note: "Steak, cauliflower mash, and greens. Fine sometimes, not the daily answer when cholesterol is already a problem.",
      calories: 720,
      protein: 50,
      carbs: 12,
      heartScore: -2,
    },
    {
      id: "dinner-taco",
      name: "Turkey taco bowl",
      note: "Ground turkey, lettuce, salsa, avocado, and cabbage slaw. No shell, no chips, and less saturated-fat baggage.",
      calories: 610,
      protein: 42,
      carbs: 10,
      heartScore: 1,
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
      heartScore: 0,
    },
    {
      id: "snack-shake",
      name: "Low-carb protein shake",
      note: "Unsweetened shake when protein is behind and time is short.",
      calories: 190,
      protein: 30,
      carbs: 4,
      heartScore: 0,
    },
    {
      id: "snack-walnuts",
      name: "Walnuts and olives",
      note: "Measured portion only. Better for the cholesterol problem than making every snack a cheese event.",
      calories: 220,
      protein: 6,
      carbs: 4,
      heartScore: 2,
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

const CHOLESTEROL_POSITIVE_KEYWORDS = [
  "salmon",
  "tuna",
  "sardine",
  "grilled",
  "baked",
  "roasted",
  "olive oil",
  "avocado",
  "broccoli",
  "asparagus",
  "spinach",
  "greens",
  "cucumber",
  "walnut",
  "walnuts",
  "turkey",
  "chicken",
  "lettuce",
  "cauliflower",
  "zucchini",
];

const CHOLESTEROL_NEGATIVE_KEYWORDS = [
  "fried",
  "crispy",
  "breaded",
  "bacon",
  "sausage",
  "pepperoni",
  "salami",
  "ham",
  "double cheese",
  "cheese sauce",
  "alfredo",
  "cream sauce",
  "buttery",
  "butter",
  "ranch",
  "loaded",
  "smothered",
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
const MEMORY_DB_NAME = "diethawk-memory-db";
const MEMORY_DB_VERSION = 1;
const MEMORY_STORE_NAME = "memory";
const MEMORY_RECORD_KEY = "main";
const PAGE_LABELS = {
  today: "Today",
  schedule: "Schedule",
  meals: "Meals",
  restaurant: "Restaurant",
  memory: "Memory",
};
const PAGE_PATHS = {
  today: "./index.html",
  schedule: "./schedule.html",
  meals: "./meals.html",
  restaurant: "./restaurant.html",
  memory: "./memory.html",
};

let state = loadState();
let memory = buildDefaultMemory();
let activeModalTaskId = null;
let toastTimer = null;
let tesseractLoaderPromise = null;
let latestMemorySyncRequestId = 0;
let memorySyncState = {
  tone: "idle",
  message: "Memory ready",
};

function init() {
  const stepsImportMessage = maybeImportStepsFromQuery();
  renderProfile();
  renderMindset();
  renderMeals();
  renderDrinkButtons();
  bindEvents();
  renderMemorySyncStatus();
  renderPageNavigation();
  refreshAll();
  void initializeMemoryStore();
  registerServiceWorker();
  maybeAlertForDueTask();
  maybeAlertForMovementTimer();
  if (stepsImportMessage) {
    showToast(stepsImportMessage);
  }
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

  document.getElementById("save-actual-meal").addEventListener("click", () => {
    handleSaveActualMeal();
  });

  document.getElementById("actual-meal-input").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    handleSaveActualMeal();
  });

  document.getElementById("save-actual-drink").addEventListener("click", () => {
    handleSaveActualDrink();
  });

  document.getElementById("actual-drink-input").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    handleSaveActualDrink();
  });

  document.getElementById("add-disliked-food").addEventListener("click", () => {
    const input = document.getElementById("disliked-food-input");
    addDislikedFood(input.value);
    input.value = "";
  });

  document.getElementById("disliked-food-input").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    const input = document.getElementById("disliked-food-input");
    addDislikedFood(input.value);
    input.value = "";
  });

  document.getElementById("memory-disliked-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-disliked]");
    if (!button) {
      return;
    }
    removeDislikedFood(button.dataset.removeDisliked);
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
    setStepsValue(nextValue, "manual");
    refreshAll();
    showToast("Steps updated.");
  });

  document.getElementById("steps-input").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    document.getElementById("save-steps").click();
  });

  ["restaurant-good-options", "restaurant-alternate-options"].forEach((elementId) => {
    document.getElementById(elementId).addEventListener("click", (event) => {
      handleRestaurantOptionAction(event);
    });
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
    const sortedMeals = meals.slice().sort((left, right) => {
      const leftCount = memory.preferences.favoriteMeals.find((entry) => entry.id === left.id)?.count || 0;
      const rightCount = memory.preferences.favoriteMeals.find((entry) => entry.id === right.id)?.count || 0;
      if (rightCount !== leftCount) {
        return rightCount - leftCount;
      }
      return left.name.localeCompare(right.name);
    });

    root.innerHTML = sortedMeals
      .map((meal) => {
        const guidance = [];
        const dislikedMatches = getDislikedFoodMatches(`${meal.name} ${meal.note}`);
        const repeatCount = memory.preferences.favoriteMeals.find((entry) => entry.id === meal.id)?.count || 0;
        if (meal.heartScore > 0) {
          guidance.push("Better fit for the cholesterol problem: leaner protein, cleaner fats, or more fiber-heavy veg.");
        } else if (meal.heartScore < 0) {
          guidance.push("Not the daily default when high cholesterol is already on the board.");
        }
        if (dislikedMatches.length) {
          guidance.push(`Contains a saved avoid food: ${dislikedMatches.join(", ")}.`);
        }
        if (repeatCount > 0) {
          guidance.push(`You have actually logged this ${repeatCount} ${repeatCount === 1 ? "time" : "times"}.`);
        }

        return `
          <article class="meal-card">
            <div class="meal-top">
              <div>
                <h3>${meal.name}</h3>
                <p>${meal.note}</p>
                ${guidance.length ? `<p class="meal-preference-note">${guidance.join(" ")}</p>` : ""}
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
        `;
      })
      .join("");
  });

  renderActualMealLearning();

  document.querySelectorAll("[data-meal-id]").forEach((button) => {
    button.addEventListener("click", () => {
      logMeal(button.dataset.mealId, button.dataset.mealGroup);
    });
  });
}

function renderDrinkButtons() {
  const root = document.getElementById("drink-buttons");
  const sortedDrinks = DRINK_LIBRARY.slice().sort((left, right) => {
    const leftCount = getFavoriteDrinkEntries().find((entry) => entry.id === left.id)?.count || 0;
    const rightCount = getFavoriteDrinkEntries().find((entry) => entry.id === right.id)?.count || 0;
    if (rightCount !== leftCount) {
      return rightCount - leftCount;
    }
    return left.name.localeCompare(right.name);
  });

  root.innerHTML = sortedDrinks.map(
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
  renderMemorySyncStatus();
  renderPageNavigation();
  renderMeals();
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
  renderStepSyncState();
  document.getElementById("steps-input").value = String(state.steps || 0);
}

function renderActualMealLearning() {
  const root = document.getElementById("actual-meal-learning-list");
  if (!root) {
    return;
  }

  const entries = getActualMealPreferenceEntries().slice(0, 4);
  if (!entries.length) {
    root.innerHTML = '<div class="restaurant-empty">No actual meals learned yet. Type what you really ate when the suggestions were close but not right.</div>';
    return;
  }

  root.innerHTML = entries
    .map((entry) => `
      <article class="restaurant-option good">
        <h4>${escapeHtml(entry.name)}</h4>
        <p>${escapeHtml(entry.group)} learned ${entry.count} ${entry.count === 1 ? "time" : "times"}.</p>
        <p class="memory-meta">Last saved ${escapeHtml(formatMemoryTimestamp(entry.lastLoggedAt))}</p>
      </article>
    `)
    .join("");
}

function renderActualDrinkLearning() {
  const root = document.getElementById("actual-drink-learning-list");
  if (!root) {
    return;
  }

  const entries = getFavoriteDrinkEntries().slice(0, 4);
  if (!entries.length) {
    root.innerHTML = '<div class="restaurant-empty">No drink pattern learned yet. Log a few actual drinks and the repeats will surface here.</div>';
    return;
  }

  root.innerHTML = entries
    .map((entry) => `
      <article class="restaurant-option good">
        <h4>${escapeHtml(entry.name)}</h4>
        <p>Logged or learned ${entry.count} ${entry.count === 1 ? "time" : "times"}.</p>
        <p class="memory-meta">Last noted ${escapeHtml(formatMemoryTimestamp(entry.lastLoggedAt))}</p>
      </article>
    `)
    .join("");
}

function renderStepSyncState() {
  const chip = document.getElementById("steps-source-chip");
  const note = document.getElementById("steps-sync-note");
  if (!chip || !note) {
    return;
  }

  const sourceLabel = formatStepsSourceLabel(state.stepsSource);
  chip.textContent = sourceLabel;
  const lastUpdatedText = state.stepsUpdatedAt ? `Last update ${formatMemoryTimestamp(state.stepsUpdatedAt)}.` : "No imported step data yet.";

  if (state.stepsSource === "apple-health-shortcut") {
    note.textContent = `Direct Apple Health sync is not available in a GitHub Pages web app. Shortcut imports are supported instead. ${lastUpdatedText}`;
    return;
  }

  note.textContent = `Direct Apple Health sync is not available in Safari/Home Screen web apps. Manual entry works now, and a Shortcut can open this app with a steps value for automatic import later. ${lastUpdatedText}`;
}

function getCurrentPage() {
  const explicitPage = document.body.dataset.page?.trim().toLowerCase();
  if (PAGE_LABELS[explicitPage]) {
    return explicitPage;
  }

  const pageName = window.location.pathname.split("/").pop()?.toLowerCase() || "index.html";
  if (pageName === "" || pageName === "index.html") {
    return "today";
  }
  if (pageName === "schedule.html") {
    return "schedule";
  }
  if (pageName === "meals.html") {
    return "meals";
  }
  if (pageName === "restaurant.html") {
    return "restaurant";
  }
  if (pageName === "memory.html") {
    return "memory";
  }

  const nextPage = window.location.hash.replace(/^#/, "").trim().toLowerCase();
  return PAGE_LABELS[nextPage] ? nextPage : "today";
}

function renderPageNavigation() {
  const currentPage = getCurrentPage();
  const currentPageLabel = document.getElementById("current-page-label");
  currentPageLabel.textContent = PAGE_LABELS[currentPage];
  document.title = `DietHawk | ${PAGE_LABELS[currentPage]}`;

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    if (PAGE_PATHS[link.dataset.pageLink]) {
      link.setAttribute("href", PAGE_PATHS[link.dataset.pageLink]);
    }
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

async function initializeMemoryStore() {
  setMemorySyncState("saving", "Loading memory...");
  memory = await loadPersistentMemory();
  setMemorySyncState("idle", "Memory ready");
  refreshAll();
}

function setMemorySyncState(tone, message) {
  memorySyncState = { tone, message };
  renderMemorySyncStatus();
}

function renderMemorySyncStatus() {
  const chip = document.getElementById("memory-sync-status");
  if (!chip) {
    return;
  }
  chip.textContent = memorySyncState.message;
  chip.className = `warning-chip memory-sync-chip ${memorySyncState.tone}`;
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
  const heartPlan = getHeartPlanStatus();
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

  if (now.getHours() >= 14 && heartPlan.mealsSupporting < 1) {
    warnings.push("High cholesterol still counts. Get at least one cleaner meal in today: fish, lean protein, olive oil, avocado, nuts, or more non-starchy veg.");
  }

  if (heartPlan.riskMeals >= 2) {
    warnings.push("Low-carb is not a hall pass for fried food, processed meat, and cheese piles. The cholesterol issue still wants cleaner choices.");
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
  const heartPlan = getHeartPlanStatus();
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
    {
      label: "Heart-smart meals",
      current: heartPlan.mealsSupporting,
      target: PROFILE.heartSmartMealGoal,
      display: `${heartPlan.mealsSupporting} / ${PROFILE.heartSmartMealGoal} cleaner choices`,
      mode: "higher",
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
  renderActualDrinkLearning();
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
    renderRestaurantOptionList("restaurant-good-options", [], "No recommendations yet.", "good", { interactive: true, listKey: "good" });
    renderRestaurantOptionList(
      "restaurant-alternate-options",
      [],
      "Alternates will show up after the first pass is scored.",
      "good",
      { interactive: true, listKey: "alternate" },
    );
    renderRestaurantOptionList("restaurant-bad-options", [], "No warnings yet.", "bad");
    return;
  }

  if (audit.isOcrLoading) {
    verdict.className = "restaurant-verdict loading";
    verdict.textContent = "Reading the screenshot now. Hold still. A crooked menu photo gives crooked advice.";
    notes.textContent = "Get close, keep the menu flat, and fill the frame. The cleaner the shot, the less stupid the OCR output.";
    renderRestaurantOptionList("restaurant-good-options", [], "OCR is still reading the menu photo.", "good", { interactive: true, listKey: "good" });
    renderRestaurantOptionList(
      "restaurant-alternate-options",
      [],
      "Alternates will populate once the menu text is usable.",
      "good",
      { interactive: true, listKey: "alternate" },
    );
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
      { interactive: true, listKey: "good" },
    );
    renderRestaurantOptionList(
      "restaurant-alternate-options",
      [],
      "Reject a suggestion and the next-best options will rotate in here.",
      "good",
      { interactive: true, listKey: "alternate" },
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
    { interactive: true, listKey: "good" },
  );
  renderRestaurantOptionList(
    "restaurant-alternate-options",
    audit.alternateOptions,
    audit.rejectedOptions.length
      ? "You rejected enough of the first picks that there is nothing better left to rotate in."
      : "Reject a suggestion and the next best options will rotate in here.",
    "good",
    { interactive: true, listKey: "alternate" },
  );
  renderRestaurantOptionList(
    "restaurant-bad-options",
    audit.badOptions,
    "No obvious red flags were extracted from the menu text.",
    "bad",
  );
}

function renderRestaurantOptionList(elementId, items, emptyMessage, tone, options = {}) {
  const root = document.getElementById(elementId);
  if (!items.length) {
    root.innerHTML = `<div class="restaurant-empty">${escapeHtml(emptyMessage)}</div>`;
    return;
  }

  const interactive = Boolean(options.interactive) && tone !== "bad";
  const listKey = options.listKey || elementId;
  root.innerHTML = items
    .map(
      (item, index) => `
        <article class="restaurant-option ${tone}">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.note)}</p>
          ${interactive ? `
            <div class="restaurant-option-actions">
              <button type="button" data-restaurant-option-action="ate" data-restaurant-option-list="${escapeHtml(listKey)}" data-restaurant-option-index="${index}">I ate this</button>
              <button type="button" data-restaurant-option-action="reject" data-restaurant-option-list="${escapeHtml(listKey)}" data-restaurant-option-index="${index}">Not for me</button>
            </div>
          ` : ""}
        </article>
      `,
    )
    .join("");
}

function renderMemory() {
  const restaurantCount = memory.restaurants.entries.length;
  const auditCount = memory.restaurants.recentAudits.length;
  const mealCount = memory.preferences.favoriteMeals.length;
  const orderCount = memory.preferences.favoriteOrders.length;
  const drinkCount = memory.preferences.favoriteDrinks.length;
  const dislikedFoodCount = memory.preferences.dislikedFoods.length;
  const currentRestaurantName = (state.restaurantAudit.restaurantName || "").trim();
  const currentRestaurantMemory = getRestaurantMemoryFor(currentRestaurantName);

  document.getElementById("memory-overview").textContent = restaurantCount || mealCount || orderCount || drinkCount || dislikedFoodCount
    ? "DietHawk now remembers repeated restaurants, actual chosen orders, disliked foods, meal patterns, and drink tendencies across days. That means less fake guessing and more steering toward what you really do."
    : "This is the v2 memory layer. Repeated meals and restaurant audits now persist across days instead of resetting at midnight.";
  document.getElementById("memory-stats-restaurants").textContent = `${restaurantCount} ${restaurantCount === 1 ? "favorite restaurant" : "favorite restaurants"}`;
  document.getElementById("memory-stats-audits").textContent = `${auditCount} recent ${auditCount === 1 ? "audit" : "audits"}`;
  document.getElementById("memory-stats-meals").textContent = `${mealCount} recurring ${mealCount === 1 ? "meal" : "meals"}`;
  document.getElementById("memory-stats-orders").textContent = `${orderCount} repeated ${orderCount === 1 ? "actual order" : "actual orders"}`;
  document.getElementById("memory-stats-drinks").textContent = `${drinkCount} recurring ${drinkCount === 1 ? "drink" : "drinks"}`;
  document.getElementById("memory-stats-dislikes").textContent = `${dislikedFoodCount} disliked ${dislikedFoodCount === 1 ? "food" : "foods"}`;

  const callout = document.getElementById("restaurant-memory-callout");
  if (currentRestaurantMemory) {
    const rememberedSafeBets = currentRestaurantMemory.safeBets.length
      ? currentRestaurantMemory.safeBets.slice(0, 3).map((item) => item.title).join(", ")
      : "No saved best bets yet";
    callout.innerHTML = `
      <strong>${escapeHtml(currentRestaurantMemory.name)}</strong> has been audited ${currentRestaurantMemory.count} ${currentRestaurantMemory.count === 1 ? "time" : "times"}.<br />
      Last check: ${escapeHtml(formatMemoryTimestamp(currentRestaurantMemory.lastCheckedAt))}.<br />
      Remembered workable picks: ${escapeHtml(rememberedSafeBets)}.<br />
      Rejected here before: ${escapeHtml(currentRestaurantMemory.rejectedOptions.length ? currentRestaurantMemory.rejectedOptions.join(", ") : "Nothing explicitly rejected yet")}.
    `;
  } else if (currentRestaurantName) {
    callout.textContent = `No saved memory for ${currentRestaurantName} yet. Audit it once and this panel will remember the least-stupid picks.`;
  } else {
    callout.textContent = "Type a restaurant name or run an audit and the memory layer will start stacking repeated safe bets here.";
  }

  renderMemoryRestaurantList();
  renderFavoriteOrdersList();
  renderMemoryMealList();
  renderFavoriteDrinkList();
  renderDislikedFoodList();
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

function renderFavoriteOrdersList() {
  const root = document.getElementById("memory-order-list");
  if (!memory.preferences.favoriteOrders.length) {
    root.innerHTML = '<div class="restaurant-empty">No actual picked orders yet. Tap "I ate this" on restaurant suggestions and the repeats will rise to the top.</div>';
    return;
  }

  root.innerHTML = memory.preferences.favoriteOrders
    .map((entry) => `
      <article class="restaurant-option good">
        <h4>${escapeHtml(entry.title)}</h4>
        <p>${escapeHtml(entry.restaurantName)} • learned ${entry.count} ${entry.count === 1 ? "time" : "times"}</p>
        <p class="memory-meta">${escapeHtml(entry.note)}</p>
      </article>
    `)
    .join("");
}

function renderFavoriteDrinkList() {
  const root = document.getElementById("memory-drink-list");
  if (!root) {
    return;
  }

  if (!memory.preferences.favoriteDrinks.length) {
    root.innerHTML = '<div class="restaurant-empty">No drink tendencies saved yet. Use the drink buttons or the custom drink field and the repeats will show up here.</div>';
    return;
  }

  root.innerHTML = memory.preferences.favoriteDrinks
    .map((entry) => `
      <article class="restaurant-option good">
        <h4>${escapeHtml(entry.name)}</h4>
        <p>Repeated ${entry.count} ${entry.count === 1 ? "time" : "times"}.</p>
        <p class="memory-meta">Last logged ${escapeHtml(formatMemoryTimestamp(entry.lastLoggedAt))}</p>
      </article>
    `)
    .join("");
}

function renderDislikedFoodList() {
  const root = document.getElementById("memory-disliked-list");
  if (!memory.preferences.dislikedFoods.length) {
    root.innerHTML = '<div class="restaurant-empty">No disliked foods saved yet. Add the foods Steve repeatedly wants to avoid and the app will start judging around them.</div>';
    return;
  }

  root.innerHTML = memory.preferences.dislikedFoods
    .map((food) => `
      <button class="warning-chip removable-chip" type="button" data-remove-disliked="${escapeHtml(food)}">
        ${escapeHtml(food)} ×
      </button>
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

  const candidateOptions = evaluations
    .filter((item) => item.status === "good" || item.status === "conditional")
    .sort((left, right) => right.score - left.score)
    .slice(0, 8)
    .map(({ title, note }) => ({ title, note }));

  const goodOptions = candidateOptions.slice(0, 5);

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
  const heartNote = "High cholesterol means fried food, bacon stacks, sausage bombs, and butter-soaked low-carb junk do not get a free pass.";

  return {
    verdictTone,
    verdict,
    notes: `${scheduleContext.message} ${heartNote} ${sourceText}`.trim(),
    candidateOptions,
    alternateOptions: [],
    rejectedOptions: [],
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
  const cholesterolPositiveHits = countKeywordHits(lower, CHOLESTEROL_POSITIVE_KEYWORDS);
  const cholesterolNegativeHits = countKeywordHits(lower, CHOLESTEROL_NEGATIVE_KEYWORDS);
  const dislikedMatches = getDislikedFoodMatches(lower);

  if (positiveHits === 0 && negativeHits === 0 && cholesterolPositiveHits === 0 && cholesterolNegativeHits === 0 && !dislikedMatches.length) {
    return null;
  }

  const notes = [];
  if (dislikedMatches.length) {
    notes.push(`You already flagged ${dislikedMatches.join(", ")} as food to avoid. Act like you meant it.`);
  }
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
  if (cholesterolPositiveHits > 0 && cholesterolNegativeHits === 0) {
    notes.push("Also the cleaner call for the cholesterol problem: leaner protein, fish, olive oil, or extra veg.");
  }
  if (cholesterolNegativeHits > 0) {
    notes.push("Low-carb does not rescue fried or processed fat bombs when high cholesterol is already in the picture.");
  }

  let score = positiveHits * 2 - negativeHits * 2 + cholesterolPositiveHits - cholesterolNegativeHits * 2 + (notes.length > 0 ? 1 : 0);
  if (dislikedMatches.length) {
    score -= 5;
  }

  const clearlyBad = /dessert|milkshake|pizza|pasta|waffle|pancake|donut|fries|nachos|cookie|brownie/.test(lower) || dislikedMatches.length > 0;
  let status = "bad";

  if (!clearlyBad && score >= 4 && negativeHits <= 1 && cholesterolNegativeHits <= 1) {
    status = "good";
  } else if (!clearlyBad && (score >= 1 || notes.length > 0) && positiveHits > 0) {
    status = "conditional";
  }

  if (clearlyBad) {
    score -= 4;
  }

  const title = line.length > 92 ? `${line.slice(0, 89)}...` : line;
  let note = "Mostly carb baggage. Leave it alone.";
  if (dislikedMatches.length) {
    note = `You already said ${dislikedMatches.join(", ")} is not worth eating. Believe yourself.`;
  } else if (status === "good") {
    note = notes[0] || "Protein-forward and not obviously loaded with carb nonsense.";
  } else if (status === "conditional") {
    note = notes[0] || "This only works if you strip out the starch and sweet junk.";
  } else if (clearlyBad) {
    note = "This is dessert, bread, or starch doing a bad impression of a meal. Keep your hands off it.";
  } else if (cholesterolNegativeHits > 0) {
    note = "Low-carb does not excuse fried or processed fat bombs when high cholesterol is already a problem.";
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
    heartScore: meal.heartScore || 0,
    loggedAt: new Date().toISOString(),
  });
  rememberMeal(meal, group);
  saveState();
  refreshAll();
  showToast(`${meal.name} logged.`);
}

function getHeartPlanStatus() {
  return state.mealLog.reduce(
    (summary, meal) => {
      const heartScore = Number.isFinite(meal.heartScore) ? meal.heartScore : 0;
      return {
        mealsSupporting: summary.mealsSupporting + (heartScore > 0 ? 1 : 0),
        riskMeals: summary.riskMeals + (heartScore < 0 ? 1 : 0),
        balance: summary.balance + heartScore,
      };
    },
    { mealsSupporting: 0, riskMeals: 0, balance: 0 },
  );
}

function buildDefaultMemory() {
  return {
    version: 3,
    updatedAt: null,
    preferences: {
      coachingTone: "hardline",
      favoriteMeals: [],
      favoriteOrders: [],
      favoriteDrinks: [],
      dislikedFoods: [],
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
      favoriteOrders: Array.isArray(memoryState?.preferences?.favoriteOrders)
        ? memoryState.preferences.favoriteOrders
            .filter((item) => item && typeof item.title === "string" && typeof item.restaurantName === "string")
            .map((item) => ({
              key: typeof item.key === "string" ? item.key : `${normalizeMemoryKey(item.restaurantName)}::${normalizeMemoryKey(item.title)}`,
              restaurantName: item.restaurantName,
              title: item.title,
              note: typeof item.note === "string" ? item.note : "",
              count: Number.isFinite(item.count) ? item.count : 1,
              lastSeenAt: Number.isFinite(item.lastSeenAt) ? item.lastSeenAt : Date.now(),
            }))
            .slice(0, 12)
        : defaults.preferences.favoriteOrders,
      favoriteDrinks: Array.isArray(memoryState?.preferences?.favoriteDrinks)
        ? memoryState.preferences.favoriteDrinks
            .filter((item) => item && typeof item.name === "string")
            .map((item) => ({
              id: typeof item.id === "string" ? item.id : `drink:${normalizeMemoryKey(item.name)}`,
              name: item.name,
              count: Number.isFinite(item.count) ? item.count : 1,
              lastLoggedAt: typeof item.lastLoggedAt === "string" ? item.lastLoggedAt : new Date().toISOString(),
            }))
            .slice(0, 10)
        : defaults.preferences.favoriteDrinks,
      dislikedFoods: Array.isArray(memoryState?.preferences?.dislikedFoods)
        ? memoryState.preferences.dislikedFoods
            .filter((item) => typeof item === "string")
            .map((item) => item.trim().toLowerCase())
            .filter((item, index, collection) => item.length >= 2 && collection.indexOf(item) === index)
            .slice(0, 16)
        : defaults.preferences.dislikedFoods,
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
              rejectedOptions: normalizeMemoryTextList(item.rejectedOptions, 8),
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

function normalizeMemoryTextList(items, limit = 8) {
  return Array.isArray(items)
    ? items
        .filter((item) => typeof item === "string")
        .map((item) => item.trim())
        .filter((item, index, collection) => item.length >= 2 && collection.indexOf(item) === index)
        .slice(0, limit)
    : [];
}

async function loadPersistentMemory() {
  try {
    const indexedDbMemory = await readPersistedMemory();
    if (indexedDbMemory) {
      return normalizeMemory(indexedDbMemory);
    }
  } catch {
    // Fall through to legacy storage migration.
  }

  const legacyRaw = window.localStorage.getItem(MEMORY_STORAGE_KEY);
  if (!legacyRaw) {
    return buildDefaultMemory();
  }

  try {
    const migratedMemory = normalizeMemory(JSON.parse(legacyRaw));
    await writeMemoryToIndexedDb(migratedMemory);
    window.localStorage.removeItem(MEMORY_STORAGE_KEY);
    return migratedMemory;
  } catch {
    return buildDefaultMemory();
  }
}

function saveMemory() {
  memory.updatedAt = new Date().toISOString();
  const requestId = ++latestMemorySyncRequestId;
  setMemorySyncState("saving", "Saving memory...");
  void persistMergedMemory(memory, requestId);
}

async function persistMergedMemory(nextMemoryState, requestId) {
  const normalizedNextMemory = normalizeMemory(nextMemoryState);
  normalizedNextMemory.updatedAt = new Date().toISOString();

  try {
    const persistedMemory = normalizeMemory((await readPersistedMemory()) || buildDefaultMemory());
    const mergedMemory = mergeMemoryStates(persistedMemory, normalizedNextMemory);
    mergedMemory.updatedAt = normalizedNextMemory.updatedAt;
    memory = mergedMemory;
    const storageTarget = await writeMemoryToIndexedDb(mergedMemory);
    window.localStorage.removeItem(MEMORY_STORAGE_KEY);
    completeMemorySync(requestId, storageTarget === "indexeddb" ? "synced" : "local", storageTarget === "indexeddb" ? "Memory synced" : "Saved locally");
    return;
  } catch {
    memory = normalizedNextMemory;
    window.localStorage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(memory));
    completeMemorySync(requestId, "local", "Saved locally");
  }
}

function completeMemorySync(requestId, tone, message) {
  if (requestId !== latestMemorySyncRequestId) {
    return;
  }
  setMemorySyncState(tone, message);
}

async function readPersistedMemory() {
  const indexedDbMemory = await readMemoryFromIndexedDb();
  if (indexedDbMemory) {
    return indexedDbMemory;
  }

  const legacyRaw = window.localStorage.getItem(MEMORY_STORAGE_KEY);
  if (!legacyRaw) {
    return null;
  }

  try {
    return JSON.parse(legacyRaw);
  } catch {
    return null;
  }
}

function openMemoryDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      resolve(null);
      return;
    }

    const request = window.indexedDB.open(MEMORY_DB_NAME, MEMORY_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(MEMORY_STORE_NAME)) {
        db.createObjectStore(MEMORY_STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Failed to open DietHawk memory DB."));
  });
}

async function readMemoryFromIndexedDb() {
  const db = await openMemoryDb();
  if (!db) {
    return null;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(MEMORY_STORE_NAME, "readonly");
    const store = transaction.objectStore(MEMORY_STORE_NAME);
    const request = store.get(MEMORY_RECORD_KEY);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("Failed to read DietHawk memory."));
    transaction.oncomplete = () => db.close();
    transaction.onabort = () => db.close();
  });
}

async function writeMemoryToIndexedDb(memoryState) {
  const db = await openMemoryDb();
  if (!db) {
    window.localStorage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(memoryState));
    return "local-storage";
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(MEMORY_STORE_NAME, "readwrite");
    const store = transaction.objectStore(MEMORY_STORE_NAME);
    const request = store.put(memoryState, MEMORY_RECORD_KEY);
    request.onsuccess = () => resolve("indexeddb");
    request.onerror = () => reject(request.error || new Error("Failed to write DietHawk memory."));
    transaction.oncomplete = () => db.close();
    transaction.onabort = () => db.close();
  });
}

async function clearPersistentMemory() {
  const db = await openMemoryDb();
  if (!db) {
    window.localStorage.removeItem(MEMORY_STORAGE_KEY);
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(MEMORY_STORE_NAME, "readwrite");
    const store = transaction.objectStore(MEMORY_STORE_NAME);
    const request = store.delete(MEMORY_RECORD_KEY);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error || new Error("Failed to clear DietHawk memory."));
    transaction.oncomplete = () => db.close();
    transaction.onabort = () => db.close();
  });
}

function mergeMemoryStates(baseMemoryState, nextMemoryState) {
  const baseMemory = normalizeMemory(baseMemoryState);
  const nextMemory = normalizeMemory(nextMemoryState);

  return {
    version: Math.max(baseMemory.version, nextMemory.version),
    updatedAt: pickLaterIsoTimestamp(baseMemory.updatedAt, nextMemory.updatedAt),
    preferences: {
      coachingTone: nextMemory.preferences.coachingTone || baseMemory.preferences.coachingTone,
      favoriteMeals: mergeFavoriteMeals(baseMemory.preferences.favoriteMeals, nextMemory.preferences.favoriteMeals),
      favoriteOrders: mergeFavoriteOrders(baseMemory.preferences.favoriteOrders, nextMemory.preferences.favoriteOrders),
      favoriteDrinks: mergeFavoriteDrinks(baseMemory.preferences.favoriteDrinks, nextMemory.preferences.favoriteDrinks),
      dislikedFoods: Array.from(new Set([...baseMemory.preferences.dislikedFoods, ...nextMemory.preferences.dislikedFoods])).sort(),
    },
    restaurants: {
      entries: mergeRestaurantEntries(baseMemory.restaurants.entries, nextMemory.restaurants.entries),
      recentAudits: mergeRecentAudits(baseMemory.restaurants.recentAudits, nextMemory.restaurants.recentAudits),
    },
  };
}

function mergeFavoriteMeals(baseItems, nextItems) {
  const merged = new Map();

  [...baseItems, ...nextItems].forEach((item) => {
    const existingItem = merged.get(item.id);
    if (!existingItem) {
      merged.set(item.id, { ...item });
      return;
    }

    merged.set(item.id, {
      ...existingItem,
      group: item.group || existingItem.group,
      count: Math.max(existingItem.count, item.count),
      lastLoggedAt: pickLaterIsoTimestamp(existingItem.lastLoggedAt, item.lastLoggedAt),
    });
  });

  return [...merged.values()]
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }
      return new Date(right.lastLoggedAt).getTime() - new Date(left.lastLoggedAt).getTime();
    })
    .slice(0, 8);
}

function mergeFavoriteOrders(baseItems, nextItems) {
  const merged = new Map();

  [...baseItems, ...nextItems].forEach((item) => {
    const existingItem = merged.get(item.key);
    if (!existingItem) {
      merged.set(item.key, { ...item });
      return;
    }

    const existingTime = Number.isFinite(existingItem.lastSeenAt) ? existingItem.lastSeenAt : 0;
    const nextTime = Number.isFinite(item.lastSeenAt) ? item.lastSeenAt : 0;
    const useNextText = nextTime >= existingTime;
    merged.set(item.key, {
      ...existingItem,
      restaurantName: useNextText ? item.restaurantName : existingItem.restaurantName,
      title: useNextText ? item.title : existingItem.title,
      note: useNextText ? item.note : existingItem.note,
      count: Math.max(existingItem.count, item.count),
      lastSeenAt: Math.max(existingTime, nextTime),
    });
  });

  return [...merged.values()]
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }
      return right.lastSeenAt - left.lastSeenAt;
    })
    .slice(0, 12);
}

function mergeFavoriteDrinks(baseItems, nextItems) {
  const merged = new Map();

  [...baseItems, ...nextItems].forEach((item) => {
    const existingItem = merged.get(item.id);
    if (!existingItem) {
      merged.set(item.id, { ...item });
      return;
    }

    merged.set(item.id, {
      ...existingItem,
      name: item.name || existingItem.name,
      count: Math.max(existingItem.count, item.count),
      lastLoggedAt: pickLaterIsoTimestamp(existingItem.lastLoggedAt, item.lastLoggedAt),
    });
  });

  return [...merged.values()]
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }
      return new Date(right.lastLoggedAt).getTime() - new Date(left.lastLoggedAt).getTime();
    })
    .slice(0, 10);
}

function mergeRestaurantEntries(baseItems, nextItems) {
  const merged = new Map();

  [...baseItems, ...nextItems].forEach((item) => {
    const key = item.normalizedName;
    const existingItem = merged.get(key);
    if (!existingItem) {
      merged.set(key, { ...item });
      return;
    }

    const existingTime = Number.isFinite(existingItem.lastCheckedAt) ? existingItem.lastCheckedAt : 0;
    const nextTime = Number.isFinite(item.lastCheckedAt) ? item.lastCheckedAt : 0;
    const latestItem = nextTime >= existingTime ? item : existingItem;
    merged.set(key, {
      ...existingItem,
      name: latestItem.name,
      normalizedName: key,
      count: Math.max(existingItem.count, item.count),
      lastCheckedAt: Math.max(existingTime, nextTime),
      lastVerdictTone: latestItem.lastVerdictTone,
      lastVerdict: latestItem.lastVerdict,
      lastSourceLabel: latestItem.lastSourceLabel,
      safeBets: mergeMemoryOptions(existingItem.safeBets, item.safeBets),
      avoids: mergeMemoryOptions(existingItem.avoids, item.avoids),
      rejectedOptions: normalizeMemoryTextList([...(existingItem.rejectedOptions || []), ...(item.rejectedOptions || [])], 8),
    });
  });

  return [...merged.values()]
    .sort((left, right) => right.lastCheckedAt - left.lastCheckedAt)
    .slice(0, 12);
}

function mergeRecentAudits(baseItems, nextItems) {
  const merged = new Map();

  [...baseItems, ...nextItems].forEach((item) => {
    const key = `${item.normalizedName}:${item.checkedAt}`;
    if (merged.has(key)) {
      return;
    }
    merged.set(key, { ...item });
  });

  return [...merged.values()]
    .sort((left, right) => right.checkedAt - left.checkedAt)
    .slice(0, 8);
}

function pickLaterIsoTimestamp(leftValue, rightValue) {
  const leftTime = Date.parse(leftValue || "") || 0;
  const rightTime = Date.parse(rightValue || "") || 0;
  return rightTime >= leftTime ? rightValue || leftValue || null : leftValue || rightValue || null;
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

function getRestaurantRejectedOptions(restaurantName) {
  return getRestaurantMemoryFor(restaurantName)?.rejectedOptions || [];
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
    rejectedOptions: normalizeMemoryTextList(existingEntry?.rejectedOptions || [], 8),
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

function rememberFavoriteOrder(restaurantName, item) {
  const normalizedRestaurantName = normalizeMemoryKey(restaurantName);
  const normalizedTitle = normalizeMemoryKey(item?.title);
  if (!normalizedRestaurantName || !normalizedTitle) {
    return;
  }

  const key = `${normalizedRestaurantName}::${normalizedTitle}`;
  const existingFavorite = memory.preferences.favoriteOrders.find((entry) => entry.key === key);
  const now = Date.now();
  if (existingFavorite) {
    existingFavorite.count += 1;
    existingFavorite.note = item.note || existingFavorite.note;
    existingFavorite.lastSeenAt = now;
  } else {
    memory.preferences.favoriteOrders.push({
      key,
      restaurantName,
      title: item.title,
      note: item.note || "",
      count: 1,
      lastSeenAt: now,
    });
  }

  memory.preferences.favoriteOrders = memory.preferences.favoriteOrders
    .slice()
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }
      return right.lastSeenAt - left.lastSeenAt;
    })
    .slice(0, 12);

  saveMemory();
}

function rememberRestaurantRejection(restaurantName, optionTitle) {
  const restaurantEntry = getRestaurantMemoryFor(restaurantName);
  if (!restaurantEntry) {
    return;
  }
  restaurantEntry.rejectedOptions = normalizeMemoryTextList([...restaurantEntry.rejectedOptions, optionTitle], 8);
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

function rememberActualMeal(title, group) {
  const normalizedTitle = title.trim();
  if (!normalizedTitle) {
    return false;
  }

  const normalizedGroup = group || "actual";
  const id = `actual:${normalizeMemoryKey(normalizedGroup)}:${normalizeMemoryKey(normalizedTitle)}`;
  const existingEntry = memory.preferences.favoriteMeals.find((entry) => entry.id === id);
  if (existingEntry) {
    existingEntry.count += 1;
    existingEntry.lastLoggedAt = new Date().toISOString();
  } else {
    memory.preferences.favoriteMeals.push({
      id,
      name: normalizedTitle,
      group: normalizedGroup,
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
    .slice(0, 12);

  saveMemory();
  return true;
}

function rememberFavoriteDrink(name, id = "") {
  const normalizedName = name.trim();
  if (!normalizedName) {
    return false;
  }

  const preferenceId = id || `drink:${normalizeMemoryKey(normalizedName)}`;
  const existingEntry = memory.preferences.favoriteDrinks.find((entry) => entry.id === preferenceId);
  if (existingEntry) {
    existingEntry.count += 1;
    existingEntry.lastLoggedAt = new Date().toISOString();
  } else {
    memory.preferences.favoriteDrinks.push({
      id: preferenceId,
      name: normalizedName,
      count: 1,
      lastLoggedAt: new Date().toISOString(),
    });
  }

  memory.preferences.favoriteDrinks = memory.preferences.favoriteDrinks
    .slice()
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }
      return new Date(right.lastLoggedAt).getTime() - new Date(left.lastLoggedAt).getTime();
    })
    .slice(0, 10);

  saveMemory();
  return true;
}

function getActualMealPreferenceEntries() {
  return memory.preferences.favoriteMeals.filter((entry) => entry.id.startsWith("actual:"));
}

function getFavoriteDrinkEntries() {
  return memory.preferences.favoriteDrinks;
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

function getFavoriteOrderCount(restaurantName, title) {
  const key = `${normalizeMemoryKey(restaurantName)}::${normalizeMemoryKey(title)}`;
  return memory.preferences.favoriteOrders.find((entry) => entry.key === key)?.count || 0;
}

function applyRestaurantOptionPreferences(analysis, restaurantName) {
  const rememberedRejectedOptions = getRestaurantRejectedOptions(restaurantName);
  const rejectedOptions = normalizeMemoryTextList([...(analysis.rejectedOptions || []), ...rememberedRejectedOptions], 8);
  const rejectedKeys = new Set(rejectedOptions.map((item) => normalizeMemoryKey(item)));
  const candidateOptions = normalizeMemoryOptions(analysis.candidateOptions.length ? analysis.candidateOptions : analysis.goodOptions)
    .slice()
    .sort((left, right) => {
      const leftCount = getFavoriteOrderCount(restaurantName, left.title);
      const rightCount = getFavoriteOrderCount(restaurantName, right.title);
      if (rightCount !== leftCount) {
        return rightCount - leftCount;
      }
      return 0;
    });

  const usableOptions = candidateOptions.filter((item) => !rejectedKeys.has(normalizeMemoryKey(item.title)));
  return {
    ...analysis,
    candidateOptions,
    rejectedOptions,
    goodOptions: usableOptions.slice(0, 3),
    alternateOptions: usableOptions.slice(3, 6),
  };
}

function applyRestaurantMemory(analysis, restaurantName) {
  const remembered = getRestaurantMemoryFor(restaurantName);
  const noteBits = [];

  if (remembered) {
    noteBits.push(`Memory: ${remembered.count} prior ${remembered.count === 1 ? "audit" : "audits"} for ${remembered.name}.`);
    if (remembered.safeBets.length) {
      noteBits.push(`Previous workable picks: ${remembered.safeBets.slice(0, 3).map((item) => item.title).join(", ")}.`);
    }
    if (remembered.rejectedOptions.length) {
      noteBits.push(`Previously rejected here: ${remembered.rejectedOptions.join(", ")}.`);
    }
  }

  return applyRestaurantOptionPreferences(
    {
      ...analysis,
      notes: `${analysis.notes} ${noteBits.join(" ")}`.trim(),
      candidateOptions: mergeMemoryOptions(analysis.candidateOptions, remembered?.safeBets || []),
      rejectedOptions: remembered?.rejectedOptions || [],
    },
    restaurantName,
  );
}

function handleSaveActualMeal() {
  const input = document.getElementById("actual-meal-input");
  const group = document.getElementById("actual-meal-context").value;
  if (!rememberActualMeal(input.value, group)) {
    showToast("Type the actual meal first.");
    return;
  }

  const savedValue = input.value.trim();
  input.value = "";
  renderMeals();
  renderMemory();
  showToast(`${savedValue} saved to meal memory.`);
}

function handleSaveActualDrink() {
  const input = document.getElementById("actual-drink-input");
  if (!rememberFavoriteDrink(input.value)) {
    showToast("Type the actual drink first.");
    return;
  }

  const savedValue = input.value.trim();
  input.value = "";
  renderDrinkButtons();
  renderAlcohol();
  renderMemory();
  showToast(`${savedValue} saved to drink memory.`);
}

function handleRestaurantOptionAction(event) {
  const button = event.target.closest("[data-restaurant-option-action]");
  if (!button) {
    return;
  }

  const listName = button.dataset.restaurantOptionList;
  const index = Number.parseInt(button.dataset.restaurantOptionIndex || "-1", 10);
  const list = listName === "alternate" ? state.restaurantAudit.alternateOptions : state.restaurantAudit.goodOptions;
  const option = list[index];
  if (!option) {
    return;
  }

  if (button.dataset.restaurantOptionAction === "ate") {
    rememberActualMeal(option.title, "restaurant");
    rememberFavoriteOrder(state.restaurantAudit.restaurantName || "Restaurant", option);
    state.restaurantAudit = applyRestaurantOptionPreferences(state.restaurantAudit, state.restaurantAudit.restaurantName || "Restaurant");
    saveState();
    renderMeals();
    renderMemory();
    renderRestaurantAudit();
    showToast(`${option.title} saved as an actual order.`);
    return;
  }

  state.restaurantAudit.rejectedOptions = normalizeMemoryTextList([...state.restaurantAudit.rejectedOptions, option.title], 8);
  state.restaurantAudit = applyRestaurantOptionPreferences(state.restaurantAudit, state.restaurantAudit.restaurantName || "Restaurant");
  saveState();
  rememberRestaurantRejection(state.restaurantAudit.restaurantName || "Restaurant", option.title);
  renderRestaurantAudit();
  renderMemory();
  showToast("Fine. Rotating in the next best options.");
}

function setStepsValue(nextValue, source) {
  state.steps = nextValue;
  state.stepsSource = source;
  state.stepsUpdatedAt = Date.now();
  saveState();
}

function maybeImportStepsFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const rawSteps = params.get("steps");
  if (!rawSteps) {
    return "";
  }

  const nextValue = Number.parseInt(rawSteps, 10);
  if (!Number.isFinite(nextValue) || nextValue < 0) {
    params.delete("steps");
    params.delete("stepsSource");
    params.delete("source");
    const nextSearch = params.toString();
    const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
    return "";
  }

  const source = params.get("stepsSource") || params.get("source") || "apple-health-shortcut";
  setStepsValue(nextValue, source);
  params.delete("steps");
  params.delete("stepsSource");
  params.delete("source");
  const nextSearch = params.toString();
  const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
  return `Imported ${nextValue.toLocaleString()} steps from ${formatStepsSourceLabel(source)}.`;
}

function formatStepsSourceLabel(source) {
  if (source === "apple-health-shortcut") {
    return "Apple Shortcut import";
  }
  if (source === "manual") {
    return "Manual update";
  }
  return source
    .split(/[-_]+/)
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(" ");
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
  void clearPersistentMemory().finally(() => {
    saveMemory();
  });
  renderMemory();
  renderMeals();
  renderRestaurantAudit();
  showToast("Memory cleared.");
}

function addDislikedFood(rawValue) {
  const normalizedValue = rawValue.trim().toLowerCase();
  if (!normalizedValue || normalizedValue.length < 2) {
    showToast("Use a real food to avoid.");
    return;
  }

  if (memory.preferences.dislikedFoods.includes(normalizedValue)) {
    showToast("That food is already on the avoid list.");
    return;
  }

  memory.preferences.dislikedFoods.push(normalizedValue);
  memory.preferences.dislikedFoods = memory.preferences.dislikedFoods.slice().sort();
  saveMemory();
  renderMeals();
  renderRestaurantAudit();
  renderMemory();
  showToast(`${normalizedValue} added to disliked foods.`);
}

function removeDislikedFood(value) {
  memory.preferences.dislikedFoods = memory.preferences.dislikedFoods.filter((entry) => entry !== value);
  saveMemory();
  renderMeals();
  renderRestaurantAudit();
  renderMemory();
  showToast(`${value} removed from disliked foods.`);
}

function getDislikedFoodMatches(text) {
  const haystack = String(text || "").toLowerCase();
  return memory.preferences.dislikedFoods.filter((food) => haystack.includes(food));
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
  rememberFavoriteDrink(drink.name, drink.id);
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
    stepsSource: "manual",
    stepsUpdatedAt: null,
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
    stepsSource: typeof existingState.stepsSource === "string" ? existingState.stepsSource : defaults.stepsSource,
    stepsUpdatedAt: Number.isFinite(existingState.stepsUpdatedAt) ? existingState.stepsUpdatedAt : defaults.stepsUpdatedAt,
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
    candidateOptions: [],
    alternateOptions: [],
    rejectedOptions: [],
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
    candidateOptions: Array.isArray(audit?.candidateOptions)
      ? audit.candidateOptions
          .filter((item) => item && typeof item.title === "string" && typeof item.note === "string")
          .slice(0, 10)
      : defaults.candidateOptions,
    alternateOptions: Array.isArray(audit?.alternateOptions)
      ? audit.alternateOptions
          .filter((item) => item && typeof item.title === "string" && typeof item.note === "string")
          .slice(0, 5)
      : defaults.alternateOptions,
    rejectedOptions: normalizeMemoryTextList(audit?.rejectedOptions, 8),
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