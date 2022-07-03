export default (context, inject) => {
  inject('onlyUnique', (value, index, self) => {
    return self.indexOf(value) === index
  })

  inject('countOccuranceInArray', (array, name) => {
    var count = 0

    array.forEach((e) => {
      if (e == name) count++
    })

    return { title: name, occurances: count }
  })

  inject('Rtable', (data) => {
    const table = []
    let titleNames = data.filter(context.$onlyUnique)

    titleNames.forEach((titleName) => {
      if (titleName != undefined) {
        table.push(context.$countOccuranceInArray(data, titleName))
      }
    })

    return table
  })
}
