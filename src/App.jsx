import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { Fragment } from 'react';
import HeaderOnly from './components/Layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = HeaderOnly;
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            const Page = route.component
            return (
              <Route key={index} path={route.path} element={
                <div>
                  <Layout>
                    <Page></Page>
                  </Layout>
                </div>
              }>
              </Route>)
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
