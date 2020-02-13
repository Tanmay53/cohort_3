import React from 'react';

function UserForm(props) {
  return (
    <form onSubmit={props.formSubmitHandler}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          className='form-control'
          value={props.state.name}
          onChange={props.changeHandler}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          className='form-control'
          value={props.state.age}
          onChange={props.changeHandler}
          min='1'
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          className='form-control'
          value={props.state.email}
          onChange={props.changeHandler}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='mobile'>Mobile</label>
        <input
          type='text'
          name='mobile'
          className='form-control'
          value={props.state.mobile}
          onChange={props.changeHandler}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='submit'
          value={props.form_type}
          className='form-control btn btn-primary'
        />
      </div>
    </form>
  );
}

export default UserForm;
