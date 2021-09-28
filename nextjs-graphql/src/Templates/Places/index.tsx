import React from 'react';
import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import * as S from './styles';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};
export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: ImageProps[];
  };
};
export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter();
  if (router.isFallback) return null;
  return (
    <React.Fragment>
      <LinkWrapper href="/">
        <CloseOutline size={32} area-label="Go Back to Map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((img, index) => {
              return (
                <Image
                  width={1000}
                  height={600}
                  quality={75}
                  objectFit={'cover'}
                  key={`photo-${index}`}
                  src={img.url}
                  alt={place.name}
                />
              );
            })}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </React.Fragment>
  );
}
