import React from 'react';
import Welcome from './shrimp_components/welcome.js'


export default function Shrimp(){
  const textNode1=(<h1> Witaj na stronie (prawdopodobnie) jedynej krewetki, która tworzy strony internetowe </h1>)
    const textNode2=(<p> Shrimp jest polską firmą web-deweloperską. 
    Zajmujemy się tworzeniem stron wizytówek, mając na względzie, 
    że profesjonalny wygląd buduje się tworząc
    przejrzysty interface i minimalizując ilość grafik oraz animacji </p>)
  
  const textNode3=(<p> Shrimp to nazwa, która może zaskakiwać. Krewetki nie kojarzą się z komputerami, stronami internetowymi, ani programowaniem. 
    Jednak nie ma innego zwierzęcia, które byłoby tak bardzo zbliżone do steraotypowego obrazu programisty.
</p>)
const textNode4=(<p> Krewetka do zwierzę, żyjące na dnie mórz (piwnicy świata), ma wiele odnóży (do pisania kodu) 
  i wielkie czarne oczy (do wpatrywania się w monitor). Na tym dnie morza spokojnie zajmuje się swoją pracą,
  nie zwracając uwagi na to, co się dzieje powyżej. Jak programista!
  </p>)
const textNode5=(<p> Nasza oferta jest skierowana do klientów, którzy chcą mieć reprezentatywną stronę internetową. 
  Takie strony są nazywane stronami "wizytówkami" i pełnią rolę reprezentacyjno - informacyjną.
</p>)
  const textNode6=(<><p> Strona wizytówka służy trzem celom:</p>
  <ol>
      <li>
      Podkreśleniu profesjonalizmu prowadzonego biznesu.
      </li>
      <li>
      Dotarciu do nowych klientów.
      </li>
      <li>
      Ułatwieniu kontaktu z firmą.
      </li>
  </ol></>)

    return (<>



      <Welcome text1={textNode1} text2={textNode2}/>
      <Welcome text2={textNode5} text1={textNode6} />
      <Welcome text2={textNode3} text1={textNode4} />
      
    </>)
}