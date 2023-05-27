import React from 'react'

import { ExampleComponent, Button } from 'button-user'
import 'button-user/dist/index.css'

const App = () => {
  return(
    <>
      <ExampleComponent />
      <Button type="primary" text="Primary Button" />
      <Button type="default" text="Default Button" />
      <Button type="dashed" text="Dashed Button" />
      <Button type="text" text="Text Button" />
      <Button type="link" text="Link Button" />
    </>
  ) 
}

export default App
