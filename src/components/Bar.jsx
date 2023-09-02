import React from 'react'
import { useTheme } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import { tokens } from '../theme'
import { mockBarData as data } from '../data/mockData'

const BarChart = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <ResponsiveBar
        data={data}
        theme={{
          // added
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
            title: {
              text: {
                fill: colors.grey[100]
              }
          },
          },
          annotations: {
            text: {
              fill: colors.grey[100]
            }
          },
          tooltip: {
            container:{
              color: colors.grey[600]
            }
          }
        }}
        keys={[
            'Logistics',
            'Transporter Times',
            'AirPair',
            'Logistics News',
            'CargoWorld',
            'HellyBerry',
            'Gazette',
            'Transit',
            'Today Transit',
            'Railways',
            'Logistics Insight',
            'Step Walk',
            'Logistics Insights',
            'Cargo Connect',
            'Berqyt',
            'Shipping Gazette',
            'Coffee and Transit',
            'Logistics Today',
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.6'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Страна',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Статьи',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={14}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.5'
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    /> 
  )
}

export default BarChart