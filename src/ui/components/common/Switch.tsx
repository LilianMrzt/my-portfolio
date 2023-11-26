import React, { type FC, type ReactElement } from 'react'
import { type SwitchProps } from '@interfaces/components/common/SwitchProps'

const Switch: FC<SwitchProps> = ({ checked, changeValue }): ReactElement => {
  return (
        <div className="container-switch">
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={changeValue}/>
                <span className="slider"></span>
            </label>
        </div>
  )
}

export default Switch
