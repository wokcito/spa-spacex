export interface AdaptedLaunch {
    image: string
    failures: Failure[]
    details: string | null
    flight_number: number
    date_utc: string
    name: string
    id: string
}

interface Failure {
    altitude: number | null
    reason: string
    time: number
}
