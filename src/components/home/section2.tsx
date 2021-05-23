// --jsx
import React from "react";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardCategory,
  CardReadMore,
  Icon,
  LinkListItem,
  LinkList,
} from "design-react-kit";
import CalendarEvents from "../calendarTodos";

const IndexPage = () => {
  return (
    <>
      <section id="calendario">
        <div className="section section-muted pb-5 pt-0">
          <div className="container">
            <div className="row">
              <div className="card-wrapper card-teaser-wrapper card-overlapping card-teaser-wrapper-equal card-teaser-block-3">
                <Card
                  className="card-teaser-image card-flex no-after rounded shadow"
                  noWrapper
                  teaser
                >
                  <div className="card-image-wrapper with-read-more pb-5">
                    <div className="p-4">
                      <CardCategory>
                        <Icon color="" icon="it-pa" padding={false} size="" />
                        Giunta e consiglio
                      </CardCategory>
                      <div className="font-weight-semibold">Mario Rossi</div>
                      <p className="card-text">Sindaco della città</p>
                    </div>
                    <div className="card-image card-image-rounded pb-5">
                      <img
                        alt="Immagine di esempio"
                        src="https://picsum.photos/150/200"
                      />
                    </div>
                  </div>
                  <CardReadMore
                    className="pl-4"
                    href="/design-comuni-prototipi/esempi/bootstrap-italia/template-amministrazione.html"
                    iconName="it-arrow-right"
                    tag="a"
                    text="Tutta l'amministrazione"
                  />
                </Card>
                <Card className="no-after rounded shadow" noWrapper teaser>
                  <div className="pb-5">
                    <CardCategory>
                      <Icon color="" icon="it-pa" padding={false} size="" />
                      Pagamenti
                    </CardCategory>
                    <div className="font-weight-semibold">
                      TARI - Tassa dei rifiuti
                    </div>
                    <p>
                      La TARI è in scadenza, controlla il tuo pagamento nella
                      tua area personale.
                    </p>
                  </div>
                  <CardReadMore
                    href="#"
                    iconName="it-arrow-right"
                    tag="a"
                    text="Tutti i servizi"
                  />
                </Card>
                <Card className="no-after rounded shadow" noWrapper teaser>
                  <div className="pb-5">
                    <CardCategory>
                      <Icon color="" icon="it-pa" padding={false} size="" />
                      Bandi
                    </CardCategory>
                    <div className="font-weight-semibold">
                      Come partecipare ad un bando
                    </div>
                    <p>
                      Tutte le informazioni e i documenti necessari per
                      partecipare.
                    </p>
                  </div>
                  <CardReadMore
                    href="/design-comuni-prototipi/esempi/bootstrap-italia/template-documenti.html"
                    iconName="it-arrow-right"
                    tag="a"
                    text="Tutti i documenti"
                  />
                </Card>
                {/* <Card
                className="no-after rounded shadow"
                noWrapper
                
                teaser
              >
                <div className="pb-5">
                  <CardCategory>
                    <Icon color="" icon="it-pa" padding={false} size="" />
                    Bandi
                  </CardCategory>
                  <div className="font-weight-semibold">
                    Come partecipare ad un bando
                  </div>
                  <p>
                    Tutte le informazioni e i documenti necessari per
                    partecipare.
                  </p>
                </div>
                <CardReadMore
                  href="/design-comuni-prototipi/esempi/bootstrap-italia/template-documenti.html"
                  iconName="it-arrow-right"
                  tag="a"
                  text="Tutti i documenti"
                />
              </Card> */}
              </div>
            </div>

            <CalendarEvents />
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
