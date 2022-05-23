export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addClaim' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'addCompany' : IDL.Func([IDL.Text], [], ['oneway']),
    'addVerifiedClaim' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Nat, IDL.Text],
        [],
        ['oneway'],
      ),
    'firstVerifiedClaim' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text], ['query']),
    'getClaim' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'removeClaim' : IDL.Func([IDL.Text], [], ['oneway']),
    'removeVerifiedClaim' : IDL.Func([IDL.Text, IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
