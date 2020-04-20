function parseFormData(form) {
    const formData = {}
    new FormData(form).forEach((value, key) => {
      formData[key] = value
    })
    return formData 
}

export default parseFormData