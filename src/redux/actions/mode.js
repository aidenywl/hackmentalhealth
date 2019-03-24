export const UPDATE_MODE = "SET_MODE";

export const MODES = {
  INITIAL_SCREEN: "INITIAL_SCREEN",
  MOOD_SELECTION: "MOOD_SELECTION",
  THEME_SELECTION: "THEME_SELECTION",
  TASK_SELECTION: "TASK_SELECTION",
  MAIN_SCREEN: "MAIN_SCREEN"
};

export const updateMode = mode => {
  return {
    type: UPDATE_MODE,
    payload: mode
  };
};

export const isMoodMode = mode => {
  return mode === MODES.MOOD_SELECTION;
};

export const isInitialMode = mode => {
  return mode === MODES.INITIAL_SCREEN;
};

export const isThemeMode = mode => {
  return mode === MODES.THEME_SELECTION;
};

export const isTaskMode = mode => {
  return mode === MODES.TASK_SELECTION;
};

export const isMainMode = mode => {
  return mode === MODES.MAIN_SCREEN;
};
