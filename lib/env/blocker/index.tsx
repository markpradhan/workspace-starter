// Env
import { isDevEnv } from '@workspace-starter/env'

// ----------------------------------------------------------------------------
// Default message
const defaultMessage = `You are loading this outside of an developement environment.
This is a playground project.
Please check your settings.`

// Throw Errors if any other dan dev env runs this code
const environmentChecker = (message: string | HTMLElement = defaultMessage) => {
  if (!isDevEnv) {
    document.body.innerHTML = `<p style="font-family:Helvetica;font-size:36px;color:red;font-weight:bold">${message}</p>`

    alert(message)
    throw new Error(message.toString())
  }
}

export default environmentChecker
