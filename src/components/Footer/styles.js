const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '40rem',
    margin: '2rem auto',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 900,
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  link: {
    margin: '0.5rem 0',
    fontWeight: 400,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },

    '@media (max-width: 600px)': {
      '& span': {
        display: 'none',
      },
    },
  },
  linkIcon: {
    // marginRight: '0.5rem',
    minWidth: '24px',
    '@media (max-width: 600px)': {
      padding: '12px',
    },
  },
});

export default styles;
