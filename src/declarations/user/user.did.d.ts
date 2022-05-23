import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addClaim' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
    ) => Promise<undefined>,
  'addUser' : (arg_0: string) => Promise<undefined>,
  'buyInsurance' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
    ) => Promise<undefined>,
  'getClaim' : (arg_0: string) => Promise<string>,
  'getInsurance' : (arg_0: string) => Promise<string>,
  'hasClaimed' : (arg_0: string) => Promise<bigint>,
  'hasInsurance' : (arg_0: string) => Promise<bigint>,
  'removeClaim' : (arg_0: string) => Promise<undefined>,
}
