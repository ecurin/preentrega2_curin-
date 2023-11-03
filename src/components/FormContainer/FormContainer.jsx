import { useState } from 'react'
import { Form } from './Form'
import { formWhiteValidation } from './formWhiteValidation'


const FormWhiteValidation = formWhiteValidation(Form)

const FormContainer = () => {

    const [formData, setFormData] = useState({
      nombre : '',
      telefono : '',
      correo:''
    })



    const handleOnChange = (evt) => {
        //console.log('nombre del input :', evt.target.name)
        //console.log('valor del input :' , evt.target.value)

        setFormData(
          {...formData,
          [evt.target.name]: evt.target.value}
          )
    }



    return (
        //<Form formData={formData} handleOnChange={handleOnChange} />
        <FormWhiteValidation 
            formData={formData}
            handleOnChange={handleOnChange}
        />
    )
  }

  export default FormContainer