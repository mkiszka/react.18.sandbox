
// export function createNamedWrapperReducer(reducerOptionsArg, reducerNameSuffixArg) {    
//     const reducerOptions = { ...reducerOptionsArg, name: reducerOptionsArg.name + reducerNameSuffixArg }
//     const reducerFunction = createSlice(reducerOptions);
    
//     return (state, action) => {
//         const { name } = action
//         const isInitializationCall = state === undefined
//         if (name !== reducerOptions.name && !isInitializationCall) return state

//         return reducerFunction(state, action)
//     }
// }
export function createNamedWrapperReducer(reducerFunction, reducerName) {
   // debugger;
    return (state, action) => {
    //   debugger;
      const { name } = action
      const isInitializationCall = state === undefined
      if (name !== reducerName && !isInitializationCall) return state
  
      return reducerFunction(state, action)
    }
  }