import { URLSearchParams } from "url"

export const getParams = (parameter: string) => {
    const params = new URLSearchParams(parameter);
    return params;
}