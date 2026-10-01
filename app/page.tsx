"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/beautybya.barb/";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={menuOpen ? "header menu-open" : "header"}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span>Beauty by</span>
          <strong>A. BARB</strong>
        </a>

        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#mobile">Mobile Beauty</a>
          <a href="#rebrand">The Rebrand</a>
          <a href="#booking">Booking</a>
        </nav>

        <a
          className="header-book"
          href={instagram}
          target="_blank"
          rel="noreferrer"
        >
          DM TO BOOK <span>↗</span>
        </a>

        <button
          type="button"
          className={menuOpen ? "menu-button active" : "menu-button"}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
          <div className="mobile-menu-top">
            <span>JACKSONVILLE</span>
            <span>MOBILE APPOINTMENTS</span>
          </div>

          <nav>
            <a href="#about" onClick={closeMenu}>
              <small>01</small>
              About
            </a>
            <a href="#mobile" onClick={closeMenu}>
              <small>02</small>
              Mobile Beauty
            </a>
            <a href="#rebrand" onClick={closeMenu}>
              <small>03</small>
              The Rebrand
            </a>
            <a href="#booking" onClick={closeMenu}>
              <small>04</small>
              Booking
            </a>
          </nav>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="mobile-book"
          >
            MESSAGE @BEAUTYBYA.BARB <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-meta">
          <span>JACKSONVILLE</span>
          <span>LICENSED FULL SPECIALIST</span>
          <span>MOBILE APPOINTMENTS</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">BEAUTY BY A. BARB</p>

            <h1>
              BEAUTY
              <br />
              THAT <em>MOVES</em>
              <br />
              WITH YOU.
            </h1>

            <div className="hero-bottom">
              <p>
                A mobile beauty experience by Barb, bringing the appointment
                beyond the traditional beauty space in Jacksonville.
              </p>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                <span>DM FOR AN APPOINTMENT</span>
                <i>↗</i>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="portrait">
              <div className="portrait-halo" />
              <div className="portrait-hair" />
              <div className="portrait-face">
                <span className="brow brow-one" />
                <span className="brow brow-two" />
                <span className="eye eye-one" />
                <span className="eye eye-two" />
                <span className="nose" />
                <span className="lips" />
              </div>
              <div className="portrait-neck" />
              <div className="portrait-shoulder" />
            </div>

            <div className="visual-card card-one">
              <small>BASED IN</small>
              <strong>JAX</strong>
              <span>FLORIDA</span>
            </div>

            <div className="visual-card card-two">
              <small>CURRENTLY</small>
              <strong>RE</strong>
              <span>BRANDING</span>
            </div>

            <div className="vertical-word">A. BARB</div>
          </div>
        </div>

        <div className="hero-line">
          <span>LICENSED</span>
          <i>◆</i>
          <span>EXPERIENCED</span>
          <i>◆</i>
          <span>FULL SPECIALIST</span>
          <i>◆</i>
          <span>JACKSONVILLE</span>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="section-index">
          <span>01</span>
          <p>MEET BARB</p>
        </div>

        <div className="intro-main">
          <p className="kicker">BEHIND THE BRAND</p>

          <h2>
            BEAUTY,
            <br />
            <em>PERSONALLY.</em>
          </h2>

          <div className="intro-copy">
            <p>
              Beauty by A. Barb is the professional identity of Barb, whose
              public profile describes her as a licensed and experienced Full
              Specialist.
            </p>

            <p>
              With the brand currently evolving, appointments are being
              connected directly through Instagram.
            </p>
          </div>
        </div>

        <aside className="intro-aside">
          <span className="aside-number">A/B</span>
          <div className="aside-rule" />
          <p>JACKSONVILLE</p>
          <p>FLORIDA</p>
        </aside>
      </section>

      <section className="credential-strip">
        <div>
          <span>LICENSED</span>
          <small>01</small>
        </div>
        <div>
          <span>EXPERIENCED</span>
          <small>02</small>
        </div>
        <div>
          <span>FULL SPECIALIST</span>
          <small>03</small>
        </div>
        <div>
          <span>MOBILE</span>
          <small>04</small>
        </div>
      </section>

      <section className="mobile-beauty" id="mobile">
        <div className="mobile-art" aria-hidden="true">
          <div className="route-line route-one" />
          <div className="route-line route-two" />
          <div className="route-line route-three" />

          <div className="location-dot dot-one">
            <span />
            <small>START</small>
          </div>

          <div className="location-dot dot-two">
            <span />
            <small>JAX</small>
          </div>

          <div className="travel-card">
            <p>BEAUTY</p>
            <strong>TO YOU</strong>
            <span>JACKSONVILLE</span>
          </div>

          <div className="map-word">MOBILE</div>
        </div>

        <div className="mobile-copy">
          <span className="section-label">02 / MOBILE BEAUTY</span>

          <p className="kicker">CURRENT APPOINTMENTS</p>

          <h2>
            NOT TIED
            <br />
            TO ONE
            <br />
            <em>CHAIR.</em>
          </h2>

          <p className="body-copy">
            Beauty by A. Barb currently invites clients to connect for mobile
            appointments — keeping the booking experience direct and personal.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="underlined-link"
          >
            ASK ABOUT A MOBILE APPOINTMENT <span>↗</span>
          </a>
        </div>
      </section>

      <section className="statement">
        <div className="statement-meta">
          <span>BEAUTY BY A. BARB</span>
          <span>JACKSONVILLE · FL</span>
        </div>

        <p className="kicker">A BRAND IN MOTION</p>

        <h2>
          NEW
          <br />
          <span>CHAPTER.</span>
          <br />
          SAME NAME.
        </h2>

        <p className="statement-copy">
          Beauty by A. Barb is currently rebranding — an opportunity for the
          identity, experience and online presence to evolve together.
        </p>
      </section>

      <section className="rebrand" id="rebrand">
        <div className="rebrand-heading">
          <span className="section-label">03 / THE REBRAND</span>

          <div>
            <p className="kicker">EVOLVING BEAUTY BY A. BARB</p>

            <h2>
              THE NEXT
              <br />
              <em>ERA.</em>
            </h2>
          </div>
        </div>

        <div className="rebrand-grid">
          <article className="rebrand-card dark-card">
            <span>01</span>

            <div className="monogram">AB</div>

            <div>
              <small>IDENTITY</small>
              <h3>A. BARB</h3>
              <p>
                A clean, recognizable identity built around the name already
                connected to the business.
              </p>
            </div>
          </article>

          <article className="rebrand-card copper-card">
            <span>02</span>

            <div className="mobile-symbol">
              <i />
              <i />
              <i />
            </div>

            <div>
              <small>EXPERIENCE</small>
              <h3>MOBILE</h3>
              <p>
                A digital presence that reflects the current mobile appointment
                model.
              </p>
            </div>
          </article>

          <article className="rebrand-card cream-card">
            <span>03</span>

            <div className="message-symbol">
              <i>↗</i>
            </div>

            <div>
              <small>CONNECTION</small>
              <h3>DIRECT</h3>
              <p>
                A simple route from discovering Beauty by A. Barb to starting a
                conversation directly.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="experience">
        <div className="experience-copy">
          <span className="section-label">04 / THE FLOW</span>

          <p className="kicker">KEEPING IT SIMPLE</p>

          <h2>
            DISCOVER.
            <br />
            MESSAGE.
            <br />
            <em>CONNECT.</em>
          </h2>
        </div>

        <div className="experience-list">
          <article>
            <span>01</span>
            <div>
              <h3>DISCOVER</h3>
              <p>
                Explore the Beauty by A. Barb identity and connect with the
                brand online.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>MESSAGE</h3>
              <p>
                Send Barb a direct message through Instagram regarding a mobile
                appointment.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>CONNECT</h3>
              <p>
                Continue the conversation directly for current appointment
                information.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="jacksonville">
        <div className="jax-copy">
          <span className="section-label">05 / LOCATION</span>

          <p className="kicker">FLORIDA</p>

          <h2>
            MADE FOR
            <br />
            <em>JACKSONVILLE.</em>
          </h2>

          <p>
            Beauty by A. Barb is based in Jacksonville, with mobile appointments
            currently connected through direct message.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="underlined-link"
          >
            CONNECT WITH BARB <span>↗</span>
          </a>
        </div>

        <div className="jax-art" aria-hidden="true">
          <div className="jax-circle">
            <span>JAX</span>
          </div>

          <div className="jax-grid">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <p>30.3322° N</p>
          <strong>JACKSONVILLE</strong>
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-top">
          <span>06 / BOOKING</span>
          <span>BEAUTY BY A. BARB</span>
        </div>

        <div className="booking-content">
          <p className="kicker">CURRENTLY BOOKING THROUGH DM</p>

          <h2>
            BEAUTY
            <br />
            CAN COME
            <br />
            <em>TO YOU.</em>
          </h2>

          <div className="booking-bottom">
            <p>
              Connect with Beauty by A. Barb directly on Instagram regarding
              current mobile appointment availability.
            </p>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="booking-button"
            >
              <span>DM @BEAUTYBYA.BARB</span>
              <i>↗</i>
            </a>
          </div>
        </div>

        <div className="booking-mark" aria-hidden="true">
          <span>A</span>
          <i>×</i>
          <span>B</span>
        </div>
      </section>

      <section className="instagram">
        <div>
          <span className="section-label">07 / INSTAGRAM</span>
          <p>FOLLOW THE REBRAND</p>
        </div>

        <a href={instagram} target="_blank" rel="noreferrer">
          <small>INSTAGRAM</small>
          <strong>@beautybya.barb</strong>
          <i>↗</i>
        </a>
      </section>

      <footer>
        <a href="#home" className="footer-brand">
          <span>Beauty by</span>
          <strong>A. BARB</strong>
        </a>

        <p>JACKSONVILLE · MOBILE APPOINTMENTS</p>

        <a href={instagram} target="_blank" rel="noreferrer">
          INSTAGRAM ↗
        </a>
      </footer>
    </main>
  );
}