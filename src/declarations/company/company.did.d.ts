import type { Principal } from '@dfinity/principal';
export interface ClaimReturn { 'name' : string, 'time' : bigint }
export interface Insurance {
  'deductible' : bigint,
  'coinsurance' : bigint,
  'companyName' : string,
}
export interface _SERVICE {
  'addClaim' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'addCompany' : (arg_0: string) => Promise<undefined>,
  'addPolicy' : (arg_0: string, arg_1: bigint, arg_2: bigint) => Promise<
      undefined
    >,
  'addVerifiedClaim' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: string,
    ) => Promise<undefined>,
  'firstVerifiedClaim' : (arg_0: string, arg_1: bigint) => Promise<ClaimReturn>,
  'getAllPolicies' : () => Promise<Array<Insurance>>,
  'getClaim' : (arg_0: string) => Promise<string>,
  'getPolicies' : (arg_0: string) => Promise<Array<Insurance>>,
  'removeClaim' : (arg_0: string) => Promise<undefined>,
  'removePolicy' : (arg_0: string, arg_1: bigint) => Promise<undefined>,
  'removeVerifiedClaim' : (arg_0: string, arg_1: bigint) => Promise<undefined>,
}
