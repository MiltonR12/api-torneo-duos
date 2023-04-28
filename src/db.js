import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'aws.connect.psdb.cloud',
  port: 3306,
  user: 'l4lknzs9nee7yt859as0',
  password: 'pscale_pw_AL2Hig1A913y3eBMsJWH5zms3fyWW35W7W467pv8WEO',
  database: 'torneos',
  ssl: {
    verifyIdentity: true
  }
})