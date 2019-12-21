import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const HTML_DIV_MAP_ID = 'map';

const customMap = new CustomMap(HTML_DIV_MAP_ID);
const user = new User();
const company = new Company();

customMap.addMarker(user.location, `${user.name} is living here !`);
customMap.addMarker(company.location, `${company.name} company is located here !`);



