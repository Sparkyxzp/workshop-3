import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const roleRoutes = new Hono()

roleRoutes.get('/', (c) => {
  return c.json({ message: 'List of Role' })
})


export default roleRoutes ;