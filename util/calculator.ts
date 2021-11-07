export type INITIAL_STATE = {
  currentValue: string;
  previousValue: any;
  operator: any;
};

export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

const handleNumber = (value: string | number, state: INITIAL_STATE) => {
  if (state.currentValue === '0') {
    return { ...state, currentValue: `${value}` };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${value}`,
  };
};

const handleDecimal = (state: INITIAL_STATE) => {
  const { currentValue } = state;

  if (!String(currentValue).includes('.'))
    return { ...state, currentValue: String(currentValue) + '.' };

  return state;
};

const handleOperator = (value: string, state: INITIAL_STATE) => {
  const { operator } = state;

  if (operator === value) return state;
  return {
    operator: value,
    previousValue: state.currentValue,
    currentValue: '0',
  };
};

const handleEqual = (state: INITIAL_STATE) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    previousValue: null,
  };

  if (operator === '÷') {
    return {
      ...resetState,
      currentValue: previous / current,
    };
  }

  if (operator === 'x') {
    return {
      ...resetState,
      currentValue: previous * current,
    };
  }

  if (operator === '+') {
    return {
      ...resetState,
      currentValue: previous + current,
    };
  }

  if (operator === '-') {
    return {
      ...resetState,
      currentValue: previous - current,
    };
  }

  return state;
};

const calculator = (
  state: INITIAL_STATE,
  type: string,
  value?: string | number
) => {
  switch (type) {
    case 'number':
      return handleNumber(value as string | number, state);
    case 'operator':
      return handleOperator(value as string, state);
    case 'decimal':
      return handleDecimal(state);
    case 'equal':
      return handleEqual(state);
    case 'clear':
      return initialState;
    case 'posneg':
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case 'percentage':
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
};

export default calculator;
