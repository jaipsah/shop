import { LOAD_LIST, CREATE_CARD, CHECKBOX_CHECKED } from "./actions";

export const headerAction = () => ({ type: LOAD_LIST, payload: 10 });

export const mainAction = length => ({
  type: CREATE_CARD,
  payload: {
    id: Math.round(Math.random() * 10000000),
    img: "/",
    title: "Testing cards."
  }
});

export const checkBoxAction = isChecked => ({
  type: CHECKBOX_CHECKED,
  payload: { checked: isChecked }
});
