import { FC } from "react"
import FormField from "./FormField";
import { FormData , LoginSchema} from "./Types";
import { useForm } from "react-hook-form";
import { error } from "console";
import { zodResolver } from "@hookform/resolvers/zod";


const Form:FC = () => {

    const {register,handleSubmit,formState: {errors},
    setError} = useForm<FormData>({resolver: zodResolver(LoginSchema)});

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    }

    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <h1>
                StaffRegister
            </h1>
            <FormField type="url" placeholder="URL" name="url" register={register} reqired error={errors.url} />
            <FormField type="pass" placeholder="Pass" name="pass" register={register} reqired error={errors.pass} />
            <FormField type="exp" placeholder="Exp year(s)" name="exp"valueAsNumber register={register} reqired error={errors.exp} />
            <FormField type="confirmPass" placeholder="ConfirmPass" name="confirmPass" register={register} reqired error={errors.confirmPass} />
            <FormField type="email" placeholder="Email" name="email" register={register} reqired error={errors.email} />
            <button type="submit">Submit</button>
        </div>
    </form>
    </>;
} 
export default Form;