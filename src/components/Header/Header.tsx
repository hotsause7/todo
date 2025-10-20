import HeaderStyles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.header_container}>
        <a href="/" className={`${HeaderStyles.link} ${HeaderStyles.active}`}>ToDo</a>
      </div>
    </header>
  );
};
