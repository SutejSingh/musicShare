

export const getGreeting = () => {
    var greeting = "Afternoon"
    // get time in local time zone and change greeting accordingly
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Morning"
    } else if (time < 18) {
        greeting = "Afternoon"
    } else {
        greeting = "Evening"
    }
    return greeting
}