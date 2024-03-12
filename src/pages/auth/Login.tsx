import InputField from "@/components/InputField/InputField";
import { setUser } from "@/redux/slices/UserSlice";
import { loginSchema, loginSchemaType } from "@/schema/Login";
import { useAuthenticateMutation } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<loginSchemaType>({ resolver: zodResolver(loginSchema) });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authenticate, { isLoading }] = useAuthenticateMutation();

  const onSubmit: SubmitHandler<loginSchemaType> = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    const result = await authenticate({ endpoint: "login", body: payload });
    // console.log("resu: ", result);
    if ("data" in result && result.data) {
      localStorage.setItem("token", result.data?.token);
      dispatch(
        setUser({
          name: result.data?.name,
          email: result.data?.email,
        })
      );
      console.log("navigating");
      navigate(`/`);
    } else if ("error" in result) {
      console.error("Login failed : ", result.error);

      setError("email", {
        type: "manual",
        message: "error error error",
      });
      setError("password", {
        type: "manual",
        message: "error",
      });
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl font-bold tracking-[-1px] leading-relaxed">
        Welcome back!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8"
      >
        <InputField
          register={register}
          name="email"
          label="Email"
          type="text"
          placeholder="Enter your Email"
          icon={<MdOutlineMailOutline className="h-5 w-5" />}
          errors={errors}
        />
        <InputField
          register={register}
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          icon={<CiLock className="h-5 w-5 font-bold" />}
          errors={errors}
        />
        <button
          type="submit"
          className="bg-orange-500 py-3 font-bold text-white normal-case hover:bg-orange-600 rounded-lg"
        >
          {isLoading ? "...Loading" : "Log In"}
        </button>
      </form>
    </section>
  );
};

export default Login;
