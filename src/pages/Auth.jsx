import { Typography } from '@mui/material'
import React from 'react'
import { Form } from '../components/auth/Form'
import Section from '../composables/Section'
import Title from '../composables/Title'

const Auth = () => {
  return (
    <Section >
      <Title title='Вход в кабинет покупателя'/>
      <Form />
    </Section>
  )
}

export default Auth