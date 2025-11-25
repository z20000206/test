import intro1 from "../assets/images/others/intro1.png";
import intro2 from "../assets/images/others/intro2.png";

const introIcons = [
  { id: "web", label: "Official site" },
  { id: "fb", label: "Facebook" },
  { id: "x", label: "X" },
  { id: "tg", label: "Telegram" },
  { id: "ig", label: "Instagram" },
  { id: "line", label: "Line" },
  { id: "dc", label: "Discord" },
];

const tags = ["網頁遊戲", "射擊遊戲", "角色扮演", "卡牌", "二次元"];

function IntroSection() {
  return (
    <section className="c-intro" id="intro">
      <div className="c-intro__inner">
        <div className="c-intro__title">
          <h2 className="o-title">
            <i className="o-icon o-icon--arrowLeft c-intro__arrow" />
            <span>遊戲簡介</span>
            <i className="o-icon o-icon--arrowRight c-intro__arrow" />
          </h2>
        </div>

        <div className="c-intro__visual">
          <img src={intro1} alt="NIKKE characters" />
        </div>

        <div className="c-intro__text">
          <p>
            第3人稱射擊手遊。集中了《天命之子》所有Live2D ver 3.3和2.5D PAPER
            FOLDING技術來實現生動的戰鬥動作。故事背景講述在被外星人淘汰的地球，
            代替人類上戰場的戰鬥少女的故事。
          </p>

          <p>
            出身於名為妮姬的一支精銳部隊將作為最後希望，為了奪回失落的地表，
            之間存在的矛盾、不同意見與情感糾葛也將逐漸浮現。
          </p>

          <p>
            玩家將扮演指揮官，帶領她們迎擊敵軍。以戰術掩蔽、火力支援與小隊調度，
            克服來自四面八方的威脅，並在激烈的遭遇戰中取得勝利。
          </p>

          <p>
            每名角色擁有專屬背景故事、語音演出與個別劇情，搭配多樣的戰鬥機制、
            豐富的角色互動與世界觀，打造全新的沉浸式遊戲體驗。
          </p>

          <p>是為了「守護」，還是為了「戰鬥」而誕生？她們的選擇將由你決定。</p>
        </div>

        <div className="c-intro__image">
          <img src={intro2} alt="NIKKE scene" />
        </div>

        <button className="o-btn o-btn--full o-btn--primary c-intro__cta">
          免費遊玩
        </button>

        <div className="c-intro__tags">
          {tags.map((tag) => (
            <button key={tag} className="c-intro__tag" type="button">
              {tag}
            </button>
          ))}
        </div>
        <p className="c-intro__meta">廠商：Level Infinite</p>
        <div className="c-intro__icons">
          {introIcons.map((icon) => (
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
      </div>
    </section>
  );
}

export default IntroSection;
