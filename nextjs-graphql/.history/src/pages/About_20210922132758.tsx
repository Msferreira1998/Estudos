import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import React from 'react';
import AboutTemplate from 'Templates/Pages';

export default function AboutPage() {
  return <AboutTemplate />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES);
  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));
}

// export const getStaticProps = async () => {
//   console.log(pages);

//   return {
//     props: {},
//   };
// };
