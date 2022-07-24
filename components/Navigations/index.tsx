import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

// Styles
const useStyles = makeStyles({
	navigationsContainer: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		display: 'flex',
		flexDirection: 'column',
		width: '50px',
	},

	navigationsItem: {
		display: 'flex',
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginBottom: '10px',    

    '& > span': {
      display: 'none',
    },

    '&:hover': {
      '& > span': {
        display: 'block',
      },
    },
	},
})

// Types
type NavigationsItem = {
	label: string
	redirect: string
	ariaLabel: string
}

type NavigationsProps = {
  navigationsItems: Array<NavigationsItem>
}

const Navigations: FunctionComponent<NavigationsProps> = ({
  navigationsItems
}) => {
	const { navigationsContainer, navigationsItem } = useStyles()

	return (
		<nav className={navigationsContainer}>
			{navigationsItems && navigationsItems.map(({ label, redirect, ariaLabel }) => (
				<a href={redirect} className={navigationsItem} role="button" aria-label={ariaLabel} key={label}>
					<ChevronRightIcon />
					<span>{label}</span>
				</a>
			))}
		</nav>
	)
}

export default Navigations
