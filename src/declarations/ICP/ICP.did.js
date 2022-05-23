export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get' : IDL.Func([], [IDL.Int], []),
    'topUp' : IDL.Func([IDL.Int], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
