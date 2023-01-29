import React, { useState } from 'react'

export const useForm = ( initialForm = {}) => {

    const [form, setForm] = useState(initialForm);

    const onInputChange = ({target}) => {
    
        const {name, value} = target;

        setForm({ 
            ...form,
             [name]: value
        });

    }

    const resetForm = () =>{
        setForm(initialForm);
    }

    return {
        ...form, 
        form,
        onInputChange,
        resetForm
    }
}
