import { ServiceApi } from './ServiceApi'

const rootUrl: string = process.env['REACT_APP_SERVICE_ROOT'] || ''
console.log('instantiating services at root url', rootUrl)
export const ServiceApiInstance = new ServiceApi(rootUrl)
