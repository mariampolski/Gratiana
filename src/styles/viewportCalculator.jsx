import { theme } from "./theme"

function ViewportCalculator(size, device) {
    if (theme.breakpoints.hasOwnProperty(device)) {
        return (size / theme.breakpoints[device]) * 100 + "vw"
    } else {
        return 0
    }
}

export default ViewportCalculator
