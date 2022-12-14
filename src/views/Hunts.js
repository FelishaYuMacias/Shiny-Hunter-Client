import { useEffect, useState } from 'react'
import API from '../util/API'
import Card from '../components/Card'

const Hunts = () => {

  const [hunts, setHunts] = useState(null)

  useEffect(() => {
    API.getHunts().then(res => {
      setHunts(res)
    })
  }, [])

  if (!hunts) return null

  return (
    <>
      {hunts.map((data) => {
        if (data) {
          return (
            <div className='row'>
              <div className='column'>
                <div className="nes-container is-rounded">
                  <Card hunt={data} />
                </div>
              </div>
            </div>
          )
        }
      })}
    </>

  )
}

export default Hunts