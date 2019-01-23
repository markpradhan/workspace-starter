// ----------------------------------------------------------------------------
// Env
export const isDevEnv: boolean = process.env.NODE_ENV === 'development'
export const isProdEnv: boolean = process.env.NODE_ENV === 'production'
export const isStageEnv: boolean = process.env.NODE_ENV === 'staging'
export const isTestEnv: boolean = process.env.NODE_ENV === 'test'
export const isSSREnv: boolean = !!process.env.SSR_ENV
