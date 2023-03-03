import { useLoaderData } from 'react-router-dom';

import { Card } from '@components';

import styles from './films.module.scss';

export function Films(): JSX.Element {
  const { results } = useLoaderData();
  console.log('results', results);

  return (
    <div className={styles.films}>
      {results?.map((film) => (
        <Card key={film.episode_id} title={film.title} />
      ))}
    </div>
  );
}
