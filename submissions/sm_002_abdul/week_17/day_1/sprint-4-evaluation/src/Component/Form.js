import React from 'react'

function Form(props){
  return(
    <div className='col-md-4 offset-md-4 col-sm-12 offset-sm-0'>
      <h1 className='text-center text-primary'>Movie Database</h1>
      <h3 className='text-center text-primary'>Enter All Details</h3>

      <form onSubmit={props.handleSubmit} className='shadow p-3 mb-5 bg-white rounded'>

        <div className='form-group'>
          <label>
            Movie Name :
            <input
            className='form-control'
            placeholder='Enter Movie Name'
            name='name'
            onChange={props.handleChange}
            type='text'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Summary :
            <textarea
            className='form-control'
            placeholder='Enter Summary'
            name='summary'
            onChange={props.handleChange}
            type='text'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Lead Actor :
            <input
            className='form-control'
            placeholder='Lead Actor'
            name='leadActor'
            onChange={props.handleChange}
            type='text'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Lead Actress :
            <input
            className='form-control'
            placeholder='Lead Actress'
            name='leadActress'
            onChange={props.handleChange}
            type='text'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
          Director :
            <input
            className='form-control'
            placeholder='Director'
            name='director'
            onChange={props.handleChange}
            type='text'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Enter Image Url :
            <input
            className='form-control'
            placeholder='Image Url'
            name='imageUrl'
            onChange={props.handleChange}
            type='text'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Enter Rating (Out of 5):
            <input
            max='5'
            className='form-control'
            placeholder='Rating'
            name='rating'
            onChange={props.handleChange}
            type='number'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Year Of Release :
            <input
            className='form-control'
            placeholder='year'
            name='year'
            onChange={props.handleChange}
            type='date'/>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Language :
            <select name='language' onChange={props.handleChange} className='form-control'>
              <option value=''>-- Select Language --</option>
              <option value='english'>English</option>
              <option value='hindi'>Hindi</option>
            </select>
          </label>
        </div>

        <div className='form-group'>
          <label>
            <input
            type='checkbox'
            name='rRating'
            onChange={props.handleChange}/>
                R-Rated :
          </label>
        </div>

        <div>
          <input type='submit' value='submit' className='btn btn-primary'/>
        </div>
      </form>
    </div>
  )
}

export default Form