import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addClaim' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'addHospital' : (arg_0: string) => Promise<undefined>,
  'getClaim' : (arg_0: string) => Promise<string>,
  'removeClaim' : (arg_0: string) => Promise<undefined>,
}
