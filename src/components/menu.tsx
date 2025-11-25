const items = [
  { id: 'intro', label: '遊戲簡介', target: '#intro' },
  { id: 'spec', label: '運作環境', target: '#spec' },
];

function SideMenu() {
  const scrollTo = (target: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <aside className="c-side">
      <div className="c-side__list">
        {items.map((item) => (
          <button
            key={item.id}
            className="c-side__item"
            onClick={scrollTo(item.target)}
          >
            <span className="c-side__label">{item.label}</span>
            <span className="c-side__line" />
          </button>
        ))}
      </div>

      <button
        className="c-side__cta"
      >
        開始遊戲
      </button>
    </aside>
  );
}

export default SideMenu;
