import React from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.scss";
import Header from "../Header";
import PreviewSlider from "../PreviewSlider";
import SevicesSection from "../sections/SevicesSection";
import TipsSection from "../sections/TipsSection";
import PricingSection from "../sections/PricingSection";
import EventSection from "../sections/EventSection";
import FormSection from "../sections/FormSection";
import Footer from "../Footer";
import ProductsPage from "../ProductsPage";
import BasketPage from "../BasketPage";

const data = [
    {title:"ЧТЕНИЕ", subtitle:"может быть твоим путем к успеху!", imagePath: "https://ld-wp.template-help.com/wordpress_60118/wp-content/uploads/2016/05/pic001.jpg"},
    {title: "НАПИШИТЕ СВОЙ УСПЕХ",  imagePath: "https://images.wallpaperscraft.ru/image/pechatnaia_mashinka_ruki_manikiur_123594_3804x2536.jpg"}
]

const App = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Header />
                <PreviewSlider items={data} />
                <SevicesSection />
                <TipsSection />
                <PricingSection />
                <EventSection />
                <FormSection />
                <Footer />
            </Route>
            <Route path='/books' component={ProductsPage}/>
            <Route path='/basket' component={BasketPage}/>
        </Switch>
    );
};


export default App;
