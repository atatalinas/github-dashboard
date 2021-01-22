const styles = () => ({
  wrapper: {
    boxSizing: 'border-box',
    margin: 10,
    padding: 0,
  },
  boxStyle: {
    marginBottom: 25
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    maxWidth: '700px',
    minHeight: '600px',
    background: '#FEFFDD',
    textAlign: 'center',
    margin: '128px auto',
    borderRadius: '10px',
    padding: '32px',
  },
  pagination: {
    margin: '15px auto',
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
  }
});


export default styles;