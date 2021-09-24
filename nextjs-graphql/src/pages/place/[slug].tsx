import client from 'graphql/client';
import {
  GetPlacesBySlugQuery,
  GetPlacesQuery,
} from 'graphql/generated/graphql';
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import PlacesTemplate, { PlacesTemplateProps } from 'Templates/Places/index';

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PlacesTemplate place={place} />;
}

// Cria as rotas dinamicamente
export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3,
  });
  const paths = places.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

// Alimenta as páginas com conteúdo
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlacesBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`,
    }
  );

  if (!place) return { notFound: true };

  return {
    props: {
      place,
    },
  };
};
