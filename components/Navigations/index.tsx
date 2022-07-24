import React, { FunctionComponent, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

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
      transform: 'translateY(-10%)',
      transition: 'all 0.3s ease-in',
      marginLeft: '4px',
    },

    '& > svg': {
      fill: '#2b2a2a',

      '&:hover': {
        fill: '#a1e39f',

        '& + span': {
          display: 'block',
          transform: 'translateY(0)',
        },
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
  // Classes
	const { navigationsContainer, navigationsItem } = useStyles()

  // Hook
  const [selectedIndex, setSelectedIndex] = useState<number>()

	return (
		<nav className={navigationsContainer}>
			{navigationsItems && navigationsItems.map(({ label, redirect, ariaLabel }, index) => (
				<a
          href={redirect}
          className={navigationsItem}
          role="button"
          aria-label={ariaLabel}
          key={label}
          onClick={() => setSelectedIndex(index)}
        >
          { index === selectedIndex ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon /> }
					<span>{label}</span>
				</a>
			))}
		</nav>
	)
}

export default Navigations
