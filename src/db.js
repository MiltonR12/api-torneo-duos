import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'aws.connect.psdb.cloud',
  port: 3306,
  user: 'rcw79qpq71i83v9vunhb',
  password: 'pscale_pw_5Kyl03imEOca07cgSW1JxSwJR2FHgLUDSlEqBFg6SpH',
  database: 'torneos',
  ssl: {
    verifyIdentity: true
  }
})