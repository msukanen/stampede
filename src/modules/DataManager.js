import Stamp from './Stamp'
import { testData } from './Stamp.test-data'

let _stampCollection = undefined

export function initDataManager(dataSource) {
    _stampCollection = [];
    (dataSource ? dataSource : testData).map(entry => _stampCollection.push(new Stamp(entry)) )
}

export function stampCollection() {
    if (!_stampCollection)
        initDataManager( testData )
    return _stampCollection
}
