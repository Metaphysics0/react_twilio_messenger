import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MessageForm = ({ messages, setMessages }) => {
  const { register, handleSubmit, reset } = useForm();
  const [textLength, setTextLength] = useState('');
  const onSubmit = async (data) => {
    try {
      const response = await fetch(process.env.API_KEY, {
        method: 'post',
        headers: {
          Authorization: process.env.AUTH_HEADER,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `Body=${data.message}&To=${data.phone}&From=${process.env.TO_PHONE}`,
        withCredentials: false,
      });
      data.length = data.message.length;
      data.date = Date().toLocaleString();
      const success = await response.json();
      setMessages([...messages, data]);
      return success;
    } catch (e) {
      console.error('Error sending message ', e);
    }
  };

  // clear input fields
  const onClear = () => {
    reset('', { keepValues: false });
    setTextLength('');
  };

  // character count
  const handleChange = (e) => {
    setTextLength(e.target.value);
  };

  return (
    <div className="card">
      <h3>New Message</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Phone Number
          <input type="phone" name="phone" {...register('phone')} />
        </label>
        <label onChange={(e) => handleChange(e)}>
          Message
          <textarea
            maxLength="250"
            name="message"
            cols="30"
            rows="10"
            {...register('message', { required: true, maxLength: 250 })}
          ></textarea>
          <p className="max-length">{textLength.length}/150</p>
        </label>
        <div className="form__btns">
          <p onClick={() => onClear()} className="form__clear">
            Clear
          </p>
          <button
            disabled={textLength.length >= 150 || false}
            type="submit"
            className="form__submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
