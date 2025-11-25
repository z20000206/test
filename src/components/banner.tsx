import kvBg from "../assets/images/kv/kv.jpg";
import avatar from "../assets/images/others/avatar.png";

function Banner() {
  return (
    <section className="c-banner">
      <div
        className="c-banner__bg"
        style={{ backgroundImage: `url(${kvBg})` }}
      />
      <div className="c-banner__gradient">
        <div className="c-banner__inner">
          <div className="c-banner__info">
            <div className="c-banner__card">
              <img
                src={avatar}
                alt="NIKKE avatar"
                className="c-banner__avatar"
              />
              <div className="c-banner__cardContent">
                <div className="c-banner__title">勝利女神妮姬</div>
                <div className="c-banner__subtitle">
                  GODDESS OF VICTORY: NIKKE
                </div>
                <button className="c-banner__tag">網頁遊戲</button>
              </div>
            </div>
            <div className="c-banner__text">
              第3人稱射擊手遊。集中了《天命之子》所有Live2D ver 3.3和2.5D PAPER
              FOLDING技術來實現生動的戰鬥動作。故事背景講述在被外星人
              淘汰的地球，代替人類上戰場的戰鬥少女的故事。
            </div>
            <div className="c-banner__cta">
              <button className="o-btn o-btn--primary c-banner__cta-btn">
                開始遊戲
              </button>
            </div>
            <div className="c-banner__ctaSm">
              <button className="o-btn o-btn--full o-btn--disable c-banner__cta-btn">
                僅可在PC上遊玩
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
