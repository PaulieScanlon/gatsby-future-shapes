export default {
  colors: {
    text: '#000000',
    background: '#ffffff',
  },
  fonts: {
    heading: 'system-ui',
    body: 'system-ui',
  },
  sizes: {
    header: '64px',
    container: '840px',
  },

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
  },
  buttons: {
    primary: {
      backgroundColor: 'text',
      color: 'background',
      cursor: 'pointer',
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
