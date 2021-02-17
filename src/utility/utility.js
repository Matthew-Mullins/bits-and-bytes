const CURRENCY_SUFFIX = {
    THOUSAND:   10 ** 3,
    MILLION:    10 ** 6,
    BILLION:    10 ** 9,
    TRILLION:   10 ** 12,
    QUADRILLION:10 ** 15,
    QUINTILLION:10 ** 18,
    SEXTILLION: 10 ** 21,
    SEPTILLION: 10 ** 24,
    OCTILLION:  10 ** 27,
    NONILLION:  10 ** 30,
    DECILLION:  10 ** 33
}

export function truncateCurrency(value) {
    let result = 0
    let suffix = ''
    let prev_suffix = ''
    for (let key in CURRENCY_SUFFIX) {
        if (value < CURRENCY_SUFFIX[key]) {
            result = value / (CURRENCY_SUFFIX[key] / 1000)
            suffix = prev_suffix
            break
        }
        prev_suffix = key
    }
    let tuple = Object.freeze({value: result, suffix: suffix})
    return tuple
}

export function truncateStorage(value) {
    return
}

export function toHourMinSec(time_ms) {
    let hour = 0
    let mins = 0
    let secs = 0

    hour = Math.floor(time_ms / (3.6 * (10 ** 6)))
    let hour_r = time_ms % (3.6 * (10 ** 6))

    mins = Math.floor(hour_r / (60000))
    let mins_r = hour_r % 60000

    secs = Math.ceil(mins_r / (1000))

    let output = String(hour).padStart(2, '0') + ':' + String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0')

    return output
}

export function getCost(quantity, curr_cost, coefficient) {
    let new_cost = curr_cost
    for (let i = 0; i < quantity - 1; i++) {
        new_cost *= coefficient
    }
    return new_cost
}