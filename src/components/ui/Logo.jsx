
const Logo = ({variant = 'light'}) => {
    const color = {
        light: 'bg-blue-400',
        dark: 'bg-blue-800',
    }
    return (
        <div className={`w-24 h-24 rounded-full ${color[variant]}`}></div>
    )
}

export default Logo;