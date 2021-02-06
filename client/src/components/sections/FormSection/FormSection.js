import React from "react";
import "./FormSection.scss";
import ContactsForm from "../../ContactsForm";


const FormSection = () => {
    return (
        <section className="form-section">
            <div className="container">
                <div className="form-section__title">Есть вопросы?</div>
                <div className="form-section__subtitle">Отправь сообщение</div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <ContactsForm />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default FormSection;
