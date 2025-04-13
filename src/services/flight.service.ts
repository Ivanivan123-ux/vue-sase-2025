import type { FlightModel } from '@/models/flight.model';
import axios from 'axios';

const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    timeout: 12000,
    headers: {
        'Accept': 'application/json',
        'X-Name': 'SASE-2025'
    },
    validateStatus: (status: number) => {
        return status === 200
    }
    
})

export class FlightService {
    static async getFlights() {
        return await client.get<FlightModel[]>('/flight/list', {
            url:'flight/list',
            method: 'get',
            params: {
                type: 'departure'
            }
        })
    }
}
