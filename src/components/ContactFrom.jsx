import { toast } from "react-toastify";
import styled from "styled-components";
import { useForm } from "react-hook-form";


const database = []

const ContactFrom = () => {
  const {
    handleSubmit,
    formState:{errors},
    reset,
    register
  } = useForm();

  const feedback = (data) => {
    database.push(data)
    toast.success("Thanks for your feedback !");
    reset()
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <form onSubmit={handleSubmit(feedback)} className="form">
          <div className="form-group">
            <label htmlFor="email">Company Email  {errors.email && <small className="text-red-500 capitalize">{errors.email.message}</small>} </label>
            <input type="text" id="email" name="email" {...register('email',{required:'*'})} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?  
               {errors.disc && <small className="text-red-500 capitalize">{errors.disc.message}</small>}
            </label>
            <textarea
              name="textarea"
              id="textarea"
              rows={10}
              cols={50}
              {...register('disc',{required:'*'})}
            />
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }
`;

export default ContactFrom;
