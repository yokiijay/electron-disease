/** @jsx jsx */
import { css } from '@emotion/core'

export const center = css`
  display: grid;
  place-items: center;
`

// flex row

export const flexRowLeftTop = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const flexRowLeftCenter = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const flexRowLeftBottom = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

export const flexRowCenterTop = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const flexRowCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexRowCenterBottom = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const flexRowRightTop = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const flexRowRightCenter = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const flexRowRightBottom = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

// flex column

export const flexColLeftTop = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const flexColLeftCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const flexColLeftBottom = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

export const flexColCenterTop = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const flexColCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const flexColCenterBottom = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

export const flexColRightTop = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

export const flexColRightCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const flexColRightBottom = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`
