export interface IEnvironmentStore {
    [key: string]: string | undefined;
    NODE_ENV?: string;
}

export interface IEnv {
    [key: string]: any;
}
