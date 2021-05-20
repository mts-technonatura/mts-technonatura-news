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

const IndexPage = () => {
  const [onHover, setOnHover] = React.useState<boolean>();
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

            <div className="row-title pt-5 pb-3 row">
              <h2>Upcoming Events</h2>
            </div>
            <div className="row-calendar row">
              <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-calendar-wrapper">
                <div className="it-header-block">
                  <div className="it-header-block-title">
                    <h4 className="mb-0 text-center">2021 Year</h4>
                  </div>
                </div>
                <div className="it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag">
                  <div
                    className="owl-stage-outer"
                    onMouseEnter={() => {
                      setOnHover(true);
                    }}
                    onMouseLeave={() => {
                      setOnHover(false);
                    }}
                    onTouchStart={() => {
                      setOnHover(true);
                    }}
                    onTouchEnd={() => {
                      setOnHover(false);
                    }}
                    style={{ overflowX: onHover ? "auto" : "hidden" }}
                  >
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "2664px",
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                15
                                <span>lun</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                16
                                <span>mar</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                17
                                <span>mer</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                18
                                <span>giov</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                18
                                <span>giov</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                20
                                <span>sab</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                21
                                <span>dom</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                22
                                <span>lun</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{
                          width: "296px",
                        }}
                      >
                        <div className="it-single-slide-wrapper">
                          <Card className="card-bg" noWrapper={false}>
                            <div className="card-body">
                              <h5>
                                23
                                <span>mar</span>
                              </h5>
                              <p>
                                <a href="#">Saldo TASI</a>
                              </p>
                              <p>
                                <a href="#">
                                  Concerto gratuito piazza XX Settembre
                                </a>
                              </p>
                              <p>
                                <a href="#">
                                  Convocazione Consiglio Comunale - Prima seduta
                                </a>
                              </p>
                              <p>
                                <a href="#">Seconda rata TARI</a>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav ">
                    <button className="owl-prev" />
                    <button className="owl-next" />
                  </div>
                  <div className="owl-dots">
                    <button
                      aria-labelledby="owl-dot-0"
                      className="owl-dot active"
                      role="button"
                    >
                      <span />
                    </button>
                    <button
                      aria-labelledby="owl-dot-1"
                      className="owl-dot"
                      role="button"
                    >
                      <span />
                    </button>
                    <button
                      aria-labelledby="owl-dot-2"
                      className="owl-dot"
                      role="button"
                    >
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
