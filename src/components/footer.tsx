import logo from "../assets/images/logo/logo.png";

const snsIcons = [
  { id: "fb", label: "Facebook" },
  { id: "x", label: "X" },
  { id: "ig", label: "Instagram" },
  { id: "line", label: "Line" },
  { id: "tg", label: "Telegram" },
  { id: "dc", label: "Discord" },
  { id: "web", label: "Official Site" },
];

function Footer() {
  return (
    <footer className="c-footer">
      <div className="c-footer__inner">
        <div className="c-footer__left">
          <img src={logo} alt="Nguyen" className="c-footer__logo" />
        </div>

        <p className="c-footer__copy">Copyright © 2023 Nguyen.</p>

        <div className="c-footer__right">
          <button className="c-footer__contact" type="button">
            contact us
          </button>

          <div className="c-footer__icons">
            {snsIcons.map((icon) => (
              <a
                key={icon.id}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.label}
                className={`o-icon o-icon--${icon.id}`}
              />
            ))}
          </div>

          <button className="c-footer__lang" type="button">
            <span>一般向遊戲</span>
            <i className="o-icon o-icon--down" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
