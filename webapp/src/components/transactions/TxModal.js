import React from 'react'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import { useTokens } from '@kyper/tokenprovider'
import { Button } from '@kyper/button'
import { useMutation } from '@apollo/client'

import GetTransactions from 'src/gql/transactions.gql'
import CreateTransaction from 'src/gql/CreateTransaction.gql'
// const { loading, error, data = {} } = useQuery(GetTransactions)
import ROUTES from 'src/constants/Routes'

export function TxModal (props) {
  const navigate = useNavigate()
  const tokens = useTokens()
  const styles = getStyles(tokens)
  const [createTransaction, { data, loading, error }] = useMutation(CreateTransaction, {
    refetchQueries: [
      { query: GetTransactions }
    ]
  })

  return (
    <Modal isOpen
      onRequestClose={() => {
        navigate(ROUTES.TRANSACTIONS)
      }}
      style={styles}
    >
      <Button onClick={() => {
        createTransaction({ variables: {
          description: 'WOOT',
          date: '2021-01-01',
          debit: false,
          credit: true,
          amount: 71,
          merchant_id: '0a5119de-fae0-4560-afbe-5a7675b655bb',
          user_id: '2b7076b5-ba6b-46fc-9b5f-74109b1b4e2c'
        } })
      }}>
        Add
      </Button>
    </Modal>
  )
}

const getStyles = tokens => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    background: tokens.Color.Neutral900,
    border: 'none',
    top: 80,
    left: 80,
    right: 80,
    bottom: 80,
    padding: tokens.Spacing.XLarge
  }
})