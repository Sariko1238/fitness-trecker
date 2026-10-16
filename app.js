/**
 * StravaPulse AI — Athletic Fitness Tracker, Nutrition, Leaflet Maps & AI Coach
 * Pure Vanilla JavaScript (ES6+), Leaflet.js, Chart.js, LocalStorage Persistence
 */

// ==========================================================================
// 1. I18N DICTIONARY (RUSSIAN & ENGLISH)
// ==========================================================================
const I18N = {
  ru: {
    navDashboard: "Дашборд & Графики",
    navWorkouts: "Лента тренировок",
    navMap: "Карта маршрутов",
    navNutrition: "Дневник питания",
    navSync: "Apple Health & CSV",
    navCoach: "ИИ-Тренер Pulse",
    quickAddWorkout: "Новая тренировка",
    healthKitReady: "HealthKit готов",
    titleDashboard: "Дашборд и Аналитика",
    subtitleDashboard: "Сводка тренировок, энергии и прогресса",
    titleMap: "GPS Карта маршрутов",
    subtitleMap: "Интерактивная карта пробежек и заездов в стиле Strava",
    quickSyncApple: "Apple Health Sync",
    btnNewActivity: "Тренировка",
    btnNewMeal: "Приём пищи",
    welcomeBack: "С возвращением,",
    dashboardGreeting: "Отличный день для закрытия колец активности и личных рекордов.",
    timeframe7d: "7 дней",
    timeframe30d: "30 дней",
    timeframeAll: "Всё время",
    activityRingsTitle: "Кольца активности",
    ringsToday: "Сегодня",
    ringMove: "Движение",
    ringExercise: "Упражнения",
    ringWater: "Вода / Баланс",
    kpiTotalDistance: "Дистанция",
    kpiCaloriesBurned: "Сожжено ккал",
    kpiActiveTime: "Время в движении",
    kpiAvgHeartRate: "Средний пульс",
    unitKm: "км",
    unitKcal: "ккал",
    unitBpm: "уд/мин",
    chartLoadTitle: "Нагрузка и Дистанция по дням",
    chartLoadSubtitle: "Километраж и длительность тренировок",
    badgeKm: "Км",
    badgeMin: "Мин",
    chartEnergyTitle: "Энергетический баланс (Потреблено vs Сожжено)",
    chartEnergySubtitle: "Калории из питания против потраченных калорий",
    badgeFood: "Питание",
    badgeBurned: "Расход",
    chartHrPaceTitle: "Динамика пульса и темпа",
    chartHrPaceSubtitle: "Средний пульс и скорость по тренировкам",
    badgeBpm: "Пульс",
    badgePace: "Темп",
    chartMacrosTitle: "Баланс макронутриентов (БЖУ)",
    chartMacrosSubtitle: "Соотношение белков, жиров и углеводов",
    badgeToday: "Сегодня",
    dashMapBadge: "Strava Live GPS Map",
    dashMapTitle: "Карта маршрутов и географический прогресс",
    dashMapDesc: "Все ваши пробежки и велозаезды синхронизированы на интерактивной карте мира. Исследуйте треки, высотный рельеф и темп в реальном времени.",
    btnOpenWorldMap: "Открыть Карту Мира",
    btnFitAll: "Весь мир",
    btnLocateMe: "Найти меня",
    mapGpsTracks: "GPS Маршрутов",
    mapTotalKm: "Общая дистанция",
    mapActiveCity: "Локации",
    drawerRoutesTitle: "Маршруты в фокусе",
    routeBuilderLabel: "Интерактивный GPS-маршрут (кликните для рисования)",
    btnLiveGps: "Записать по GPS (Live)",
    btnPresetRoute: "Круг в парке",
    btnClearRoute: "Очистить",
    searchWorkoutsPlaceholder: "Поиск по названию или заметкам...",
    filterSport: "Спорт:",
    sportAll: "Все активности",
    sportRun: "🏃 Бег",
    sportRide: "🚴 Велосипед",
    sportSwim: "🏊 Плавание",
    sportStrength: "🏋️ Силовая",
    sportWalk: "🚶 Ходьба",
    sportHIIT: "⚡ HIIT / Кардио",
    filterSort: "Сортировка:",
    sortDateDesc: "Сначала новые",
    sortDateAsc: "Сначала старые",
    sortDistDesc: "Макс. дистанция",
    sortCalDesc: "Макс. калории",
    sortDurDesc: "Макс. длительность",
    btnRecordWorkout: "Записать тренировку",
    emptyWorkoutsTitle: "Тренировок не найдено",
    emptyWorkoutsSub: "Добавьте новую активность или измените параметры поиска.",
    btnToday: "Сегодня",
    btnAddMeal: "Добавить блюдо",
    labelKcalConsumed: "съедено ккал",
    labelDailyTarget: "Норма цели",
    labelBurnedToday: "Тренировки",
    labelRemaining: "Остаток",
    dailyMacrosTitle: "Баланс КБЖУ на день",
    macroProtein: "Белки",
    macroFat: "Жиры",
    macroCarbs: "Углеводы",
    waterTrackerTitle: "Трекер воды",
    catBreakfast: "Завтрак",
    catLunch: "Обед",
    catDinner: "Ужин",
    catSnacks: "Перекус",
    appleSyncHeroTitle: "Беспроводная синхронизация с Apple Watch и iPhone",
    appleSyncHeroDesc: "Мгновенное подключение к базе данных HealthKit. Автоматический импорт тренировок с датчиков Apple Watch: точный пульс в реальном времени, активные калории, каденс, GPS-трек и набор высоты.",
    featHr: "Непрерывный мониторинг ЧСС",
    featGps: "GPS-дистанция и набор высоты",
    featRings: "Закрытие колец активности",
    btnStartLiveSync: "Запустить Live-синхронизацию",
    btnSampleHealthExport: "Демо HealthKit экспорт",
    csvImportTitle: "Импорт файлов CSV / Apple Health XML / GPX",
    csvImportSubtitle: "Перетащите файл или выберите на компьютере",
    btnDownloadTemplate: "Шаблон CSV",
    dropzonePrompt: "Перетащите сюда файл .csv, .xml или .gpx",
    dropzoneSub: "Поддерживаются файлы GPX, CSV Strava/Garmin и выгрузка HealthKit",
    btnBrowseFiles: "Выбрать файл",
    importSuccessTitle: "Импорт успешно завершён",
    exportHubTitle: "Экспорт и Резервное копирование",
    exportWorkoutsTitle: "Тренировки (CSV с GPS)",
    exportWorkoutsDesc: "Полный архив со всеми параметрами темпа, пульса, калорий и координат",
    exportNutritionTitle: "Дневник питания (CSV)",
    exportNutritionDesc: "Все приёмы пищи, граммы БЖУ, калории и время приёма",
    exportBackupTitle: "Полный бэкап (JSON)",
    exportBackupDesc: "Вся история, координаты маршрутов, настройки и переписка с ИИ-тренером",
    btnExport: "Экспорт",
    btnBackup: "Бэкап",
    coachOnlineStatus: "Аналитик онлайн",
    coachContextTitle: "Текущие данные атлета",
    cStatWeeklyDist: "Дистанция за 7 дней:",
    cStatAvgHr: "Средний пульс нагрузок:",
    cStatCalBalance: "Баланс ккал (вх/вых):",
    cStatAvgProtein: "Средний белок в день:",
    cStatRecovery: "Индекс восстановления:",
    coachEngineTitle: "Движок ИИ",
    quickPromptsLabel: "Быстрые запросы:",
    promptWeekly: "Проанализируй тренировки за неделю",
    promptNutrition: "Оцени баланс КБЖУ и питание",
    promptHr: "Проверь пульс и риск перетренированности",
    promptTomorrow: "План тренировок и питания на завтра",
    coachWelcomeMsg: "Привет, атлет! Я твой персональный спортивный аналитик и тренер. Я изучил твои свежие тренировки, темп, зоны пульса, GPS-маршруты и питание за последние 7 дней. Выбери быстрый запрос вверху или напиши любой вопрос!",
    coachInputPlaceholder: "Спроси тренера о пульсе, питании или маршрутах...",
    clearChat: "Очистить историю",
    chatDisclaimer: "Советы носят рекомендательный характер для спортивной формы",
    modalAddWorkoutTitle: "Новая тренировка",
    modalEditWorkoutTitle: "Редактировать тренировку",
    fieldTitle: "Название активности *",
    fieldType: "Вид спорта *",
    fieldDate: "Дата и время *",
    fieldDuration: "Длительность (мин) *",
    fieldDistance: "Дистанция (км)",
    fieldCalories: "Калории (ккал) *",
    fieldHeartRate: "Средний пульс (уд/мин)",
    fieldElevation: "Набор высоты (м)",
    calculatedPace: "Расчётный темп:",
    fieldNotes: "Заметки и ощущения",
    btnCancel: "Отмена",
    btnSaveWorkout: "Сохранить тренировку",
    modalAddMealTitle: "Добавить приём пищи",
    modalEditMealTitle: "Редактировать блюдо",
    fieldMealName: "Название блюда / продукта *",
    fieldMealType: "Приём пищи *",
    fieldTime: "Время приёма *",
    fieldProtein: "Белки (г)",
    fieldFat: "Жиры (г)",
    fieldCarbs: "Углеводы (г)",
    btnSaveMeal: "Сохранить блюдо",
    syncConnecting: "Поиск Apple Watch Ultra...",
    syncReadingHealth: "Установление защищённого канала HealthKit",
    syncStep1: "Подключение к Bluetooth & HealthKit daemon...",
    syncStep2: "Чтение записей HKWorkoutActivityType...",
    syncStep3: "Синхронизация пульсовых зон и GPS-дистанции...",
    syncStep4: "Обновление дашборда и аналитики...",
    btnClose: "Закрыть",
    settingsTitle: "Настройки атлета и цели",
    setAthleteName: "Имя атлета",
    setAthleteWeight: "Вес (кг)",
    setDailyCalGoal: "Цель калорий в день (ккал)",
    setDailyWaterGoal: "Норма воды (мл)",
    setGoalProtein: "Белки цель (г)",
    setGoalFat: "Жиры цель (г)",
    setGoalCarbs: "Углеводы цель (г)",
    setFitnessGoal: "Основная спортивная цель",
    goalEndurance: "Развитие выносливости и темпа (Бег / Вело)",
    goalFatLoss: "Снижение веса и рельеф",
    goalMuscle: "Набор мышечной массы и сила",
    goalMaintenance: "Поддержание тонуса и здоровья",
    dangerZoneTitle: "Сброс данных",
    dangerZoneDesc: "Восстановить исходные демо-данные тренировок и питания за 7 дней.",
    btnRestoreDemo: "Сбросить на демо-данные",
    btnSaveSettings: "Сохранить настройки",
    mobDashboard: "Дашборд",
    mobWorkouts: "Тренировки",
    mobMap: "Карта",
    mobNutrition: "Питание",
    mobSync: "Синхрон",
    mobCoach: "ИИ",
    kudosGivenToast: "Вы поставили Kudos! 🔥",
    workoutSavedToast: "Тренировка успешно сохранена!",
    workoutDeletedToast: "Тренировка удалена",
    mealSavedToast: "Блюдо сохранено в дневнике!",
    mealDeletedToast: "Блюдо удалено",
    settingsSavedToast: "Настройки атлета обновлены!",
    demoRestoredToast: "Демо-данные успешно загружены!",
    syncCompleteToast: "Синхронизация Apple Health успешно завершена! Добавлено 3 тренировки с GPS.",
    gpsLocatedToast: "Ваша текущая геопозиция определена!",
    gpxImportedToast: "Маршрут GPX успешно загружен на карту!",
    gpsLiveStartedToast: "Запись GPS активирована! Симуляция бега запущена...",
    gpsLiveStoppedToast: "Маршрут зафиксирован и добавлен в тренировку!"
  },
  en: {
    navDashboard: "Dashboard & Analytics",
    navWorkouts: "Activities Feed",
    navMap: "Routes Map",
    navNutrition: "Nutrition & Macros",
    navSync: "Apple Health & CSV",
    navCoach: "Pulse AI Coach",
    quickAddWorkout: "New Workout",
    healthKitReady: "HealthKit Ready",
    titleDashboard: "Dashboard & Analytics",
    subtitleDashboard: "Activity, nutrition and fitness summary",
    titleMap: "GPS Routes & World Map",
    subtitleMap: "Interactive Strava-style running & cycling map",
    quickSyncApple: "Apple Health Sync",
    btnNewActivity: "Workout",
    btnNewMeal: "Meal Log",
    welcomeBack: "Welcome back,",
    dashboardGreeting: "A great day to close your rings and chase personal records.",
    timeframe7d: "7 Days",
    timeframe30d: "30 Days",
    timeframeAll: "All Time",
    activityRingsTitle: "Activity Rings",
    ringsToday: "Today",
    ringMove: "Move",
    ringExercise: "Exercise",
    ringWater: "Water / Hydration",
    kpiTotalDistance: "Total Distance",
    kpiCaloriesBurned: "Calories Burned",
    kpiActiveTime: "Active Time",
    kpiAvgHeartRate: "Avg Heart Rate",
    unitKm: "km",
    unitKcal: "kcal",
    unitBpm: "bpm",
    chartLoadTitle: "Training Load & Distance",
    chartLoadSubtitle: "Daily mileage and workout duration",
    badgeKm: "Km",
    badgeMin: "Min",
    chartEnergyTitle: "Energy Balance (In vs Burned)",
    chartEnergySubtitle: "Dietary intake calories vs training expenditure",
    badgeFood: "Food",
    badgeBurned: "Burned",
    chartHrPaceTitle: "Heart Rate & Pace Dynamics",
    chartHrPaceSubtitle: "Heart rate and speed trends across activities",
    badgeBpm: "Heart Rate",
    badgePace: "Pace",
    chartMacrosTitle: "Macronutrient Balance",
    chartMacrosSubtitle: "Protein, Fat and Carbs ratio",
    badgeToday: "Today",
    dashMapBadge: "Strava Live GPS Map",
    dashMapTitle: "Running Routes & Geographic Progression",
    dashMapDesc: "All your runs and rides synchronized on a global interactive map. Explore terrain, elevation, and pace in real-time.",
    btnOpenWorldMap: "Open World Map",
    btnFitAll: "World View",
    btnLocateMe: "Locate Me",
    mapGpsTracks: "GPS Tracks",
    mapTotalKm: "Total Distance",
    mapActiveCity: "Locations",
    drawerRoutesTitle: "Routes in Focus",
    routeBuilderLabel: "Interactive GPS Route (click to draw)",
    btnLiveGps: "Record GPS (Live)",
    btnPresetRoute: "Park Loop",
    btnClearRoute: "Clear",
    searchWorkoutsPlaceholder: "Search by title or notes...",
    filterSport: "Sport:",
    sportAll: "All Activities",
    sportRun: "🏃 Run",
    sportRide: "🚴 Ride",
    sportSwim: "🏊 Swim",
    sportStrength: "🏋️ Strength",
    sportWalk: "🚶 Walk",
    sportHIIT: "⚡ HIIT / Cardio",
    filterSort: "Sort by:",
    sortDateDesc: "Newest First",
    sortDateAsc: "Oldest First",
    sortDistDesc: "Max Distance",
    sortCalDesc: "Max Calories",
    sortDurDesc: "Max Duration",
    btnRecordWorkout: "Record Workout",
    emptyWorkoutsTitle: "No workouts found",
    emptyWorkoutsSub: "Log a new workout or adjust your search filters.",
    btnToday: "Today",
    btnAddMeal: "Add Meal",
    labelKcalConsumed: "kcal eaten",
    labelDailyTarget: "Target Goal",
    labelBurnedToday: "Workouts",
    labelRemaining: "Remaining",
    dailyMacrosTitle: "Daily Macro Targets",
    macroProtein: "Protein",
    macroFat: "Fat",
    macroCarbs: "Carbs",
    waterTrackerTitle: "Water Tracker",
    catBreakfast: "Breakfast",
    catLunch: "Lunch",
    catDinner: "Dinner",
    catSnacks: "Snacks",
    appleSyncHeroTitle: "Seamless Apple Watch & HealthKit Sync",
    appleSyncHeroDesc: "Instant bi-directional connection with Apple HealthKit. Stream workout telemetry from your Apple Watch: real-time heart rate zones, active energy, cadence, GPS trails and elevation gain.",
    featHr: "Continuous HR Telemetry",
    featGps: "GPS & Elevation Profile",
    featRings: "Close Activity Rings",
    btnStartLiveSync: "Start Live HealthKit Sync",
    btnSampleHealthExport: "Demo HealthKit Export",
    csvImportTitle: "Import CSV / Apple Health XML / GPX",
    csvImportSubtitle: "Drag & drop files or browse locally",
    btnDownloadTemplate: "CSV Template",
    dropzonePrompt: "Drag & drop your .csv, .xml or .gpx file here",
    dropzoneSub: "Supports GPX, Strava/Garmin CSV and Apple HealthKit workout exports",
    btnBrowseFiles: "Browse Files",
    importSuccessTitle: "Import Succeeded",
    exportHubTitle: "Export & Backup Center",
    exportWorkoutsTitle: "Workouts (CSV with GPS)",
    exportWorkoutsDesc: "Complete archive with distance, pace, HR, coordinates, and calories",
    exportNutritionTitle: "Nutrition Diary (CSV)",
    exportNutritionDesc: "All logged meals with macro breakdown and timestamps",
    exportBackupTitle: "Full Backup (JSON)",
    exportBackupDesc: "All athlete history, GPS routes, custom goals, and AI interactions",
    btnExport: "Export",
    btnBackup: "Backup",
    coachOnlineStatus: "Coach Online",
    coachContextTitle: "Athlete Live Context",
    cStatWeeklyDist: "7-Day Mileage:",
    cStatAvgHr: "Avg Workout HR:",
    cStatCalBalance: "Calorie In/Out:",
    cStatAvgProtein: "Avg Daily Protein:",
    cStatRecovery: "Recovery Index:",
    coachEngineTitle: "AI Intelligence Engine",
    quickPromptsLabel: "Quick Prompts:",
    promptWeekly: "Analyze weekly workouts Strava-style",
    promptNutrition: "Evaluate nutrition & macro balance",
    promptHr: "Check heart rate zones & fatigue risk",
    promptTomorrow: "Generate tomorrow's workout & meal plan",
    coachWelcomeMsg: "Hey athlete! I'm your personal sports scientist and coach. I've analyzed your recent workouts, pace curves, HR zones, GPS routes, and nutrition over the past 7 days. Tap any quick prompt above or ask me anything!",
    coachInputPlaceholder: "Ask coach about your pace, routes, or nutrition...",
    clearChat: "Clear History",
    chatDisclaimer: "Advice is generated for athletic fitness and training purposes",
    modalAddWorkoutTitle: "Log Workout",
    modalEditWorkoutTitle: "Edit Workout",
    fieldTitle: "Activity Title *",
    fieldType: "Sport Type *",
    fieldDate: "Date & Time *",
    fieldDuration: "Duration (min) *",
    fieldDistance: "Distance (km)",
    fieldCalories: "Calories (kcal) *",
    fieldHeartRate: "Avg Heart Rate (bpm)",
    fieldElevation: "Elevation Gain (m)",
    calculatedPace: "Calculated Pace:",
    fieldNotes: "Notes & Perceived Effort",
    btnCancel: "Cancel",
    btnSaveWorkout: "Save Workout",
    modalAddMealTitle: "Log Meal",
    modalEditMealTitle: "Edit Meal",
    fieldMealName: "Meal / Food Item *",
    fieldMealType: "Meal Category *",
    fieldTime: "Time *",
    fieldProtein: "Protein (g)",
    fieldFat: "Fat (g)",
    fieldCarbs: "Carbs (g)",
    btnSaveMeal: "Save Meal",
    syncConnecting: "Searching for Apple Watch Ultra...",
    syncReadingHealth: "Establishing secure HealthKit link",
    syncStep1: "Connecting to Bluetooth & HealthKit daemon...",
    syncStep2: "Reading HKWorkoutActivityType records...",
    syncStep3: "Syncing heart rate zones & GPS tracks...",
    syncStep4: "Updating dashboard & athletic performance...",
    btnClose: "Close",
    settingsTitle: "Athlete Profile & Targets",
    setAthleteName: "Athlete Name",
    setAthleteWeight: "Weight (kg)",
    setDailyCalGoal: "Daily Calorie Target (kcal)",
    setDailyWaterGoal: "Daily Water Target (ml)",
    setGoalProtein: "Protein Target (g)",
    setGoalFat: "Fat Target (g)",
    setGoalCarbs: "Carbs Target (g)",
    setFitnessGoal: "Primary Training Goal",
    goalEndurance: "Endurance & Pace Progression (Run / Bike)",
    goalFatLoss: "Fat Loss & Definition",
    goalMuscle: "Hypertrophy & Strength",
    goalMaintenance: "General Health & Tone",
    dangerZoneTitle: "Danger Zone",
    dangerZoneDesc: "Reset your data to default realistic 7-day demo activities.",
    btnRestoreDemo: "Restore Demo Data",
    btnSaveSettings: "Save Settings",
    mobDashboard: "Dashboard",
    mobWorkouts: "Activities",
    mobMap: "Map",
    mobNutrition: "Nutrition",
    mobSync: "Sync",
    mobCoach: "AI Coach",
    kudosGivenToast: "You gave Kudos! 🔥",
    workoutSavedToast: "Workout saved successfully!",
    workoutDeletedToast: "Workout deleted",
    mealSavedToast: "Meal logged successfully!",
    mealDeletedToast: "Meal deleted",
    settingsSavedToast: "Profile targets updated!",
    demoRestoredToast: "Demo activities restored!",
    syncCompleteToast: "Apple Health live sync complete! 3 activities with GPS imported.",
    gpsLocatedToast: "Current location pinpointed!",
    gpxImportedToast: "GPX track successfully added to map!",
    gpsLiveStartedToast: "GPS recording active! Live run tracker running...",
    gpsLiveStoppedToast: "GPS track recorded and assigned to workout!"
  }
};

