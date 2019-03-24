export const SET_FEELING = "SET_FEELING";
export const SELECT_THEME = "SELECT_THEME";
export const SELECT_TASK = "SELECT_TASK";
export const CHECK_TASK = "CHECK_TASK";

export const setFeeling = value => {
  return {
    type: SET_FEELING,
    payload: value
  };
};

export const selectTheme = theme => {
  return {
    type: SELECT_THEME,
    payload: theme
  };
};

export const selectTask = task => {
  return {
    type: SELECT_TASK,
    payload: task
  };
};

export const checkTask = task => {
  console.log("PUSHING TASK");
  return {
    type: CHECK_TASK,
    payload: task
  };
};

export const getTasksForThemes = (selectedThemes, availableTasks) => {
  let taskList = [];
  [...selectedThemes].forEach(theme => {
    taskList.push(...availableTasks[theme]);
  });
  return taskList;
};
