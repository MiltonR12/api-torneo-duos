import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'aws.connect.psdb.cloud',
  port: 3306,
  user: 'anc8weux11y3njy0ha8m',
  password: 'pscale_pw_ngzo6mJXQfrhIxh3pgSjT8tPb3BzJyY4PXAa8OaZaqR',
  database: 'torneos',
  ssl: {
    verifyIdentity: true
  }
})