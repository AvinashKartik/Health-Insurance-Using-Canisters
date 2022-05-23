import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addClaim' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'addCompany' : (arg_0: string) => Promise<undefined>,
  'addVerifiedClaim' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: string,
    ) => Promise<undefined>,
  'firstVerifiedClaim' : (arg_0: string, arg_1: bigint) => Promise<string>,
  'getClaim' : (arg_0: string) => Promise<string>,
  'removeClaim' : (arg_0: string) => Promise<undefined>,
  'removeVerifiedClaim' : (arg_0: string, arg_1: bigint) => Promise<undefined>,
}
