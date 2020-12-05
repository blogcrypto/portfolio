import axios from 'axios';

/**
 * Server request
 * @param url - page url ('/articles')
 * @param query - url parameters ('_sort=id:desc')
 */
export async function request(url, query) {
    try {
        return await axios.get(`${query ? `${url  }?${  query}` : url}`);
    } catch (error) {
        return error;
    }
}

export const MARKET_API = 'https://api.coingecko.com/api/v3/';
export const DEMO_SPREADSHEET = '12aYS3GD7r4IFt92GYBvs_N5h9alE57a2FWxwdOnP_ik';
