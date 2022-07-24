import { makeStyles } from '@material-ui/core'
import { NextPage } from 'next'

// Internal Component(s)
import Navigations from '../components/Navigations'
import DarkTheme from '../Theme/DarkTheme'


// Styles
const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: '100vh',
  }
})

// Dummy data
const navigationsItems = [
  {label: 'Home', redirect: '#home', ariaLabel: 'Click to be redirected to the homepage'},
  {label: 'Projects', redirect: '#projects', ariaLabel: 'Click to be redirected to the projects section'},
]

const Home: NextPage = () => {
  const { container } = useStyles()

  return (
    <div className={container}>
      <Navigations navigationsItems={navigationsItems}/>
      Hello World
    </div>
  )
}

export default Home
