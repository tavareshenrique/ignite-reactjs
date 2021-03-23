import { ISubscribeButtonProps } from "./@interfaces";

import styles from "./styles.module.scss";

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
