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
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  circularProgressItem: {
    display: 'block',
    border: 'none'
  },
  notFoundWrapper: {
    minHeight: '300px',
    position: 'relative'
  },
  notFoundWrapper: {
    minHeight: '300px',
    position: 'relative'
  },
  notFoundItem: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  typographyStyle: {
    marginBottom: 10
  },
  clearButton: {
    marginTop: 10,
    fontSize: 18
  }
});


export default styles;