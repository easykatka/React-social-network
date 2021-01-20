
export const dateHelper = (date) =>{
const currentDate = new Date().toISOString().substring(0, 10);
const yesterdayDate = new Date(Date.now()-86400000).toISOString().substring(0, 10)

const visibleDate = 
date.substring(0, 10) === currentDate ?
 'today ' + date.substr(11, 5)
 : 
 date.substring(0, 10) === yesterdayDate ?
 'yesterday ' + date.substr(11, 5)
 :
 date.substr(0, 10).replaceAll('-', '/');

return visibleDate
}