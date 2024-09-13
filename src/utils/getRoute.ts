import { routes } from '../routes'

export function getRoute(pathname: string): [string | undefined, Record<string, string>] {
    const [, ...paths] = pathname.split('/')

    let params: Record<string, string> = {}

    const route = Object.keys(routes).find(route => {
        const [, ...routePaths] = route.split('/')

        if (routePaths.length !== paths.length) return false

        for (let i = 0; i < paths.length; i++) {
            if (routePaths[i].startsWith(':')) {
                params[routePaths[i].replace(':', '')] = paths[i]
                if (i === paths.length - 1) return true
                continue
            }

            if (routePaths[i] === paths[i]) {
                if (i === paths.length - 1) return true
                continue
            }

            params = {}
            break
        }
    })

    return [route, params]
}
