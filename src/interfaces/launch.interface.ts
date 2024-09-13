export interface Launch {
    links: Links
    failures: Failure[]
    details: string | null
    flight_number: number
    date_utc: string
    name: string
    id: string
}

interface Links {
    patch: {
        large: string
        small: string
    }
}

interface Failure {
    altitude: number | null
    reason: string
    time: number
}
