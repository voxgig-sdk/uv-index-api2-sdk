export interface Forecast {
    daily?: any[];
    hourly?: any[];
    latitude: number;
    longitude: number;
    meta: Record<string, any>;
    now: Record<string, any>;
    ok: boolean;
    timezone: Record<string, any>;
    today: Record<string, any>;
    tomorrow: Record<string, any>;
}
export interface ForecastListMatch {
    daily?: boolean;
    hourly?: boolean;
    latitude: number;
    longitude: number;
    timezone?: string;
}
