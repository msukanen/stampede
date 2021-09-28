import Stamp from './Stamp'

let _stampCollection = undefined

export function initDataManager() {
    _stampCollection = []
}

export const stampCollection = () => {return _stampCollection}
