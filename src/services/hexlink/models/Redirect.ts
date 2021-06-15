/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Code } from './Code';
import type { URL } from './URL';

export type Redirect = {
    id: string;
    redirectCode: Code;
    url: URL;
    timeCreated: string;
    hits: number;
}
