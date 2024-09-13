import { getLaunch, parseDate, parseHour } from '../utils'

export async function Launch({ id }: Record<string, string>): Promise<string> {
    const {
        image,
        failures,
        details,
        flight_number,
        date_utc,
        name
    } = await getLaunch(id)

    const originalDate = new Date(date_utc)

    const date = parseDate(originalDate)
    const hour = parseHour(originalDate)

    return `
        <article class="launch">
            <h1>${name}</h1>
            <img src="${image}"/>
            ${
                details !== null
                ? `<p>${details}</p>`
                : ''
            }
            <p>${date} ${hour}</p>
            <p>Flight number: ${flight_number}</p>
            ${
                failures.length > 0
                ? `
                    <h3>Failures</h3>
                    <ul>
                        ${failures.map(({ reason }) => `<li>${reason}</li>`)}
                    <ul>
                `
                : ''
            }
        </article>
    `
}
