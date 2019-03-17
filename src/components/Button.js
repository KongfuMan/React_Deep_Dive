const Button = ({ children, color }) => ({
    type: 'button',
    props: {
        className: 'button button-' + color,
        children: {
            type: 'b',
            props: {
                children: children
            }
        }
    }
});

export default Button;
