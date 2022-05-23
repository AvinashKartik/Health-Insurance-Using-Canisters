export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addClaim' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'addHospital' : IDL.Func([IDL.Text], [], ['oneway']),
    'getClaim' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'removeClaim' : IDL.Func([IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
