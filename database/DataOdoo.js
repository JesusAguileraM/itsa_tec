import Odoo from 'react-native-odoo-promise-based'

/* Create new Odoo connection instance */
const odoo = new Odoo({
    host: 'siit.itsa.edu.mx',
    port: 80, /* Defaults to 80 if not specified */
    database: 'itsa900',
    username: 'xmlrpc_alumnos', /* Optional if using a stored session_id */
    password: 'rpc123', /* Optional if using a stored session_id */
    sid: 'YOUR_SESSION_ID', /* Optional if using username/password */
    protocol: 'https' /* Defaults to http if not specified */

})

odoo.connect()
.then(  response => { console.log('correcto');   })
.catch(e => { console.log(e) })


export default odoo;