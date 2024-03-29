import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import { Error } from '@components'
import { Home, XState, TodoPage } from '@pages'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        // loader={async function () {
        //   return await fetch(
        //     'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f26d3784&app_key=2f072a644347fc57301bc1b8b1a319b0&imageSize=SMALL'
        //   )
        // }}
        // action={async function ({ request }) {
        //   console.log(`Some POST request >>> ${request}`)
        // }}
        errorElement={<Error />}
      />

      <Route path="/xstate" element={<XState />} errorElement={<Error />} />
      <Route path="/todo" element={<TodoPage />} errorElement={<Error />} />
    </>
  )
)
