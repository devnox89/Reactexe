import { useState } from "react";

export function useForm(formValues = { username: '', password: '' }) {
    const [formData, setFormData] = useState(formValues);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleResetForm() {
        setFormData(formValues);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    return {
        onChange: handleInputChange,
        onResetForm: handleResetForm,
        onSubmit: handleSubmit,
        formData,
    };
}