export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addClaim' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'addUser' : IDL.Func([IDL.Text], [], ['oneway']),
    'buyInsurance' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'getClaim' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'getInsurance' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'hasClaimed' : IDL.Func([IDL.Text], [IDL.Int], ['query']),
    'hasInsurance' : IDL.Func([IDL.Text], [IDL.Int], ['query']),
    'removeClaim' : IDL.Func([IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
