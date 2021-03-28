import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container} >
        <div className={styles.posts} >
          <a href="http://">
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus blanditiis ex. Similique, provident doloremque.</p>
          </a>
          <a href="http://">
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus blanditiis ex. Similique, provident doloremque.</p>
          </a>
          <a href="http://">
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus blanditiis ex. Similique, provident doloremque.</p>
          </a>
          <a href="http://">
            <time>12 de Março de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus blanditiis ex. Similique, provident doloremque.</p>
          </a>
        </div>
      </main>
    </>
  )
}