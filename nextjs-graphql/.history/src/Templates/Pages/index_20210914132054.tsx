import LinkWrapper from 'components/LinkWrapper';
import React from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import * as S from './styles';

export default function AboutTemplate() {
  return (
    <React.Fragment>
      <S.Content>
        <LinkWrapper href="/">
          <CloseOutline size={32} arial-label="home" />
        </LinkWrapper>

        <S.Heading>My Trips</S.Heading>

        <S.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            adipisci aut molestias corporis molestiae a distinctio eaque
            consectetur repellendus delectus aspernatur fuga quasi sequi,
            voluptatem ratione ducimus doloribus voluptas ad.
          </p>
        </S.Body>
      </S.Content>
    </React.Fragment>
  );
}
