import { For, JSX, lazy } from 'solid-js'
import { render } from 'solid-js/web'
import {type RouteDefinition, Router, Link, useRoutes } from 'solid-app-router'
import { Progress } from './components'


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
      <main className="flex flex-col h-[400vh]">
        {/* nav bar wrapper */}
        <div className="sticky top-0 flex flex-col items-center justify-center w-full bg-white">
          <Progress value={100} />
          {/* nav content wrapper */}
          <nav className="flex justify-between w-full max-w-5xl py-4 mx-10">
            {/* logo */}
            <div className="text-2xl font-black text-[#4b7db7]">Solid Blog</div>
            {/* navlinks wrapper */}
            <div className="flex items-center justify-center space-x-8">
              <For each={routes} fallback={<div>Loading ...</div>}>
                {({path}) => (
                  <Link href={path} className='text-[#1a1a1a] font-semibold'>{pages.filter((e) => (e.path === path))[0]['text']}</Link>
                )}
              </For>
            </div>{/*-- navlinks wrapper */}
          </nav>{/* nav content wrapper */}
        </div>{/*-- nav bar wrapper */}

        {/* main wrapper */}
        <main className="flex flex-col items-center justify-center w-full py-4 mx-10 lg:mx-0">
          {/* content wrapper */}
          <div className="flex w-full max-w-5xl">
            <Route />
          </div>{/*-- content wrapper */}
        </main>{/*-- main wrapper */}

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
