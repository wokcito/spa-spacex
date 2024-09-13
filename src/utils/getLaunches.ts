import { AdaptedLaunch, Launch } from '../interfaces'
import { launchAdapter } from './launchAdapter'

const API_URL = 'https://api.spacexdata.com/v5/launches'

export const getLaunches = async (): Promise<AdaptedLaunch[]> => {
    const response = await fetch(API_URL)
    const launches = await response.json() as Launch[]

    return launches.map(launchAdapter)
}

export const getLaunch = async (id: string): Promise<AdaptedLaunch> => {
    const response = await fetch(`${API_URL}/${id}`)
    const launch = await response.json()

    return launchAdapter(launch)
}
