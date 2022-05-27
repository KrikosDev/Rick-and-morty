import { FC } from 'react';
import styled from 'styled-components';
import { CatsCard } from './components/catsCard';

import { cats } from './constants';

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const App: FC = () => {
  console.log('cats', cats);

  return (
    <MainBox>
      {cats.map((item) => {
        return (
          <CatsCard
            key={Math.random()}
            description={item?.description}
            image={item?.image && item?.image}
            name={item?.name}
          />
        );
      })}
    </MainBox>
  );
};
