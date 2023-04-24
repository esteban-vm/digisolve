import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Issue: https://github.com/FortAwesome/Font-Awesome/issues/19348
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { library } = require('@fortawesome/fontawesome-svg-core')
library.add(fas, fab)
