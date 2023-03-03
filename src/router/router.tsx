import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Films } from '../pages';
import { Error } from '../components';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/films"
      element={<Films />}
      loader={async function () {
        return await fetch('https://swapi.dev/api/films');
      }}
      action={async function ({ request }) {
        console.log(`Some POST request >>> ${request}`);
      }}
      errorElement={<Error />}
    />
  )
);
