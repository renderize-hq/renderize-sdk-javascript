import { createApiClient } from './api';

export const RENDERIZE_PDF_RENDERING_API_PATH = '/api/v1/documents/pdf/html';
export const RENDERIZE_PDF_RENDERING_API_BASE_URL = 'https://rndz.tech';

export type PdfRenderingConfigFormat = 'letter' | 'legal' | 'tabloid' | 'ledger' | 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6';
export type PdfRenderingConfigOrientation = 'portrait' | 'landscape';
export type PdfRenderingConfigResponseType = 'stream' | 'blob' | 'arrayBuffer';

export type PdfRenderingConfig = {
  html: string;
  format?: PdfRenderingConfigFormat;
  orientation?: PdfRenderingConfigOrientation;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
};

export function createClient({
  apiKey,
  baseApiUrl = RENDERIZE_PDF_RENDERING_API_BASE_URL,
}: {
  apiKey: string;
  baseApiUrl?: string;
}) {
  const { apiClient } = createApiClient({ apiKey, baseApiUrl });

  return {
    renderPdf: async <R extends PdfRenderingConfigResponseType = 'arrayBuffer' >({ responseType, ...body }: PdfRenderingConfig & { responseType?: R }) => {
      return await apiClient(
        RENDERIZE_PDF_RENDERING_API_PATH,
        {
          method: 'POST',
          body,
          responseType: responseType ?? 'arrayBuffer',
        },
      );
    },
  };
}
