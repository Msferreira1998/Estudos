import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';
import React from 'react';
import { InfoOutline } from '@styled-icons/evaicons-outline';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <React.Fragment>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>

      <Map places={places} />
    </React.Fragment>
  );
}
