import './FormInput.style.scss'
import { Controller } from "react-hook-form";
const FormInput = ({labelText,type,name,control,errors,rules}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{labelText}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field }) => (
          <>
            <input
              {...field}
              type={type}
              id={name}
              placeholder={`Enter your ${labelText}`}
            />
            <span className="error">*{errors[name]?.message}</span>
          </>
        )}
      />
    </div>
  );
};

export default FormInput;
