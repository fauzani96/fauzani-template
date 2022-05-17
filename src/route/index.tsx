import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Collection from '../page/collection/Collection.component'
import CollectionIndex from '../page/collection/Collection.route'
import Home from '../page/home/Home.component'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="collection" element={<Collection />}>
          <Route index element={<CollectionIndex />} />
          <Route
            path=":collectId"
            element={
              <main style={{padding: '1rem'}}>
                <p>collection DI : 90</p>
              </main>
            }
          />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{padding: '1rem'}}>
            <p>There is nothing here!</p>
            <Link to="/">Back!</Link>
          </main>
        }
      />
    </Routes>
  )
}
