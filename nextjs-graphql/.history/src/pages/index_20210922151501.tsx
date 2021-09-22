import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';
import React from 'react';
import { InfoOutline } from '@styled-icons/evaicons-outline';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function Home() {
  return (
    <React.Fragment>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>

      <Map />
    </React.Fragment>
  );
}
