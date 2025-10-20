import FormStyles from './Form.module.scss';

export const Form = () => {
  return (
    <div className={FormStyles.form_wrapper}>
      <form action="#">
        <label>
          <input type="text" className={FormStyles.form_input}/>
          <button className={FormStyles.form_button}></button>
        </label>
      </form>
    </div>
  );
};
