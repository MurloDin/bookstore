import React, {useState} from "react";
import "./TipsSection.scss";


const TipsSection = () => {
    const [email, setEmail] = useState("")
    return (
        <section className="tips-section">
            <div className="tips-section__parallax-img">
                <div className="parallax__dark-bg"></div>
                <div className="container" style={{zIndex: 100}}>
                    <div className="tips-section__wrapper">
                        <div className="tips-section__title">Советы начинающим авторам</div>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <div className="tips-section__subtitle">Подпишитесь на нашу рассылку и получайте последние советы и
                                    рекомендации, которыми поделились некоторые
                                    всемирно известные авторы!
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 offset-3">
                                <form className="tips-section__form">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.value)}
                                        className="tips-section__form-input"
                                    />
                                    <input
                                        type="submit"
                                        value="Подписаться"
                                        className="tips-section__form-btn"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TipsSection;
