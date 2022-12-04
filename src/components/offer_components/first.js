import React from "react";

export default function First(){
    return(<><div className="title"><h1>Strona wizytówka</h1></div>
    <div className="inactiveContent">Cena: <b> 600 zł netto + 200 zł netto </b>za każdą postronę (nie licząc pierwszej)</div>
    <div className="inactiveContent"> <p className="listTitle">Cena obejmuje:</p><ul>
        <li><span>Wykonanie zindiwidualizowanej strony internetowej.</span>
        <span className="special">
             Strona internetowa jest tworzona bez użcia CMS (generatorów stron internetowych takich jak np. wordpress).
        </span></li>
        <li><span>Współpraca z klientem na kżdym etapie budowy strony internetowej</span>
        <span className="special">W projekcie kierujemy się wytycznymi klienta. Projekt jest indywidualizowany, 
            a poprawki nanoszone bez dodatkowych opłat</span></li>
            <li><span>Fixed Price </span><span className="special">wiesz ile zapłacisz - u nas nie ma ukrytych kosztów</span></li>
        <li><span> Przeniesienie majątkowych praw autorskich. </span>
        <span className="special">Kupiona strona będzie w 100% Twoja. Nigdy nie utracisz do niej praw.</span></li>
        <li>Pomoc w umieszczeniu strony na serwerze</li></ul></div>
        <div className="inactiveContent"><span>Serwis strony(Dodatkowo płatne w subskrypcji 200 zł netto rocznie).</span>
        <span className="special"> Aktualizowanie treści i eliminowanie powstających bugów.</span></div>
        </>)


}
