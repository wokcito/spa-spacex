import { AdaptedLaunch, Launch } from '../interfaces';

export function launchAdapter(launch: Launch): AdaptedLaunch {
    return {
        ...launch,
        image: launch.links.patch.small
    }
}