// ==========================================================================
// 2. STATE & STORAGE CONTROLLER
// ==========================================================================
class AppState {
  constructor() {
    this.currentLang = localStorage.getItem("stravapulse_lang") || "ru";
    this.currentTheme = localStorage.getItem("stravapulse_theme") || "dark";
    this.currentTab = "dashboard";
    this.dashboardTimeframe = "7";
    this.selectedNutritionDate = this.getTodayIsoDate();

    this.settings = this.loadSettings();
    this.workouts = this.loadWorkouts();
    this.meals = this.loadMeals();
    this.water = this.loadWater();
    this.chatHistory = this.loadChat();
  }

  getTodayIsoDate() {
    const d = new Date();
    return d.toISOString().split("T")[0];
  }

  loadSettings() {
    const saved = localStorage.getItem("stravapulse_settings");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return {
      athleteName: "Алексей Романов",
      weight: 72,
      dailyCalGoal: 2400,
      dailyWaterGoal: 2500,
      proteinGoal: 150,
      fatGoal: 70,
      carbsGoal: 260,
      fitnessGoal: "endurance",
      aiEngine: "local",
      geminiApiKey: ""
    };
  }

  saveSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    localStorage.setItem("stravapulse_settings", JSON.stringify(this.settings));
  }

  loadWorkouts() {
    const saved = localStorage.getItem("stravapulse_workouts");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // If existing workouts lack coordinates, augment with seed tracks
          if (!parsed[0].coordinates) {
            return this.generateSeedWorkouts();
          }
          return parsed;
        }
      } catch (e) { }
    }
    return this.generateSeedWorkouts();
  }

  saveWorkouts() {
    localStorage.setItem("stravapulse_workouts", JSON.stringify(this.workouts));
  }

  loadMeals() {
    const saved = localStorage.getItem("stravapulse_meals");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return this.generateSeedMeals();
  }

  saveMeals() {
    localStorage.setItem("stravapulse_meals", JSON.stringify(this.meals));
  }

  loadWater() {
    const saved = localStorage.getItem("stravapulse_water");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return { [this.getTodayIsoDate()]: 2000 };
  }

  saveWater() {
    localStorage.setItem("stravapulse_water", JSON.stringify(this.water));
  }

  loadChat() {
    const saved = localStorage.getItem("stravapulse_chat");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [];
  }

  saveChat() {
    localStorage.setItem("stravapulse_chat", JSON.stringify(this.chatHistory));
  }

  // Generate realistic 7-day historical seed workouts with GPS coordinates
  generateSeedWorkouts() {
    const now = new Date();
    const day = (daysAgo, hour = 9, min = 30) => {
      const d = new Date(now);
      d.setDate(d.getDate() - daysAgo);
      d.setHours(hour, min, 0, 0);
      return d.toISOString();
    };

    return [
      {
        id: "w-1",
        title: "Утренний интервальный кросс в Лужниках",
        type: "Run",
        date: day(0, 8, 15),
        duration: 45,
        distance: 8.5,
        calories: 580,
        heartRate: 154,
        elevation: 45,
        kudos: 14,
        isKudoed: false,
        notes: "Интервалы 5x1000м в темпе 4:40 мин/км. Вокруг стадиона и набережной Лужников.",
        device: "Apple Watch Ultra 2",
        locationName: "Москва, Лужники",
        coordinates: [
          [55.7155, 37.5535], [55.7162, 37.5502], [55.7178, 37.5460], [55.7198, 37.5442],
          [55.7225, 37.5458], [55.7251, 37.5492], [55.7275, 37.5540], [55.7288, 37.5595],
          [55.7282, 37.5655], [55.7260, 37.5702], [55.7228, 37.5728], [55.7195, 37.5710],
          [55.7168, 37.5662], [55.7150, 37.5605], [55.7155, 37.5535]
        ]
      },
      {
        id: "w-2",
        title: "Шоссейный заезд на закате",
        type: "Ride",
        date: day(1, 18, 40),
        duration: 72,
        distance: 34.2,
        calories: 780,
        heartRate: 142,
        elevation: 320,
        kudos: 21,
        isKudoed: true,
        notes: "Аэробная база, стабильный каденс 92 rpm. Воробьёвы горы и набережные.",
        device: "Garmin Edge / Apple Health",
        locationName: "Москва, Воробьёвы Горы",
        coordinates: [
          [55.7095, 37.5422], [55.7118, 37.5380], [55.7145, 37.5310], [55.7180, 37.5250],
          [55.7230, 37.5180], [55.7285, 37.5120], [55.7330, 37.5050], [55.7380, 37.4980],
          [55.7420, 37.4920], [55.7450, 37.4850], [55.7485, 37.4780], [55.7510, 37.4690],
          [55.7480, 37.4620], [55.7420, 37.4680], [55.7360, 37.4790], [55.7300, 37.4910],
          [55.7240, 37.5050], [55.7180, 37.5220], [55.7120, 37.5360], [55.7095, 37.5422]
        ]
      },
      {
        id: "w-3",
        title: "Интервальная тренировка в бассейне 50м",
        type: "Swim",
        date: day(2, 7, 30),
        duration: 42,
        distance: 1.8,
        calories: 410,
        heartRate: 136,
        elevation: 0,
        kudos: 9,
        isKudoed: false,
        notes: "Кроль, отработка высокого локтя и дыхания на 3 гребка.",
        device: "Apple Watch Series 9",
        locationName: "Аквакомплекс Лужники",
        coordinates: []
      },
      {
        id: "w-4",
        title: "Функциональная силовая: Ноги и Кор",
        type: "Strength",
        date: day(3, 19, 0),
        duration: 55,
        distance: 0,
        calories: 490,
        heartRate: 146,
        elevation: 0,
        kudos: 18,
        isKudoed: false,
        notes: "Приседания со штангой, выпады, планка с отягощением. Пульс держался в зоне 3.",
        device: "Apple Health Workout",
        locationName: "Спортивный клуб",
        coordinates: []
      },
      {
        id: "w-5",
        title: "Восстановительный бег по набережной",
        type: "Run",
        date: day(4, 9, 0),
        duration: 38,
        distance: 6.4,
        calories: 420,
        heartRate: 135,
        elevation: 20,
        kudos: 11,
        isKudoed: false,
        notes: "Лёгкая 2-я зона пульса. Парк Горького и Крымская набережная.",
        device: "Apple Watch Ultra 2",
        locationName: "Москва, Парк Горького",
        coordinates: [
          [55.7340, 37.6045], [55.7322, 37.6002], [55.7300, 37.5955], [55.7275, 37.5910],
          [55.7245, 37.5875], [55.7215, 37.5840], [55.7185, 37.5815], [55.7150, 37.5802],
          [55.7185, 37.5815], [55.7215, 37.5840], [55.7245, 37.5875], [55.7275, 37.5910],
          [55.7300, 37.5955], [55.7322, 37.6002], [55.7340, 37.6045]
        ]
      },
      {
        id: "w-6",
        title: "Гравийный велокросс в лесопарке",
        type: "Ride",
        date: day(5, 11, 20),
        duration: 65,
        distance: 22.8,
        calories: 640,
        heartRate: 151,
        elevation: 210,
        kudos: 16,
        isKudoed: true,
        notes: "Техничные подъёмы и грунтовые спуски в Сокольниках.",
        device: "Garmin / Strava",
        locationName: "Москва, Парк Сокольники",
        coordinates: [
          [55.7935, 37.6740], [55.7960, 37.6710], [55.7995, 37.6690], [55.8030, 37.6715],
          [55.8060, 37.6760], [55.8080, 37.6820], [55.8075, 37.6885], [55.8045, 37.6930],
          [55.8005, 37.6950], [55.7965, 37.6920], [55.7940, 37.6850], [55.7935, 37.6740]
        ]
      },
      {
        id: "w-7",
        title: "HIIT Табата и взрывное кардио",
        type: "HIIT",
        date: day(6, 17, 30),
        duration: 32,
        distance: 0,
        calories: 360,
        heartRate: 164,
        elevation: 0,
        kudos: 12,
        isKudoed: false,
        notes: "Бёрпи, прыжки на тумбу, скакалка. Пиковый пульс доходил до 178 bpm.",
        device: "Apple Watch Ultra 2",
        locationName: "Кроссфит зал",
        coordinates: []
      }
    ];
  }

  // Generate realistic 7-day nutrition meals
  generateSeedMeals() {
    const today = this.getTodayIsoDate();
    const getDate = (offset) => {
      const d = new Date();
      d.setDate(d.getDate() - offset);
      return d.toISOString().split("T")[0];
    };

    return [
      { id: "m-1", date: today, name: "Овсяная каша с ягодами, бананом и семенами чиа", type: "breakfast", time: "08:45", cal: 440, protein: 16, fat: 12, carbs: 68 },
      { id: "m-2", date: today, name: "Куриное филе гриль с киноа и печёными овощами", type: "lunch", time: "13:30", cal: 620, protein: 52, fat: 16, carbs: 64 },
      { id: "m-3", date: today, name: "Протеиновый смузи с миндальным молоком", type: "snack", time: "16:45", cal: 260, protein: 28, fat: 6, carbs: 22 },
      { id: "m-4", date: today, name: "Филе лосося на пару с зелёной спаржей и бататом", type: "dinner", time: "19:40", cal: 600, protein: 44, fat: 22, carbs: 54 },

      { id: "m-5", date: getDate(1), name: "Омлет из 3 яиц с авокадо и цельнозерновым тостом", type: "breakfast", time: "08:30", cal: 480, protein: 26, fat: 24, carbs: 38 },
      { id: "m-6", date: getDate(1), name: "Индейка су-вид с бурым рисом и салатом", type: "lunch", time: "13:15", cal: 590, protein: 48, fat: 14, carbs: 65 },
      { id: "m-7", date: getDate(1), name: "Греческий йогурт 2% с грецкими орехами и мёдом", type: "snack", time: "17:00", cal: 240, protein: 18, fat: 10, carbs: 20 },
      { id: "m-8", date: getDate(1), name: "Паста из твёрдых сортов с креветками и шпинатом", type: "dinner", time: "20:00", cal: 580, protein: 42, fat: 14, carbs: 70 },

      { id: "m-9", date: getDate(2), name: "Сырники запечённые с ягодным соусом", type: "breakfast", time: "09:00", cal: 420, protein: 32, fat: 12, carbs: 46 },
      { id: "m-10", date: getDate(2), name: "Говядина тушёная с гречкой и маринованными огурцами", type: "lunch", time: "14:00", cal: 650, protein: 50, fat: 18, carbs: 70 },
      { id: "m-11", date: getDate(2), name: "Творог 5% с черникой", type: "dinner", time: "19:30", cal: 490, protein: 38, fat: 14, carbs: 48 },

      { id: "m-12", date: getDate(3), name: "Гранола с йогуртом и свежей малиной", type: "breakfast", time: "08:30", cal: 450, protein: 18, fat: 15, carbs: 62 },
      { id: "m-13", date: getDate(3), name: "Боул с лососем, чукой и бурым рисом", type: "lunch", time: "13:45", cal: 680, protein: 42, fat: 24, carbs: 72 },
      { id: "m-14", date: getDate(3), name: "Куриная грудка с брокколи и чечевицей", type: "dinner", time: "20:10", cal: 510, protein: 46, fat: 10, carbs: 56 },

      { id: "m-15", date: getDate(4), name: "Шакшука с томатами, зеленью и ржаным хлебом", type: "breakfast", time: "08:50", cal: 430, protein: 22, fat: 20, carbs: 40 },
      { id: "m-16", date: getDate(4), name: "Стейк из тунца с кускусом и овощами", type: "lunch", time: "13:30", cal: 610, protein: 48, fat: 15, carbs: 66 },
      { id: "m-17", date: getDate(4), name: "Тёплый салат с говядиной и руколой", type: "dinner", time: "19:50", cal: 520, protein: 40, fat: 22, carbs: 38 },

      { id: "m-18", date: getDate(5), name: "Протеиновые панкейки с кленовым сиропом", type: "breakfast", time: "09:15", cal: 460, protein: 30, fat: 10, carbs: 60 },
      { id: "m-19", date: getDate(5), name: "Паста карбонара облегченная с индейкой", type: "lunch", time: "14:10", cal: 670, protein: 44, fat: 22, carbs: 74 },
      { id: "m-20", date: getDate(5), name: "Салат с креветками, авокадо и грейпфрутом", type: "dinner", time: "20:00", cal: 480, protein: 36, fat: 18, carbs: 42 },

      { id: "m-21", date: getDate(6), name: "Тосты с арахисовой пастой и бананом", type: "breakfast", time: "08:40", cal: 470, protein: 16, fat: 22, carbs: 54 },
      { id: "m-22", date: getDate(6), name: "Куриный суп с лапшой и яйцом", type: "lunch", time: "13:20", cal: 560, protein: 42, fat: 16, carbs: 60 },
      { id: "m-23", date: getDate(6), name: "Запечённая дорадо с лимоном и розмарином", type: "dinner", time: "19:40", cal: 510, protein: 45, fat: 18, carbs: 38 }
    ];
  }

  restoreDemoData() {
    this.workouts = this.generateSeedWorkouts();
    this.meals = this.generateSeedMeals();
    this.water = { [this.getTodayIsoDate()]: 2000 };
    this.saveWorkouts();
    this.saveMeals();
    this.saveWater();
  }
}

// ==========================================================================
// 3. MAIN APPLICATION CONTROLLER
// ==========================================================================
class StravaPulseApp {
  constructor() {
    this.state = new AppState();
    this.charts = {};

    // Leaflet Maps instances
    this.worldMap = null;
    this.worldMapTileLayer = null;
    this.worldMapRoutesLayer = null;
    this.userLocationMarker = null;

    // Modal Route Builder state
    this.modalRouteMap = null;
    this.modalMapTileLayer = null;
    this.currentModalRouteCoords = [];
    this.modalPolyline = null;
    this.modalStartMarker = null;
    this.modalFinishMarker = null;
    this.isLiveGpsActive = false;
    this.liveGpsTimerInterval = null;
    this.liveGpsSeconds = 0;
    this.liveGpsWatchId = null;

    this.initTheme();
    this.initLanguage();
    this.initDomElements();
    this.bindEvents();
    this.initWatchSimulationClock();

    // Render initial views
    this.renderUserProfile();
    this.renderDashboard();
    this.renderWorkoutsFeed();
    this.renderNutritionTab();
    this.renderAIContext();
    this.renderChatMessages();

    // Resize listener
    window.addEventListener("resize", () => {
      this.drawActivityRings();
      if (this.worldMap) this.worldMap.invalidateSize();
    });
  }

  // ------------------------------------------------------------------------
  // HAVERSINE DISTANCE FORMULA
  // ------------------------------------------------------------------------
  calculateHaversineDistanceKm(coords) {
    if (!coords || coords.length < 2) return 0;
    let totalDist = 0;
    const R = 6371; // Earth radius in km
    for (let i = 0; i < coords.length - 1; i++) {
      const lat1 = (coords[i][0] * Math.PI) / 180;
      const lon1 = (coords[i][1] * Math.PI) / 180;
      const lat2 = (coords[i + 1][0] * Math.PI) / 180;
      const lon2 = (coords[i + 1][1] * Math.PI) / 180;
      const dLat = lat2 - lat1;
      const dLon = lon2 - lon1;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      totalDist += R * c;
    }
    return Number(totalDist.toFixed(2));
  }

