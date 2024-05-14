import className from 'classnames'

const Button = ({children, primary, warning, ...rest}) => {
    const classes = className(rest.className, {
        "bg-red-500 hover:bg-red-70 text-white font-bold py-2 px-4 rounded": warning,
    })
  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

export default Button
