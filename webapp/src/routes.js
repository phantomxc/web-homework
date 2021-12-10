import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { useTheme } from '@emotion/react'

import { Dashboard } from 'src/dashboard'
import { Transactions } from 'src/transactions'

import { Nav } from 'src/components/navigation/Nav'

import ROUTES from 'src/constants/Routes'

function AppRouter () {
  const theme = useTheme()

  return (
    <Router>
      <Nav />
      <main className='main-content' css={contentStyle(theme)}>
        <Route component={Dashboard} exact path={ROUTES.DASHBOARD} />
        <Route component={Transactions} path={ROUTES.TRANSACTIONS} />
      </main>
    </Router>
  )
}

export default AppRouter

const contentStyle = theme => css`
  padding: ${theme.spacing.large};
  padding-top: 24px;
`
