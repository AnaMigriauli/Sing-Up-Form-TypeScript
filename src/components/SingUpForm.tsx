import { useReducer } from "react";
import style from "./SingUpForm.module.css";
import inputValidation from "./ValidationSchema";

enum actionTypes {
  NAME = "NAME",
  LASTNAME = "LASTNAME",
  EMAIL = "EMAIL",
  PASSWORD = "PASSWORD",
}

interface State {
  firstName: boolean;
}
interface Action {
  type: actionTypes;
  payload: boolean;
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.NAME:
      return { ...state, firstName: action.payload };

    default:
      return state;
  }
};

const SingUpForm = () => {
  const [state, dispatch] = useReducer(reducer, () => ({
    firstName: true,
    lastName: true,
  }));

  const firstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length === 1) {
      dispatch({ type: actionTypes.NAME, payload: false });
    }
  };
  console.log(state.firstName);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className={style["sing-up-form-container"]}>
      <div className={style["form-header-container"]}>
        <h1 className={style["form-header"]}>
          Learn to code by watching others
        </h1>
        <p className={style["form-text"]}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div className={style.price}>
          <p>
            <span>Try it free 7 days</span> then $20/mo.thereafter
          </p>
        </div>
        <form onSubmit={submitHandler} className={style["sing-up-form"]}>
          <input
            placeholder="First Name"
            type="text"
            id="first-name"
            name="first-name"
            onChange={(e) => firstNameHandler(e)}
          />
          {state.firstName && (
            <span>{inputValidation.firstName.errorMessage}</span>
          )}
          <input
            placeholder="Last Name"
            type="text"
            id="last-name"
            name="last-name"
          />
          <input placeholder="Email" type="email" id="email" name="email" />
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
          />

          <button type="submit" className={style.button}>
            CLAIM YOUR FREE TRIAL
          </button>
          <p className={style["form-input-terms"]}>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SingUpForm;
