"use client";
import MyInput from "@/components/MyInput/MyInput";
import { Cookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  firstName: string;
  lastName: string;
};

const Page = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (
    data: FormInputs,
    e?: React.BaseSyntheticEvent,
  ) => {
    console.log("submit is called");
    console.log(data, "data");
    e?.target.reset(); // reset after form submit
  };

  const cookie = new Cookies();
  console.log(cookie.get("user"), "demo cookie");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <MyInput {...register("firstName")} />
      {errors.firstName && <p>This is required</p>}

      <label>Last name</label>
      <MyInput {...register("lastName")} />

      <input type="submit" />
      <input
        style={{ display: "block", marginTop: 20 }}
        type="reset"
        value="Standard Reset Field Values"
      />
      <input
        style={{ display: "block", marginTop: 20 }}
        type="button"
        onClick={() =>
          reset({
            firstName: "bill",
            lastName: "luo",
          })
        }
        value="Reset with values"
      />
    </form>
  );
};

export default Page;
