# Renderize JavaScript SDK

The Renderize SDK provides a seamless way to interact with the Renderize API for rendering PDFs from HTML and CSS. This library is designed for both JavaScript and TypeScript environments, offering a robust and straightforward interface.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Creating a Client](#creating-a-client)
  - [Rendering a PDF](#rendering-a-pdf)
- [API Reference](#api-reference)
- [License](#license)

## Features

- **Flexible Configuration**: Customize PDF format, orientation, and margins.
- **Multiple Response Types**: Receive rendered PDFs as streams, blobs, or array buffers.
- **TypeScript Support**: Fully typed interfaces for safe and predictable usage.
- **Lightweight**: Minimal dependencies ([`ofetch`](https://github.com/unjs/ofetch)) for efficient HTTP requests.

## Installation

To use the Renderize SDK, install it via your package manager:

```bash
# Using pnpm
pnpm add @renderize/lib

# Using npm
npm install @renderize/lib

# Using Yarn
yarn add @renderize/lib
```

Ensure you are using Node.js version `>=20.0.0` as specified in the `engines` field.

## Usage

### Creating a Client

You'll need an API key to authenticate requests to the Renderize API. If you don't have one yet, you can sign up for a free account at [Renderize](https://app.renderize.tech/).

Start by creating a client instance using your API key. The `createClient` function accepts an optional `baseApiUrl` parameter, defaulting to the Renderize API base URL.

```typescript
import { createClient } from '@renderize/lib';

const client = createClient({ apiKey: 'your-api-key' });
```

### Rendering a PDF

Use the `renderPdf` method to generate a PDF from an HTML string. Customize the PDF's format, orientation, and margins as needed.

```typescript
const pdfBuffer = await client.renderPdf({
  html: '<h1>Hello, World!</h1>',
  format: 'a4', // Optional: 'letter', 'legal', etc.
  orientation: 'portrait', // Optional: 'landscape' or 'portrait'
  margin: { top: 10, bottom: 10, left: 10, right: 10 }, // Optional
  responseType: 'arrayBuffer', // Optional: 'stream', 'blob', or 'arrayBuffer'
});

// Do something with the PDF buffer (e.g., write to a file)
await writeFile('output.pdf', Buffer.from(pdfBuffer));
```

## API Reference

### `createClient`

Creates an instance of the Renderize client.

#### Parameters

- `apiKey` (string): Your API key for authenticating requests.
- `baseApiUrl` (string, optional): Base URL for the Renderize API. Defaults to `https://rndz.tech`.

#### Returns

An object containing methods for interacting with the Renderize API.

---

### `renderPdf`

Renders a PDF from the provided HTML content.

#### Parameters

- `html` (string): The HTML string to render.
- `format` (string, optional): PDF format (e.g., 'letter', 'a4'). Defaults to `a4`.
- `orientation` (string, optional): Page orientation (`'portrait'` or `'landscape'`). Defaults to `'portrait'`.
- `margin` (object, optional): Margins for the PDF (in points). Keys: `top`, `right`, `bottom`, `left`.
- `responseType` (string, optional): Response type (`'stream'`, `'blob'`, or `'arrayBuffer'`). Defaults to `'arrayBuffer'`.

#### Returns

A promise that resolves to the PDF in the requested format.

---

## License

This SDK is licensed under the [MIT License](./LICENSE).
