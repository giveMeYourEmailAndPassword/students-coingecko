/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COINGECKO_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
