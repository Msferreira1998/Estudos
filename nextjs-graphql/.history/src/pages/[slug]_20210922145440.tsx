import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import AboutTemplate from 'Templates/Pages';

export default function AboutPage() {
  const router = useRouter();

  if (router.isFallback) return null;

  return <AboutTemplate />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });
  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
