import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import React from 'react';
import AboutTemplate from 'Templates/About';

export default function AboutPage() {
  return <AboutTemplate />;
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);
  console.log(pages);

  return {
    props: {},
  };
};
