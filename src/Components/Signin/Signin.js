import React from 'react';
import { useForm } from 'react-hook-form';

const Signin = () => {
    const { register, handleSubmit = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <p>This field is required</p>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Signin;