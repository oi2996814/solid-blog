import { For, JSX, lazy, mergeProps } from 'solid-js'
import { render } from 'solid-js/web'
import {type RouteDefinition, Router, Link, useRoutes } from 'solid-app-router'


const ROUTEDIR = 'routes'

// output of tailwindcss and postcss
// Q: why am I here ?
// A: by default this can be treated as reset css,
//    and you could easily using scss in `src/tailwind.scss`
//    for global styling
import './main.css'

const pages = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/demo',
    text: 'Demo'
  }
]

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./routes/index'))
  },
  {
    path: '/demo',
    component: lazy(() => import('./routes/demo'))
  },
]

const Route = useRoutes(routes)

const App: JSX.Element= () => {
  return (
    <>
      {/* app wrapper */}
      <main className="flex flex-col">
        {/* nav bar wrapper */}
        <div className="w-full">
          <nav className="max-w-5xl">
            <For each={routes} fallback={<div>Loading ...</div>}>
              {({path}, i) => (
                <Link href={path}>{pages.filter((e) => (e.path === path))[0]['text']}</Link>
              )}
            </For>
          </nav>
        </div>{/*-- nav bar wrapper */}

        <Route />
      </main>{/*-- app wrapper */}
    </>
  )
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
)
