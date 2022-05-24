export const idlFactory = ({ IDL }) => {
  const Claim = IDL.Record({
    'cause' : IDL.Text,
    'isActive' : IDL.Int,
    'hospitalName' : IDL.Text,
    'amount' : IDL.Int,
  });
  const Insurance = IDL.Record({
    'deductible' : IDL.Int,
    'isActive' : IDL.Int,
    'coinsurance' : IDL.Int,
    'companyName' : IDL.Text,
  });
  return IDL.Service({
    'addClaim' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Int],
        [],
        ['oneway'],
      ),
    'addUser' : IDL.Func([IDL.Text], [], ['oneway']),
    'buyInsurance' : IDL.Func(
        [IDL.Text, IDL.Int, IDL.Int, IDL.Text],
        [],
        ['oneway'],
      ),
    'getClaim' : IDL.Func([IDL.Text], [Claim], ['query']),
    'getInsurance' : IDL.Func([IDL.Text], [Insurance], ['query']),
    'hasClaimed' : IDL.Func([IDL.Text], [IDL.Int], ['query']),
    'hasInsurance' : IDL.Func([IDL.Text], [IDL.Int], ['query']),
    'removeClaim' : IDL.Func([IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
