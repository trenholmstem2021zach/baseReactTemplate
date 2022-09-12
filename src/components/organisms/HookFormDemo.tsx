import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/formStore'
import { formSave, getDataAsync } from '../../redux/formSlice'
import { TypeFormDemo } from "./TypeformDemo";
import { useAppDispatch } from "../../redux/hooks";


const sleep = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function HookFormDemo() {
  const data = useSelector((state: RootState) => state.form)
  const dispatch = useDispatch()
  const appDispatch = useAppDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    await sleep(2000);
    
   
    if (data.username === "bill") {
      dispatch(formSave(data));
      appDispatch(getDataAsync());
    } else {
      alert("There is an error");
    }
  };

  console.log(errors);

  return (
    <>
    <form className="usa-form usa-form--large" onSubmit={handleSubmit(onSubmit)}>
      <h1>Async Submit Validation</h1>
      <fieldset className="usa-fieldset">
      <label className="usa-label " htmlFor="username">User Name</label>
      <input id="FirstName" className="usa-input usa-input--xl" placeholder="Bill" {...register("username")} />
      <label  className="usa-label " htmlFor="lastName">Last Name</label>
      <input id="LastName" className="usa-input usa-input--xl" placeholder="Luo" {...register("lastName")} />

      <label className="usa-label " htmlFor="email">Email</label>
      <input id="Email" className="usa-input usa-input--xl"
        placeholder="Enter a Valid Email"
        type="text"
        {...register("email", { required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      <hr/>
      <input id="SubmitButton" type="submit" />
      </fieldset>
    </form>
    <div id="result">
     
      {JSON.stringify({data})}
    </div>
    <TypeFormDemo/>
    </>
  );
}
