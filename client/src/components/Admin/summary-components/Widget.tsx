import styled from 'styled-components'
import { HTMLAttributes } from 'react'

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  color: string
  bgcolor: string
}

interface WidgetData {
  bgcolor: string
  color: string
  digits: number
  icon: React.ReactNode
  isMoney: boolean
  percentage: number
  title: string
}

type WidgetProps = {
  data: WidgetData
}

interface PercentageProps extends HTMLAttributes<HTMLDivElement> {
  isPositive: boolean
}

const Widget = ({ data }: WidgetProps) => {
  return (
    <>
      <StyledWidget>
        <Icon color={data.color} bgcolor={data.bgcolor}>
          {data.icon}
        </Icon>
        <Text>
          <h3>
            {data.isMoney
              ? '$' + data.digits?.toLocaleString()
              : data.digits?.toLocaleString()}
          </h3>
          <p>{data.title}</p>
        </Text>
        {data.percentage < 0 ? (
          <>
            <Percentage isPositive={false}>
              {Math.floor(data.percentage) + '%'}
            </Percentage>
          </>
        ) : (
          <>
            <Percentage isPositive={true}>
              +{Math.floor(data.percentage) + '%'}
            </Percentage>
          </>
        )}
      </StyledWidget>
    </>
  )
}

export default Widget

const StyledWidget = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div<IconProps>`
  margin-right: 0.5rem;
  padding: 0.5rem;
  color: ${({ color }) => color};
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 3px;
  font-size: 20px;
`

const Text = styled.div`
  h3 {
    font-weight: 900;
  }
  p {
    font-size: 14px;
    color: rgba(234, 234, 255, 0.68);
  }
`
const Percentage = styled.div<PercentageProps>`
  margin-left: 0.5rem;
  font-size: 14px;
  color: ${({ isPositive }) =>
    isPositive ? 'rgb(114, 225, 40)' : 'rgb(255, 77, 73)'};
`
