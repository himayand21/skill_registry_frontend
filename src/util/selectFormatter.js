const selectFormatter = ({list, label, value}) => {
    return list.map(element => {
        return {
            value: element[value],
            label: element[label]
        }
    })
}

export default selectFormatter;