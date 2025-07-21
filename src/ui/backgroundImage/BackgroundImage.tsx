import css from "./backgroundImage.module.scss";

export const BackgroundImage = () => {

  return (
    <img className={css.img} src="/bg.jpg" alt="background" />
  );
}
