import { ServiceApi } from './ServiceApi'
export * from './model'

const rootUrl: string = process.env['REACT_APP_SERVICE_ROOT'] || ''
console.log('instantiating services at root url', rootUrl)
const ServiceApiInstance = new ServiceApi(rootUrl)
export default ServiceApiInstance
