import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  return (
    <Drawer
        anchor='left'
        open={ true }
        onClose={ () => console.log('cerrando')}
    >
        <Box sx={{ width: 250 }}>

            <Box sx={{ padding: '5px 10px' }}>
                <Typography variant='h4'>Menu</Typography>
            </Box>

            <List>
                { 
                    menuItems.map((text, index) => (
                        <ListItem button key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={ text }/>
                        </ListItem>
                    ))
                }
            </List>

            <Divider />

        </Box>
    </Drawer>
  )
}
