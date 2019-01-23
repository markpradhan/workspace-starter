/* Makes it possible for typescript to load json files */
declare module '*.json' {
  const value: any
  export default value
}

/* Makes it possible for typescript to load graphql files */
declare module '*.graphql' {
  const value: any
  export default value
}

/* Global variables to allow tree shaking in webpack */
declare const __ENV_PROD__: boolean
declare const __ENV_DEV__: boolean
declare const __ENV_TEST__: boolean
declare const __ENV_STAGE__: boolean
declare const __ENV_SSR__: boolean
