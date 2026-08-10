import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="boomza-header">
        <div className="site-shell boomza-nav">
          <Link
            href="/"
            className="boomza-logo"
          >
            BOOM<span>ZA</span>
          </Link>

          <nav
            className="nav-links"
            aria-label="Main navigation"
          >
            <Link href="#stories">Stories</Link>
            <Link href="#colour">Colour</Link>
            <Link href="#play">Play</Link>
            <Link href="#books">Books</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <div
              className="section-label"
              style={{
                color: "var(--boomza-green-dark)",
              }}
            >
              Welcome, adventurer
            </div>

            <h1>
              Little adventures.
              <span>Big imagination.</span>
            </h1>

            <p>
              Come explore Boomza&apos;s world — where every
              story brings something new to watch, colour,
              discover and play.
            </p>

            <div className="hero-actions">
              <Link
                href="#stories"
                className="boomza-button"
              >
                Start an adventure
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#colour"
                className="boomza-button boomza-button-secondary"
              >
                Colour with Boomza
              </Link>
            </div>
          </div>

          <div
            className="hero-world"
            aria-label="Boomza's world"
          >
            <div className="hero-sun" />
            <div className="hero-cloud hero-cloud-one" />

            <div className="hero-art">
              <div className="hero-character-placeholder">
                <div>
                  <strong>BOOMZA</strong>
                  <small>
                    Your hero artwork
                    <br />
                    goes right here.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stories"
        className="adventure-section"
      >
        <div className="site-shell adventure-grid">
          <div className="story-frame">
            <div className="story-placeholder">
              Today&apos;s story artwork
            </div>
          </div>

          <div className="adventure-copy">
            <div
              className="section-label"
              style={{
                color: "var(--boomza-orange)",
              }}
            >
              Today&apos;s adventure
            </div>

            <h2>
              Something strange happened in Boomza&apos;s
              world…
            </h2>

            <p>
              The colours are disappearing. Join Boomza,
              follow the clues and see whether you can help
              bring his colourful world back to life.
            </p>

            <Link
              href="#play"
              className="boomza-button"
            >
              Watch the story
              <span aria-hidden="true">▶</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="colour"
        className="colour-section"
      >
        <div className="site-shell">
          <div className="section-intro">
            <div>
              <div
                className="section-label"
                style={{
                  color: "var(--boomza-orange)",
                }}
              >
                Grab your crayons
              </div>

              <h2 className="section-heading">
                Colour Boomza&apos;s world.
              </h2>
            </div>

            <p>
              Download a page, choose your colours and make
              every Boomza adventure your own.
            </p>
          </div>

          <div className="colour-grid">
            <article className="colouring-card">
              <div className="colouring-page">
                Boomza colouring
                <br />
                artwork
              </div>

              <strong>Good morning, Boomza!</strong>
            </article>

            <article className="colouring-card">
              <div className="colouring-page">
                Boomza colouring
                <br />
                artwork
              </div>

              <strong>Breakfast time</strong>
            </article>

            <article className="colouring-card">
              <div className="colouring-page">
                Boomza colouring
                <br />
                artwork
              </div>

              <strong>Into the garden</strong>
            </article>
          </div>
        </div>
      </section>

      <section
        id="play"
        className="play-section"
      >
        <div className="site-shell">
          <div className="play-panel">
            <div className="play-copy">
              <div className="section-label">
                Let&apos;s play
              </div>

              <h2>
                Help Boomza find the colours.
              </h2>

              <p>
                Follow the trail, make choices and discover
                what is waiting for Boomza around the next
                corner.
              </p>

              <Link
                href="#"
                className="boomza-button"
              >
                Play soon
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              className="play-world"
              aria-hidden="true"
            >
              <div className="play-path" />

              <div className="play-dot play-dot-one">
                START
              </div>

              <div className="play-dot play-dot-two">
                CHOOSE
              </div>

              <div className="play-dot play-dot-three">
                DISCOVER
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="books"
        className="books-section"
      >
        <div className="site-shell book-grid">
          <div className="book-cover">
            <div className="book-placeholder">
              <small>Boomza</small>
              <strong>
                First
                <br />
                Adventures
              </strong>
            </div>
          </div>

          <div className="book-copy">
            <div
              className="section-label"
              style={{
                color: "var(--boomza-green-dark)",
              }}
            >
              Take the adventure home
            </div>

            <h2 className="section-heading">
              Meet Boomza beyond the screen.
            </h2>

            <p>
              Follow Boomza through everyday adventures and
              bring every page to life with your own
              imagination.
            </p>

            <Link
              href="#"
              className="boomza-button"
            >
              Book coming soon
            </Link>
          </div>
        </div>
      </section>

      <footer className="boomza-footer">
        <div className="site-shell">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="boomza-logo">
                BOOM<span>ZA</span>
              </div>

              <p>
                Stories, colouring, play and little
                adventures made for big imaginations.
              </p>
            </div>

            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              <Link href="#stories">Stories</Link>
              <Link href="#colour">Colour</Link>
              <Link href="#play">Play</Link>
              <Link href="#books">Books</Link>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Boomza.
            </span>

            <span>
              Made with imagination in South Africa.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
