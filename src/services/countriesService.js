import { COUNTRIES } from '@/constants/dummyDataEndpoints.js';

export async function fetchCountries() {
    try {
        const response = await fetch(COUNTRIES);
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
}
