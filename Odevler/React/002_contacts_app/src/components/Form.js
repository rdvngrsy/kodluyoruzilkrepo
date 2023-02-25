import { useState } from "react";

const initialFormValues = { fullName: "", phone_number: "" };

function Form( {addContact, contacts} ) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => { 
    setForm({...form, [e.target.name]: e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullName === "" || form.phone_number === ""){
      return false;
    }

    addContact([...contacts,form]);

    setForm(initialFormValues);

  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          className="formInput"
          name="fullName"
          placeholder="Fullname"
          value={form.fullName}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          className="formInput"
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
