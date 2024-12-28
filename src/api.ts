import { ofetch } from 'ofetch';
import { version } from '../package.json';

export function createApiClient({ apiKey, baseApiUrl }: { apiKey: string; baseApiUrl: string }) {
  const apiClient = ofetch.create({
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'X-Renderize-Source': `renderize-sdk-javascript/${version}`,
    },
    baseURL: baseApiUrl,
  });

  return {
    apiClient,
  };
}
