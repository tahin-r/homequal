import { Grid, List, ListItem, ListItemAvatar, Typography } from "@mui/material"
import styled                                               from "styled-components"
import { CenteredTypography, ItalicTypography, QualButton } from "../../../../shared/styles"
import doneArrow                                            from "../../../../assets/images/doneArrow.svg"
import { useNavigate }                                      from "react-router-dom"

const ListIcon = styled(({ ...props }) => <div { ...props } />)`
  border-radius   : 50%;
  min-width       : 50px;
  min-height      : 50px;
  max-width       : 70px;
  max-height      : 70px;
  width           : 10vw;
  height          : 10vw;
  background      : transparent url(${ doneArrow }) 100% 100%;
  background-size : cover;
`
const advantages = [
  "Find out what you need to qualify for a mortgage",
  "See what you can afford",
  "Discover any cash refunds you may qualify for",
  "Start looking for a new home!",
  "It’s completely FREE!",
]

export const ReadyToGetATry = () => {
  const navigate = useNavigate()

  return (
    <Grid sx={ { padding: "40px" } }>
      <CenteredTypography variant="h4">
        Ready to Give it a Try?
      </CenteredTypography>
      <ItalicTypography variant="h5">
        In less than two minutes:
      </ItalicTypography>

      <Grid container justifyContent="center">
        <List sx={ { width: "100%", maxWidth: 800 } }>
          { advantages.map((item, index) => (
            <ListItem key={ index }>
              <ListItemAvatar sx={ { marginRight: "1vw" } }>
                <ListIcon/>
              </ListItemAvatar>
              <Typography variant="h6">{ item }</Typography>
            </ListItem>
          )) }
        </List>
      </Grid>

      <Grid container justifyContent="center" my={2}>
        <QualButton sx={ { borderRadius: "30px" } } onClick={ () => console.log('clicked') }>
          <Typography variant='h5'>Give it a Try!</Typography>
        </QualButton>
      </Grid>
    </Grid>
  )
}
