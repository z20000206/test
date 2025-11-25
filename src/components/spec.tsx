function Spec() {
  return (
    <section className="c-spec" id="spec">
      <div className="c-spec__inner">
        <div className="c-spec__title">
          <h2 className="o-title">
            <i className="o-icon o-icon--arrowLeft c-intro__arrow" />
            <span>遊戲運作環境</span>
            <i className="o-icon o-icon--arrowRight c-intro__arrow" />
          </h2>
        </div>

        <div className="c-spec__content">
          <div className="c-spec__item">
            <h3 className="c-spec__subtitle">■ 作業系統需求</h3>
            <p className="c-spec__label">【PC】</p>
            <ul className="c-spec__list">
              <li>Windows10 / 11</li>
              <li>Google Chrome 64bit 86.0 以上</li>
              <li>MacOS v10.15（Catalina）以上</li>
            </ul>
          </div>
          <div className="c-spec__item">
            <h3 className="c-spec__subtitle">■ 推薦瀏覽器</h3>
            <ul className="c-spec__list">
              <li>Google Chrome 最新版</li>
              <li>Mozilla Firefox 最新版</li>
              <li>Microsoft Edge 最新版</li>
            </ul>
          </div>
          <div className="c-spec__item">
            <div className="c-spec__note">
              <p>
                ※ 使用推薦瀏覽器以外的瀏覽器進行遊戲時，不保證可以正常運作。
              </p>
              <p>
                ※
                使用推薦瀏覽器以外的瀏覽器進行遊戲，遊戲執行中出現問題時，不保證會進行修復或處理，敬請見諒。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spec;
