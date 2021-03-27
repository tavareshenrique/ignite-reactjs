import { signin, useSession } from "next-auth/client";
import { ISubscribeButtonProps } from "./@interfaces";

import styles from "./styles.module.scss";

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {3
  const [session] = useSession();

  function handleSubscribe() {
    if (!session) {
      signin('github');
      return;
    }
  }

  return (
    <button type="button"  className={styles.subscribeButton} onClick={handleSubscribe} >
      Subscribe now
    </button>
  );
}
