import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

interface ISuccessButton {
    title: string;
    link: string;
}
export const SuccessButton: React.FC<ISuccessButton> = ({ title, link }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(link)
  }

  return (
    <>
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ccc',
          padding: '10px 0',
          marginBottom: '10px',
          cursor: 'pointer'
        } }
        color="#ccc"
        onClick={handleClick}
      >
        <Typography variant="h5" sx={ { padding: '0 50px' } } textAlign="center" color="primary">
          { title }
        </Typography>
        <ArrowForwardIosOutlinedIcon sx={ { color: '#999', height: '34px', width: '46px', position: 'absolute', right: '5%' } }/>
      </Box>
    </>
  )
}
