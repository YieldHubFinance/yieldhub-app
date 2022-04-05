const styles = theme => ({
  container: {
    padding: '24px',
    margin: '8px 0 2rem',
    border: '1px solid ' + theme.palette.background.border,
    backgroundColor: theme.palette.background.primary,
    justifyContent: 'space-between',
    position: 'relative',
  },

  selectorContainer: {
    width: '100%',
  },

  selectorLabel: {
    color: theme.palette.text.secondary,
    marginBottom: '10px',
  },

  selector: {
    padding: '0',
    margin: '0',
  },

  label: {
    color: theme.palette.text.primary,
    '& .MuiTypography-root': {
      fontSize: '14px',
    },
  },
  reset: {
    border: '1px solid ' + theme.palette.background.border,
    padding: '4px 8px',
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: theme.palette.background.default,
    '& .MuiButton-label': {
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
  },
});

export default styles;
