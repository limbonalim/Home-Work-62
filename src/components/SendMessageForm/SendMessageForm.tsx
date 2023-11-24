import React, {useState} from 'react';
import {Data} from '../../types';

const SendMessageForm = () => {
  const [data, setData] = useState<Data>({
    email: '',
    name: '',
    title: '',
    message: '',
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      };
    });
  };
  return (
    <form>
      <div className="d-flex gap-3 mb-3">
        <div className="w-50">
          <label htmlFor="email" className="form-label">Email address:</label>
          <input
            required={true}
            onChange={onChange}
            value={data.email}
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="w-50">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            required={true}
            onChange={onChange}
            value={data.name}
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder="Jhone Doe"
          />
        </div>
      </div>
      <div>
        <label htmlFor="title" className="form-label">Title:</label>
        <input
          onChange={onChange}
          value={data.title}
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="Message Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Example textarea</label>
        <textarea
          required={true}
          onChange={onChange}
          value={data.message}
          name="message"
          className="form-control"
          id="message"
          rows="3"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="btn btn-success" type="submit">Send</button>
    </form>
  );
};

export default SendMessageForm;