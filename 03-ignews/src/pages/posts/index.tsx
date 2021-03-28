import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100
  })

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}