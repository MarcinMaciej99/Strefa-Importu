import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Accordian.scss";

export default function Accordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="root">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="accordainHeader"
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="heading">Krok 1: Wybór pojazdu</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordainHeader">
          <Typography className="secondaryHeading">
            Pierwszym krokiem jest dokonanie przez Państwa wyboru pojazdu,
            korzystając z wyszukiwarek pojazdów na portalach aukcyjnych
            (copart.com oraz iaai.com) W przypadku niejasności lub jakichkolwiek
            problemów, jesteśmy do Państwa dyspozycji i pomożemy w wyborze
            odpowiedniego samochodu wedle podanych przez Klienta kryteriów.
            Dodatkowo otrzymają Państwo od nas informację, zawierającą opinię.
            Korzystamy z pomocy płatnych raportów takich jak CARFAX, AUTOCHECK,
            EPICVIN, INSTAVIN.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          className="accordainHeader"
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="heading">Krok 2: Umowa</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordainHeader">
          <Typography className="secondaryHeading">
            Po dokonaniu wyboru pojazdu, zostajecie Państwo poinformowani o
            prognozowanych cenach oraz szacowanych kosztach transakcji
            (związanych z zakupem i importem auta z USA do Polski). Większość
            pojazdów na rynku amerykańskim jest sprzedawana w formie licytacji,
            dlatego do Państwa należy decyzja do jakiej kwoty będziemy licytować
            dane auto lub inny pojazd. Będąc do Państwa dyspozycji pomożemy
            określić kwotę licytacji aby była atrakcyjna. Dalszym etapem jest
            podpisanie umowy pomiędzy stronami oraz wpłacenie kaucji na
            licytację danego auta w wysokości 10% ustalonej kwoty licytacji
            (wartość nie może być niższa niż 3000 PLN).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          className="accordainHeader"
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="heading">Krok 3: Zaliczka</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordainHeader">
          <Typography className="secondaryHeading">
            Kaucja jest formą zabezpieczenia dla licytującego w przypadku
            wycofania się przez Klienta z zakupu wybranego pojazdu oraz
            pokryciem obciążenia narzuconego przez serwis aukcyjny w przypadku
            rezygnacji licytującego. Depozyt zostaje zwrócony w ciągu 2 dni
            roboczych na konto Klienta w momencie, gdy licytowany samochód
            przekroczy wartość zakładanego przez Państwa budżetu. Na życzenie
            Klienta może zostać zostawiony na poczet kolejnej licytacji. Po
            otrzymaniu informacji o wygranej aukcji, Klient jest zobowiązany
            dokonać pełnej opłaty bezpośrednio na konto firmowe w Stanach
            Zjednoczonych w ciągu 2 dni roboczych. Jest to warunek konieczny,
            aby uniknąć dodatkowo naliczonych opłat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          className="accordainHeader"
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="heading">
            Krok 4: Importowanie samochodu z USA do Polski
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordainHeader">
          <Typography className="secondaryHeading">
            Po dokonaniu przelewu i zaksięgowaniu go, auto przewożone zostaje do
            bazy kontenerowej w porcie i drogą morską importowane do Europy.
            Auto zostaje dostarczone na wskazany przez Klienta adres odbioru.
            Lokalizacja kontenera jest przez nas na bieżąco monitorowana, klient
            również ma do tego dostęp.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          className="accordainHeader"
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="heading">Krok 5: Odbiór samochodu</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordainHeader">
          <Typography className="secondaryHeading">
            Po dokonaniu przelewu i zaksięgowaniu go, auto przewożone zostaje do
            bazy kontenerowej w porcie i drogą morską importowane do Europy.
            Auto zostaje dostarczone na wskazany przez Klienta adres odbioru.
            Lokalizacja kontenera jest przez nas na bieżąco monitorowana, klient
            również ma do tego dostęp.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
