const { Router } = require('express')
const { 
    userGET, 
    userPOST, 
    userPUT, 
    userDELETE 
} = require('../controllers/user.controller')

const router = Router()


router.get('/', userGET )

router.post('/', userPOST )

router.put('/:id', userPUT )

router.delete('/:id', userDELETE )


module.exports = router