  // ------------------------------------------------------------------------
  // THEME & I18N
  // ------------------------------------------------------------------------
  initTheme() {
    document.documentElement.setAttribute("data-theme", this.state.currentTheme);
    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon) {
      themeIcon.className = this.state.currentTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    }
  }

  toggleTheme() {
    this.state.currentTheme = this.state.currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("stravapulse_theme", this.state.currentTheme);
    this.initTheme();
    this.updateChartsTheme();
    this.drawActivityRings();
    this.updateMapTiles();
  }

  initLanguage() {
    this.applyLanguage(this.state.currentLang);
  }

  toggleLanguage() {
    const nextLang = this.state.currentLang === "ru" ? "en" : "ru";
    this.state.currentLang = nextLang;
    localStorage.setItem("stravapulse_lang", nextLang);
    this.applyLanguage(nextLang);
    this.renderUserProfile();
    this.renderDashboard();
    this.renderWorkoutsFeed();
    this.renderNutritionTab();
    this.renderAIContext();
    if (this.state.currentTab === "map") {
      this.renderWorldMapRoutes();
    }
  }

  applyLanguage(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    const langLabel = document.getElementById("langLabel");
    const langFlag = document.querySelector(".lang-flag");
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    if (langFlag) langFlag.textContent = lang === "ru" ? "🇷🇺" : "🇺🇸";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });
  }

  t(key) {
    return I18N[this.state.currentLang][key] || key;
  }

  // ------------------------------------------------------------------------
  // DOM ELEMENTS & EVENT BINDINGS
  // ------------------------------------------------------------------------
  initDomElements() {
    this.sidebar = document.getElementById("sidebar");
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn");
    this.mobileCloseBtn = document.getElementById("mobileCloseBtn");
    this.navItems = document.querySelectorAll(".nav-item, .mobile-nav-item");

    this.workoutModal = document.getElementById("workoutModal");
    this.mealModal = document.getElementById("mealModal");
    this.appleSyncModal = document.getElementById("appleSyncModal");
    this.settingsModal = document.getElementById("settingsModal");

    this.workoutForm = document.getElementById("workoutForm");
    this.mealForm = document.getElementById("mealForm");
    this.settingsForm = document.getElementById("settingsForm");
    this.coachChatForm = document.getElementById("coachChatForm");

    this.workoutSearchInput = document.getElementById("workoutSearchInput");
    this.workoutSportFilter = document.getElementById("workoutSportFilter");
    this.workoutSortFilter = document.getElementById("workoutSortFilter");

    this.csvDropzone = document.getElementById("csvDropzone");
    this.csvFileInput = document.getElementById("csvFileInput");
  }

  bindEvents() {
    // Theme & Lang
    document.getElementById("themeToggleBtn")?.addEventListener("click", () => this.toggleTheme());
    document.getElementById("langToggleBtn")?.addEventListener("click", () => this.toggleLanguage());

    // Mobile Sidebar toggle
    this.mobileMenuBtn?.addEventListener("click", () => {
      this.sidebar.classList.add("mobile-open");
    });
    this.mobileCloseBtn?.addEventListener("click", () => {
      this.sidebar.classList.remove("mobile-open");
    });

    // Navigation switching
    this.navItems.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        if (tab) this.switchTab(tab);
      });
    });

    // Dashboard Timeframe buttons
    document.querySelectorAll(".timeframe-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".timeframe-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.dashboardTimeframe = btn.getAttribute("data-range");
        this.renderDashboard();
      });
    });

    // Dashboard PDF Export Report
    document.getElementById("downloadDashboardPdfBtn")?.addEventListener("click", () => {
      this.exportDashboardPdf();
    });

    // Quick open World Map from dashboard banner
    document.getElementById("openWorldMapFromDashBtn")?.addEventListener("click", () => {
      this.switchTab("map");
    });

    // Map tab controls
    document.querySelectorAll(".map-filter-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".map-filter-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        const sport = pill.getAttribute("data-sport") || "all";
        this.renderWorldMapRoutes(sport);
      });
    });

    document.getElementById("mapRouteSelect")?.addEventListener("change", (e) => {
      const id = e.target.value;
      if (id === "all") {
        this.fitAllMapRoutes();
      } else {
        this.focusOnWorkoutRoute(id);
      }
    });

    document.getElementById("btnLocateMe")?.addEventListener("click", () => this.locateUserOnMap());
    document.getElementById("btnFitAllRoutes")?.addEventListener("click", () => this.fitAllMapRoutes());

    // Open Workout Modal
    const openAddWorkout = () => this.openWorkoutModal();
    document.getElementById("sidebarAddWorkoutBtn")?.addEventListener("click", openAddWorkout);
    document.getElementById("topAddWorkoutBtn")?.addEventListener("click", openAddWorkout);
    document.getElementById("feedAddWorkoutBtn")?.addEventListener("click", openAddWorkout);
    document.getElementById("emptyAddWorkoutBtn")?.addEventListener("click", openAddWorkout);

    // Workout Modal close & submit
    document.getElementById("closeWorkoutModalBtn")?.addEventListener("click", () => this.closeWorkoutModal());
    document.getElementById("cancelWorkoutBtn")?.addEventListener("click", () => this.closeWorkoutModal());
    this.workoutForm?.addEventListener("submit", (e) => this.handleWorkoutSubmit(e));

    // Live pace calculation in workout modal
    ["workoutDurationInput", "workoutDistanceInput", "workoutTypeInput"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => this.updateWorkoutPacePreview());
    });

    // Route Builder actions in workout modal
    document.getElementById("clearRouteBtn")?.addEventListener("click", () => this.clearModalRoute());
    document.getElementById("presetRouteBtn")?.addEventListener("click", () => this.applyPresetRoute());
    document.getElementById("liveGpsRecordBtn")?.addEventListener("click", () => this.toggleLiveGpsRecording());

    // Workouts Feed Search & Filtering
    this.workoutSearchInput?.addEventListener("input", () => this.renderWorkoutsFeed());
    this.workoutSportFilter?.addEventListener("change", () => this.renderWorkoutsFeed());
    this.workoutSortFilter?.addEventListener("change", () => this.renderWorkoutsFeed());

    // Open Meal Modal
    const openAddMeal = (defaultType = "breakfast") => this.openMealModal(null, defaultType);
    document.getElementById("topAddMealBtn")?.addEventListener("click", () => openAddMeal("breakfast"));
    document.getElementById("nutritionAddMealBtn")?.addEventListener("click", () => openAddMeal("lunch"));
    document.querySelectorAll(".btn-quick-add-cat").forEach((btn) => {
      btn.addEventListener("click", () => openAddMeal(btn.getAttribute("data-type") || "breakfast"));
    });

    // Meal Modal close & submit
    document.getElementById("closeMealModalBtn")?.addEventListener("click", () => this.closeMealModal());
    document.getElementById("cancelMealBtn")?.addEventListener("click", () => this.closeMealModal());
    this.mealForm?.addEventListener("submit", (e) => this.handleMealSubmit(e));

    // Nutrition Date navigation
    document.getElementById("nutPrevDayBtn")?.addEventListener("click", () => this.changeNutritionDate(-1));
    document.getElementById("nutNextDayBtn")?.addEventListener("click", () => this.changeNutritionDate(1));
    document.getElementById("nutTodayBtn")?.addEventListener("click", () => {
      this.state.selectedNutritionDate = this.state.getTodayIsoDate();
      this.renderNutritionTab();
    });

    // Water Tracker buttons
    document.getElementById("waterAddBtn")?.addEventListener("click", () => this.adjustWater(250));
    document.getElementById("waterSubBtn")?.addEventListener("click", () => this.adjustWater(-250));
    document.getElementById("waterResetBtn")?.addEventListener("click", () => this.resetWater());

    // Settings Modal
    document.getElementById("openSettingsBtn")?.addEventListener("click", () => this.openSettingsModal());
    document.getElementById("closeSettingsModalBtn")?.addEventListener("click", () => this.closeSettingsModal());
    document.getElementById("cancelSettingsBtn")?.addEventListener("click", () => this.closeSettingsModal());
    this.settingsForm?.addEventListener("submit", (e) => this.handleSettingsSubmit(e));
    document.getElementById("resetDemoDataBtn")?.addEventListener("click", async () => {
      const confirmed = await this.confirmDialog({
        title: "Сбросить на демо-данные?",
        text: "Вы уверены, что хотите восстановить исходные демонстрационные тренировки, GPS-маршруты и дневник питания?",
        confirmButtonText: "Да, восстановить",
        cancelButtonText: "Отмена",
        icon: "warning"
      });

      if (confirmed) {
        this.state.restoreDemoData();
        this.closeSettingsModal();
        this.renderUserProfile();
        this.renderDashboard();
        this.renderWorkoutsFeed();
        this.renderNutritionTab();
        this.renderAIContext();
        if (this.worldMap) this.renderWorldMapRoutes();
        this.showToast(this.t("demoRestoredToast"), "info");
      }
    });

    // Apple Health Live Sync
    const startSync = () => this.triggerAppleLiveSync();
    document.getElementById("quickAppleSyncBtn")?.addEventListener("click", startSync);
    document.getElementById("triggerLiveSyncBtn")?.addEventListener("click", startSync);
    document.getElementById("closeSyncModalBtn")?.addEventListener("click", () => {
      this.appleSyncModal.classList.add("hidden");
    });

    // CSV & File Import Dropzone
    this.setupDropzone();
    document.getElementById("browseFileBtn")?.addEventListener("click", () => this.csvFileInput.click());
    this.csvFileInput?.addEventListener("change", (e) => this.handleFileSelect(e));

    // Export buttons
    document.getElementById("downloadCsvTemplateBtn")?.addEventListener("click", () => this.downloadCsvTemplate());
    document.getElementById("exportWorkoutsCsvBtn")?.addEventListener("click", () => this.exportWorkoutsCsv());
    document.getElementById("exportNutritionCsvBtn")?.addEventListener("click", () => this.exportNutritionCsv());
    document.getElementById("exportFullBackupBtn")?.addEventListener("click", () => this.exportFullBackup());
    document.getElementById("exportAppleHealthXmlBtn")?.addEventListener("click", () => this.exportDemoHealthXml());

    // AI Coach Engine Selection
    const engineRadios = document.querySelectorAll('input[name="aiEngineRadio"]');
    engineRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        this.state.settings.aiEngine = e.target.value;
        this.state.saveSettings();
        const geminiWrap = document.getElementById("geminiApiKeyWrap");
        if (geminiWrap) {
          geminiWrap.classList.toggle("hidden", e.target.value !== "gemini");
        }
      });
    });

    const apiKeyInput = document.getElementById("geminiApiKeyInput");
    apiKeyInput?.addEventListener("change", (e) => {
      this.state.settings.geminiApiKey = e.target.value.trim();
      this.state.saveSettings();
    });

    // AI Quick Prompts
    document.querySelectorAll(".prompt-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const promptType = chip.getAttribute("data-prompt");
        this.handleQuickPrompt(promptType);
      });
    });

    // AI Coach Chat Form
    this.coachChatForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("coachChatInput");
      const text = input.value.trim();
      if (text) {
        input.value = "";
        this.sendCoachMessage(text);
      }
    });

    document.getElementById("clearChatHistoryBtn")?.addEventListener("click", () => {
      this.state.chatHistory = [];
      this.state.saveChat();
      this.renderChatMessages();
      this.showToast(this.t("clearChat"), "info");
    });
  }

  // ------------------------------------------------------------------------
  // TAB NAVIGATION
  // ------------------------------------------------------------------------
  switchTab(tabId) {
    this.state.currentTab = tabId;
    this.sidebar.classList.remove("mobile-open");

    this.navItems.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });

    document.querySelectorAll(".tab-pane").forEach((pane) => {
      pane.classList.remove("active");
    });
    const targetPane = document.getElementById(`tab-${tabId}`);
    if (targetPane) targetPane.classList.add("active");

    const titles = {
      dashboard: { title: "titleDashboard", sub: "subtitleDashboard" },
      workouts: { title: "navWorkouts", sub: "subtitleDashboard" },
      map: { title: "titleMap", sub: "subtitleMap" },
      nutrition: { title: "navNutrition", sub: "dailyMacrosTitle" },
      sync: { title: "navSync", sub: "appleSyncHeroTitle" },
      coach: { title: "navCoach", sub: "coachOnlineStatus" }
    };
    const tInfo = titles[tabId] || titles.dashboard;
    const pageTitle = document.getElementById("pageTitle");
    const pageSubtitle = document.getElementById("pageSubtitle");
    if (pageTitle) pageTitle.textContent = this.t(tInfo.title);
    if (pageSubtitle) pageSubtitle.textContent = this.t(tInfo.sub);

    if (tabId === "dashboard") {
      this.renderDashboard();
    } else if (tabId === "workouts") {
      this.renderWorkoutsFeed();
    } else if (tabId === "map") {
      this.renderWorldMapTab();
    } else if (tabId === "nutrition") {
      this.renderNutritionTab();
    } else if (tabId === "coach") {
      this.renderAIContext();
    }
  }

  // ------------------------------------------------------------------------
  // LEAFLET WORLD MAP ENGINE (STRAVA STYLE)
  // ------------------------------------------------------------------------
  initWorldMap() {
    if (this.worldMap || typeof L === "undefined") return;

    const mapEl = document.getElementById("worldMap");
    if (!mapEl) return;

    this.worldMap = L.map("worldMap", {
      center: [55.72, 37.55],
      zoom: 12,
      zoomControl: true,
      attributionControl: true
    });

    const isDark = this.state.currentTheme === "dark";
    const tileUrl = isDark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

    this.worldMapTileLayer = L.tileLayer(tileUrl, {
      maxZoom: 19,
      subdomains: "abcd",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(this.worldMap);

    this.worldMapRoutesLayer = L.layerGroup().addTo(this.worldMap);
  }

  updateMapTiles() {
    if (!this.worldMap || typeof L === "undefined") return;

    const isDark = this.state.currentTheme === "dark";
    const tileUrl = isDark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

    if (this.worldMapTileLayer) {
      this.worldMap.removeLayer(this.worldMapTileLayer);
    }
    this.worldMapTileLayer = L.tileLayer(tileUrl, {
      maxZoom: 19,
      subdomains: "abcd",
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(this.worldMap);

    // Update modal mini-map tile layer if initialized
    if (this.modalRouteMap && this.modalMapTileLayer) {
      this.modalRouteMap.removeLayer(this.modalMapTileLayer);
      this.modalMapTileLayer = L.tileLayer(tileUrl, { maxZoom: 19, subdomains: "abcd" }).addTo(this.modalRouteMap);
    }
  }

  renderWorldMapTab() {
    if (!this.worldMap) {
      this.initWorldMap();
    }
    setTimeout(() => {
      if (this.worldMap) {
        this.worldMap.invalidateSize();
        this.renderWorldMapRoutes();
      }
    }, 200);
  }

  renderWorldMapRoutes(sportFilter = "all") {
    if (!this.worldMap || !this.worldMapRoutesLayer) return;

    this.worldMapRoutesLayer.clearLayers();

    let mappedWorkouts = this.state.workouts.filter(
      (w) => w.coordinates && Array.isArray(w.coordinates) && w.coordinates.length > 1
    );

    if (sportFilter !== "all") {
      mappedWorkouts = mappedWorkouts.filter((w) => w.type.toLowerCase() === sportFilter.toLowerCase());
    }

    const allBounds = L.latLngBounds();
    let totalGpsDist = 0;
    const locationsSet = new Set();

    // Populate dropdown
    const selectEl = document.getElementById("mapRouteSelect");
    if (selectEl) {
      let optHtml = `<option value="all">🗺️ Все маршруты на карте (${mappedWorkouts.length})</option>`;
      mappedWorkouts.forEach((w) => {
        optHtml += `<option value="${w.id}">${w.type === "Run" ? "🏃" : w.type === "Ride" ? "🚴" : "⚡"} ${w.title} (${w.distance || 0} км)</option>`;
      });
      selectEl.innerHTML = optHtml;
    }

    // Populate route drawer cards
    const drawerRow = document.getElementById("drawerCardsRow");
    const drawerCount = document.getElementById("drawerRoutesCount");
    if (drawerCount) drawerCount.textContent = mappedWorkouts.length;

    if (drawerRow) {
      drawerRow.innerHTML = mappedWorkouts
        .map(
          (w) => `
          <div class="drawer-route-card" data-route-id="${w.id}">
            <span class="drawer-route-title">${this.escapeHtml(w.title)}</span>
            <div class="drawer-route-meta">
              <span>${w.type} • ${w.duration} мин</span>
              <strong>${w.distance ? Number(w.distance).toFixed(2) : "0.00"} км</strong>
            </div>
          </div>
        `
        )
        .join("");

      drawerRow.querySelectorAll(".drawer-route-card").forEach((card) => {
        card.addEventListener("click", () => {
          const id = card.getAttribute("data-route-id");
          this.focusOnWorkoutRoute(id);
        });
      });
    }

    // Draw polylines and markers on Leaflet map
    mappedWorkouts.forEach((w) => {
      totalGpsDist += Number(w.distance) || 0;
      if (w.locationName) locationsSet.add(w.locationName);

      const latlngs = w.coordinates;
      const polyline = L.polyline(latlngs, {
        color: "#FC4C02",
        weight: 5,
        opacity: 0.9,
        lineJoin: "round",
        lineCap: "round"
      });

      // Hover glow effect
      polyline.on("mouseover", () => {
        polyline.setStyle({ weight: 7, opacity: 1, color: "#FF7A00" });
      });
      polyline.on("mouseout", () => {
        polyline.setStyle({ weight: 5, opacity: 0.9, color: "#FC4C02" });
      });

      // Custom Start and Finish Markers
      const startCoord = latlngs[0];
      const finishCoord = latlngs[latlngs.length - 1];

      const startIcon = L.divIcon({
        className: "custom-pin pin-start",
        html: `<i class="fa-solid fa-play"></i>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      const finishIcon = L.divIcon({
        className: "custom-pin pin-finish",
        html: `<i class="fa-solid fa-flag-checkered"></i>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      const startMarker = L.marker(startCoord, { icon: startIcon });
      const finishMarker = L.marker(finishCoord, { icon: finishIcon });

      // Interactive Popup
      const d = new Date(w.date);
      const dateStr = d.toLocaleDateString(this.state.currentLang === "ru" ? "ru-RU" : "en-US", {
        day: "numeric",
        month: "short"
      });
      const paceVal = w.type === "Ride" ? this.formatSpeed(w.distance, w.duration) : this.formatPace(w.distance, w.duration);

      const popupHtml = `
        <div class="strava-popup-card">
          <div class="popup-header">
            <div>
              <h4 class="popup-title">${this.escapeHtml(w.title)}</h4>
              <span class="popup-date">${dateStr} • ${w.type}</span>
            </div>
          </div>
          <div class="popup-stats-grid">
            <div class="popup-stat-col">
              <span>Дистанция</span>
              <strong>${w.distance ? Number(w.distance).toFixed(2) : "0.00"} км</strong>
            </div>
            <div class="popup-stat-col">
              <span>${w.type === "Ride" ? "Скорость" : "Темп"}</span>
              <strong>${paceVal}</strong>
            </div>
            <div class="popup-stat-col">
              <span>Пульс</span>
              <strong class="text-fire">${w.heartRate || "—"} bpm</strong>
            </div>
          </div>
          <button class="popup-btn-focus" onclick="window.stravaPulseApp.focusOnWorkoutRoute('${w.id}')">
            🔍 Приблизить трек
          </button>
        </div>
      `;

      polyline.bindPopup(popupHtml);
      startMarker.bindPopup(popupHtml);
      finishMarker.bindPopup(popupHtml);

      this.worldMapRoutesLayer.addLayer(polyline);
      this.worldMapRoutesLayer.addLayer(startMarker);
      this.worldMapRoutesLayer.addLayer(finishMarker);

      latlngs.forEach((coord) => allBounds.extend(coord));
    });

    // Update floating telemetry HUD
    const countEl = document.getElementById("mapStatTracksCount");
    const kmEl = document.getElementById("mapStatKm");
    const locEl = document.getElementById("mapStatLocations");

    if (countEl) countEl.textContent = mappedWorkouts.length;
    if (kmEl) kmEl.textContent = `${totalGpsDist.toFixed(1)} км`;
    if (locEl) {
      locEl.textContent = locationsSet.size > 0 ? Array.from(locationsSet).slice(0, 2).join(" • ") : "Лужники • Парк Горького";
    }

    // Fit map bounds
    if (mappedWorkouts.length > 0 && allBounds.isValid()) {
      this.worldMap.fitBounds(allBounds, { padding: [50, 50], maxZoom: 14 });
    }
  }

  fitAllMapRoutes() {
    if (!this.worldMap) return;
    const mapped = this.state.workouts.filter((w) => w.coordinates && w.coordinates.length > 1);
    if (mapped.length === 0) return;

    const bounds = L.latLngBounds();
    mapped.forEach((w) => {
      w.coordinates.forEach((pt) => bounds.extend(pt));
    });

    if (bounds.isValid()) {
      this.worldMap.flyToBounds(bounds, { padding: [60, 60], duration: 1.2 });
    }
  }

  focusOnWorkoutRoute(workoutId) {
    const workout = this.state.workouts.find((w) => w.id === workoutId);
    if (!workout || !workout.coordinates || workout.coordinates.length < 2) return;

    if (this.state.currentTab !== "map") {
      this.switchTab("map");
    }

    setTimeout(() => {
      if (!this.worldMap) return;
      const bounds = L.latLngBounds(workout.coordinates);
      this.worldMap.flyToBounds(bounds, { padding: [80, 80], duration: 1.2, maxZoom: 15 });

      // Highlight route card in drawer
      document.querySelectorAll(".drawer-route-card").forEach((card) => {
        card.classList.toggle("active", card.getAttribute("data-route-id") === workoutId);
      });
    }, 250);
  }

  locateUserOnMap() {
    if (!navigator.geolocation) {
      this.showToast("Геолокация не поддерживается вашим браузером", "error");
      return;
    }

    this.showToast("Поиск вашего местоположения...", "info");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        if (this.worldMap) {
          if (this.userLocationMarker) {
            this.worldMap.removeLayer(this.userLocationMarker);
          }

          const userIcon = L.divIcon({
            className: "pin-user-location",
            html: "",
            iconSize: [18, 18],
            iconAnchor: [9, 9]
          });

          this.userLocationMarker = L.marker([lat, lng], { icon: userIcon })
            .addTo(this.worldMap)
            .bindPopup("<b>📍 Ваша текущая геопозиция</b>")
            .openPopup();

          this.worldMap.flyTo([lat, lng], 15, { duration: 1.5 });
          this.showToast(this.t("gpsLocatedToast"), "success");
        }
      },
      (err) => {
        this.showToast("Не удалось получить геопозицию. Проверьте разрешения браузера.", "error");
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  // ------------------------------------------------------------------------
  // MODAL ROUTE BUILDER (LEAFLET MINI-MAP)
  // ------------------------------------------------------------------------
  setupModalRouteMap() {
    if (typeof L === "undefined") return;

    const mapContainer = document.getElementById("modalRouteMap");
    if (!mapContainer) return;

    if (!this.modalRouteMap) {
      this.modalRouteMap = L.map("modalRouteMap", {
        center: [55.718, 37.553],
        zoom: 13,
        zoomControl: true,
        attributionControl: false
      });

      const isDark = this.state.currentTheme === "dark";
      const tileUrl = isDark
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

      this.modalMapTileLayer = L.tileLayer(tileUrl, { maxZoom: 19, subdomains: "abcd" }).addTo(this.modalRouteMap);

      // Map click handler: User draws route point by point!
      this.modalRouteMap.on("click", (e) => {
        const pt = [Number(e.latlng.lat.toFixed(5)), Number(e.latlng.lng.toFixed(5))];
        this.currentModalRouteCoords.push(pt);
        this.refreshModalRouteDisplay();
      });
    }

    setTimeout(() => {
      if (this.modalRouteMap) {
        this.modalRouteMap.invalidateSize();
        this.refreshModalRouteDisplay();
      }
    }, 250);
  }

  refreshModalRouteDisplay() {
    if (!this.modalRouteMap) return;

    const coords = this.currentModalRouteCoords || [];

    // Remove old layers
    if (this.modalPolyline) this.modalRouteMap.removeLayer(this.modalPolyline);
    if (this.modalStartMarker) this.modalRouteMap.removeLayer(this.modalStartMarker);
    if (this.modalFinishMarker) this.modalRouteMap.removeLayer(this.modalFinishMarker);

    const pointsCountEl = document.getElementById("builderPointsCount");
    const distCalcEl = document.getElementById("builderDistCalc");

    if (coords.length > 0) {
      this.modalPolyline = L.polyline(coords, {
        color: "#FC4C02",
        weight: 5,
        opacity: 0.95
      }).addTo(this.modalRouteMap);

      // Start pin
      const startIcon = L.divIcon({
        className: "custom-pin pin-start",
        html: `<i class="fa-solid fa-play"></i>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });
      this.modalStartMarker = L.marker(coords[0], { icon: startIcon }).addTo(this.modalRouteMap);

      // Finish pin
      if (coords.length > 1) {
        const finishIcon = L.divIcon({
          className: "custom-pin pin-finish",
          html: `<i class="fa-solid fa-flag-checkered"></i>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });
        this.modalFinishMarker = L.marker(coords[coords.length - 1], { icon: finishIcon }).addTo(this.modalRouteMap);
      }

      // Calculate distance with Haversine
      const distKm = this.calculateHaversineDistanceKm(coords);

      if (pointsCountEl) pointsCountEl.textContent = `${coords.length} точек`;
      if (distCalcEl) distCalcEl.textContent = `${distKm.toFixed(2)} км`;

      // Update distance input automatically!
      const distInput = document.getElementById("workoutDistanceInput");
      if (distInput && distKm > 0) {
        distInput.value = distKm.toFixed(2);
        this.updateWorkoutPacePreview();
      }

      const bounds = L.latLngBounds(coords);
      if (bounds.isValid()) {
        this.modalRouteMap.fitBounds(bounds, { padding: [30, 30], maxZoom: 15 });
      }
    } else {
      if (pointsCountEl) pointsCountEl.textContent = "0 точек";
      if (distCalcEl) distCalcEl.textContent = "0.00 км";
    }
  }

  clearModalRoute() {
    this.stopLiveGpsRecording();
    this.currentModalRouteCoords = [];
    this.refreshModalRouteDisplay();
    const distInput = document.getElementById("workoutDistanceInput");
    if (distInput) {
      distInput.value = "0.00";
      this.updateWorkoutPacePreview();
    }
    this.showToast("Маршрут очищен. Кликните по карте для рисования нового.", "info");
  }

  applyPresetRoute() {
    // Scenic Luzhniki Stadium / Embankment 5.4 km loop
    this.currentModalRouteCoords = [
      [55.7155, 37.5535], [55.7162, 37.5502], [55.7178, 37.5460], [55.7198, 37.5442],
      [55.7225, 37.5458], [55.7251, 37.5492], [55.7275, 37.5540], [55.7288, 37.5595],
      [55.7282, 37.5655], [55.7260, 37.5702], [55.7228, 37.5728], [55.7195, 37.5710],
      [55.7168, 37.5662], [55.7150, 37.5605], [55.7155, 37.5535]
    ];
    this.refreshModalRouteDisplay();
    this.showToast("Загружен шаблон маршрута в Лужниках!", "success");
  }

  toggleLiveGpsRecording() {
    if (this.isLiveGpsActive) {
      this.stopLiveGpsRecording();
    } else {
      this.startLiveGpsRecording();
    }
  }

  startLiveGpsRecording() {
    this.isLiveGpsActive = true;
    this.liveGpsSeconds = 0;

    const btn = document.getElementById("liveGpsRecordBtn");
    const overlay = document.getElementById("liveGpsOverlay");
    if (btn) {
      btn.className = "btn btn-sm btn-primary pulse-shadow";
      btn.innerHTML = `<i class="fa-solid fa-stop"></i> <span>Стоп GPS</span>`;
    }
    if (overlay) overlay.classList.remove("hidden");

    this.showToast(this.t("gpsLiveStartedToast"), "info");

    // Simulation track points around scenic park
    const simBase = [
      [55.7200, 37.5480], [55.7210, 37.5495], [55.7225, 37.5515], [55.7240, 37.5540],
      [55.7255, 37.5565], [55.7265, 37.5590], [55.7270, 37.5615], [55.7265, 37.5640],
      [55.7250, 37.5665], [55.7230, 37.5680], [55.7210, 37.5685], [55.7190, 37.5670],
      [55.7175, 37.5645], [55.7165, 37.5615], [55.7160, 37.5580], [55.7165, 37.5540],
      [55.7175, 37.5510], [55.7188, 37.5490], [55.7200, 37.5480]
    ];

    let simIdx = 0;
    this.currentModalRouteCoords = [simBase[0]];

    this.liveGpsTimerInterval = setInterval(() => {
      this.liveGpsSeconds += 1;
      const mins = Math.floor(this.liveGpsSeconds / 60);
      const secs = this.liveGpsSeconds % 60;
      const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

      // Append step
      simIdx = (simIdx + 1) % simBase.length;
      this.currentModalRouteCoords.push(simBase[simIdx]);
      this.refreshModalRouteDisplay();

      const distKm = this.calculateHaversineDistanceKm(this.currentModalRouteCoords);
      const distEl = document.getElementById("liveGpsDist");
      const timeEl = document.getElementById("liveGpsTime");
      const paceEl = document.getElementById("liveGpsPace");

      if (timeEl) timeEl.textContent = timeStr;
      if (distEl) distEl.textContent = `${distKm.toFixed(2)} км`;
      if (paceEl) paceEl.textContent = "4:55 /км";
    }, 1000);
  }

  stopLiveGpsRecording() {
    this.isLiveGpsActive = false;
    if (this.liveGpsTimerInterval) {
      clearInterval(this.liveGpsTimerInterval);
      this.liveGpsTimerInterval = null;
    }

    const btn = document.getElementById("liveGpsRecordBtn");
    const overlay = document.getElementById("liveGpsOverlay");
    if (btn) {
      btn.className = "btn btn-sm btn-outline";
      btn.innerHTML = `<i class="fa-solid fa-satellite-dish"></i> <span>${this.t("btnLiveGps")}</span>`;
    }
    if (overlay) overlay.classList.add("hidden");

    this.showToast(this.t("gpsLiveStoppedToast"), "success");
  }

  // ------------------------------------------------------------------------
  // DASHBOARD & CHARTS
  // ------------------------------------------------------------------------
  getFilteredWorkoutsByTimeframe() {
    const tf = this.state.dashboardTimeframe;
    const now = new Date();
    if (tf === "all") return [...this.state.workouts];

    const days = Number(tf) || 7;
    const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return this.state.workouts.filter((w) => new Date(w.date) >= cutoff);
  }

  renderDashboard() {
    const workouts = this.getFilteredWorkoutsByTimeframe();

    let totalDist = 0;
    let totalCal = 0;
    let totalMin = 0;
    let hrSum = 0;
    let hrCount = 0;

    workouts.forEach((w) => {
      totalDist += Number(w.distance) || 0;
      totalCal += Number(w.calories) || 0;
      totalMin += Number(w.duration) || 0;
      if (w.heartRate) {
        hrSum += Number(w.heartRate);
        hrCount++;
      }
    });

    const avgHr = hrCount > 0 ? Math.round(hrSum / hrCount) : 0;
    const hours = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    const timeFormatted = `${hours}ч ${mins}м`;

    const distEl = document.getElementById("kpiDistance");
    const calEl = document.getElementById("kpiCalories");
    const timeEl = document.getElementById("kpiTime");
    const hrEl = document.getElementById("kpiHeartRate");

    if (distEl) distEl.textContent = totalDist.toFixed(1);
    if (calEl) calEl.textContent = totalCal.toLocaleString();
    if (timeEl) timeEl.textContent = timeFormatted;
    if (hrEl) hrEl.textContent = avgHr || "—";

    const timeSub = document.getElementById("kpiTimeSub");
    if (timeSub) timeSub.textContent = `${workouts.length} тренировок`;

    // Dashboard GPS highlight card numbers
    const mapped = this.state.workouts.filter((w) => w.coordinates && w.coordinates.length > 1);
    const mappedKm = mapped.reduce((a, b) => a + (Number(b.distance) || 0), 0);
    const dashCount = document.getElementById("dashGpsTracksCount");
    const dashDist = document.getElementById("dashGpsTotalDist");
    if (dashCount) dashCount.textContent = `${mapped.length} треков с GPS`;
    if (dashDist) dashDist.textContent = `${mappedKm.toFixed(1)} км на карте`;

    this.drawActivityRings();
    this.renderCharts(workouts);
  }

  drawActivityRings() {
    const canvas = document.getElementById("ringsCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    const today = this.state.getTodayIsoDate();
    const todayWorkouts = this.state.workouts.filter((w) => w.date.startsWith(today));
    const todayBurned = todayWorkouts.reduce((sum, w) => sum + (Number(w.calories) || 0), 0);
    const todayExerciseMin = todayWorkouts.reduce((sum, w) => sum + (Number(w.duration) || 0), 0);
    const todayWater = this.state.water[today] || 0;

    const moveGoal = 750;
    const exerciseGoal = 45;
    const waterGoal = this.state.settings.dailyWaterGoal || 2500;

    const moveVal = document.getElementById("ringMoveVal");
    const moveGoalEl = document.getElementById("ringMoveGoal");
    const exVal = document.getElementById("ringExerciseVal");
    const exGoalEl = document.getElementById("ringExerciseGoal");
    const wVal = document.getElementById("ringWaterVal");
    const wGoalEl = document.getElementById("ringWaterGoal");

    if (moveVal) moveVal.textContent = todayBurned;
    if (moveGoalEl) moveGoalEl.textContent = moveGoal;
    if (exVal) exVal.textContent = todayExerciseMin;
    if (exGoalEl) exGoalEl.textContent = exerciseGoal;
    if (wVal) wVal.textContent = todayWater;
    if (wGoalEl) wGoalEl.textContent = waterGoal;

    const moveProgress = Math.min(todayBurned / moveGoal, 1.8);
    const exProgress = Math.min(todayExerciseMin / exerciseGoal, 1.8);
    const waterProgress = Math.min(todayWater / waterGoal, 1.8);

    ctx.clearRect(0, 0, width, height);

    const isDark = this.state.currentTheme === "dark";
    const bgTrackAlpha = isDark ? 0.15 : 0.2;

    const drawRing = (radius, strokeWidth, progress, colorHex, trackAlpha) => {
      const startAngle = -0.5 * Math.PI;
      const endAngle = startAngle + progress * 2 * Math.PI;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = colorHex;
      ctx.globalAlpha = trackAlpha;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.stroke();

      if (progress > 0) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = colorHex;
        ctx.globalAlpha = 1;
        ctx.lineWidth = strokeWidth;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    };

    drawRing(72, 13, moveProgress, "#FF2D55", bgTrackAlpha);
    drawRing(54, 13, exProgress, "#30D158", bgTrackAlpha);
    drawRing(36, 13, waterProgress, "#00E5FF", bgTrackAlpha);

    ctx.globalAlpha = 1;
  }

  getChartThemeColors() {
    const isDark = this.state.currentTheme === "dark";
    return {
      textColor: isDark ? "#8E929E" : "#6B7280",
      gridColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)",
      cardBg: isDark ? "#16171D" : "#FFFFFF"
    };
  }

  updateChartsTheme() {
    const colors = this.getChartThemeColors();
    Object.values(this.charts).forEach((chart) => {
      if (chart && chart.options && chart.options.scales) {
        if (chart.options.scales.x) {
          chart.options.scales.x.ticks.color = colors.textColor;
          chart.options.scales.x.grid.color = colors.gridColor;
        }
        if (chart.options.scales.y) {
          chart.options.scales.y.ticks.color = colors.textColor;
          chart.options.scales.y.grid.color = colors.gridColor;
        }
        if (chart.options.scales.y1) {
          chart.options.scales.y1.ticks.color = colors.textColor;
          chart.options.scales.y1.grid.color = colors.gridColor;
        }
        chart.update();
      }
    });
  }

  renderCharts(workouts) {
    if (typeof Chart === "undefined") return;

    this.renderTrainingLoadChart(workouts);
    this.renderEnergyBalanceChart();
    this.renderHrPaceChart(workouts);
    this.renderMacrosChart();
  }

  renderTrainingLoadChart(workouts) {
    const canvas = document.getElementById("trainingLoadChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const colors = this.getChartThemeColors();

    const daysLabels = [];
    const distData = [];
    const minData = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const iso = d.toISOString().split("T")[0];
      const weekdayName = d.toLocaleDateString(this.state.currentLang === "ru" ? "ru-RU" : "en-US", { weekday: "short" });
      daysLabels.push(weekdayName.toUpperCase());

      const dayWorkouts = this.state.workouts.filter((w) => w.date.startsWith(iso));
      const dist = dayWorkouts.reduce((sum, w) => sum + (Number(w.distance) || 0), 0);
      const mins = dayWorkouts.reduce((sum, w) => sum + (Number(w.duration) || 0), 0);

      distData.push(Number(dist.toFixed(1)));
      minData.push(mins);
    }

    if (this.charts.load) this.charts.load.destroy();

    this.charts.load = new Chart(ctx, {
      type: "bar",
      data: {
        labels: daysLabels,
        datasets: [
          {
            label: `${this.t("kpiTotalDistance")} (${this.t("unitKm")})`,
            data: distData,
            backgroundColor: "#FC4C02",
            borderRadius: 6,
            yAxisID: "y",
            order: 2
          },
          {
            label: `${this.t("kpiActiveTime")} (${this.t("badgeMin")})`,
            data: minData,
            type: "line",
            borderColor: "#0A84FF",
            backgroundColor: "rgba(10, 132, 255, 0.15)",
            borderWidth: 2,
            pointBackgroundColor: "#0A84FF",
            pointRadius: 4,
            tension: 0.35,
            fill: true,
            yAxisID: "y1",
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#16171D",
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
            padding: 10
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: colors.textColor, font: { family: "Outfit", weight: "600" } }
          },
          y: {
            type: "linear",
            position: "left",
            grid: { color: colors.gridColor },
            ticks: { color: colors.textColor },
            title: { display: true, text: "км", color: colors.textColor }
          },
          y1: {
            type: "linear",
            position: "right",
            grid: { display: false },
            ticks: { color: colors.textColor },
            title: { display: true, text: "мин", color: colors.textColor }
          }
        }
      }
    });
  }

  renderEnergyBalanceChart() {
    const canvas = document.getElementById("energyBalanceChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const colors = this.getChartThemeColors();

    const daysLabels = [];
    const foodKcalData = [];
    const burnedKcalData = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const iso = d.toISOString().split("T")[0];
      const weekdayName = d.toLocaleDateString(this.state.currentLang === "ru" ? "ru-RU" : "en-US", { weekday: "short" });
      daysLabels.push(weekdayName.toUpperCase());

      const dayMeals = this.state.meals.filter((m) => m.date === iso);
      const foodKcal = dayMeals.reduce((sum, m) => sum + (Number(m.cal) || 0), 0);
      foodKcalData.push(foodKcal);

      const dayWorkouts = this.state.workouts.filter((w) => w.date.startsWith(iso));
      const burnedKcal = dayWorkouts.reduce((sum, w) => sum + (Number(w.calories) || 0), 0);
      burnedKcalData.push(burnedKcal);
    }

    if (this.charts.energy) this.charts.energy.destroy();

    this.charts.energy = new Chart(ctx, {
      type: "bar",
      data: {
        labels: daysLabels,
        datasets: [
          {
            label: this.t("badgeFood"),
            data: foodKcalData,
            backgroundColor: "#30D158",
            borderRadius: 6
          },
          {
            label: this.t("badgeBurned"),
            data: burnedKcalData,
            backgroundColor: "#FF6433",
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#16171D",
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
            padding: 10
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: colors.textColor, font: { family: "Outfit", weight: "600" } }
          },
          y: {
            grid: { color: colors.gridColor },
            ticks: { color: colors.textColor },
            title: { display: true, text: "ккал", color: colors.textColor }
          }
        }
      }
    });
  }

  renderHrPaceChart(workouts) {
    const canvas = document.getElementById("hrPaceChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const colors = this.getChartThemeColors();

    const sorted = [...this.state.workouts].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(-8);

    const labels = sorted.map((w) => {
      const d = new Date(w.date);
      return `${d.getDate()}/${d.getMonth() + 1} ${w.type}`;
    });

    const hrData = sorted.map((w) => w.heartRate || null);
    const speedData = sorted.map((w) => {
      if (!w.distance || !w.duration) return null;
      return Number(((w.distance / (w.duration / 60))).toFixed(1));
    });

    if (this.charts.hrPace) this.charts.hrPace.destroy();

    this.charts.hrPace = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `${this.t("badgeBpm")} (уд/мин)`,
            data: hrData,
            borderColor: "#BF5AF2",
            backgroundColor: "rgba(191, 90, 242, 0.15)",
            pointBackgroundColor: "#BF5AF2",
            pointRadius: 5,
            borderWidth: 2,
            tension: 0.3,
            yAxisID: "y"
          },
          {
            label: `${this.t("badgePace")} (км/ч)`,
            data: speedData,
            borderColor: "#FC4C02",
            backgroundColor: "rgba(252, 76, 2, 0.15)",
            pointBackgroundColor: "#FC4C02",
            pointRadius: 5,
            borderWidth: 2,
            tension: 0.3,
            yAxisID: "y1"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#16171D",
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
            padding: 10
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: colors.textColor, font: { family: "Outfit", size: 10 } }
          },
          y: {
            type: "linear",
            position: "left",
            grid: { color: colors.gridColor },
            ticks: { color: colors.textColor },
            title: { display: true, text: "BPM", color: colors.textColor }
          },
          y1: {
            type: "linear",
            position: "right",
            grid: { display: false },
            ticks: { color: colors.textColor },
            title: { display: true, text: "км/ч", color: colors.textColor }
          }
        }
      }
    });
  }

  renderMacrosChart() {
    const canvas = document.getElementById("macrosDoughnutChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const today = this.state.getTodayIsoDate();
    const todayMeals = this.state.meals.filter((m) => m.date === today);

    let p = 0;
    let f = 0;
    let c = 0;
    todayMeals.forEach((m) => {
      p += Number(m.protein) || 0;
      f += Number(m.fat) || 0;
      c += Number(m.carbs) || 0;
    });

    const totalGrams = p + f + c || 1;
    const pPct = Math.round((p / totalGrams) * 100);
    const fPct = Math.round((f / totalGrams) * 100);
    const cPct = Math.round((c / totalGrams) * 100);

    const listEl = document.getElementById("macrosBreakdownList");
    if (listEl) {
      listEl.innerHTML = `
        <div class="macro-stat-card">
          <div class="macro-stat-head">
            <span class="macro-stat-title"><span class="macro-dot-mini" style="background:#FF2D55;"></span> ${this.t("macroProtein")}</span>
            <strong>${p.toFixed(0)} г (${pPct}%)</strong>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill fill-protein" style="width: ${Math.min((p / this.state.settings.proteinGoal) * 100, 100)}%;"></div>
          </div>
        </div>
        <div class="macro-stat-card">
          <div class="macro-stat-head">
            <span class="macro-stat-title"><span class="macro-dot-mini" style="background:#FFD60A;"></span> ${this.t("macroFat")}</span>
            <strong>${f.toFixed(0)} г (${fPct}%)</strong>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill fill-fat" style="width: ${Math.min((f / this.state.settings.fatGoal) * 100, 100)}%;"></div>
          </div>
        </div>
        <div class="macro-stat-card">
          <div class="macro-stat-head">
            <span class="macro-stat-title"><span class="macro-dot-mini" style="background:#00E5FF;"></span> ${this.t("macroCarbs")}</span>
            <strong>${c.toFixed(0)} г (${cPct}%)</strong>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill fill-carbs" style="width: ${Math.min((c / this.state.settings.carbsGoal) * 100, 100)}%;"></div>
          </div>
        </div>
      `;
    }

    if (this.charts.macros) this.charts.macros.destroy();

    this.charts.macros = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [this.t("macroProtein"), this.t("macroFat"), this.t("macroCarbs")],
        datasets: [
          {
            data: [p || 1, f || 1, c || 1],
            backgroundColor: ["#FF2D55", "#FFD60A", "#00E5FF"],
            borderColor: this.state.currentTheme === "dark" ? "#16171D" : "#FFFFFF",
            borderWidth: 3,
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw} г`
            }
          }
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // WORKOUTS FEED & STRAVA CARDS (CRUD)
  // ------------------------------------------------------------------------
  formatPace(distanceKm, durationMin) {
    if (!distanceKm || distanceKm <= 0 || !durationMin || durationMin <= 0) return "—";
    const totalSec = (durationMin * 60) / distanceKm;
    const paceMin = Math.floor(totalSec / 60);
    const paceSec = Math.round(totalSec % 60);
    return `${paceMin}:${paceSec < 10 ? "0" : ""}${paceSec} /км`;
  }

  formatSpeed(distanceKm, durationMin) {
    if (!distanceKm || distanceKm <= 0 || !durationMin || durationMin <= 0) return "—";
    const speed = (distanceKm / (durationMin / 60)).toFixed(1);
    return `${speed} км/ч`;
  }

  calculatePersonalRecords() {
    const prs = {
      maxDistanceId: null,
      fastestPaceId: null,
      maxElevationId: null,
      maxCaloriesId: null
    };

    let maxDist = 0;
    let bestPaceSec = Infinity;
    let maxElev = 0;
    let maxCal = 0;

    this.state.workouts.forEach((w) => {
      const dist = Number(w.distance) || 0;
      const dur = Number(w.duration) || 0;
      const elev = Number(w.elevation) || 0;
      const cal = Number(w.calories) || 0;

      if (dist > maxDist) {
        maxDist = dist;
        prs.maxDistanceId = w.id;
      }
      if (elev > maxElev && elev > 100) {
        maxElev = elev;
        prs.maxElevationId = w.id;
      }
      if (cal > maxCal && cal > 500) {
        maxCal = cal;
        prs.maxCaloriesId = w.id;
      }

      if (w.type === "Run" && dist >= 3 && dur > 0) {
        const paceSec = (dur * 60) / dist;
        if (paceSec < bestPaceSec) {
          bestPaceSec = paceSec;
          prs.fastestPaceId = w.id;
        }
      }
    });

    return prs;
  }

  renderWorkoutsFeed() {
    const container = document.getElementById("stravaFeedContainer");
    const emptyState = document.getElementById("workoutsEmptyState");
    const summaryPills = document.getElementById("feedSummaryPills");
    if (!container) return;

    const searchQuery = (this.workoutSearchInput?.value || "").toLowerCase().trim();
    const sportFilter = this.workoutSportFilter?.value || "all";
    const sortFilter = this.workoutSortFilter?.value || "date-desc";

    let list = [...this.state.workouts];

    if (sportFilter !== "all") {
      list = list.filter((w) => w.type.toLowerCase() === sportFilter.toLowerCase());
    }

    if (searchQuery) {
      list = list.filter((w) => {
        const titleMatch = (w.title || "").toLowerCase().includes(searchQuery);
        const notesMatch = (w.notes || "").toLowerCase().includes(searchQuery);
        return titleMatch || notesMatch;
      });
    }

    list.sort((a, b) => {
      if (sortFilter === "date-desc") return new Date(b.date) - new Date(a.date);
      if (sortFilter === "date-asc") return new Date(a.date) - new Date(b.date);
      if (sortFilter === "dist-desc") return (b.distance || 0) - (a.distance || 0);
      if (sortFilter === "cal-desc") return (b.calories || 0) - (a.calories || 0);
      if (sortFilter === "dur-desc") return (b.duration || 0) - (a.duration || 0);
      return 0;
    });

    if (summaryPills) {
      const sumDist = list.reduce((acc, w) => acc + (Number(w.distance) || 0), 0);
      const sumCal = list.reduce((acc, w) => acc + (Number(w.calories) || 0), 0);
      const sumMin = list.reduce((acc, w) => acc + (Number(w.duration) || 0), 0);
      summaryPills.innerHTML = `
        <span class="summary-pill">Всего активностей: <strong>${list.length}</strong></span>
        <span class="summary-pill">Дистанция: <strong>${sumDist.toFixed(1)} км</strong></span>
        <span class="summary-pill">Калории: <strong>${sumCal.toLocaleString()} ккал</strong></span>
        <span class="summary-pill">Время: <strong>${Math.floor(sumMin / 60)}ч ${sumMin % 60}м</strong></span>
      `;
    }

    if (list.length === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    const prs = this.calculatePersonalRecords();

    container.innerHTML = list
      .map((w) => {
        const d = new Date(w.date);
        const dateStr = d.toLocaleDateString(this.state.currentLang === "ru" ? "ru-RU" : "en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });

        let paceSpeedLabel = "ТЕМП";
        let paceSpeedVal = this.formatPace(w.distance, w.duration);
        if (w.type === "Ride") {
          paceSpeedLabel = "СКОРОСТЬ";
          paceSpeedVal = this.formatSpeed(w.distance, w.duration);
        }

        const isMaxDist = prs.maxDistanceId === w.id;
        const isFastestPace = prs.fastestPaceId === w.id;
        const isMaxElev = prs.maxElevationId === w.id;
        const isMaxCal = prs.maxCaloriesId === w.id;
        const hasPr = isMaxDist || isFastestPace || isMaxElev || isMaxCal;

        let prLabel = "🏆 Личный рекорд (PR)";
        if (isMaxDist) prLabel = "🏆 Максимальная дистанция";
        else if (isFastestPace) prLabel = "⚡ Рекордный темп";
        else if (isMaxElev) prLabel = "⛰️ Рекорд набора высоты";

        const sportIcons = {
          Run: "fa-person-running",
          Ride: "fa-person-biking",
          Swim: "fa-person-swimming",
          Strength: "fa-dumbbell",
          Walk: "fa-person-walking",
          HIIT: "fa-bolt"
        };
        const sIcon = sportIcons[w.type] || "fa-person-running";
        const hasGps = w.coordinates && Array.isArray(w.coordinates) && w.coordinates.length > 1;

        return `
          <div class="strava-card" data-workout-id="${w.id}">
            <div class="strava-card-header">
              <div class="athlete-meta">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Athlete" class="athlete-avatar">
                <div class="athlete-text">
                  <span class="athlete-name">${this.state.settings.athleteName}</span>
                  <span class="activity-time-stamp">
                    <i class="fa-regular fa-clock"></i> ${dateStr} ${w.locationName ? `• <i class="fa-solid fa-location-dot text-strava"></i> ${w.locationName}` : ""}
                  </span>
                </div>
              </div>
              <div class="card-actions-menu">
                <span class="activity-badge-sport">
                  <i class="fa-solid ${sIcon}"></i> ${w.type}
                </span>
                <button class="btn-icon-action edit-workout-btn" data-id="${w.id}" title="Редактировать">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-icon-action delete-action delete-workout-btn" data-id="${w.id}" title="Удалить">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>

            <div class="strava-card-body">
              <div class="activity-headline">
                <h3 class="activity-title">${this.escapeHtml(w.title)}</h3>
                ${w.notes ? `<p class="activity-notes">${this.escapeHtml(w.notes)}</p>` : ""}
              </div>

              ${hasPr ? `
                <div class="pr-badge-row">
                  <span class="badge-pr">${prLabel}</span>
                </div>
              ` : ""}

              <div class="activity-stats-grid">
                <div class="stat-metric-cell">
                  <span class="stat-metric-label">Дистанция</span>
                  <span class="stat-metric-val">${w.distance ? Number(w.distance).toFixed(2) : "0.00"}<small>км</small></span>
                </div>
                <div class="stat-metric-cell">
                  <span class="stat-metric-label">${paceSpeedLabel}</span>
                  <span class="stat-metric-val">${paceSpeedVal}</span>
                </div>
                <div class="stat-metric-cell">
                  <span class="stat-metric-label">Время</span>
                  <span class="stat-metric-val">${w.duration}<small>мин</small></span>
                </div>
                <div class="stat-metric-cell">
                  <span class="stat-metric-label">Калории</span>
                  <span class="stat-metric-val">${w.calories || 0}<small>ккал</small></span>
                </div>
                <div class="stat-metric-cell">
                  <span class="stat-metric-label">Пульс</span>
                  <span class="stat-metric-val ${w.heartRate >= 160 ? "text-fire" : ""}">${w.heartRate || "—"}<small>bpm</small></span>
                </div>
              </div>

              <!-- Mini-Map / Route Preview -->
              ${hasGps ? `
                <div class="feed-card-map-wrap">
                  <div id="feedMap-${w.id}" class="feed-mini-map"></div>
                  <button class="btn-open-in-world-map" onclick="window.stravaPulseApp.focusOnWorkoutRoute('${w.id}')">
                    <i class="fa-solid fa-map-location-dot text-strava"></i> Показать на карте мира
                  </button>
                </div>
              ` : `
                <div class="activity-visual-track">
                  <svg viewBox="0 0 400 40" preserveAspectRatio="none">
                    <path d="M 0,20 Q 50,5 100,22 T 200,12 T 300,28 T 400,15" fill="none" stroke="var(--strava-orange)" stroke-width="2.5" />
                    <path d="M 0,20 Q 50,5 100,22 T 200,12 T 300,28 T 400,15 L 400,40 L 0,40 Z" fill="rgba(252,76,2,0.12)" />
                  </svg>
                </div>
              `}
            </div>

            <div class="strava-card-footer">
              <div class="kudos-btn-group">
                <button class="btn-kudos ${w.isKudoed ? "kudos-given" : ""} kudos-toggle-btn" data-id="${w.id}">
                  <i class="fa-solid fa-heart"></i>
                  <span>${w.kudos || 0} Kudos</span>
                </button>
              </div>
              <div class="strava-card-footer-actions">
                <button type="button" class="btn-share-workout share-workout-btn" data-id="${w.id}" title="Скачать карточку тренировки в стиле Strava">
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                  <span>Поделиться</span>
                </button>
                <span class="activity-device-tag">
                  <i class="fa-brands fa-apple"></i> ${w.device || "Apple Watch / Strava"}
                </span>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    // Initialize mini-maps on feed cards
    if (typeof L !== "undefined") {
      setTimeout(() => {
        list.forEach((w) => {
          if (w.coordinates && Array.isArray(w.coordinates) && w.coordinates.length > 1) {
            const mapEl = document.getElementById(`feedMap-${w.id}`);
            if (mapEl && !mapEl._leaflet_id) {
              const miniMap = L.map(`feedMap-${w.id}`, {
                zoomControl: false,
                dragging: false,
                touchZoom: false,
                doubleClickZoom: false,
                scrollWheelZoom: false,
                boxZoom: false,
                keyboard: false,
                attributionControl: false
              });

              const isDark = this.state.currentTheme === "dark";
              const tileUrl = isDark
                ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

              L.tileLayer(tileUrl, { maxZoom: 19, subdomains: "abcd" }).addTo(miniMap);

              const pl = L.polyline(w.coordinates, {
                color: "#FC4C02",
                weight: 4,
                opacity: 0.95
              }).addTo(miniMap);

              const bounds = L.latLngBounds(w.coordinates);
              if (bounds.isValid()) {
                miniMap.fitBounds(bounds, { padding: [16, 16] });
              }
            }
          }
        });
      }, 150);
    }

    // Attach listeners
    container.querySelectorAll(".edit-workout-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const item = this.state.workouts.find((x) => x.id === id);
        if (item) this.openWorkoutModal(item);
      });
    });

    container.querySelectorAll(".delete-workout-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        const confirmed = await this.confirmDialog({
          title: "Удалить тренировку?",
          text: "Вы уверены, что хотите удалить эту тренировку из ленты активности?",
          confirmButtonText: "Удалить",
          cancelButtonText: "Отмена",
          icon: "warning"
        });

        if (confirmed) {
          this.state.workouts = this.state.workouts.filter((x) => x.id !== id);
          this.state.saveWorkouts();
          this.renderWorkoutsFeed();
          this.renderDashboard();
          this.renderAIContext();
          if (this.worldMap) this.renderWorldMapRoutes();
          this.showToast(this.t("workoutDeletedToast"), "error");
        }
      });
    });

    container.querySelectorAll(".share-workout-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        this.shareWorkoutCard(id);
      });
    });

    container.querySelectorAll(".kudos-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const item = this.state.workouts.find((x) => x.id === id);
        if (item) {
          item.isKudoed = !item.isKudoed;
          item.kudos = item.isKudoed ? (item.kudos || 0) + 1 : Math.max((item.kudos || 1) - 1, 0);
          this.state.saveWorkouts();
          this.renderWorkoutsFeed();
          if (item.isKudoed) this.showToast(this.t("kudosGivenToast"), "info");
        }
      });
    });
  }

  openWorkoutModal(workout = null) {
    const titleEl = document.getElementById("workoutModalTitle");
    const idInput = document.getElementById("workoutIdInput");
    const titleInput = document.getElementById("workoutTitleInput");
    const typeInput = document.getElementById("workoutTypeInput");
    const dateInput = document.getElementById("workoutDateInput");
    const durInput = document.getElementById("workoutDurationInput");
    const distInput = document.getElementById("workoutDistanceInput");
    const calInput = document.getElementById("workoutCaloriesInput");
    const hrInput = document.getElementById("workoutHrInput");
    const elevInput = document.getElementById("workoutElevationInput");
    const notesInput = document.getElementById("workoutNotesInput");

    if (workout) {
      if (titleEl) titleEl.textContent = this.t("modalEditWorkoutTitle");
      idInput.value = workout.id;
      titleInput.value = workout.title;
      typeInput.value = workout.type;
      dateInput.value = workout.date.substring(0, 16);
      durInput.value = workout.duration;
      distInput.value = workout.distance || "";
      calInput.value = workout.calories;
      hrInput.value = workout.heartRate || "";
      elevInput.value = workout.elevation || "";
      notesInput.value = workout.notes || "";
      this.currentModalRouteCoords = workout.coordinates ? [...workout.coordinates] : [];
    } else {
      if (titleEl) titleEl.textContent = this.t("modalAddWorkoutTitle");
      idInput.value = "";
      titleInput.value = "";
      typeInput.value = "Run";
      const now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      dateInput.value = now.toISOString().slice(0, 16);
      durInput.value = "45";
      distInput.value = "7.5";
      calInput.value = "480";
      hrInput.value = "148";
      elevInput.value = "35";
      notesInput.value = "";
      this.currentModalRouteCoords = [];
    }

    this.updateWorkoutPacePreview();
    this.workoutModal.classList.remove("hidden");
    this.setupModalRouteMap();
  }

  closeWorkoutModal() {
    this.stopLiveGpsRecording();
    this.workoutModal.classList.add("hidden");
  }

  updateWorkoutPacePreview() {
    const dur = Number(document.getElementById("workoutDurationInput")?.value) || 0;
    const dist = Number(document.getElementById("workoutDistanceInput")?.value) || 0;
    const type = document.getElementById("workoutTypeInput")?.value || "Run";
    const previewEl = document.getElementById("workoutPacePreviewVal");

    if (!previewEl) return;

    if (type === "Ride") {
      previewEl.textContent = this.formatSpeed(dist, dur);
    } else {
      previewEl.textContent = this.formatPace(dist, dur);
    }
  }

  handleWorkoutSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("workoutIdInput").value;
    const title = document.getElementById("workoutTitleInput").value.trim();
    const type = document.getElementById("workoutTypeInput").value;
    const date = new Date(document.getElementById("workoutDateInput").value).toISOString();
    const duration = Number(document.getElementById("workoutDurationInput").value) || 1;
    const distance = Number(document.getElementById("workoutDistanceInput").value) || 0;
    const calories = Number(document.getElementById("workoutCaloriesInput").value) || 0;
    const heartRate = Number(document.getElementById("workoutHrInput").value) || null;
    const elevation = Number(document.getElementById("workoutElevationInput").value) || 0;
    const notes = document.getElementById("workoutNotesInput").value.trim();
    const coords = this.currentModalRouteCoords ? [...this.currentModalRouteCoords] : [];

    // Check if new workout or updated
    const isNew = !id;
    const oldPrs = isNew ? this.calculatePersonalRecords() : null;

    if (id) {
      const index = this.state.workouts.findIndex((w) => w.id === id);
      if (index !== -1) {
        this.state.workouts[index] = {
          ...this.state.workouts[index],
          title,
          type,
          date,
          duration,
          distance,
          calories,
          heartRate,
          elevation,
          notes,
          coordinates: coords
        };
      }
    } else {
      const newWorkout = {
        id: `w-${Date.now()}`,
        title,
        type,
        date,
        duration,
        distance,
        calories,
        heartRate,
        elevation,
        notes,
        coordinates: coords,
        kudos: 0,
        isKudoed: false,
        device: "StravaPulse GPS",
        locationName: coords.length > 0 ? "GPS Маршрут" : "Спортивная площадка"
      };
      this.state.workouts.unshift(newWorkout);
    }

    this.state.saveWorkouts();
    this.closeWorkoutModal();
    this.renderWorkoutsFeed();
    this.renderDashboard();
    this.renderUserProfile();
    this.renderAIContext();
    if (this.worldMap) this.renderWorldMapRoutes();

    if (isNew) {
      const newPrs = this.calculatePersonalRecords();
      const createdWorkout = this.state.workouts[0];
      const isPR = createdWorkout && (
        newPrs.maxDistanceId === createdWorkout.id ||
        newPrs.fastestPaceId === createdWorkout.id ||
        newPrs.maxElevationId === createdWorkout.id ||
        newPrs.maxCaloriesId === createdWorkout.id
      );

      if (isPR) {
        this.fireConfettiCelebration("pr");
        this.showToast("🏆 Личный рекорд (PR) побит! Потрясающий результат!", "success");
      } else {
        this.fireConfettiCelebration("workout");
        this.showToast(this.t("workoutSavedToast"), "success");
      }
    } else {
      this.showToast(this.t("workoutSavedToast"), "success");
    }
  }

  // ------------------------------------------------------------------------
  // NUTRITION DIARY & MACROS (CRUD)
  // ------------------------------------------------------------------------
  changeNutritionDate(dayOffset) {
    const cur = new Date(this.state.selectedNutritionDate);
    cur.setDate(cur.getDate() + dayOffset);
    this.state.selectedNutritionDate = cur.toISOString().split("T")[0];
    this.renderNutritionTab();
  }

  renderNutritionTab() {
    const selectedDate = this.state.selectedNutritionDate;
    const today = this.state.getTodayIsoDate();

    const dateDisplay = document.getElementById("nutDateDisplay");
    if (dateDisplay) {
      const d = new Date(selectedDate);
      const isToday = selectedDate === today;
      const formatted = d.toLocaleDateString(this.state.currentLang === "ru" ? "ru-RU" : "en-US", {
        day: "numeric",
        month: "long"
      });
      dateDisplay.textContent = isToday ? `${this.t("ringsToday")}, ${formatted}` : formatted;
    }

    const dayMeals = this.state.meals.filter((m) => m.date === selectedDate);

    let totalCal = 0;
    let totalP = 0;
    let totalF = 0;
    let totalC = 0;

    const catSums = { breakfast: 0, lunch: 0, dinner: 0, snack: 0 };

    dayMeals.forEach((m) => {
      const c = Number(m.cal) || 0;
      totalCal += c;
      totalP += Number(m.protein) || 0;
      totalF += Number(m.fat) || 0;
      totalC += Number(m.carbs) || 0;
      if (catSums[m.type] !== undefined) {
        catSums[m.type] += c;
      }
    });

    const dayWorkouts = this.state.workouts.filter((w) => w.date.startsWith(selectedDate));
    const burnedToday = dayWorkouts.reduce((acc, w) => acc + (Number(w.calories) || 0), 0);

    const goalCal = this.state.settings.dailyCalGoal || 2400;
    const remaining = goalCal - totalCal + burnedToday;

    const consumedEl = document.getElementById("nutConsumedTotal");
    const goalEl = document.getElementById("nutDailyGoal");
    const burnedEl = document.getElementById("nutBurnedToday");
    const remEl = document.getElementById("nutRemainingCal");

    if (consumedEl) consumedEl.textContent = totalCal.toLocaleString();
    if (goalEl) goalEl.innerHTML = `${goalCal.toLocaleString()} <small>ккал</small>`;
    if (burnedEl) burnedEl.innerHTML = `- ${burnedToday.toLocaleString()} <small>ккал</small>`;
    if (remEl) {
      const isPositive = remaining >= 0;
      remEl.className = `cal-detail-val ${isPositive ? "text-green" : "text-fire"}`;
      remEl.innerHTML = `${isPositive ? "+" : ""}${remaining.toLocaleString()} <small>ккал</small>`;
    }

    const pGoal = this.state.settings.proteinGoal || 150;
    const fGoal = this.state.settings.fatGoal || 70;
    const cGoal = this.state.settings.carbsGoal || 260;

    document.getElementById("nutProteinVal") && (document.getElementById("nutProteinVal").textContent = totalP.toFixed(0));
    document.getElementById("nutProteinGoal") && (document.getElementById("nutProteinGoal").textContent = pGoal);
    document.getElementById("nutProteinBar") && (document.getElementById("nutProteinBar").style.width = `${Math.min((totalP / pGoal) * 100, 100)}%`);

    document.getElementById("nutFatVal") && (document.getElementById("nutFatVal").textContent = totalF.toFixed(0));
    document.getElementById("nutFatGoal") && (document.getElementById("nutFatGoal").textContent = fGoal);
    document.getElementById("nutFatBar") && (document.getElementById("nutFatBar").style.width = `${Math.min((totalF / fGoal) * 100, 100)}%`);

    document.getElementById("nutCarbsVal") && (document.getElementById("nutCarbsVal").textContent = totalC.toFixed(0));
    document.getElementById("nutCarbsGoal") && (document.getElementById("nutCarbsGoal").textContent = cGoal);
    document.getElementById("nutCarbsBar") && (document.getElementById("nutCarbsBar").style.width = `${Math.min((totalC / cGoal) * 100, 100)}%`);

    document.getElementById("catCalBreakfast") && (document.getElementById("catCalBreakfast").textContent = `${catSums.breakfast} ккал`);
    document.getElementById("catCalLunch") && (document.getElementById("catCalLunch").textContent = `${catSums.lunch} ккал`);
    document.getElementById("catCalDinner") && (document.getElementById("catCalDinner").textContent = `${catSums.dinner} ккал`);
    document.getElementById("catCalSnack") && (document.getElementById("catCalSnack").textContent = `${catSums.snack} ккал`);

    ["breakfast", "lunch", "dinner", "snack"].forEach((type) => {
      const listEl = document.getElementById(`mealsList${type.charAt(0).toUpperCase() + type.slice(1)}`);
      if (!listEl) return;

      const mealsInCat = dayMeals.filter((m) => m.type === type);
      if (mealsInCat.length === 0) {
        listEl.innerHTML = `<span style="font-size:0.75rem; color:var(--text-tertiary); padding: 6px 0;">Блюда пока не добавлены</span>`;
        return;
      }

      listEl.innerHTML = mealsInCat
        .map(
          (m) => `
          <div class="meal-item-row" data-meal-id="${m.id}">
            <div class="meal-item-main">
              <span class="meal-item-name">${this.escapeHtml(m.name)}</span>
              <span class="meal-item-macros">Б: ${m.protein || 0}г • Ж: ${m.fat || 0}г • У: ${m.carbs || 0}г • ${m.time || ""}</span>
            </div>
            <div class="meal-item-right">
              <span class="meal-item-cal">${m.cal} ккал</span>
              <div class="meal-item-actions">
                <button class="btn-icon-action edit-meal-btn" data-id="${m.id}" title="Редактировать">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-icon-action delete-action delete-meal-btn" data-id="${m.id}" title="Удалить">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        `
        )
        .join("");
    });

    document.querySelectorAll(".edit-meal-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const meal = this.state.meals.find((x) => x.id === id);
        if (meal) this.openMealModal(meal);
      });
    });

    document.querySelectorAll(".delete-meal-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        const confirmed = await this.confirmDialog({
          title: "Удалить блюдо?",
          text: "Вы уверены, что хотите удалить это блюдо из дневника питания?",
          confirmButtonText: "Удалить",
          cancelButtonText: "Отмена",
          icon: "warning"
        });

        if (confirmed) {
          this.state.meals = this.state.meals.filter((x) => x.id !== id);
          this.state.saveMeals();
          this.renderNutritionTab();
          this.renderDashboard();
          this.renderUserProfile();
          this.showToast(this.t("mealDeletedToast"), "error");
        }
      });
    });

    this.renderWaterTracker();
  }

  renderWaterTracker() {
    const curDate = this.state.selectedNutritionDate;
    const currentWater = this.state.water[curDate] || 0;
    const goalWater = this.state.settings.dailyWaterGoal || 2500;
    const pct = Math.min(Math.round((currentWater / goalWater) * 100), 100);

    const valEl = document.getElementById("waterCurrentVal");
    const badgeEl = document.getElementById("waterPercentageBadge");
    const cupsRow = document.getElementById("waterCupsRow");

    if (valEl) valEl.textContent = currentWater;
    if (badgeEl) badgeEl.textContent = `${pct}%`;

    if (cupsRow) {
      const totalCups = Math.max(Math.ceil(goalWater / 250), 10);
      const filledCups = Math.floor(currentWater / 250);

      let html = "";
      for (let i = 0; i < totalCups; i++) {
        const isFilled = i < filledCups;
        html += `<div class="water-cup-icon ${isFilled ? "filled" : ""}" title="${(i + 1) * 250} мл"><i class="fa-solid fa-droplet"></i></div>`;
      }
      cupsRow.innerHTML = html;
    }
  }

  adjustWater(amount) {
    const curDate = this.state.selectedNutritionDate;
    const current = this.state.water[curDate] || 0;
    this.state.water[curDate] = Math.max(current + amount, 0);
    this.state.saveWater();
    this.renderWaterTracker();
    this.drawActivityRings();
  }

  resetWater() {
    const curDate = this.state.selectedNutritionDate;
    this.state.water[curDate] = 0;
    this.state.saveWater();
    this.renderWaterTracker();
    this.drawActivityRings();
  }

  openMealModal(meal = null, defaultType = "breakfast") {
    const titleEl = document.getElementById("mealModalTitle");
    const idInput = document.getElementById("mealIdInput");
    const nameInput = document.getElementById("mealNameInput");
    const typeSelect = document.getElementById("mealTypeSelect");
    const calInput = document.getElementById("mealCaloriesInput");
    const timeInput = document.getElementById("mealTimeInput");
    const pInput = document.getElementById("mealProteinInput");
    const fInput = document.getElementById("mealFatInput");
    const cInput = document.getElementById("mealCarbsInput");

    if (meal) {
      if (titleEl) titleEl.textContent = this.t("modalEditMealTitle");
      idInput.value = meal.id;
      nameInput.value = meal.name;
      typeSelect.value = meal.type;
      calInput.value = meal.cal;
      timeInput.value = meal.time || "12:00";
      pInput.value = meal.protein || "";
      fInput.value = meal.fat || "";
      cInput.value = meal.carbs || "";
    } else {
      if (titleEl) titleEl.textContent = this.t("modalAddMealTitle");
      idInput.value = "";
      nameInput.value = "";
      typeSelect.value = defaultType;
      calInput.value = "350";
      const now = new Date();
      timeInput.value = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      pInput.value = "20";
      fInput.value = "10";
      cInput.value = "45";
    }

    this.mealModal.classList.remove("hidden");
  }

  closeMealModal() {
    this.mealModal.classList.add("hidden");
  }

  handleMealSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("mealIdInput").value;
    const name = document.getElementById("mealNameInput").value.trim();
    const type = document.getElementById("mealTypeSelect").value;
    const cal = Number(document.getElementById("mealCaloriesInput").value) || 0;
    const time = document.getElementById("mealTimeInput").value || "12:00";
    const protein = Number(document.getElementById("mealProteinInput").value) || 0;
    const fat = Number(document.getElementById("mealFatInput").value) || 0;
    const carbs = Number(document.getElementById("mealCarbsInput").value) || 0;

    const date = this.state.selectedNutritionDate;

    if (id) {
      const idx = this.state.meals.findIndex((m) => m.id === id);
      if (idx !== -1) {
        this.state.meals[idx] = { ...this.state.meals[idx], name, type, cal, time, protein, fat, carbs };
      }
    } else {
      this.state.meals.push({
        id: `m-${Date.now()}`,
        date,
        name,
        type,
        cal,
        time,
        protein,
        fat,
        carbs
      });
    }

    const dayMeals = this.state.meals.filter((m) => m.date === date);
    const dayTotalCal = dayMeals.reduce((acc, m) => acc + (Number(m.cal) || 0), 0);
    const goalCal = this.state.settings.dailyCalGoal || 2400;

    this.state.saveMeals();
    this.closeMealModal();
    this.renderNutritionTab();
    this.renderDashboard();
    this.renderUserProfile();
    this.renderAIContext();

    if (dayTotalCal >= goalCal) {
      this.fireConfettiCelebration("goal");
      this.showToast(`🎯 Дневная норма калорий (${dayTotalCal} / ${goalCal} ккал) выполнена!`, "success");
    } else {
      this.showToast(this.t("mealSavedToast"), "success");
    }
  }

  // ------------------------------------------------------------------------
  // APPLE HEALTH LIVE SYNC & SIMULATION
  // ------------------------------------------------------------------------
  initWatchSimulationClock() {
    const updateTime = () => {
      const el = document.getElementById("watchLiveTime");
      if (el) {
        const d = new Date();
        el.textContent = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      }
      const hrEl = document.getElementById("watchLiveHr");
      if (hrEl) {
        const randomHr = 138 + Math.floor(Math.sin(Date.now() / 2000) * 8);
        hrEl.textContent = randomHr;
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  triggerAppleLiveSync() {
    this.appleSyncModal.classList.remove("hidden");

    const steps = [
      document.getElementById("step1"),
      document.getElementById("step2"),
      document.getElementById("step3"),
      document.getElementById("step4")
    ];

    steps.forEach((s) => {
      if (s) {
        s.className = "sync-step-row";
        s.querySelector(".step-indicator").innerHTML = `<i class="fa-solid fa-circle"></i>`;
      }
    });

    const headline = document.getElementById("syncStatusHeadline");
    const sub = document.getElementById("syncStatusSub");

    const runStep = (idx) => {
      if (idx >= steps.length) {
        setTimeout(() => {
          this.appleSyncModal.classList.add("hidden");
          this.injectAppleHealthWorkouts();
          this.showToast(this.t("syncCompleteToast"), "success");
        }, 800);
        return;
      }

      if (idx > 0 && steps[idx - 1]) {
        steps[idx - 1].className = "sync-step-row completed";
        steps[idx - 1].querySelector(".step-indicator").innerHTML = `<i class="fa-solid fa-circle-check text-green"></i>`;
      }

      if (steps[idx]) {
        steps[idx].className = "sync-step-row active";
        steps[idx].querySelector(".step-indicator").innerHTML = `<i class="fa-solid fa-spinner fa-spin text-strava"></i>`;
      }

      if (idx === 0) {
        if (headline) headline.textContent = "Подключение к Apple Watch Series 9...";
        if (sub) sub.textContent = "Обнаружено устройство: Watch9,4 (watchOS 10.4)";
      } else if (idx === 1) {
        if (headline) headline.textContent = "Чтение базы HealthKit...";
        if (sub) sub.textContent = "Экспорт записей HKWorkoutActivityTypeOutdoorRunning, Ride, HIIT";
      } else if (idx === 2) {
        if (headline) headline.textContent = "Синхронизация пульсометра & GPS...";
        if (sub) sub.textContent = "Точки маршрута, ЧСС 1-секундный интервал, набор высоты";
      } else if (idx === 3) {
        if (headline) headline.textContent = "Интеграция в StravaPulse...";
        if (sub) sub.textContent = "Пересчёт колец активности, темпа и GPS-карты";
      }

      setTimeout(() => runStep(idx + 1), 750);
    };

    runStep(0);
  }

  injectAppleHealthWorkouts() {
    const now = new Date();
    const isoNow = now.toISOString();

    const sampleHealthWorkouts = [
      {
        id: `apple-w-${Date.now()}-1`,
        title: "Apple Watch: Прогрессивный бег в парке (Live Sync)",
        type: "Run",
        date: isoNow,
        duration: 48,
        distance: 9.2,
        calories: 640,
        heartRate: 158,
        elevation: 60,
        kudos: 4,
        isKudoed: false,
        notes: "Синхронизировано из Apple HealthKit. Точный оптический датчик пульса Apple Watch, средний каденс 174 spm.",
        device: "Apple Watch Ultra 2 (HealthKit)",
        locationName: "New York, Central Park",
        coordinates: [
          [40.7850, -73.9682], [40.7872, -73.9655], [40.7895, -73.9630], [40.7920, -73.9605],
          [40.7950, -73.9580], [40.7985, -73.9560], [40.8005, -73.9585], [40.7980, -73.9620],
          [40.7940, -73.9670], [40.7900, -73.9715], [40.7865, -73.9740], [40.7830, -73.9730],
          [40.7815, -73.9700], [40.7850, -73.9682]
        ]
      },
      {
        id: `apple-w-${Date.now()}-2`,
        title: "Apple Watch: Функциональный HIIT & Кардио",
        type: "HIIT",
        date: new Date(now.getTime() - 24 * 3600 * 1000).toISOString(),
        duration: 35,
        distance: 0,
        calories: 390,
        heartRate: 162,
        elevation: 0,
        kudos: 7,
        isKudoed: false,
        notes: "Интервальная нагрузка с Apple Watch. Пиковый пульс 176 bpm, зона 4-5.",
        device: "Apple Watch Series 9",
        locationName: "Фитнес-клуб",
        coordinates: []
      },
      {
        id: `apple-w-${Date.now()}-3`,
        title: "Apple Watch: Заезд по набережной Odaiba",
        type: "Ride",
        date: new Date(now.getTime() - 48 * 3600 * 1000).toISOString(),
        duration: 62,
        distance: 24.5,
        calories: 590,
        heartRate: 139,
        elevation: 110,
        kudos: 8,
        isKudoed: true,
        notes: "GPS трек с высотомером Apple Watch. Отличная аэробная работа.",
        device: "Apple Watch Ultra 2",
        locationName: "Tokyo, Odaiba Waterfront",
        coordinates: [
          [35.6320, 139.7750], [35.6355, 139.7790], [35.6390, 139.7840], [35.6425, 139.7890],
          [35.6460, 139.7925], [35.6490, 139.7910], [35.6480, 139.7845], [35.6440, 139.7780],
          [35.6395, 139.7730], [35.6350, 139.7710], [35.6320, 139.7750]
        ]
      }
    ];

    this.state.workouts = [...sampleHealthWorkouts, ...this.state.workouts];
    this.state.saveWorkouts();
    this.renderWorkoutsFeed();
    this.renderDashboard();
    this.renderUserProfile();
    this.renderAIContext();
    if (this.worldMap) this.renderWorldMapRoutes();
  }

  // ------------------------------------------------------------------------
  // CSV / GPX / XML IMPORT & EXPORT
  // ------------------------------------------------------------------------
  setupDropzone() {
    const dz = this.csvDropzone;
    if (!dz) return;

    ["dragenter", "dragover"].forEach((eventName) => {
      dz.addEventListener(eventName, (e) => {
        e.preventDefault();
        dz.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      dz.addEventListener(eventName, (e) => {
        e.preventDefault();
        dz.classList.remove("dragover");
      });
    });

    dz.addEventListener("drop", (e) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        this.processUploadedFile(files[0]);
      }
    });
  }

  handleFileSelect(e) {
    const files = e.target.files;
    if (files && files.length > 0) {
      this.processUploadedFile(files[0]);
    }
  }

  processUploadedFile(file) {
    const reader = new FileReader();
    const isXml = file.name.endsWith(".xml");
    const isGpx = file.name.endsWith(".gpx");

    reader.onload = (e) => {
      const content = e.target.result;
      if (isGpx || (isXml && content.includes("<gpx"))) {
        this.parseGpxFile(content, file.name);
      } else if (isXml) {
        this.parseAppleHealthXml(content, file.name);
      } else {
        this.parseCsvContent(content, file.name);
      }
    };
    reader.readAsText(file);
  }

  parseGpxFile(gpxString, filename) {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(gpxString, "application/xml");
      const trkpts = xmlDoc.querySelectorAll("trkpt, wpt, rtept");
      if (trkpts.length < 2) {
        this.showToast("В GPX файле недостаточно координат трека", "error");
        return;
      }

      const coords = [];
      let elevSum = 0;
      let prevEle = null;
      let firstTime = null;
      let lastTime = null;

      trkpts.forEach((pt) => {
        const lat = parseFloat(pt.getAttribute("lat"));
        const lon = parseFloat(pt.getAttribute("lon"));
        if (!isNaN(lat) && !isNaN(lon)) {
          coords.push([lat, lon]);
        }
        const eleNode = pt.querySelector("ele");
        if (eleNode) {
          const ele = parseFloat(eleNode.textContent);
          if (!isNaN(ele)) {
            if (prevEle !== null && ele > prevEle) {
              elevSum += ele - prevEle;
            }
            prevEle = ele;
          }
        }
        const timeNode = pt.querySelector("time");
        if (timeNode) {
          const t = new Date(timeNode.textContent);
          if (!firstTime) firstTime = t;
          lastTime = t;
        }
      });

      const dist = this.calculateHaversineDistanceKm(coords);
      let durationMin = 45;
      if (firstTime && lastTime) {
        durationMin = Math.max(Math.round((lastTime - firstTime) / 60000), 1);
      }

      const trackNameNode = xmlDoc.querySelector("trk > name, gpx > metadata > name");
      const trackTitle = trackNameNode ? trackNameNode.textContent.trim() : `GPX: ${filename.replace(/\.gpx$/i, "")}`;

      const newWorkout = {
        id: `gpx-${Date.now()}`,
        title: trackTitle,
        type: "Run",
        date: firstTime ? firstTime.toISOString() : new Date().toISOString(),
        duration: durationMin,
        distance: dist,
        calories: Math.round(dist * 65) || 450,
        heartRate: 152,
        elevation: Math.round(elevSum) || 35,
        notes: `Импортировано из GPX файла (${coords.length} точек)`,
        device: "GPX Track / Garmin",
        coordinates: coords,
        locationName: "GPX Маршрут",
        kudos: 0,
        isKudoed: false
      };

      this.state.workouts.unshift(newWorkout);
      this.state.saveWorkouts();
      this.renderWorkoutsFeed();
      this.renderDashboard();
      if (this.worldMap) this.renderWorldMapRoutes();
      this.showImportLog(1, filename);
      this.showToast(this.t("gpxImportedToast"), "success");
    } catch (e) {
      this.showToast("Ошибка при обработке GPX файла", "error");
    }
  }

  parseCsvContent(csvText, filename) {
    if (!csvText || !csvText.trim()) {
      this.showToast("Файл CSV пуст или содержит только заголовки", "error");
      return;
    }

    let parsedRows = [];
    if (typeof Papa !== "undefined") {
      const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false
      });
      parsedRows = parsed.data || [];
    }

    let importedCount = 0;
    const newWorkouts = [];
    const newMeals = [];

    if (parsedRows.length > 0 && typeof parsedRows[0] === "object") {
      // Header-based parsing via PapaParse
      const sample = parsedRows[0];
      const keys = Object.keys(sample).map((k) => k.trim().toLowerCase());
      const isNutrition = keys.includes("food") || keys.includes("meal") || keys.includes("protein");

      parsedRows.forEach((row, i) => {
        const getField = (candidates, fallback = "") => {
          for (const rawKey of Object.keys(row)) {
            const normalized = rawKey.trim().toLowerCase();
            if (candidates.includes(normalized) && row[rawKey] !== undefined && row[rawKey] !== null) {
              return String(row[rawKey]).trim();
            }
          }
          return fallback;
        };

        if (isNutrition) {
          const mealName = getField(["name", "meal", "food"], "Импортированное блюдо");
          const dateVal = getField(["date"], this.state.getTodayIsoDate());
          const typeVal = getField(["type"], "lunch").toLowerCase();
          const timeVal = getField(["time"], "13:00");
          const calVal = Number(getField(["calories", "cal"])) || 300;
          const pVal = Number(getField(["protein"])) || 0;
          const fVal = Number(getField(["fat"])) || 0;
          const cVal = Number(getField(["carbs"])) || 0;

          newMeals.push({
            id: `imp-m-${Date.now()}-${i}`,
            date: dateVal,
            name: mealName,
            type: typeVal,
            time: timeVal,
            cal: calVal,
            protein: pVal,
            fat: fVal,
            carbs: cVal
          });
          importedCount++;
        } else {
          const title = getField(["title", "activity_name", "name"], "Импортированная тренировка");
          const type = getField(["type", "sport", "activity_type"], "Run");
          let dateVal = getField(["date", "start_time", "start_date"], new Date().toISOString());
          if (!dateVal.includes("T")) {
            const parsedD = new Date(dateVal);
            dateVal = isNaN(parsedD.getTime()) ? new Date().toISOString() : parsedD.toISOString();
          }

          const duration = Number(getField(["duration", "elapsed_time_min", "time_min"])) || 30;
          const distance = Number(getField(["distance", "distance_km", "km"])) || 0;
          const calories = Number(getField(["calories", "energy_burned", "kcal"])) || 250;
          const heartRate = Number(getField(["heart_rate", "avg_hr", "hr"])) || null;
          const elevation = Number(getField(["elevation", "elevation_gain", "gain_m"])) || 0;
          const notes = getField(["notes", "description"], `Импортировано из ${filename}`);

          let coords = [];
          const rawCoords = getField(["coordinates", "coords", "gps"]);
          if (rawCoords) {
            try {
              coords = JSON.parse(rawCoords);
            } catch (e) { }
          }

          newWorkouts.push({
            id: `imp-w-${Date.now()}-${i}`,
            title,
            type,
            date: dateVal,
            duration,
            distance,
            calories,
            heartRate,
            elevation,
            notes,
            coordinates: coords,
            kudos: 0,
            isKudoed: false,
            device: "CSV / PapaParse"
          });
          importedCount++;
        }
      });
    } else {
      // Fallback if PapaParse is not loaded
      const lines = csvText.split(/\r\n|\n/).filter((l) => l.trim().length > 0);
      if (lines.length < 2) {
        this.showToast("Файл CSV пуст или содержит только заголовки", "error");
        return;
      }

      const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/"/g, ""));
      const isNutrition = headers.includes("food") || headers.includes("meal") || headers.includes("protein");

      for (let i = 1; i < lines.length; i++) {
        const row = this.parseCsvRow(lines[i]);
        if (row.length === 0) continue;

        if (isNutrition) {
          const meal = {
            id: `imp-m-${Date.now()}-${i}`,
            date: row[headers.indexOf("date")] || this.state.getTodayIsoDate(),
            name: row[headers.indexOf("name")] || row[headers.indexOf("meal")] || "Импортированное блюдо",
            type: (row[headers.indexOf("type")] || "lunch").toLowerCase(),
            time: row[headers.indexOf("time")] || "13:00",
            cal: Number(row[headers.indexOf("calories")] || row[headers.indexOf("cal")]) || 300,
            protein: Number(row[headers.indexOf("protein")]) || 0,
            fat: Number(row[headers.indexOf("fat")]) || 0,
            carbs: Number(row[headers.indexOf("carbs")]) || 0
          };
          newMeals.push(meal);
          importedCount++;
        } else {
          const getVal = (candidates, fallback = "") => {
            for (const c of candidates) {
              const idx = headers.indexOf(c);
              if (idx !== -1 && row[idx] !== undefined) return row[idx];
            }
            return fallback;
          };

          const title = getVal(["title", "activity_name", "name"], "Импортированная тренировка");
          const type = getVal(["type", "sport", "activity_type"], "Run");
          let dateVal = getVal(["date", "start_time", "start_date"], new Date().toISOString());
          if (!dateVal.includes("T")) dateVal = new Date(dateVal).toISOString();

          const duration = Number(getVal(["duration", "elapsed_time_min", "time_min"])) || 30;
          const distance = Number(getVal(["distance", "distance_km", "km"])) || 0;
          const calories = Number(getVal(["calories", "energy_burned", "kcal"])) || 250;
          const heartRate = Number(getVal(["heart_rate", "avg_hr", "hr"])) || null;
          const elevation = Number(getVal(["elevation", "elevation_gain", "gain_m"])) || 0;
          const notes = getVal(["notes", "description"], `Импортировано из ${filename}`);

          let coords = [];
          const rawCoords = getVal(["coordinates", "coords", "gps"]);
          if (rawCoords) {
            try {
              coords = JSON.parse(rawCoords);
            } catch (e) { }
          }

          newWorkouts.push({
            id: `imp-w-${Date.now()}-${i}`,
            title,
            type,
            date: dateVal,
            duration,
            distance,
            calories,
            heartRate,
            elevation,
            notes,
            coordinates: coords,
            kudos: 0,
            isKudoed: false,
            device: "CSV Import"
          });
          importedCount++;
        }
      }
    }

    if (newWorkouts.length > 0) {
      this.state.workouts = [...newWorkouts, ...this.state.workouts];
      this.state.saveWorkouts();
      this.renderWorkoutsFeed();
      this.renderDashboard();
      if (this.worldMap) this.renderWorldMapRoutes();
    }
    if (newMeals.length > 0) {
      this.state.meals = [...newMeals, ...this.state.meals];
      this.state.saveMeals();
      this.renderNutritionTab();
    }

    this.showImportLog(importedCount, filename);
    this.showToast(`Успешно импортировано ${importedCount} записей!`, "success");
  }

  parseCsvRow(rowText) {
    const res = [];
    let insideQuotes = false;
    let entry = "";

    for (let i = 0; i < rowText.length; i++) {
      const char = rowText[i];
      if (char === '"' || char === "'") {
        insideQuotes = !insideQuotes;
      } else if (char === "," && !insideQuotes) {
        res.push(entry.trim());
        entry = "";
      } else {
        entry += char;
      }
    }
    res.push(entry.trim());
    return res;
  }

  parseAppleHealthXml(xmlString, filename) {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const workoutNodes = xmlDoc.querySelectorAll("Workout, Record");

      let count = 0;
      const parsedWorkouts = [];

      workoutNodes.forEach((node, i) => {
        const activityType = node.getAttribute("workoutActivityType") || node.getAttribute("type") || "";
        if (!activityType && node.tagName.toLowerCase() !== "workout") return;

        let sport = "Run";
        if (activityType.includes("Cycling") || activityType.includes("Ride")) sport = "Ride";
        else if (activityType.includes("Swimming")) sport = "Swim";
        else if (activityType.includes("FunctionalStrengthTraining") || activityType.includes("Strength")) sport = "Strength";
        else if (activityType.includes("Walking")) sport = "Walk";
        else if (activityType.includes("HighIntensityIntervalTraining") || activityType.includes("HIIT")) sport = "HIIT";

        const dur = Math.round(Number(node.getAttribute("duration")) || 40);
        const dist = Number(node.getAttribute("totalDistance")) || 0;
        const cal = Math.round(Number(node.getAttribute("totalEnergyBurned")) || 350);
        const startDate = node.getAttribute("startDate") || new Date().toISOString();

        // Sample GPS coords for imported outdoor workouts
        let coords = [];
        if (sport === "Run" || sport === "Ride") {
          coords = [
            [55.720 + i * 0.005, 37.550 + i * 0.005],
            [55.723 + i * 0.005, 37.555 + i * 0.005],
            [55.727 + i * 0.005, 37.560 + i * 0.005],
            [55.722 + i * 0.005, 37.565 + i * 0.005]
          ];
        }

        parsedWorkouts.push({
          id: `hk-${Date.now()}-${i}`,
          title: `HealthKit: ${sport} Activity`,
          type: sport,
          date: new Date(startDate).toISOString(),
          duration: dur,
          distance: Number(dist.toFixed(2)),
          calories: cal,
          heartRate: 145,
          elevation: 25,
          kudos: 3,
          isKudoed: false,
          notes: `Экспортировано из Apple HealthKit (${activityType})`,
          device: "Apple Watch (HealthKit XML)",
          coordinates: coords,
          locationName: "HealthKit GPS"
        });
        count++;
      });

      if (parsedWorkouts.length > 0) {
        this.state.workouts = [...parsedWorkouts, ...this.state.workouts];
        this.state.saveWorkouts();
        this.renderWorkoutsFeed();
        this.renderDashboard();
        if (this.worldMap) this.renderWorldMapRoutes();
        this.showImportLog(count, filename);
        this.showToast(`Импортировано ${count} тренировок Apple Health!`, "success");
      } else {
        this.showToast("В XML не найдено записей Workout", "error");
      }
    } catch (e) {
      this.showToast("Ошибка при обработке XML файла", "error");
    }
  }

  showImportLog(count, filename) {
    const logBox = document.getElementById("importLogBox");
    const countEl = document.getElementById("importSuccessCount");
    const detailsEl = document.getElementById("importLogDetails");

    if (logBox && countEl && detailsEl) {
      countEl.textContent = `${count} записей добавлено`;
      detailsEl.textContent = `Файл "${filename}" успешно прочитан, добавлены данные и маршруты на карту.`;
      logBox.classList.remove("hidden");
    }
  }

  downloadCsvTemplate() {
    const data = [
      {
        title: "Утренний темповый бег",
        type: "Run",
        date: "2026-10-15T08:30:00",
        duration: 45,
        distance: 8.2,
        calories: 540,
        heart_rate: 152,
        elevation: 30,
        notes: "Отличный темп",
        coordinates: "[[55.715,37.553],[55.725,37.565],[55.715,37.553]]"
      },
      {
        title: "Велозаезд по шоссе",
        type: "Ride",
        date: "2026-10-14T17:00:00",
        duration: 60,
        distance: 25.4,
        calories: 620,
        heart_rate: 138,
        elevation: 180,
        notes: "Аэробная база",
        coordinates: "[[55.709,37.542],[55.735,37.498],[55.709,37.542]]"
      },
      {
        title: "Силовая тренировка",
        type: "Strength",
        date: "2026-10-13T19:00:00",
        duration: 50,
        distance: 0,
        calories: 420,
        heart_rate: 140,
        elevation: 0,
        notes: "Приседания и жим",
        coordinates: "[]"
      }
    ];

    let csvContent = "";
    if (typeof Papa !== "undefined") {
      csvContent = Papa.unparse(data);
    } else {
      csvContent =
        "title,type,date,duration,distance,calories,heart_rate,elevation,notes,coordinates\n" +
        'Утренний темповый бег,Run,2026-10-15T08:30:00,45,8.2,540,152,30,"Отличный темп","[[55.715,37.553],[55.725,37.565],[55.715,37.553]]"\n' +
        'Велозаезд по шоссе,Ride,2026-10-14T17:00:00,60,25.4,620,138,180,"Аэробная база","[[55.709,37.542],[55.735,37.498],[55.709,37.542]]"\n' +
        'Силовая тренировка,Strength,2026-10-13T19:00:00,50,0,420,140,0,"Приседания и жим","[]"\n';
    }

    this.downloadFile("stravapulse_template.csv", csvContent, "text/csv;charset=utf-8;");
    this.showToast("Шаблон CSV с координатами скачан!", "info");
  }

  exportWorkoutsCsv() {
    let csvContent = "";
    if (typeof Papa !== "undefined") {
      const data = this.state.workouts.map((w) => ({
        id: w.id,
        title: w.title || "",
        type: w.type,
        date: w.date,
        duration: w.duration,
        distance: w.distance || 0,
        calories: w.calories || 0,
        heart_rate: w.heartRate || "",
        elevation: w.elevation || 0,
        notes: w.notes || "",
        coordinates: w.coordinates ? JSON.stringify(w.coordinates) : "[]"
      }));
      csvContent = Papa.unparse(data);
    } else {
      const headers = "id,title,type,date,duration,distance,calories,heart_rate,elevation,notes,coordinates\n";
      const rows = this.state.workouts
        .map((w) => {
          const coordsStr = w.coordinates ? JSON.stringify(w.coordinates).replace(/"/g, '""') : "[]";
          return `"${w.id}","${(w.title || "").replace(/"/g, '""')}","${w.type}","${w.date}",${w.duration},${w.distance || 0},${w.calories || 0},${w.heartRate || ""},${w.elevation || 0},"${(w.notes || "").replace(/"/g, '""')}","${coordsStr}"`;
        })
        .join("\n");
      csvContent = headers + rows;
    }

    this.downloadFile("stravapulse_workouts_export.csv", csvContent, "text/csv;charset=utf-8;");
    this.showToast("Тренировки экспортированы в CSV с GPS-треками!", "success");
  }

  exportNutritionCsv() {
    let csvContent = "";
    if (typeof Papa !== "undefined") {
      const data = this.state.meals.map((m) => ({
        id: m.id,
        date: m.date,
        name: m.name || "",
        type: m.type,
        time: m.time || "",
        calories: m.cal,
        protein: m.protein || 0,
        fat: m.fat || 0,
        carbs: m.carbs || 0
      }));
      csvContent = Papa.unparse(data);
    } else {
      const headers = "id,date,name,type,time,calories,protein,fat,carbs\n";
      const rows = this.state.meals
        .map((m) => {
          return `"${m.id}","${m.date}","${(m.name || "").replace(/"/g, '""')}","${m.type}","${m.time || ""}",${m.cal},${m.protein || 0},${m.fat || 0},${m.carbs || 0}`;
        })
        .join("\n");
      csvContent = headers + rows;
    }

    this.downloadFile("stravapulse_nutrition_export.csv", csvContent, "text/csv;charset=utf-8;");
    this.showToast("Дневник питания экспортирован в CSV!", "success");
  }

  exportFullBackup() {
    const backupData = {
      version: "2.1",
      exportDate: new Date().toISOString(),
      settings: this.state.settings,
      workouts: this.state.workouts,
      meals: this.state.meals,
      water: this.state.water,
      chatHistory: this.state.chatHistory
    };

    const jsonStr = JSON.stringify(backupData, null, 2);
    this.downloadFile("stravapulse_full_backup.json", jsonStr, "application/json;charset=utf-8;");
    this.showToast("Полный бэкап сохранён!", "success");
  }

  exportDemoHealthXml() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<HealthData locale="ru_RU">
  <ExportDate value="${new Date().toISOString()}"/>
  <Workout workoutActivityType="HKWorkoutActivityTypeOutdoorRunning" duration="52" totalDistance="10.2" totalEnergyBurned="720" startDate="${new Date().toISOString()}"/>
  <Workout workoutActivityType="HKWorkoutActivityTypeCycling" duration="65" totalDistance="28.5" totalEnergyBurned="680" startDate="${new Date(Date.now() - 86400000).toISOString()}"/>
  <Workout workoutActivityType="HKWorkoutActivityTypeHighIntensityIntervalTraining" duration="30" totalDistance="0" totalEnergyBurned="380" startDate="${new Date(Date.now() - 172800000).toISOString()}"/>
</HealthData>`;
    this.downloadFile("apple_healthkit_export.xml", xml, "application/xml;charset=utf-8;");
    this.showToast("Демо HealthKit XML файл сгенерирован!", "info");
  }

  downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ------------------------------------------------------------------------
  // PERSONAL AI COACH (LOCAL INTELLIGENCE & GEMINI REST API)
  // ------------------------------------------------------------------------
  renderAIContext() {
    const workouts = this.state.workouts;
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
    const weekWorkouts = workouts.filter((w) => new Date(w.date) >= weekAgo);

    let dist7d = 0;
    let cal7d = 0;
    let hrSum = 0;
    let hrCount = 0;

    weekWorkouts.forEach((w) => {
      dist7d += Number(w.distance) || 0;
      cal7d += Number(w.calories) || 0;
      if (w.heartRate) {
        hrSum += Number(w.heartRate);
        hrCount++;
      }
    });

    const avgHr = hrCount > 0 ? Math.round(hrSum / hrCount) : 142;

    let food7d = 0;
    let protein7d = 0;
    this.state.meals.forEach((m) => {
      food7d += Number(m.cal) || 0;
      protein7d += Number(m.protein) || 0;
    });

    const avgDailyProtein = (protein7d / 7).toFixed(0);

    const distEl = document.getElementById("aiStatDist");
    const hrEl = document.getElementById("aiStatHr");
    const calEl = document.getElementById("aiStatCal");
    const protEl = document.getElementById("aiStatProtein");
    const recEl = document.getElementById("aiStatRecovery");

    if (distEl) distEl.textContent = `${dist7d.toFixed(1)} км`;
    if (hrEl) hrEl.textContent = `${avgHr} bpm`;
    if (calEl) calEl.textContent = `${(food7d / 7).toFixed(0)} / ${(cal7d / 7).toFixed(0)} ккал`;
    if (protEl) protEl.textContent = `${avgDailyProtein} г/день`;

    let recoveryScore = 95;
    if (avgHr > 158) recoveryScore -= 18;
    if (dist7d > 50) recoveryScore -= 12;
    if (recoveryScore > 85) {
      if (recEl) {
        recEl.className = "text-green";
        recEl.textContent = `${recoveryScore}% (Свежесть)`;
      }
    } else {
      if (recEl) {
        recEl.className = "text-fire";
        recEl.textContent = `${recoveryScore}% (Требуется разгрузка)`;
      }
    }
  }

  handleQuickPrompt(promptType) {
    const prompts = {
      "analyze-weekly": "Проанализируй мои тренировки за неделю в стиле Strava",
      "eval-nutrition": "Оцени мой баланс КБЖУ и дай советы по питанию",
      "check-hr-zones": "Проверь мой пульс и риск перетренированности",
      "tomorrow-plan": "Составь план тренировок и питания на завтра"
    };

    const userText = prompts[promptType] || "Проанализируй мою текущую форму";
    this.sendCoachMessage(userText, promptType);
  }

  sendCoachMessage(userText, intent = null) {
    const userMsg = {
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    this.state.chatHistory.push(userMsg);
    this.state.saveChat();
    this.renderChatMessages();

    const typing = document.getElementById("typingIndicator");
    if (typing) typing.classList.remove("hidden");
    const container = document.getElementById("coachChatContainer");
    if (container) container.scrollTop = container.scrollHeight;

    const isGemini = this.state.settings.aiEngine === "gemini" && this.state.settings.geminiApiKey;

    if (isGemini) {
      this.callGeminiApi(userText)
        .then((aiReply) => {
          if (typing) typing.classList.add("hidden");
          this.addAiResponse(aiReply);
        })
        .catch(() => {
          const localReply = this.generateLocalAIResponse(userText, intent);
          if (typing) typing.classList.add("hidden");
          this.addAiResponse(localReply);
        });
    } else {
      setTimeout(() => {
        const localReply = this.generateLocalAIResponse(userText, intent);
        if (typing) typing.classList.add("hidden");
        this.addAiResponse(localReply);
      }, 700);
    }
  }

  addAiResponse(text) {
    const aiMsg = {
      sender: "ai",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    this.state.chatHistory.push(aiMsg);
    this.state.saveChat();
    this.renderChatMessages();
  }

  renderChatMessages() {
    const container = document.getElementById("coachChatContainer");
    if (!container) return;

    const welcomeMsg = `
      <div class="chat-msg ai-msg">
        <div class="chat-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="chat-bubble">
          <div class="chat-bubble-header">
            <strong>StravaPulse AI Coach</strong>
            <span class="chat-time">Сейчас</span>
          </div>
          <div class="chat-bubble-text">
            ${this.t("coachWelcomeMsg")}
          </div>
        </div>
      </div>
    `;

    const rendered = this.state.chatHistory
      .map((msg) => {
        const isUser = msg.sender === "user";
        return `
          <div class="chat-msg ${isUser ? "user-msg" : "ai-msg"}">
            <div class="chat-avatar"><i class="fa-solid ${isUser ? "fa-user" : "fa-robot"}"></i></div>
            <div class="chat-bubble">
              <div class="chat-bubble-header">
                <strong>${isUser ? this.state.settings.athleteName : "StravaPulse Coach"}</strong>
                <span class="chat-time">${msg.time}</span>
              </div>
              <div class="chat-bubble-text">
                ${this.formatMarkdownHtml(msg.text)}
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    container.innerHTML = welcomeMsg + rendered;
    container.scrollTop = container.scrollHeight;
  }

  formatMarkdownHtml(raw) {
    if (!raw) return "";
    let s = raw;
    s = s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/^- (.*$)/gim, "<li>$1</li>");
    s = s.replace(/(<li>.*<\/li>)/gms, "<ul>$1</ul>");
    s = s.split("\n\n").map((p) => (p.startsWith("<ul>") ? p : `<p>${p.replace(/\n/g, "<br>")}</p>`)).join("");
    return s;
  }

  // Local Algorithmic AI Fitness Coach Engine (with Geography and Terrain awareness)
  generateLocalAIResponse(prompt, intent) {
    const s = this.state.settings;
    const workouts = this.state.workouts;
    const weekWorkouts = workouts.slice(0, 7);

    let totalDist = 0;
    let totalCal = 0;
    let hrSum = 0;
    let hrCount = 0;
    let runsCount = 0;
    let rideCount = 0;
    let maxDist = 0;
    let gpsTrackedCount = 0;
    const locations = [];

    weekWorkouts.forEach((w) => {
      const d = Number(w.distance) || 0;
      totalDist += d;
      totalCal += Number(w.calories) || 0;
      if (d > maxDist) maxDist = d;
      if (w.heartRate) {
        hrSum += Number(w.heartRate);
        hrCount++;
      }
      if (w.type === "Run") runsCount++;
      if (w.type === "Ride") rideCount++;
      if (w.coordinates && w.coordinates.length > 1) gpsTrackedCount++;
      if (w.locationName && !locations.includes(w.locationName)) locations.push(w.locationName);
    });

    const avgHr = hrCount > 0 ? Math.round(hrSum / hrCount) : 144;
    const pTarget = s.proteinGoal || 150;
    const calTarget = s.dailyCalGoal || 2400;

    const pLower = prompt.toLowerCase();
    const isWeekly = intent === "analyze-weekly" || pLower.includes("недел") || pLower.includes("week") || pLower.includes("strava");
    const isNutr = intent === "eval-nutrition" || pLower.includes("питан") || pLower.includes("кбжу") || pLower.includes("protein") || pLower.includes("калор");
    const isHr = intent === "check-hr-zones" || pLower.includes("пульс") || pLower.includes("сердц") || pLower.includes("heart") || pLower.includes("перетрен");
    const isTomorrow = intent === "tomorrow-plan" || pLower.includes("завтра") || pLower.includes("план") || pLower.includes("tomorrow");

    if (isWeekly) {
      return `### ⚡ Разбор недели в стиле Strava для ${s.athleteName}

**Итоговый объём:** Ты набрал **${totalDist.toFixed(1)} км** за ${weekWorkouts.length} тренировок и сжёг **${totalCal.toLocaleString()} ккал**! 🔥

**География и GPS-маршруты:**
- **GPS-трекинг:** Зафиксировано **${gpsTrackedCount} маршрутов** на карте мира (${locations.slice(0, 3).join(", ") || "Лужники, Парк Горького"}).
- **Беговой прогресс:** Совершено ${runsCount} пробежек. Самый длинный кросс составил **${maxDist.toFixed(1)} км**.
- **Тренировочный импульс (TRIMP):** Нагрузка сбалансирована, средний пульс нагрузок **${avgHr} уд/мин** (аэробная база в норме).
- **Сравнение с целью:** Для твоей цели "${s.fitnessGoal}" такой объём даёт прирост аэробной мощности на ~1.5% в месяц.

> **Совет тренера:** Открой раздел **"Карта маршрутов"** и исследуй рельеф набережных — чередуй плоский бег с холмистыми участками для тренировки силовой выносливости!`;
    }

    if (isNutr) {
      return `### 🥗 Оценка рациона и баланса КБЖУ

**Твой профиль:** Вес ${s.weight} кг | Цель: **${calTarget} ккал/день** | Норма белка: **${pTarget} г** (${(pTarget / s.weight).toFixed(1)} г/кг веса).

**Анализ дневника питания:**
- **Белковый оптимум:** Ты держишь высокий уровень протеина. Для восстановления после набега в ${totalDist.toFixed(1)} км это отлично предохраняет от катаболизма.
- **Углеводная загрузка:** Перед длительными беговыми и велотренировками добавляй медленные углеводы (овсянка, киноа, бурый рис) за 2-2.5 часа до старта.
- **Гидратация:** Поддерживай не менее **${s.dailyWaterGoal || 2500} мл чистой воды** в день.`;
    }

    if (isHr) {
      let hrStatus = "Идеальный аэробный баланс";
      let advice = "Твой пульс находится преимущественно в целевой зоне развития капилляров и сердца.";
      if (avgHr > 158) {
        hrStatus = "Повышенная кардио-нагрузка";
        advice = "Средний пульс превышает 158 bpm. Риск накопленной усталости. Рекомендуется день лёгкого стретчинга или бега в зоне 1-2 (<135 bpm).";
      }

      return `### 💓 Мониторинг пульса и рисков перетренированности

- **Средний рабочий пульс:** **${avgHr} уд/мин**
- **Статус кардио-системы:** **${hrStatus}**
- **Оценка восстановления:** **94% (Отлично)**

**Распределение пульсовых зон:**
1. **Зона 1-2 (Восстановление/База, <140 bpm):** ~55% времени
2. **Зона 3 (Темповая выносливость, 140-160 bpm):** ~35% времени
3. **Зона 4-5 (Анаэробный порог/Пик, >160 bpm):** ~10% времени

> **Рекомендация:** ${advice}`;
    }

    if (isTomorrow) {
      return `### 📋 Персональный план на завтра

**Тренировочная сессия:**
- **Тип:** Развивающий кросс по парку или набережной (с GPS-трекингом)
- **Дистанция:** **8.0 - 9.5 км**
- **Целевой темп:** Лёгкий/Аэробный (Зона 2, пульс 135-145 уд/мин)
- **Разминка:** 7 минут динамической растяжки и суставной гимнастики

**План питания:**
- **Завтрак:** Овсяная каша с орехами и ягодами + яйцо пашот (450 ккал)
- **Обед:** Лосось или куриное филе с киноа и зелёными овощами (620 ккал)
- **Полдник:** Творог 5% или протеиновый коктейль с бананом (280 ккал)
- **Ужин:** Запечённая индейка со спаржей и овощным салатом (520 ккал)
- **Вода:** 2.5 литра равномерно в течение дня.

Готов крушить рекорды? Жми кнопку *"Записать тренировку"* сразу после финиша! 🚀`;
    }

    return `### 🏆 Спортивная консультация для ${s.athleteName}

Я проанализировал твои данные: ты выполнил **${weekWorkouts.length} тренировок** суммарной дистанцией **${totalDist.toFixed(1)} км** (${gpsTrackedCount} треков на карте мира) при среднем пульсе **${avgHr} bpm**.

По твоему вопросу:
- **Тренировочный режим:** Твоя недельная нагрузка соответствует прогрессирующему атлету. Соблюдай принцип суперкомпенсации — давай телу 48 часов между пиковыми интервальными сессиями.
- **Питание и БЖУ:** Держи около 2 г белка на кг веса (${Math.round(s.weight * 2)} г) для качественного восстановления.
- **Карта маршрутов:** Ты можешь нарисовать собственный маршрут перед выходом на пробежку в конструкторе тренировки!`;
  }

  async callGeminiApi(userPrompt) {
    const key = this.state.settings.geminiApiKey;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

    const contextPrompt = `
      Ты — элитный персональный спортивный тренер и аналитик платформы StravaPulse AI.
      Профиль атлета:
      - Имя: ${this.state.settings.athleteName}
      - Вес: ${this.state.settings.weight} кг
      - Цель: ${this.state.settings.fitnessGoal}
      - Тренировок в базе: ${this.state.workouts.length}
      - Общая дистанция: ${this.state.workouts.reduce((a, b) => a + (Number(b.distance) || 0), 0).toFixed(1)} км
      - Целевые калории: ${this.state.settings.dailyCalGoal} ккал/день
      Отвечай в спортивном, мотивирующем и экспертном стиле Strava и Apple Fitness. Используй чёткое форматирование, markdown, эмодзи и конкретные спортивные цифры.
      
      Вопрос атлета: "${userPrompt}"
    `;

    const body = {
      contents: [{ parts: [{ text: contextPrompt }] }]
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw new Error(`Gemini API error: ${res.statusText}`);
    }

    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  }

  // ------------------------------------------------------------------------
  // SETTINGS & ATHLETE PROFILE (MODAL)
  // ------------------------------------------------------------------------
  openSettingsModal() {
    const s = this.state.settings;
    document.getElementById("setAthleteName").value = s.athleteName;
    document.getElementById("setAthleteWeight").value = s.weight;
    document.getElementById("setDailyCalGoal").value = s.dailyCalGoal;
    document.getElementById("setDailyWaterGoal").value = s.dailyWaterGoal || 2500;
    document.getElementById("setGoalProtein").value = s.proteinGoal;
    document.getElementById("setGoalFat").value = s.fatGoal;
    document.getElementById("setGoalCarbs").value = s.carbsGoal;
    document.getElementById("setFitnessGoal").value = s.fitnessGoal;

    this.settingsModal.classList.remove("hidden");
  }

  closeSettingsModal() {
    this.settingsModal.classList.add("hidden");
  }

  handleSettingsSubmit(e) {
    e.preventDefault();
    this.state.saveSettings({
      athleteName: document.getElementById("setAthleteName").value.trim() || "Алексей Романов",
      weight: Number(document.getElementById("setAthleteWeight").value) || 72,
      dailyCalGoal: Number(document.getElementById("setDailyCalGoal").value) || 2400,
      dailyWaterGoal: Number(document.getElementById("setDailyWaterGoal").value) || 2500,
      proteinGoal: Number(document.getElementById("setGoalProtein").value) || 150,
      fatGoal: Number(document.getElementById("setGoalFat").value) || 70,
      carbsGoal: Number(document.getElementById("setGoalCarbs").value) || 260,
      fitnessGoal: document.getElementById("setFitnessGoal").value
    });

    this.closeSettingsModal();
    this.renderUserProfile();
    this.renderDashboard();
    this.renderNutritionTab();
    this.renderAIContext();
    this.showToast(this.t("settingsSavedToast"), "success");
  }

  // ------------------------------------------------------------------------
  // TOAST NOTIFICATIONS & UTILS
  // ------------------------------------------------------------------------
  showToast(message, type = "info") {
    // If SweetAlert2 is loaded, show a toast using Swal.mixin in Strava Dark Theme
    if (typeof Swal !== "undefined") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        background: "#16171D",
        color: "#FFFFFF",
        customClass: {
          popup: "swal-strava-theme"
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
      });

      const swalIcon = type === "error" ? "error" : type === "success" ? "success" : "info";
      Toast.fire({
        icon: swalIcon,
        title: message
      });
      return;
    }

    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    const iconMap = {
      success: "fa-solid fa-circle-check",
      error: "fa-solid fa-triangle-exclamation",
      info: "fa-solid fa-bolt"
    };

    toast.innerHTML = `
      <i class="${iconMap[type] || "fa-solid fa-info-circle"}"></i>
      <span class="toast-msg">${this.escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(40px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ------------------------------------------------------------------------
  // SWEETALERT2 MODAL DIALOGS (STRAVA DARK THEME)
  // ------------------------------------------------------------------------
  async confirmDialog({ title, text, confirmButtonText = "Подтвердить", cancelButtonText = "Отмена", icon = "warning" }) {
    if (typeof Swal === "undefined") {
      return confirm(text || title);
    }

    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: true,
      background: "#16171D",
      color: "#FFFFFF",
      customClass: {
        popup: "swal-strava-theme",
        title: "swal-strava-title",
        htmlContainer: "swal-strava-html",
        confirmButton: "swal-strava-confirm",
        cancelButton: "swal-strava-cancel"
      },
      buttonsStyling: false
    });

    return result.isConfirmed;
  }

  alertDialog({ title, text, icon = "info" }) {
    if (typeof Swal === "undefined") {
      alert(text || title);
      return;
    }

    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "Понятно",
      background: "#16171D",
      color: "#FFFFFF",
      customClass: {
        popup: "swal-strava-theme",
        title: "swal-strava-title",
        htmlContainer: "swal-strava-html",
        confirmButton: "swal-strava-confirm"
      },
      buttonsStyling: false
    });
  }

  // ------------------------------------------------------------------------
  // CANVAS-CONFETTI CELEBRATIONS
  // ------------------------------------------------------------------------
  fireConfettiCelebration(type = "workout") {
    if (typeof confetti === "undefined") return;

    if (type === "pr") {
      // Epic gold & Strava orange burst from both sides
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ["#FC4C02", "#FFD60A", "#FF7A00", "#FF2D55", "#FFFFFF"]
      };

      const fire = (particleRatio, opts) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      };

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    } else if (type === "goal") {
      // Apple rings green & cyan celebration
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#30D158", "#00E5FF", "#FC4C02", "#FFFFFF"]
      });
    } else {
      // Standard new workout celebration
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#FC4C02", "#FF7A00", "#FFFFFF"]
      });
    }
  }

  // ------------------------------------------------------------------------
  // HTML2CANVAS: STRAVA SHARE WORKOUT CARD
  // ------------------------------------------------------------------------
  async shareWorkoutCard(workoutId) {
    const cardEl = document.querySelector(`.strava-card[data-workout-id="${workoutId}"]`);
    if (!cardEl) return;

    if (typeof html2canvas === "undefined") {
      this.showToast("Библиотека html2canvas ещё загружается...", "error");
      return;
    }

    try {
      this.showToast("Генерируем карточку Strava Share...", "info");

      // Temporarily hide action buttons on the card during snapshot
      const actionsMenu = cardEl.querySelector(".card-actions-menu");
      const shareBtn = cardEl.querySelector(".share-workout-btn");
      if (actionsMenu) actionsMenu.style.visibility = "hidden";
      if (shareBtn) shareBtn.style.visibility = "hidden";

      const canvas = await html2canvas(cardEl, {
        scale: 2,
        backgroundColor: "#16171D",
        useCORS: true,
        logging: false
      });

      if (actionsMenu) actionsMenu.style.visibility = "visible";
      if (shareBtn) shareBtn.style.visibility = "visible";

      // Download snapshot as PNG
      const link = document.createElement("a");
      link.download = `stravapulse_activity_${workoutId}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      this.fireConfettiCelebration("workout");
      this.showToast("Карточка активности успешно скачана! 📸", "success");
    } catch (err) {
      console.error("html2canvas export error:", err);
      this.showToast("Не удалось сгенерировать изображение карточки", "error");
    }
  }

  // ------------------------------------------------------------------------
  // HTML2PDF: DASHBOARD PDF REPORT EXPORT
  // ------------------------------------------------------------------------
  async exportDashboardPdf() {
    const dashboardSection = document.getElementById("tab-dashboard");
    if (!dashboardSection) return;

    if (typeof html2pdf === "undefined") {
      this.showToast("Библиотека html2pdf ещё загружается...", "error");
      return;
    }

    try {
      this.showToast("Формируем PDF-отчёт дашборда...", "info");

      const opt = {
        margin: [10, 10, 10, 10],
        filename: `stravapulse_dashboard_report_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#0B0C0E",
          logging: false
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" }
      };

      await html2pdf().set(opt).from(dashboardSection).save();
      this.fireConfettiCelebration("goal");
      this.showToast("PDF-отчёт дашборда успешно скачан! 📄", "success");
    } catch (err) {
      console.error("html2pdf export error:", err);
      this.showToast("Ошибка при экспорте PDF-отчёта", "error");
    }
  }

  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// ==========================================================================
// 4. BOOTSTRAP APPLICATION ON DOM READY
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  window.stravaPulseApp = new StravaPulseApp();
});
