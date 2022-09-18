import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: {sx: 'column', md: 'row'}
      }}
    >
      <Box
        sx={{
          height: {sx: 'auto', md: '92vh'},
          borderRight: '1px solid #3d3d3d',
          px: {sx: 0, md: 2}
        }}
      >
        sidebar
        <Typography 
          className='copyright'
          variant='body2'
          sx={{
            mt: 1.5, color: '#fff',
          }}
        >
          Copyright © 2022 Samael_Marjan
        </Typography>
      </Box>
      <Box 
        p={2}
        sx={{
          overflowY: 'auto', height: '90vh', flex: 2
        }}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{color: 'white'}}
        >
          <span>Videos</span>
        </Typography>
        videos
      </Box>
    </Stack>
  )
}

export default Feed