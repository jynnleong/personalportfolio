import { createStyles, makeStyles, Theme } from '@material-ui/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  }
})

const Home: NextPage = () => {
  const { container } = useStyles()

  return (
    <div className={container}>
      Hello World
    </div>
  )
}

export default Home
