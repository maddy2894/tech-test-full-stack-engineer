import { createStore, combineReducers, compose } from 'redux';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const reducers = {
  spaceData: (
    oldState = {
      initial: true,
      error: false,
      isLoading: false,
    },
    action
  ) => {
    const { type } = action;
    switch (type) {
      case 'SET_DATA':
        return {
          ...oldState,
          initial: false,
          capsule: action.payload,
          error: false,
          isLoading: false,
        };
      case 'SET_ERROR':
        return {
          ...oldState,
          initial: false,
          capsule: action.payload,
          error: true,
          errorMessage: action.payload,
          isLoading: false,
        };
      case 'SET_LOADING':
        return {
          ...oldState,
          initial: false,
          capsule: {},
          error: false,
          isLoading: true,
        };
      default:
        return oldState;
    }
  },
};

const slices = combineReducers({ ...reducers });

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

const store = createStore(slices, composeEnhancers());

export default store;
