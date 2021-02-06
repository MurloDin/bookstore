import React from "react";
import {Form, Field} from 'react-final-form'
import "./ContactsForm.scss";


const ContactsForm = ({total, items}) => {
    const onSubmit = values => {

    };


    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form
                    onSubmit={handleSubmit}
                    className="contacts-form"
                    autoComplete="off"
                >
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Имя"
                            name="name"
                            component="input"
                            type="text"
                            className="contacts-form__input"
                        />
                        <Field
                            placeholder="Email"
                            name="email"
                            component="input"
                            type="email"
                            className="contacts-form__input"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Ваш комментарий"
                            name="comment"
                            component="textarea"
                            type="text"
                            className="contacts-form__textarea"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={submitting || pristine}
                        className="contacts-form__btn"
                    >
                        Отправить
                    </button>
                </form>
            )}
        />
    )
}

export default ContactsForm;
