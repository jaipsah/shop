import { LOAD_LIST, CREATE_CARD, FILTER_CARDS, CHECKBOX_CHECKED } from "./../actions/actions";

const initialState = {
  cards: [],
  total: 0
};

const listLoader = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

const cardLoader = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return { ...state, total: state.cards.length+1, cards: [...state.cards, action.payload] };

    default:
      return state;
  }
};

const cardFilter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CARDS:
      return { ...state, cards: state.cards.filter(obj => obj.id !== action.payload.id) };

    default:
      return state;
  }
};
const isCheckboxChecked = (state = initialState, action) => {
  switch (action.type) {
    case CHECKBOX_CHECKED:
      return { ...state, checked: action.payload.checked };

    default:
      return state;
  }
};

export { listLoader, cardLoader, cardFilter, isCheckboxChecked};
