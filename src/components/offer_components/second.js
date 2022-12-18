import React from "react";

export default function Second(){
    return(<><div className="title"><h1>Sklep internetowy</h1></div>
    <div className="inactiveContent"><b>Projekt jest wyceniany indywidulanie.</b> Standardowy sklep internetowy to koszt ok. 2500 zł netto </div>
    <div className="inactiveContent">
    <p className="listTitle">Cena obejmuje:</p><ul>
        <li><span>Wykonanie zindiwidualizowanej strony internetowej. </span>
        <span className="special">
            Strona internetowa jest tworzona bez użcia CMS (generatorów stron internetowych takich jak np. wordpress).
        </span></li>
        <li><span>Stworzenie bazy danych produktów.</span>
        <span className="special"> Twoje produkty będą skatalogowane w przygotowanych przez nas bazach 
        danych - elektronicznych rejestrach. </span></li>
        <li><span>Stworzenie nakładki administratora.</span>
        <span className="special"> Zapewnimy narzędzie do samodzielnego edytowania strony. </span></li>
        <li><span>Podłączenie systemu płatności online (przykładowo przelewy online, blik). </span>
        <span className="special"> Twoi klienci łatwą zapłacą za zamówiony towar za pomocą narzędzi dostępnych na Twojej stronie.</span></li>
        <li><span>Współpraca z klientem na kżdym etapie budowy strony internetowej. </span>
        <span className="special"> W projekcie kierujemy się wytycznymi klienta. Projekt jest indywidualizowany, 
            a poprawki nanoszone bez dodatkowych opłat.</span></li>
        <li><span>Fixed Price. </span><span className="special">wiesz ile zapłacisz - u nas nie ma ukrytych kosztów</span></li>
        <li>Pomoc w umieszczeniu strony na serwerze. </li></ul></div>
        <div className="inactiveContent"><span>Serwis strony (Dodatkowo płatne w subskrypcji 500 zł netto rocznie).</span>
        <span className="special"> Aktualizowanie treści i eliminowanie powstajacych bugów</span>
    </div>
    </>)
}