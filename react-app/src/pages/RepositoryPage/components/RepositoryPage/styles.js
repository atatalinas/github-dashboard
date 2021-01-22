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
    circularProgressContainer: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        overflow: 'auto',
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