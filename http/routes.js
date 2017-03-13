import User from './controllers/UserController'
import AuthMiddleware from './middleware/AuthMiddleware'

module.exports = (router) => {
  router.post('/user/create', User.create)
  router.get('/user/:id', User.findOne)
  router.put('/user/:id', AuthMiddleware, User.updateUser)
  router.put('/user/:id/profile', AuthMiddleware, User.updateProfile)
  router.put('/user/:id/password', AuthMiddleware, User.updatePassword)
}
