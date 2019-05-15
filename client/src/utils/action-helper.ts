interface asyncActionType {
    request: string,
    success: string,
    failure: string
}

function makeAsyncActionTypes(prefix: string, action: string): asyncActionType {
  return {
      request: `${prefix}_${action}_REQUEST`,
      success: `${prefix}_${action}_SUCCESS`,
      failure: `${prefix}_${action}_FAILURE`
  }
}

export default {
  makeAsyncActionTypes
}