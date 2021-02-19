export default {
  colors: {
    text: '#000000',
    background: '#efefef',
  },
  fonts: {
    heading: 'system-ui',
    body: 'system-ui',
  },
  sizes: {
    header: '64px',
    container: '840px',
    full: '100%',
  },

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
    nav: {
      p: 2,
    },
  },
  text: {
    bold: {
      fontWeight: 'bold',
    },
  },
  layout: {
    container: {
      px: [3, 4],
    },
  },
}
