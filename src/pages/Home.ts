import { getLaunches } from '../utils'

export async function Home(): Promise<string> {
    const launches = await getLaunches()

    return `
        ${launches.map(({
            id,
            name,
            image
        }) => `
            <article class="launch">
                <a href="${id}">
                    <h3>${name}</h3>
                    <img src="${image}"/>
                </a>
            </article>
        `).join('')}
    `
}
