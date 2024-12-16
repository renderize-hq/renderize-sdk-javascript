import { ofetch } from 'ofetch';

export function createApiClient({ apiKey, baseApiUrl }: { apiKey: string; baseApiUrl: string }) {
  const apiClient = ofetch.create({
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    baseURL: baseApiUrl,
  });

  return {
    apiClient,
  };
}
