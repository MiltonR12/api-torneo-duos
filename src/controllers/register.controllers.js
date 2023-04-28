import { pool } from "../db.js";

export const getDuos = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM duos')
  res.json(result)
}

export const addDuo = async (req, res) => {

  const { nameTeam, numberTeam, playerOne, playerTwo } = req.body
  const position = 0;
  const phase = 0;
  try {
    const [result] = await pool.query('INSERT INTO duos ( nameTeam, numberTeam, playerOne, playerTwo, position, phase ) VALUES (?,?,?,?,?,?)', [nameTeam, numberTeam, playerOne, playerTwo, position, phase])
    res.json({
      id: result.insertId,
      nameTeam, numberTeam, playerOne, playerOne, position, phase
    })
  } catch (error) {
    return res.json({
      message: error
    })
  }
}

export const deleteDuo = async (req, res) => {
  const { id } = req.params
  try {
    const [result] = await pool.query('DELETE FROM duos WHERE id = ?', [id])
    if (result.affectedRows == 0) {
      return res.status(404).json({ message: 'No se encontro el duo' })
    }
    res.sendStatus(204)
  } catch (error) {
    return res.json({
      message: error
    })
  }
}

export const updateDuo = async (req, res) => {
  const { id } = req.params
  try {
    const [result] = await pool.query('UPDATE duos SET ? WHERE id = ?', [req.body, id])
    if (result.affectedRows == 0) {
      return res.status(500).json({message: 'No se encontro el duo'})
    }
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json(error)
  }

}