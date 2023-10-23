export interface ICoordinatesResponse {
    country: string;
    lat: number;
    local_names: { ascii: string, fa: string, feature_name: string }
    lon: number;
    name: string;
}