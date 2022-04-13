import React, { FC } from 'react'
import { basicData } from '../shared'
import { Wrapper }   from '../../Wrapper'
import { Grid, Typography } from '@mui/material'
import { PieChart }         from 'react-minimal-pie-chart'

export const CreateDiagramQuestion: FC<basicData> = ({
  question,
  setCurrentQuestionHandler,
  next,
  formik,
  current,
}) => {
  const totalIncome = Number(formik.values.monthly_income) + Number(formik.values.co_monthly_income)
  const totalExpenses = Number(formik.values.auto_expense) +
    Number(formik.values.credit_card_expense) +
    Number(formik.values.student_loans) +
    Number(formik.values.other_expenses) +
    Number(formik.values.co_auto_expense) +
    Number(formik.values.co_credit_card_expense) +
    Number(formik.values.co_student_loans) +
    Number(formik.values.co_other_expenses)

  const ratio = Math.ceil(totalExpenses / totalIncome * 100)

  const pieData = [
    {
      title: 'Monthly Income',
      value: totalIncome,
      color: '#676dde',
    },
    {
      title: 'Monthly expenses',
      value: totalExpenses,
      color: '#d55854',
    },
  ]

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             question={ question }
             formik={ formik }
             current={ current }>
      <Grid container direction="column" wrap="nowrap" alignItems="center" sx={ { marginTop: '30px', height: '100%' } }>
        <Typography variant="h6" component="span" sx={ {
          padding: '10px', backgroundColor: 'rgba(29,106,141,0.63)', width: 'auto', color: 'white',
        } }> Debt to Income Ratio </Typography>

        <Grid container position={ 'relative' } sx={ { maxWidth: '250px' } }>
          <PieChart startAngle={ 270 }
                    paddingAngle={ 2 }
                    data={ pieData }
                    lineWidth={ 20 }
                    label={ (item) => item.dataIndex === 0 ? `${ ratio }%` : null }
                    labelPosition={ 0 }
                    labelStyle={ { fill: '#676dde', fontSize: '13px', fontWeight: 'bold' } }
                    radius={ PieChart.defaultProps.radius - 20 }/>
        </Grid>

        <Grid direction="column" width="70%" container maxWidth={ 400 }>
          <Grid container justifyContent="space-between" wrap={ 'nowrap' } mb={ 2 }>
            <Typography variant="h6">Monthly Income</Typography>
            <Typography variant="h6" sx={ {
              minWidth: '70px', padding: '5px', bgcolor: '#676dde', color: 'white', textAlign: 'right',
            } }>{ totalIncome }</Typography>
          </Grid>

          <Grid container justifyContent="space-between" wrap={ 'nowrap' }>
            <Typography variant="h6" justifyContent="space-between"> Monthly Expenses</Typography>
            <Typography variant="h6" sx={ {
              minWidth: '70px', padding: '5px', bgcolor: '#d55854', color: 'white', textAlign: 'right',
            } }>{ totalExpenses }
            </Typography>

          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}