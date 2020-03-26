import styled from '@emotion/styled'
import { Global } from '@emotion/core'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { normalize } from 'polished'
import { center, flexColCenterTop } from './commonStyle'
import { useState, useEffect } from 'react'
import axios from 'axios'

const globalStyle = css`
  ${normalize()};
  body {
    background-color: rgba(0,0,0,0);
  }
`

const bgStyle = css`
  background: white;
  height: 100vh;
  overflow: hidden;
  ${flexColCenterTop};
  align-items: stretch;
`

const App = () => {
  const [num, setNum] = useState(0)

  useEffect(()=>{
    axios.get('/g2/getOnsInfo?name=disease_h5').then(res=>{
      const {data} = res
      const {chinaAdd} = data
      const {confirm} = chinaAdd
      setNum(confirm)
    })
  }, [])

  return(
    <div css={bgStyle}>
      <Global styles={globalStyle} />
      <Title>疫情实况</Title>
      <Info>
        <div>
          <h1 className="title">今日新增</h1>
          <h1 className="num">{num || '......'}</h1>
        </div>
      </Info>
    </div>
  )
}

const Title = styled.div`
  -webkit-app-region: drag;
  height: 30px;
  font-size: 12px;
  color: mediumslateblue;
  border-bottom: 1px solid whitesmoke;
  ${center};
`

const Info = styled.div`
  flex: 1;
  ${center};
  h1 { text-align: center; margin: 0}
  .title {
    font-size: 20vmin;
    color: mediumslateblue;
    opacity: .4;
  }
  .num {
    font-size: 30vmin;
    color: mediumslateblue;
    text-decoration: underline;
  }
`

export default App