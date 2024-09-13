import { getRoute } from '../utils'
import { Home, Launch } from '../pages'

export const routes: Record<string, (params: Record<string, string>) => Promise<string>> = {
    '/': Home,
    '/:id': Launch
}

export const router = async () => {
    const app = document.getElementById('app')
    if (app === null) return

    const PATHNAME = window.location.pathname
    const [route, params] = getRoute(PATHNAME)

    app.innerHTML = await routes[route !== undefined ? route : '*'](params)
}
