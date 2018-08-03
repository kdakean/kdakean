import React from 'react'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { renderField, renderTextArea } from './../commons/fieldsRender';
import { required} from './../commons/validators'

let BoardForm = props => {
  const { error, handleSubmit, pristine,
          submitting, invalid, initialValues } = props;
  return (
    <form onSubmit={ handleSubmit } className="">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="text-center">
            {
              (initialValues && initialValues.id) ? 'Edit Board' : 'New Board'
            }
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Field
            name="name"
            label="Name"
            component={renderField}
            type="text"
            validate={[required]} />
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-3">
          <Field
            name="description"
            label="Description"
            minRows={4}
            component={renderTextArea} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button type="submit"
                  disabled={invalid || pristine || submitting}
                  className="btn btn-primary w-100">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

BoardForm = reduxForm({
  form: 'formBoard',
  enableReinitialize: true
})(BoardForm)

BoardForm = connect(
  state => ({
    initialValues: state.modalReducers.board
  }),
  {  }
)(BoardForm)

export default BoardForm;
