export const _convertDate = (dateString) => {
    const dateObj = new Date(dateString);
    const month = _getMonth(dateObj.getMonth())
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const termination = _getDayTermination(dateObj.getDate());
    const reg = new RegExp(/(?<= )(\d*):(\d*):\d* (\D*)/gm)
    console.log(dateObj.toLocaleString('en-US'))
    const time = reg.exec(dateObj.toLocaleString('en-US'));
    const hour = time[1]
    const minutes = time[2]
    const timePeriod = time[3]
    return `${month} ${day}${termination}, ${year}, ${hour}:${minutes} ${timePeriod}`
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const _getMonth = (monthNumber) => {
    return !!months[monthNumber] && months[monthNumber] ? months[monthNumber] : null
}

const _getDayTermination = (dayNumber) => {
    switch(dayNumber) {
        case 1:
            return "st"
        case 2:
            return "nd"
        case 3:
            return "rd"
        default:
            return "th"
    }
}