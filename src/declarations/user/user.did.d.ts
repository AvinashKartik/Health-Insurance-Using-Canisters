import type { Principal } from '@dfinity/principal';
export interface Claim {
  'cause' : string,
  'isActive' : bigint,
  'hospitalName' : string,
  'amount' : bigint,
}
export interface Insurance {
  'deductible' : bigint,
  'isActive' : bigint,
  'coinsurance' : bigint,
  'companyName' : string,
}
export interface _SERVICE {
  'addClaim' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: bigint,
    ) => Promise<undefined>,
  'addUser' : (arg_0: string) => Promise<undefined>,
  'buyInsurance' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: string,
    ) => Promise<undefined>,
  'getClaim' : (arg_0: string) => Promise<Claim>,
  'getInsurance' : (arg_0: string) => Promise<Insurance>,
  'hasClaimed' : (arg_0: string) => Promise<bigint>,
  'hasInsurance' : (arg_0: string) => Promise<bigint>,
  'removeClaim' : (arg_0: string) => Promise<undefined>,
}
