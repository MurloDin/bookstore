import React from "react";
import {Form, Field} from 'react-final-form'
import BookstoreService from "../../services/bookstore-service";
import "./DeliveryForm.scss";
import axios from 'axios';



const DeliveryForm = ({total, items}) => {

    const onSubmit = values => {
        const order = items.map((item, idx) => {
            return `${item.title} : ${item.count} шт.`
        })
        const data = {values, order, total};
        console.log(data)
        const apiUrl = 'http://localhost:8000/api/order';
        axios.post(apiUrl, JSON.stringify(data), {headers: {"content-type": "application/json"}}).then((resp) => console.log('r', resp))
    };


    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form
                    onSubmit={handleSubmit}
                    className="delivery-form"
                    autoComplete="off"
                >
                    <div className="delivery-form__title">Адрес доставки</div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Улица</label>
                        <Field
                            name="street"
                            component="input"
                            type="text"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Номер дома</label>
                        <Field
                            name="house"
                            component="input"
                            type="text"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Квартира</label>
                        <Field
                            name="apartment"
                            component="input"
                            type="text"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Этаж</label>
                        <Field
                            name="floor"
                            component="input"
                            type="text"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Подъезд</label>
                        <Field
                            name="entrance"
                            component="input"
                            type="text"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Код двери</label>
                        <Field
                            name="code"
                            component="input"
                            type="text"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__title">Информация</div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Телефон</label>
                        <Field
                            name="phone"
                            component="input"
                            type="tel"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Email</label>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Дата</label>
                        <Field
                            name="date"
                            component="input"
                            type="date"
                            className="delivery-form__input"
                        />
                    </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Купон</label>
                        <Field
                            name="ticket"
                            component="input"
                            type="text"
                            className="delivery-form__input"
                        />
                    </div>
                   <div className="delivery-form__input-wrapper">
                      <label className="delivery-form__subtitle">Комментарий</label>
                      <Field
                          name="comment"
                          component="textarea"
                          className="delivery-form__input"
                      />
                   </div>
                   <div className="delivery-form__title">Способ оплаты</div>
                   <div className="delivery-form__input-wrapper">
                      <label className="delivery-form__subtitle">Способо оплаты</label>
                      <Field
                          name="payment"
                          component="select"
                          className="delivery-form__select"
                      >
                         <option value="Картой на сайт" className="delivery-form__select-item">Картой на сайт</option>
                         <option value="Картой при получении" className="delivery-form__select-item">Картой при получении</option>
                         <option value="Наличными" className="delivery-form__select-item">Наличными</option>
                      </Field>
                   </div>
                    <div className="delivery-form__input-wrapper">
                        <label className="delivery-form__subtitle">Сумма</label>
                        <div className="title">{total.toFixed(2)} руб.</div>
                    </div>
                    <button
                        type="submit"
                        disabled={submitting || pristine}
                        className="delivery-form__btn"
                    >
                        Отправить
                    </button>
                </form>
            )}
        />
    )
}

export default DeliveryForm;
