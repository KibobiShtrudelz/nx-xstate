import { useLoaderData } from 'react-router-dom';

export function Films(): JSX.Element {
  const films = useLoaderData();
  console.log('films', films);

  return <div>FILMS</div>;
}
