import LinkWrapper from 'components/LinkWrapper';
import React from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import * as S from './styles';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

export default function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <React.Fragment>
      <S.Content>
        <LinkWrapper href="/">
          <CloseOutline size={32} arial-label="home" />
        </LinkWrapper>

        <S.Heading>{heading}</S.Heading>

        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>
      </S.Content>
    </React.Fragment>
  );
}
