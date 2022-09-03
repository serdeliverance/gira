import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

interface Props {
    title?: string
    children: ReactNode
}

export const Layout: FC<Props> = ({ title = 'Gira', children}) => {
  return (
    <Box sx={{ flexFlow: 1}}>
        <Head>
            <title>{ title }</title>
        </Head>

        

        <Box sx={{ padding: '10px 20px' }}>
            { children }
        </Box>
    </Box>
  )
}
