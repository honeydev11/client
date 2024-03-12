import InputField from "@/components/InputField/InputField";
import { registerSchema, registerSchemaType } from "@/schema/Register";
import { useAuthenticateMutation } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();
  const [authenticate, { isLoading }] = useAuthenticateMutation();

  const onSubmit: SubmitHandler<registerSchemaType> = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const result = await authenticate({ endpoint: "register", body: payload });
    if ("data" in result && result.data) {
      console.log("Registration successful:", result.data);
      navigate("/auth/login");
    } else if ("error" in result) {
      console.error("Registration failed:", result.error);
    }
  };
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl font-bold tracking-[-1px] leading-relaxed">
        Let's go!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8"
      >
        <InputField
          register={register}
          name="name"
          label="Full Name"
          type="text"
          placeholder="Enter your Name"
          icon={<LuUser2 className="h-5 w-5" />}
          errors={errors}
        />
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
          placeholder="Minimum 8 characters"
          icon={<CiLock className="h-5 w-5 font-bold" />}
          errors={errors}
          reg
        />
        <button
          type="submit"
          className="bg-orange-500 py-3 font-bold text-white normal-case hover:bg-orange-600 rounded-lg"
        >
          {isLoading ? "Loading..." : "Let Dive"}
        </button>
      </form>
    </section>
  );
};

export default Register;
