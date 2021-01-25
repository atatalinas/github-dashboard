const styles = () => ({
    wrapper: {
        boxSizing: 'border-box',
        margin: 10,
        padding: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        maxWidth: 600,
        minHeight: 300,
        background: '#D5D5D4',
        margin: '50px auto',
        borderRadius: 10,
        padding: 32,
    },
    circularProgressContainer: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    avatar: {
        height: 60,
        width: 60,
        backgroundSize: 'cover',
        borderRadius: '50%',
        marginRight: '10px'
    },
    flexBox: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px 0px'
    },
    circularProgressItem: {
        display: 'block',
        border: 'none'
    },
    textElement: {
        marginBottom: 0,
        marginRight: 5
    },
    appHeader: {
        marginBottom: '10px',
        textAlign: 'center'
    }
});


export default styles;