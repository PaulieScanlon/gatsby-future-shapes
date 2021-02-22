export default {
  colors: {
    text: '#000000',
    background: '#efefef',
  },
  fonts: {
    heading: 'Helvetica',
    body: 'Helvetica',
  },
  sizes: {
    header: '64px',
    container: '840px',
    full: '100%',
  },

  space: [0, 2, 4, 8, 16, 24, 32, 64, 128, 256],

  shadows: ['0px 0px 10px 4px rgba(0,0,0,0.15)'],

  styles: {
    root: {
      fontFamily: 'body',
    },
    header: {
      alignItems: 'center',
      display: 'flex',
      height: 'header',
      a: {
        variant: 'links.nav',
      },
    },
    a: {
      color: 'text',
    },
  },
  buttons: {
    primary: {
      backgroundColor: 'text',
      color: 'background',
      cursor: 'pointer',
    },
  },
  cards: {
    primary: {
      position: 'relative',
      boxShadow: 0,
      a: {
        variant: 'styles.a',
        textDecoration: 'none',
      },
    },
  },
  links: {
    color: 'inherit',
    nav: {
      color: 'inherit',
      p: 2,
    },
  },
  text: {
    bold: {
      fontWeight: 'bold',
    },
    heading: {
      position: 'relative',
      mb: 7,
      '::before': {
        content: `''`,
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'text',
        height: (theme) => `${theme.space[1]}px`,
        width: (theme) => `${theme.space[5]}px`,
      },
    },
  },
  layout: {
    container: {
      px: [3, 4],
    },
  },
}
