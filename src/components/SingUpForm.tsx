import style from "./SingUpForm.module.css";
const SingUpForm = () => {
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
        <div>
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
          />
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
