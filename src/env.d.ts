/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_UNLOCK_ALL_BOXES: string
  readonly VITE_START_DATE: string
  readonly VITE_END_DATE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
