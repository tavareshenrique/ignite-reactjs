import { useRouter } from 'next/router';

import { SignInButton } from "../SignInButton";
import { ActiveLink } from '../ActiveLink';

import styles from "./styles.module.scss";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active} >
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}  prefetch >
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
