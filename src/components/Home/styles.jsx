const styles = {
  mainBox: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
    padding: '0 40px',
  },
  characterBox: {
    display: 'flex',
    // gridTemplateColumns: 'repeat(auto-fit, 300px)',
    // gridTemplateRows: 'repeat(auto-fit, 300px)',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '20px',
    gap: '20px',
    backgroundColor: '#16ACC9',
  },
  imageBox: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
  },
};

export default styles;
