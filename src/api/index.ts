export * from './model'
import { ServiceApi } from './ServiceApi'

const rootUrl: string = process.env['REACT_APP_SERVICE_ROOT'] as string
console.log('instantiating services at root url', rootUrl)
const ServiceApiInstance = new ServiceApi(rootUrl)
export default ServiceApiInstance
