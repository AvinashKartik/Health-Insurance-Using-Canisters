export const idlFactory = ({ IDL }) => {
  const ClaimReturn = IDL.Record({ 'name' : IDL.Text, 'time' : IDL.Int });
  const Insurance = IDL.Record({
    'deductible' : IDL.Int,
    'coinsurance' : IDL.Int,
    'companyName' : IDL.Text,
  });
  return IDL.Service({
    'addClaim' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'addCompany' : IDL.Func([IDL.Text], [], ['oneway']),
    'addPolicy' : IDL.Func([IDL.Text, IDL.Int, IDL.Int], [], ['oneway']),
    'addVerifiedClaim' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Nat, IDL.Text],
        [],
        ['oneway'],
      ),
    'firstVerifiedClaim' : IDL.Func(
        [IDL.Text, IDL.Nat],
        [ClaimReturn],
        ['query'],
      ),
    'getAllPolicies' : IDL.Func([], [IDL.Vec(Insurance)], ['query']),
    'getClaim' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'getPolicies' : IDL.Func([IDL.Text], [IDL.Vec(Insurance)], ['query']),
    'removeClaim' : IDL.Func([IDL.Text], [], ['oneway']),
    'removePolicy' : IDL.Func([IDL.Text, IDL.Nat], [], ['oneway']),
    'removeVerifiedClaim' : IDL.Func([IDL.Text, IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
