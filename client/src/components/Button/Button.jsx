import PropTypes from 'prop-types'
import className from 'classnames'

const Button = ({children, primary, secondary, cancel, warning, ...rest}) => {
    const classes = className(rest.className, 'py-2 px-4 rounded', {
        "bg-red-500 hover:bg-red-70 text-white font-bold": warning,
        "bg-green-600 hover:bg-green-700 text-white font-bold mt-4 border-b-4 border-green-700 hover:border-green-500 disabled:opacity-35": primary,
        "bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent": secondary,
        "bg-gray-500 hover:bg-gray-600 shadow text-white font-bold py-2 px-4 rounded": cancel,
    })
  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    warning: PropTypes.bool,
    cancel: PropTypes.bool,
}
