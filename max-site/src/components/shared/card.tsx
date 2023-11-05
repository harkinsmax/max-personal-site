import { FC } from "react";
import styles from "./card.module.scss";
import { resolveClassName } from "../../utils/utils";

interface IProps extends React.PropsWithChildren {
  className?: string;
}

const Card: FC<IProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={resolveClassName({ [styles.card]: true, className: !!className })}>
      {children}
    </div>);
};

export default Card;