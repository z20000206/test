import logo from '../assets/images/logo/logo.png';
import searchIcon from '../assets/images/icon/search.svg';

function Header() {
  return (
    <header className="c-header">
      <div className="c-header__inner">
        <a href="#" className="c-header__brand">
          <img src={logo} alt="Nguyen" className="c-header__logo" />
        </a>

        <nav className="c-header__nav" aria-label="主選單">
          <a href="#" className="c-header__link">
            最新上架
          </a>
          <a href="#" className="c-header__link">
            人氣排行榜
          </a>
          <a href="#" className="c-header__link">
            熱門活動
          </a>
          <a href="#" className="c-header__link">
            重要公告
          </a>
          <a href="#" className="c-header__link">
            網頁儲值
          </a>
          <a href="#" className="c-header__link">
            我的遊戲
          </a>
        </nav>

        <div className="c-header__actions">
          <button
            type="button"
            className="c-header__icon-btn"
            aria-label="搜尋"
          >
            <img src={searchIcon} alt="" />
          </button>

          <div className="c-header__auth">
            <button type="button" className="c-header__auth-btn">
              登入
            </button>
            <span className="c-header__auth-separator">│</span>
            <button type="button" className="c-header__auth-btn">
              註冊
            </button>
          </div>

          <button
            type="button"
            className="c-header__more-btn"
            aria-label="更多選單"
          >
            …
          </button>
        </div>
        <div className="c-header__actionsSm">
          <div className="c-header__btn">成人向</div>
          <i className="o-icon o-icon--bell" />
        </div>
      </div>
    </header>
  );
}

export default Header;
