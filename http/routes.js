import User from './controllers/UserController'
import AuthMiddleware from './middleware/AuthMiddleware'

module.exports = (router) => {
  router.post('/api/v1/users', User.create)
  router.get('/api/v1/users/:id', User.findOne)
  router.put('/api/v1/users/:id', AuthMiddleware, User.updateUser)
  router.put('/api/v1/users/:id/profile', AuthMiddleware, User.updateProfile)
  router.put('/api/v1/users/:id/password', AuthMiddleware, User.updatePassword)
}
