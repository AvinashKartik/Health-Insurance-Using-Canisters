import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'get' : () => Promise<bigint>,
  'topUp' : (arg_0: bigint) => Promise<undefined>,
}
