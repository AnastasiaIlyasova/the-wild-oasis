import { Button } from "../../../shared/ui/button";
import css from "./heroSection.module.scss";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className={css.hero__section}>
        <h1>Welcome to paradise.</h1>

        <Link to="/cabins">
            <Button buttonText={"Explore luxury cabins"} className={css.hero__section__btn}/>
        </Link>
    </div>
  );
}
