const uploadGroup = (group) => {
  // mock server response
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(group)
      }
    , 1000)
  })
}

const createNewField = (newFieldForm) => {
  // mock server response
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(newFieldForm)
      }
    , 1000)
  })
}

export { uploadGroup, createNewField }
